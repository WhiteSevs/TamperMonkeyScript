class ConcurrencyAsyncQueue {
  /**
   * 请求队列
   */
  queue: (() => Promise<any>)[];
  /**
   * 当前运行的数量
   */
  runningCount: number;
  /**
   * 请求并发数量
   */
  concurrency: number;
  /**
   * 间隔时间
   */
  intervalTime: number;
  /**
   * @param [concurrency=1] 并发数量
   * @param [intervalTime=300] 间隔时间
   */
  constructor(concurrency: number = 1, intervalTime: number = 300) {
    this.queue = [];
    this.concurrency = concurrency;
    this.intervalTime = intervalTime;
    this.runningCount = 0;
  }
  /**
   * 添加请求
   */

  enqueue(task: () => Promise<any>) {
    this.queue.push(task);
    this.runNext();
  }
  /**
   * 执行下一个任务
   */

  async runNext() {
    while (this.runningCount < this.concurrency && this.queue.length > 0) {
      this.runningCount++;
      const task = this.queue.shift()!;
      try {
        await task();
        if (this.intervalTime > 0) {
          await new Promise((resolve) => setTimeout(resolve, this.intervalTime));
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.runningCount--;
        this.runNext();
      }
    }
  }
}

export { ConcurrencyAsyncQueue };
