import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { MTAutoSignIn } from "./MTAutoSignIn";
import Qmsg from "qmsg";
import { MTUtils } from "@/utils/MTUtils";
import { unsafeWindow } from "ViteGM";

export const MTSign = {
  init() {
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("mt-sign-showTodaySignStar", () => {
        this.showTodaySignStar();
      });
      Panel.execMenuOnce("mt-sign-showTodayRanking", () => {
        this.showTodayRanking();
      });
    });
  },
  /**
   * 显示【今日签到之星】
   */
  async showTodaySignStar() {
    log.info(`显示【今日签到之星】`);

    let todayStarParent = document.querySelector<HTMLElement>(".pg_k_misign .comiis_qdinfo")!;
    let todayStar = document.createElement("ul");

    let response = await httpx.get("/k_misign-sign.html", {
      headers: {
        "User-Agent": utils.getRandomPCUA(),
      },
    });
    if (!response.status) {
      return;
    }
    let doc = DOMUtils.toElement(response.data.responseText, true, true);

    let todatastarele = doc.querySelector<HTMLSpanElement>("#pt span.xg1");
    if (!todatastarele) {
      return;
    }
    let todaypeople = DOMUtils.text(todatastarele).replace("今日签到之星：", "");
    todayStar.innerHTML = /*html*/ `
		<li class="f_f" style="display: flex;flex-direction: column;width: 100%;">
			<span class="comiis_tm">今日签到之星</span>
			${todaypeople}
		</li>
		`;
    let $comiisSpaceBox = document.querySelector<HTMLElement>(".comiis_space_box")!;
    let comiis_space_box_height = parseInt(getComputedStyle($comiisSpaceBox, null)["height"].replace("px", ""));
    let comiis_space_box_padding_bottom = parseInt(
      getComputedStyle($comiisSpaceBox, null)["paddingBottom"].replace("px", "")
    );
    let total_height = comiis_space_box_height + comiis_space_box_padding_bottom + 50;
    addStyle(/*css*/ `
		.comiis_space_box{
			height: ${total_height}px;
			background-size: 100% 100%;
		}
		.pg_k_misign .comiis_qdinfo{
			height: 110px !important;
		}`);
    todayStarParent.append(todayStar);
  },
  /**
   * 显示【今日最先】
   */
  showTodayRanking() {
    log.info(`显示【今日最先】`);
    let today_ranking_ele = document.querySelector<HTMLElement>(".comiis_topnv .comiis_flex .flex")!;
    let $li = DOMUtils.createElement("li", {
      className: "flex",
    });
    let $todayLatest = DOMUtils.createElement(
      "a",
      {
        id: "k_misignlist_today_latest",
        href: "javascript:;",
        innerHTML: "今日最先",
      },
      {
        onclick: "ajaxlist('todayLatest');",
      }
    );
    $li.appendChild($todayLatest);
    DOMUtils.after(today_ranking_ele, $li);
    let getMaxPage = async (urlextra: string) => {
      let response = await httpx.get(`/k_misign-sign.html?operation=${urlextra}`, {
        responseType: "html",
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        return;
      }
      let doc = DOMUtils.toElement(response.data.responseText, true, true);
      let last_page = doc.querySelector<HTMLSpanElement>("#J_list_detail .pg span");
      if (last_page && typeof last_page.title != "undefined") {
        let last_page_match = last_page.title.match(/([0-9]+)/);
        if (last_page_match && last_page_match.length == 2) {
          return parseInt(last_page_match[last_page_match.length - 1]);
        } else {
          Qmsg.error("获取页失败");
        }
      } else {
        Qmsg.error("请求最先签到的页失败");
      }
    };

    let getPagePeople = async (page: string | number) => {
      let response = await httpx.get(`/k_misign-sign.html?operation=list&op=&page=${page}`, {
        responseType: "html",
        headers: {
          "User-Agent": utils.getRandomPCUA(),
        },
      });
      if (!response.status) {
        return;
      }
      let doc = DOMUtils.toElement(response.data.responseText, true, true);
      let peoples = doc.querySelectorAll<HTMLTableColElement>("#J_list_detail tbody tr");
      let ret_array: any[] = [];
      if (peoples.length == 2 && peoples[0].textContent!.indexOf("暂无内容") != -1) {
        return ret_array;
      }
      for (let index = 1; index <= peoples.length - 2; index++) {
        let people = peoples[index];
        let ret_json = {
          user: "",
          uid: "",
          avatar: "",
          days: "",
          monthDays: "",
          time: "",
          reward: "",
        };
        let user_name = people.children[0].getElementsByTagName("a")[0].textContent;
        let space_url = people.children[0].getElementsByTagName("a")[0].href;
        let uid = space_url.match(/space-uid-([0-9]*)/)![1];
        let sign_all_days = people.children[1].textContent;
        let sign_month_days = people.children[2].textContent;
        let sign_time = people.children[3].textContent;
        let sign_reward = people.children[5].textContent;
        ret_json["user"] = user_name!;
        ret_json["uid"] = uid;
        ret_json["avatar"] = MTUtils.getAvatar(uid, "small");
        ret_json["days"] = sign_all_days!;
        ret_json["monthDays"] = sign_month_days!;
        ret_json["time"] = sign_time!;
        ret_json["reward"] = sign_reward!;
        ret_array.push(ret_json);
      }

      return ret_array;
    };

    function changeRankList(data: any, listtype: any) {
      let $ranklist = document.querySelector<HTMLElement>("#ranklist")!;
      DOMUtils.html($ranklist, data);
      DOMUtils.attr($ranklist, "listtype", listtype);
    }

    // 覆盖页面的 ajaxlist
    // @ts-ignore
    unsafeWindow.ajaxlist = async (listtype: any) => {
      listtype = listtype;
      if (listtype == "today") {
        // @ts-ignore
        loadingdelay = false;
        // @ts-ignore
        urlextra = "list&op=today";
      } else if (listtype == "month") {
        // @ts-ignore
        loadingdelay = false;
        // @ts-ignore
        urlextra = "list&op=month";
      } else if (listtype == "zong") {
        // @ts-ignore
        loadingdelay = false;
        // @ts-ignore
        urlextra = "list&op=zong";
      } else if (listtype == "calendar") {
        // @ts-ignore
        loadingdelay = true;
        // @ts-ignore
        urlextra = "calendar";
      } else {
        // @ts-ignore
        loadingdelay = false;
        // @ts-ignore
        urlextra = "list";
      }
      /* alert(loadingdelay); */
      if (listtype == "todayLatest") {
        // @ts-ignore
        loadingdelay = false;
        // @ts-ignore
        urlextra = "list&op=&page=0";
        // @ts-ignore
        let maxPage = await getMaxPage(urlextra)!;
        if (!maxPage) {
          return;
        }
        let latestPeople = await getPagePeople(maxPage);

        latestPeople!.reverse();
        if (latestPeople!.length < 10) {
          let latestPeople_2 = await getPagePeople(maxPage - 1);
          latestPeople_2!.reverse();
          latestPeople = latestPeople!.concat(latestPeople_2);
          latestPeople.reverse();
        }

        let peopleHTML = "";
        latestPeople!.reverse();
        latestPeople!.forEach((people) => {
          peopleHTML =
            peopleHTML +
            /*html*/ `
						<tbody id="autolist_${people["uid"]}">
			  				<tr>
								<td class="k_misign_lu">
									<a href="home.php?mod=space&amp;uid=${people["uid"]}">
										<img src="${people["avatar"]}" loading="lazy">
									</a>
								</td>
								<td class="k_misign_ll"><span></span></td>
								<td class="k_misign_lc">
									<h4 class="f_c">
										<a href="home.php?mod=space&amp;uid=${people["uid"]}">${people["user"]}</a>
										<span>${people["time"]}</span>
										<span class="y">总天数 ${people["days"]}天</span>
									</h4>
									<p class="f_0">月天数 ${people["monthDays"]} 天，上次奖励 ${people["reward"]}</p>
				  				</td>
							</tr>
			  			</tbody>`;
        });
        let latestHTML = /*html*/ `
					<li class="styli_h bg_e"></li>
					<div class="comiis_topnv bg_f b_t b_b">
						<ul class="comiis_flex">
							<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>
							<li class="flex f_0"><em class="bg_0"></em><a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');">今日最先</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_month" onclick="ajaxlist('month');" class="f_c">本月排行</a>
							</li>
							<li class="flex"><a href="javascript:;" id="k_misignlist_zong" onclick="ajaxlist('zong');" class="f_c">总排行</a></li>
						</ul>
					</div>
					<div class="k_misign_wp">
						<div class="k_misign_list bg_f">
							<table id="misign_list">
							${peopleHTML}
							</table>
						</div>
					</div>`;
        changeRankList(latestHTML, listtype);
      } else {
        httpx
          // @ts-ignore
          .get(`plugin.php?id=k_misign:sign&operation=${urlextra}`, {
            responseType: "html",
            fetch: true,
          })
          .then((response) => {
            /* console.log(data); */
            let data = response.data.responseText;
            data = data.replace(
              `今日排行</a></li>`,
              `今日排行</a></li>
							<li class="flex">
								<a href="javascript:;" id="k_misignlist_today_latest" onclick="ajaxlist('todayLatest');" class="f_c">今日最先</a>
							</li>`
            );
            // 修复今日排行下面没有高亮点的问题
            if (listtype == "today") {
              data = data.replace(
                `<li class="flex"><a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a></li>`,
                /*html*/ `
								<li class="flex f_0">
									<em class="bg_0"></em>
									<a href="javascript:;" id="k_misignlist_today" onclick="ajaxlist('today');">今日排行</a>
								</li>
								`
              );
            }
            changeRankList(data, listtype);
          });
      }
    };
  },
};
