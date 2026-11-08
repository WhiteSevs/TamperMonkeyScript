import { RequestQueue } from "@components/utils/RequestQueue";
import { httpx, log, utils } from "@components/env.base";
import Qmsg from "qmsg";

const queue = new RequestQueue({
  maxConcurrent: 1,
  waitTime: 500,
});

export const WebsiteCheck = {
  async baiduHaoma(url: string) {
    return await queue.subscribe(async () => {
      const response = await httpx.post("https://haoma.baidu.com/haoma/business/domain/landpage", {
        data: {
          url,
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Origin: "https://cloud.baidu.com",
          Referer: `https://cloud.baidu.com/product-s/website-security?s=${url}`,
        },
      });
      if (!response.isSuccess) return;
      const data = utils.toJSON<{
        code: number;
        message: string;
        data: {
          url: string;
          url_risk: string;
          risk_level: "white" | "gray";
          domain: string;
          domian_registrar: string;
          domian_created: string;
          domian_expires: string;
          /**
           * 备案号
           */
          domain_icp_no: string;
          domian_record_subject: string;
          /**
           * ssl过期时间
           */
          ssl_expires: string;
          risk_content: string;
          /**
           * icp备案状态
           */
          domain_icp_status: 0 | 1;
          domain_ips: [];
          domian_site_name: string;
        };
      }>(response.data.responseText);
      if (data.code != 200) {
        log.error(response);
        Qmsg.error(data.message || "未知错误");
        return;
      }
      const result = {
        isHttp: utils.isNull(data.data.ssl_expires),
        domain: data.data.domain,
      };
      return result;
    });
  },
};
