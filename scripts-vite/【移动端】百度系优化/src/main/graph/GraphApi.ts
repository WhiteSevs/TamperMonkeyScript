import { httpx, log, utils } from "@/env";

const BaiduGraphApi = {
  /**
   * 上传图片
   * @param event
   */
  async uploadImage(event: Event) {
    let uploadImageFile = (event.target as HTMLInputElement)?.files?.[0];
    if (!uploadImageFile) {
      alert("似乎并未正确上传图片？");
      return;
    }
    let $input = event.target as HTMLInputElement;
    let formData = new FormData();
    formData.append("image", uploadImageFile);
    formData.append("tn", "pc");
    formData.append("from", "pc");
    formData.append("image_source", "PC_UPLOAD_FILE");
    formData.append("sdkParams", "undefined");
    let postResp = await httpx.post({
      url: `https://graph.baidu.com/upload?uptime=${Date.now()}`,
      data: formData,
      fetch: true,
      responseType: "json",
      headers: {
        "User-Agent": utils.getRandomPCUA(),
        Origin: "https://graph.baidu.com",
        Referer: "https://graph.baidu.com/pcpage/index?tpl_from=pc",
        Accept: "*/*",
      },
    });
    $input.value = "";
    log.success(postResp);
    if (!postResp.status || postResp.data.status !== 200) {
      alert("图片上传失败，详情请看控制台");
      return;
    }
    let imageJSONData = utils.toJSON(postResp.data.responseText);
    log.success(imageJSONData);
    if (imageJSONData["status"] !== 0) {
      alert("图片API返回信息中status不为0，详情请看控制台");
    }
    if (window.location.pathname === "/s") {
      window.location.href = imageJSONData["data"]["url"];
    } else {
      window.open(imageJSONData["data"]["url"], "_blank");
    }
  },
};

export { BaiduGraphApi };
