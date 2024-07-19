// @ts-nocheck
import { a1 } from "./jsDom";


import "./js/Sanji";

import {
	genTraceId,
	encrypt_mcr,
	encrypt_b64Encode,
	encrypt_encodeUtf8,
} from "./encrypt";
/*
 *
 * @param {string} url api路径，/api/.... 排除掉location.origin
 * @param {any} [data] 如果是post请求，这里填
 * @returns
 */
const sign = function (url, data) {
	const l = window._webmsxyw(url, data)

  const t = l['X-t']
  const s = l['X-s']

  const b1 = "I38rHdgsjopgIvesdVwgIC+oIELmBZ5e3VwXLgFTIxS3bqwErFeexd0ekncAzMFYnqthIhJeDnMDKutRI3KsYorWHPtGrbV0P9WfIi/eWc6eYqtyQApPI37ekmR1QL+5Ii6sdnoeSfqYHqwl2qt5BfqJIvFbNLQ+ZPw7Ixdsxuwr4qtkIkrwIi/skZc3ICLdI3Oe0utl2ADZsL5eDSJsSPwXIEvsiVtJOPw8BuwfPpdeTDWOIx4VIiu6ZPwbJqt0IxHyoMAeVutWIvvs1VtnIi+KIEzaeo6s09G1e05sYuttrboe0FFWp9Ke0YqQIx/eDPwmIiJefqtAzZVVOsuwI3deTutA/Yve67zGIhE8IEY2NoqWI3Ty8IYgIEhIBuwSIChV+/Kedp5e3qtuI36sja7s0fH4Ik5eirm5KqwfIiKsTove1SKs3PwPmeOedqwVI34LaU6eSqwkzgdsWVt+I3kKIxmdsqtmrPtBnnI4mAAsDfgexVwbIhJednOsxzZ="

  const d = {
    s0: 3,
    s1: "",
    x0: "1",
    x1: "3.6.8",
    x2: 'Mac OS',
    x3: "xhs-pc-web",
    x4: "4.1.6",
    x5: a1,
    x6: t,
    x7: s,
    x8: b1,
    x9: encrypt_mcr(t + "" + s + a1),
    x10: 888
  };
	return {
		xt: t,
		xs: s,
		traceId: genTraceId(),
		xsCommon: encrypt_b64Encode(encrypt_encodeUtf8(JSON.stringify(d))),
	};
};

export { sign as XHS_Sign };
