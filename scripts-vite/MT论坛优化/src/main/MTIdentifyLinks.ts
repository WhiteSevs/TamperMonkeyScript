// @ts-nocheck
/**
 * 链接文本转超链接
 */
export const MTIdentifyLinks = () => {
	/*TEXT link to Clickable Hyperlink*/
	var clearLink,
		excludedTags,
		filter,
		linkMixInit,
		linkPack,
		linkify,
		observePage,
		observer,
		setLink,
		url_regexp,
		xpath;
	url_regexp =
		/((https?:\/\/|www\.)[\x21-\x7e]+[\w\/]|(\w[\w._-]+\.(com|cn|org|net|info|tv|cc))(\/[\x21-\x7e]*[\w\/])?|ed2k:\/\/[\x21-\x7e]+\|\/|thunder:\/\/[\x21-\x7e]+=)/gi;
	clearLink = function (a) {
		var b;
		a = null != (b = a.originalTarget) ? b : a.target;
		if (
			null != a &&
			"a" === a.localName &&
			-1 !== a.className.indexOf("texttolink") &&
			((b = a.getAttribute("href")),
			0 !== b.indexOf("http") &&
				0 !== b.indexOf("ed2k://") &&
				0 !== b.indexOf("thunder://"))
		)
			return a.setAttribute("href", "http://" + b);
	};
	document.addEventListener("mouseover", clearLink);
	setLink = function (a) {
		/* Uncaught TypeError: a.parentNode.className.indexOf is not a function */
		if (typeof a != "object") {
			return;
		} /* 看不得报错，增加判断 */
		if (
			null != a &&
			typeof a.parentNode !== "undefined" &&
			typeof a.parentNode.className !== "undefined" &&
			typeof a.parentNode.className.indexOf === "function" &&
			-1 === a.parentNode.className.indexOf("texttolink") &&
			"#cdata-section" !== a.nodeName
		) {
			var b = a.textContent.replace(
				url_regexp,
				'<a href="$1" target="_blank" class="texttolink">$1</a>'
			);
			if (a.textContent.length !== b.length) {
				var c = document.createElement("span");
				c.innerHTML = b;
				console.log(`识别: ${c.querySelector("a")}`);
				return a.parentNode.replaceChild(c, a);
			}
		}
	};
	excludedTags =
		"a svg canvas applet input button area pre embed frame frameset head iframe img option map meta noscript object script style textarea code".split(
			" "
		);
	xpath = `//text()[not(ancestor::${excludedTags.join(
		") and not(ancestor::"
	)})]`;
	filter = new RegExp(`^(${excludedTags.join("|")})$`, "i");
	linkPack = function (a, b) {
		var c, d;
		if (b + 1e4 < a.snapshotLength) {
			var e = (c = b);
			for (d = b + 1e4; b <= d ? c <= d : c >= d; e = b <= d ? ++c : --c)
				setLink(a.snapshotItem(e));
			setTimeout(function () {
				return linkPack(a, b + 1e4);
			}, 15);
		} else
			for (
				e = c = b, d = a.snapshotLength;
				b <= d ? c <= d : c >= d;
				e = b <= d ? ++c : --c
			)
				setLink(a.snapshotItem(e));
	};
	linkify = function (a) {
		a = document.evaluate(
			xpath,
			a,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null
		);
		return linkPack(a, 0);
	};
	observePage = function (a) {
		for (
			a = document.createTreeWalker(
				a,
				NodeFilter.SHOW_TEXT,
				{
					acceptNode: function (a) {
						if (!filter.test(a.parentNode.localName))
							return NodeFilter.FILTER_ACCEPT;
					},
				},
				!1
			);
			a.nextNode();

		)
			setLink(a.currentNode);
	};
	observer = new window.MutationObserver(function (a) {
		var b, c;
		var d = 0;
		for (b = a.length; d < b; d++) {
			var e = a[d];
			if ("childList" === e.type) {
				var g = e.addedNodes;
				var f = 0;
				for (c = g.length; f < c; f++) (e = g[f]), observePage(e);
			}
		}
	});
	linkMixInit = function () {
		/* if (window === window.top && "" !== window.document.title) return linkify(document.body), observer.observe(document.body, {
                childList: !0,
                subtree: !0
            })
            修改为可在iframe内执行 */
		return (
			linkify(document.body),
			observer.observe(document.body, {
				childList: !0,
				subtree: !0,
			})
		);
	};
	var clearlinkF = function (a) {
			var url = a.getAttribute("href");
			if (
				0 !== url.indexOf("http") &&
				0 !== url.indexOf("ed2k://") &&
				0 !== url.indexOf("thunder://")
			)
				return a.setAttribute("href", "http://" + url);
		},
		clearlinkE = function () {
			for (
				var a = document.getElementsByClassName("texttolink"), b = 0;
				b < a.length;
				b++
			)
				clearlinkF(a[b]);
		};
	setTimeout(clearlinkE, 1500);
	setTimeout(linkMixInit, 100);
};
