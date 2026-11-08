type AsyncTask = () => Promise<any>;

interface QueueOptions {
  maxConcurrent: number; // 最大并发请求数
  waitTime?: number; // 消费前的等待时间（毫秒），默认为 0
}


/**
 * @example
 * 
  const queue = new RequestQueue({
    maxConcurrent: 1,
    waitTime: 500,
  });
  const response = await queue.subscribe(async () => {
    const __response = await httpx.get("https://xxx.xxx.xxx/");
    if(!__response.isSuccess) return;
    const data = utils.toJSON(__response);
    return data;
  });
  console.log("请求结束", response);
 */
export class RequestQueue {
  private queue: AsyncTask[] = []; // 待消费的请求队列
  private activeCount: number = 0; // 正在消费的请求数量
  private maxConcurrent: number; // 最大并发数
  private waitTime: number; // 每次消费前的等待时间
  private consumers: Set<Promise<void>> = new Set(); // 消费者集合，用于追踪所有正在运行的消费者

  constructor(options: QueueOptions) {
    this.maxConcurrent = options.maxConcurrent;
    this.waitTime = options.waitTime ?? 0;
  }

  /**
   * 订阅：向队列中添加新的异步请求
   * @param task 异步请求函数
   * @returns Promise，当该请求被消费并执行完毕后 resolve
   */
  subscribe<T>(task: () => Promise<T>): Promise<T> {
    let resolve!: (value: T) => void;
    let reject!: (reason?: any) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    const wrappedTask = async () => {
      try {
        const result = await task();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    this.queue.push(wrappedTask);
    // 添加任务后，尝试唤醒消费者
    this.consume();

    return promise;
  }

  /**
   * 消费：从队列中取出任务并执行
   */
  private consume(): void {
    // 如果当前活跃请求数已达上限，或者队列为空，则停止消费
    while (this.activeCount < this.maxConcurrent && this.queue.length > 0) {
      const task = this.queue.shift()!;
      this.activeCount++;

      // 利用闭包和 Promise 追踪单个消费者的生命周期
      const consumerPromise = (async () => {
        try {
          // 如果设置了等待时间，等待上一个请求结束并冷却 waitTime 毫秒
          if (this.waitTime > 0) {
            await this.delay(this.waitTime);
          }
          await task();
        } catch (error) {
          // 这里的 error 已经在 wrappedTask 中被 reject 了
          // 此处 catch 仅用于防止未捕获的 Promise 异常导致进程崩溃
          console.error("请求执行出错:", error);
        } finally {
          this.activeCount--;
          // 当前请求消费完毕，检查队列中是否还有待消费任务，继续消费
          this.consume();
        }
      })();

      this.consumers.add(consumerPromise);
      // 消费者执行完毕后从集合中移除
      consumerPromise.finally(() => this.consumers.delete(consumerPromise));
    }
  }

  /**
   * 等待所有请求池内的请求结束
   * @returns Promise，当所有已订阅的请求全部执行完毕后 resolve
   */
  async drain(): Promise<void> {
    // 持续等待，直到队列清空且没有任何活跃的消费者
    while (this.queue.length > 0 || this.activeCount > 0) {
      // 等待当前所有正在运行的消费者中的任意一个完成
      if (this.consumers.size > 0) {
        await Promise.race(this.consumers);
      } else {
        // 如果没有活跃的消费者，但队列里还有（极端情况下的并发锁问题），让出执行权
        await this.delay(0);
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
