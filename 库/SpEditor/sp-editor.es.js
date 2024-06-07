/*!
 * sp-editor version 1.1.1
 * Author: capricorncd
 * Released under the MIT License
 * Repository: https://github.com/capricorncd/zx-editor
 * Copyright © 2018-present, capricorncd/ Xing Zhong.
 */
var ye = Object.defineProperty;
var we = (t, e, i) => e in t ? ye(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var d = (t, e, i) => (we(t, typeof e != "symbol" ? e + "" : e, i), i);
class Ee {
  constructor() {
    this._events = {};
  }
  /**
   * @method on(eventName, fn)
   * `on` is used to add a callback function that's going to be executed when the event is triggered.
   * @param eventName `string` custom event name.
   * @param fn `Function` callback function.
   * @returns `EventEmitter`
   */
  on(e, i) {
    return !e || !i || typeof i != "function" ? this : (this._events[e] || (this._events[e] = []), this._events[e].push(i), this);
  }
  /**
   * @method once(eventName, fn)
   * `once` add a one-time listener.
   * @param eventName `string` custom event name.
   * @param fn `Function` callback function.
   * @returns `EventEmitter`
   */
  once(e, i) {
    const s = (...n) => {
      i.apply(this, n), this.off(e, s);
    };
    return this.on(e, s);
  }
  /**
   * @method emit(eventName, arg1, arg2, ..., argN)
   * `emit` is used to trigger an event.
   * @param eventName `string`
   * @param args `any`
   * @returns `EventEmitter`
   */
  emit(e, ...i) {
    const s = this._events[e];
    if (!s)
      return this;
    for (let n = 0; n < s.length; n++)
      try {
        s[n].apply(this, i);
      } catch (r) {
        this.emit("error", r, "emit");
      }
    return this;
  }
  /**
   * @method off(eventName, fn)
   * remove an event listener from an event.
   * @param eventName `string` custom event name.
   * @param fn? `Function` callback function. When `fn` is not a function, all monitoring functions of `eventName` will be removed.
   * @returns `EventEmitter`
   */
  off(e, i) {
    if (!this._events[e])
      return this;
    const s = this._events[e];
    if (typeof i == "function") {
      const n = s.findIndex((r) => r === i);
      n >= 0 && s.splice(n, 1);
    } else
      this._events[e].length = 0;
    return this._removeEmpty(e), this;
  }
  /**
   * _removeEmpty(eventName)
   * remove empty event list
   * @param eventName `string`
   * @private
   * @returns `void`
   */
  _removeEmpty(e) {
    this._events[e].length || delete this._events[e];
  }
  /**
   * @method destroyEventEmitter()
   * remove all listeners for an event.
   * @returns `void`
   */
  removeAllListeners() {
    Object.keys(this._events).forEach((e) => this.off(e));
  }
}
/*!
 * zx-sml version 0.7.5
 * Author: Capricorncd <capricorncd@qq.com>
 * Repository: https://github.com/capricorncd/zx-sml
 * Released on: 2023-05-17 20:41:58 (GMT+0900)
 */
var _e = Object.defineProperty, M = Object.getOwnPropertySymbols, ve = Object.prototype.hasOwnProperty, be = Object.prototype.propertyIsEnumerable, B = (t, e, i) => e in t ? _e(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, k = (t, e) => {
  for (var i in e || (e = {}))
    ve.call(e, i) && B(t, i, e[i]);
  if (M)
    for (var i of M(e))
      be.call(e, i) && B(t, i, e[i]);
  return t;
};
function Ne(t) {
  return Array.isArray(t);
}
function Y(t) {
  return typeof t == "object" && t !== null && !Ne(t);
}
function K(t = "", e = "-") {
  return t.replace(/[A-Z]/g, (i, s) => `${s > 0 ? e : ""}${i.toLowerCase()}`);
}
function Z(t = "", e = !1) {
  const i = t.replace(/[-_\s](\w)/g, (s, n) => n.toUpperCase());
  return e ? i.replace(/^\w/, (s) => s.toUpperCase()) : i;
}
function J(t) {
  return t.replace(/^-?[1-9]\d{0,2}(,\d{3})+/, (e) => e.replace(/,/g, ""));
}
function Q(t, e = !1) {
  if (typeof t == "number")
    return t;
  if (typeof t == "string") {
    if (!e && /^(-?\d+(?:\.\d+)?)\D*/.test(J(t)))
      return Q(RegExp.$1, !0);
    const i = Number(t);
    return isNaN(i) ? 0 : i;
  }
  return 0;
}
function $e(t) {
  if (typeof t == "number")
    return [t, ""];
  const e = J(t).match(/^(-?\d+(?:\.\d+)?)(.*)$/);
  return e ? [Q(e[1], !0), e[2]] : [0, ""];
}
function X(t) {
  return typeof t == "string" ? t : t === null || typeof t > "u" ? "" : Array.isArray(t) ? t.map(X).join(" ") : typeof t == "object" ? Object.keys(t).filter((e) => t[e]).join(" ") : String(t);
}
function Ce(...t) {
  return t.map(X).filter((e) => !!e).join(" ");
}
function b(t, e = 0) {
  return Array.prototype.slice.call(t, e);
}
function ee(t = {}, e = !1) {
  const i = e ? Z : K, s = {};
  for (const [n, r] of Object.entries(t))
    s[i(n)] = Y(r) ? ee(r, e) : r;
  return s;
}
function v(t, e = document) {
  return t ? t instanceof HTMLElement ? t : e.querySelector(t) : null;
}
function $(t, e = document) {
  return b(e.querySelectorAll(t));
}
function f(t, e = {}, i) {
  const s = document.createElement(t);
  for (const [n, r] of Object.entries(e))
    s.setAttribute(K(n), n === "style" && Y(r) ? I(r) : String(r));
  return i && (Array.isArray(i) || (i = [i]), i.forEach((n) => {
    if (typeof n == "string") {
      const r = f("div");
      r.innerHTML = n, s.append(...r.childNodes);
    } else
      s.append(n);
  })), s;
}
function I(...t) {
  const e = t.reduce((s, n) => k(k({}, s), ee(n)), {}), i = [];
  for (const [s, n] of Object.entries(e))
    n === "" || typeof n > "u" || n === null || i.push(`${s}:${n}`);
  return i.join(";");
}
const A = (t, e = "style") => t ? (t.getAttribute(e) || "").split(/\s?;\s?/).reduce((s, n) => {
  const [r, o] = n.split(/\s?:\s?/);
  return r && (s[Z(r)] = o), s;
}, {}) : {}, O = (t) => document.createTextNode(t), te = (t) => {
  if (!t)
    return null;
  if (typeof t == "string")
    return O(t);
  const { tag: e, attrs: i, child: s } = t;
  if (!e && !i && !s)
    return null;
  const n = f(e || "div", i);
  if (Array.isArray(s) && s.length) {
    let r;
    s.forEach((o) => {
      r = te(o), r && n.appendChild(r);
    });
  } else
    s && typeof s == "string" && n.appendChild(O(s));
  return n;
}, xe = (t, e) => {
  t.classList.add(e);
}, Le = (t, e) => {
  t.classList.remove(e);
}, Te = "sp-editor__editor", D = "is-empty", ie = "SECTION", He = "BR", se = [ie, "H1", "H2", "H3", "H4", "H5", "BLOCKQUOTE", "UL", "OL"];
function N(t, e, i) {
  return t.replace(
    new RegExp("(^<" + e + ")|(" + e + ">$)", "gi"),
    (s) => s.replace(new RegExp(e, "i"), i.toLowerCase())
  );
}
function Se(t) {
  return t.replace(/<li[^>]*>(.+)<\/li>/gi, "$1");
}
function L(t) {
  const e = typeof t == "string" ? t : t.nodeName;
  return /^UL|OL$/i.test(e);
}
function j(t) {
  if (!t)
    return !1;
  const e = b(t.childNodes);
  return e.length > 0 && e.every((i) => i.nodeName === "BR");
}
function T(t) {
  return typeof t != "string" && t.nodeName && (t = t.outerHTML), typeof t == "string" && /^<(\w+)[^>]*>.*<\/\1>$/.test(t.replace(/\n/g, ""));
}
function ne(t) {
  return ["PICTURE", "VIDEO", "AUDIO", "CANVAS"].includes(t.nodeName);
}
function Ae(t) {
  return ["IMG"].includes(t.nodeName) || ne(t);
}
function re(t) {
  if (Ae(t))
    return !0;
  for (let e = 0; e < t.children.length; e++)
    if (re(t.children[e]))
      return !0;
  return !1;
}
const Oe = (t, e) => {
  const i = {
    minHeight: t.minHeight,
    // placeholder
    "--placeholder": JSON.stringify(t.placeholder),
    "--placeholder-color": t.placeholderColor,
    "--line-height": t.lineHeight,
    // paragraphTailSpacing
    "--paragraph-spacing": t.paragraphTailSpacing,
    "--padding-bottom": t.paddingBottom,
    // 用户自定义样式优先
    ...t.styles
  };
  t.caretColor && (i.caretColor = t.caretColor), t.textColor && (i.color = t.textColor);
  const s = {
    class: `${Te} ${D}`,
    style: I(i)
  };
  return t.editable && (s.contenteditable = "true"), f("div", s, e);
}, F = (t, e) => {
  var a, l, E, u, c, w, m, h, p;
  if (!t)
    return null;
  const i = t.nodeName, s = e.toUpperCase();
  if (i === s)
    return null;
  const n = f(e), r = t.parentElement;
  let o;
  if (i === "LI" && L(r)) {
    if (n.innerHTML = N(t.outerHTML, i, s), o = n.firstChild, r.childElementCount > 1)
      if (r.firstElementChild === t)
        (a = r.parentElement) == null || a.insertBefore(o, r);
      else if (r.lastElementChild === t) {
        const g = (l = r.parentElement) == null ? void 0 : l.nextElementSibling;
        g ? (E = g.parentElement) == null || E.insertBefore(o, g) : (u = r.parentElement) == null || u.append(o);
      } else {
        const g = b(r.children), y = f(r.nodeName);
        let _ = g.shift();
        for (; _ && _ !== t; )
          y.append(_), _ = g.shift();
        (c = r.parentElement) == null || c.insertBefore(y, r), (w = r.parentElement) == null || w.insertBefore(o, r), r.removeChild(t);
      }
    else
      (m = r.parentElement) == null || m.insertBefore(o, r), (h = r.parentElement) == null || h.removeChild(r);
    return o;
  }
  if (/UL|OL/.test(s)) {
    const g = t.previousElementSibling, y = t.nextElementSibling;
    if (g && L(g)) {
      if (n.innerHTML = N(t.outerHTML, i, "li"), o = n.firstChild, g.append(o), r == null || r.removeChild(t), y && y.nodeName === g.nodeName) {
        const _ = b(y.children);
        g.append(..._), (p = y.parentElement) == null || p.removeChild(y);
      }
    } else
      y && L(y) ? (n.innerHTML = N(t.outerHTML, i, "li"), o = n.firstChild, y.insertBefore(o, y.firstElementChild), r == null || r.removeChild(t)) : (o = n, n.innerHTML = N(t.outerHTML, i, "li"), r == null || r.replaceChild(o, t));
  } else
    n.innerHTML = Se(N(t.outerHTML, i, s)), o = n.firstChild, r == null || r.replaceChild(o, t);
  return o;
}, H = (t) => {
  var e;
  !((e = t.innerText) != null && e.trim()) && !re(t) ? t.classList.add(D) : t.classList.remove(D);
};
function De(t, e, i = !1) {
  var s;
  for (; t && e !== t; ) {
    if (!i && t.nodeName === "LI" && ((s = t.parentElement) == null ? void 0 : s.parentElement) === e || t.parentElement === e)
      return t;
    t = t.parentElement;
  }
  return e.lastElementChild;
}
const Pe = {
  // 内容是否可以被编辑
  editable: !0,
  // 编辑器输入内容绝对定位
  // editor min height
  minHeight: "50vh",
  paddingBottom: "50vh",
  // style
  placeholder: "请在此输入内容..",
  placeholderColor: "#999",
  lineHeight: 1.5,
  childNodeName: ie,
  allowedNodeNames: se,
  // paragraph tail spacing, default 10px
  paragraphTailSpacing: "10px",
  caretColor: "",
  textColor: "#333333",
  // 自定义粘贴处理函数
  customPasteHandler: void 0,
  insertTextToNewParagraph: !1
};
class Ie extends Ee {
  constructor(i) {
    super();
    /**
     * @property version
     * 获取版本号
     * @returns `string`
     */
    d(this, "version");
    // 参数
    d(this, "options");
    // 编辑器内容区域HTML元素
    d(this, "$editor");
    // 内容元素事件处理函数
    d(this, "_eventHandler");
    // 内容中允许使用的元素标签
    d(this, "allowedNodeNames");
    d(this, "blankLine");
    d(this, "range");
    d(this, "_pasteHandler");
    const s = typeof i.container == "string" ? v(i.container) : i.container;
    if (!s)
      throw new Error(`Can't found '${i.container}' Node in document!`);
    this.version = "1.1.1", this.options = { ...Pe, ...i }, this.allowedNodeNames = (this.options.allowedNodeNames || se).map((r) => r.toUpperCase());
    const n = this.options.childNodeName.toUpperCase();
    this.options.childNodeName = n, this.blankLine = `<${n}><br></${n}>`, this.allowedNodeNames.includes(n) || this.allowedNodeNames.push(n), this.$editor = Oe(this.options, this.blankLine), s.append(this.$editor), this.range = new Range(), this.range.setStart(this.$editor.children[0], 0), this._eventHandler = (r) => {
      var a;
      const o = r.type;
      if (o === "click") {
        const l = (a = window.getSelection()) == null ? void 0 : a.getRangeAt(0);
        l && (this.range = l);
      } else
        o === "blur" && this._verifyChild();
      this.emit(o === "input" ? "change" : o, r), H(this.$editor);
    }, this._pasteHandler = (r) => {
      var a;
      if (typeof this.options.customPasteHandler == "function")
        return this.options.customPasteHandler(r);
      r.preventDefault();
      const o = (a = r.clipboardData) == null ? void 0 : a.getData("text");
      this.insert(o);
    }, this._initEvents();
  }
  /**
   * init events
   * @private
   */
  _initEvents() {
    this.$editor.addEventListener("focus", this._eventHandler), this.$editor.addEventListener("blur", this._eventHandler), this.$editor.addEventListener("input", this._eventHandler), this.$editor.addEventListener("click", this._eventHandler), this.$editor.addEventListener("paste", this._pasteHandler);
  }
  setRangeWithNode(i) {
    const s = new Range();
    return s.setStart(i === this.$editor ? this.$editor.childNodes[this.$editor.childNodes.length - 1] : i, 0), this.range = s, s;
  }
  /**
   * @method use(plugin, parentElement)
   * extension, 扩展插件
   * @param plugin `EditorPlugin`
   * @param parentElement? `HTMLElement`
   */
  use(i, s) {
    typeof i.install == "function" && i.install(this, s);
  }
  /**
   * @method setHtml(html)
   * 设置编辑器内容，会覆盖之前内容
   * set html to the content element
   * @param html `string`
   */
  setHtml(i) {
    this.$editor.innerHTML = this.blankLine, this.insert(i, !0), H(this.$editor);
  }
  /**
   * @method getHtml(retainLastBlankLines)
   * 获取编辑器中的HTML代码，会自动去除结尾处的空行。
   * get html string from content element.
   * @param retainLastBlankLines? `boolean` Retain last blank lines, If `true` the last `<section><br></section>` not will be removed.
   * @return `string`
   */
  getHtml(i) {
    const s = this.$editor.innerHTML;
    if (i)
      return s;
    const n = this.options.childNodeName;
    return s.replace(new RegExp(`(<${n}><br\\s?\\/?><\\/${n}>)+$`, "i"), "");
  }
  /**
   * @method insert(input, toNewParagraph)
   * 向编辑器中插入内容/HTML代码/元素等
   * insert html or element to content element
   * @param input `string | HTMLElement`
   * @param toNewParagraph? `boolean` Insert `text` in a new paragraph, only `textNode` is valid. Defaults to `false`.
   */
  insert(i, s = !1) {
    if (!i)
      return;
    const { childNodeName: n, insertTextToNewParagraph: r } = this.options;
    if (i instanceof HTMLElement)
      this._insertEl(i);
    else {
      const o = f("div", {}, i), a = b(o.childNodes);
      if (!s && !r && a.every((l) => l.nodeType === Node.TEXT_NODE))
        return this._insertText(i);
      a.forEach((l) => {
        l.nodeType === Node.ELEMENT_NODE ? l.nodeName === He ? this._insertEl(f(n, {}, "<br/>")) : this._insertEl(l) : l.textContent && this._insertEl(f(n, {}, l.textContent));
      });
    }
    this._verifyChild(), this._dispatchChange(), H(this.$editor);
  }
  /**
   * insert element to content element
   * @param input
   * @private
   */
  _insertEl(i) {
    const s = this.getCursorElement();
    j(s) ? T(i.outerHTML) ? this.$editor.insertBefore(i, s) : s === this.$editor.children[this.$editor.children.length - 1] ? this.$editor.insertBefore(f(this.options.childNodeName, {}, i), s) : (s.innerHTML = "", s.append(i)) : (T(i.outerHTML) || (i = f(this.options.childNodeName, {}, i)), s.nextElementSibling ? this.$editor.insertBefore(i, s.nextElementSibling) : this.$editor.append(i)), this.setRangeWithNode(i);
  }
  /**
   * insert text into editor
   * @param input
   * @returns
   */
  _insertText(i) {
    if (!i)
      return;
    const s = window.getSelection();
    if (!(s == null ? void 0 : s.rangeCount))
      return this.insert(i, !0);
    s.deleteFromDocument();
    const r = O(i);
    s.getRangeAt(0).insertNode(r), s.setPosition(r, i.length), this.range = s.getRangeAt(0), s.collapseToEnd();
  }
  /**
   * 验证编辑器的子元素是否为允许使用的元素，并检查其最后一段是否为空行，非空行则插入。
   * Verify that the editor's child element is an allowed elements, and check if it's last child is a blank line, if not, insert a new blank line
   * @private
   */
  _verifyChild() {
    const i = this.options.childNodeName;
    let s, n, r = !1;
    const o = this.$editor.childNodes;
    for (let a = 0; a < o.length; a++)
      n = null, s = o[a], r = s === this.range.commonAncestorContainer, s.nodeType === Node.ELEMENT_NODE && T(s) && !ne(s) ? this.allowedNodeNames.includes(s.nodeName) || (n = F(s, i)) : (n = f(i, {}, s.cloneNode(!0)), this.$editor.replaceChild(n, s)), r && n && this.setRangeWithNode(n);
    j(this.$editor.lastElementChild) || this.$editor.append(f(i, {}, "<br>"));
  }
  /**
   * @method changeNodeName(nodeName)
   * 修改光标所在元素的标签
   * Replace the tag of the element under the cursor
   * @param nodeName? `string` allowed element names, `UL`, `SECTION` etc. If `undefined`, use the default `options.childNodeName`.
   * @return `boolean`
   */
  changeNodeName(i) {
    if (i = (i || this.options.childNodeName).toUpperCase(), !this.allowedNodeNames.includes(i))
      return !1;
    const s = this.getCursorElement(), n = F(s, i);
    return n ? (this.setRangeWithNode(n), this._dispatchChange(), !0) : !1;
  }
  /**
   * @method changeStyles(styles, value)
   * 修改光标所在元素的样式
   *  Change the style of the element where the cursor is located
   * @param styles? `CSSProperties | string` When it's `undefined` or null, all styles will be removed.
   * @param value? `any`
   */
  changeStyles(i, s) {
    const n = this.getCursorElement(!0);
    if (n) {
      const r = A(n);
      if (i) {
        const o = typeof i == "string" ? { [i]: s } : i;
        n.setAttribute("style", I(r, o));
      } else {
        if (!Object.keys(r).length)
          return;
        n.removeAttribute("style");
      }
      this._dispatchChange();
    }
  }
  /**
   * 分派事件
   */
  _dispatchChange() {
    this.$editor.dispatchEvent(new InputEvent("input"));
  }
  /**
   * @method getStyles()
   * 获取光标所在的元素的`style`对象
   * Get the `style` object of the element where the cursor is located
   * @return `CSSProperties`
   */
  getStyles() {
    return A(this.getCursorElement());
  }
  /**
   * @method getCursorElement(isOnlyEditorChild)
   * 获取光标所在的元素
   * Get the element where the cursor is located
   * @param isOnlyEditorChild? `boolean` Must be a child element of editor `HTMLElement`. For example: when it is `false`, the `li` element is returned in `ul/ol`, and when it is `true`, the `ul/ol` element is returned.
   * @return `HTMLElement`
   */
  getCursorElement(i = !1) {
    return De(this.range.commonAncestorContainer, this.$editor, i);
  }
  /**
   * @method destroy()
   * 销毁事件
   * destroy events
   */
  destroy() {
    this.$editor.removeEventListener("focus", this._eventHandler), this.$editor.removeEventListener("blur", this._eventHandler), this.$editor.removeEventListener("input", this._eventHandler), this.$editor.removeEventListener("paste", this._pasteHandler), this.removeAllListeners();
  }
}
const Re = ["#333333", "#d0d0d0", "#ff583d", "#fdaa25", "#44c67b", "#14b2e0", "#b065e2"], Me = {
  tag: "dl",
  attrs: {
    class: "__style-wrapper border-bottom"
  },
  child: [
    {
      tag: "dd",
      attrs: {
        style: "font-weight: 800;",
        "data-style": "fontWeight:800"
      },
      child: ["B"]
    },
    {
      tag: "dd",
      attrs: {
        style: "font-style: italic;",
        "data-style": "fontStyle:italic"
      },
      child: ["I"]
    },
    {
      tag: "dd",
      attrs: {
        style: "text-decoration: line-through;",
        "data-style": "textDecoration:line-through"
      },
      child: ["abc"]
    },
    {
      tag: "dd",
      attrs: {
        style: "",
        "data-style": "textAlign:left",
        class: "text-align--l"
      }
    },
    {
      tag: "dd",
      attrs: {
        style: "",
        "data-style": "textAlign:center",
        class: "text-align--c"
      }
    },
    {
      tag: "dd",
      attrs: {
        style: "",
        "data-style": "textAlign:right",
        class: "text-align--r"
      }
    }
  ]
}, U = {
  tag: "dl",
  attrs: {
    class: "__tag-wrapper"
  },
  child: [
    {
      tag: "dd",
      attrs: {
        class: "__h2",
        "data-tag": "h2"
      },
      child: ["大标题", { tag: "i" }]
    },
    {
      tag: "dd",
      attrs: {
        class: "__h4",
        "data-tag": "h4"
      },
      child: ["小标题", { tag: "i" }]
    },
    {
      tag: "dd",
      attrs: {
        class: "__section active",
        "data-tag": "section"
      },
      child: ["正文", { tag: "i" }]
    },
    {
      tag: "dd",
      attrs: {
        class: "__blockquote",
        "data-tag": "blockquote"
      },
      child: ["引用", { tag: "i" }]
    },
    {
      tag: "dd",
      attrs: {
        class: "__ul",
        "data-tag": "ul"
      },
      child: ["无序列表", { tag: "i" }]
    }
  ]
}, Be = (t) => {
  const e = [];
  return t.forEach((i, s) => {
    /^#\w{3,6}$/.test(i) && e.push({
      tag: "dd",
      attrs: {
        class: s === 0 ? "active" : "",
        "data-color": ke(i.toLowerCase())
      },
      child: [
        {
          tag: "i",
          attrs: {
            style: `background:${i}`
          }
        }
      ]
    });
  }), e;
}, ke = (t) => t.length === 7 ? t : `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`, je = {
  textStyleColors: [...Re],
  textStyleTitle: "Set Style",
  textStyleHeadLeftBtnText: "Clear"
};
const C = "style-panel", S = `${C}__fade-in`;
class Fe {
  constructor(e) {
    d(this, "editorInstance", null);
    d(this, "$el");
    d(this, "options");
    d(this, "_headerSwitchHandler");
    d(this, "_headerLeftHandler");
    d(this, "$elMap", /* @__PURE__ */ new Map());
    d(this, "_styleHandler");
    d(this, "_colorHandler");
    d(this, "_tagHandler");
    const i = {
      ...je,
      ...e
    };
    this.options = i, this.$el = f("div", { class: `${C} border-top` }), this._styleHandler = (s) => {
      const n = this.editorInstance, r = s.currentTarget, o = A(r, "data-style"), a = n.getStyles();
      Object.keys(o).forEach((l) => {
        a[l] && (o[l] = "");
      }), n.changeStyles(o);
    }, this._colorHandler = (s) => {
      const n = s.currentTarget;
      if (this.updateActiveClassName(n)) {
        const r = this.editorInstance, o = n.getAttribute("data-color");
        r.changeStyles({ color: o });
      }
    }, this._tagHandler = (s) => {
      const n = s.currentTarget;
      if (this.updateActiveClassName(n)) {
        const r = this.editorInstance, o = n.getAttribute("data-tag");
        r.changeNodeName(o);
      }
    }, this._headerLeftHandler = () => {
      const s = this.editorInstance, { textColor: n, childNodeName: r } = s.options;
      s.changeStyles(), s.changeNodeName(), this.updateActiveClassName(v(`[data-color="${n}"]`, this.$el)), this.updateActiveClassName(v(`[data-tag="${r}"]`, this.$el));
    }, this._headerSwitchHandler = () => {
      this.$el.classList.contains(S) ? this.hide() : this.show();
    };
  }
  _initChildEl(e) {
    const { textColor: i, childNodeName: s } = e, { textStyleTitle: n, textStyleHeadLeftBtnText: r, textStyleColors: o } = this.options, a = f("div", { class: `${C}__header` }, n), l = f("div", { class: "__left" }, r), E = f("div", { class: "__switch" });
    a.append(l, E);
    const u = [Me], c = o;
    if (c.length) {
      i && !c.includes(i) && c.unshift(i);
      const p = {
        tag: "dl",
        attrs: {
          class: "__color-wrapper border-bottom"
        },
        child: Be(c)
      };
      u.push(p);
    }
    const w = {
      ...U,
      child: [...U.child]
    }, m = s.toLowerCase();
    w.child.forEach((p) => {
      const g = p.attrs["data-tag"];
      g === "section" && g !== m && (p.attrs["data-tag"] = m);
    }), u.push(w);
    const h = te({
      tag: "div",
      attrs: {
        class: `${C}__body`
      },
      child: u
    });
    this.$el.append(a, h), $(".__style-wrapper dd", h).forEach((p) => {
      p.addEventListener("click", this._styleHandler);
    }), $(".__color-wrapper dd", h).forEach((p) => {
      p.addEventListener("click", this._colorHandler);
    }), $(".__tag-wrapper dd", h).forEach((p) => {
      p.addEventListener("click", this._tagHandler);
    }), l.addEventListener("click", this._headerLeftHandler), E.addEventListener("click", this._headerSwitchHandler), this.$elMap.set(l, this._headerLeftHandler), this.$elMap.set(E, this._headerSwitchHandler);
  }
  install(e, i) {
    this.editorInstance = e, i && i.append(this.$el), this._initChildEl(e.options), e.on("click", () => {
      const { textColor: s, childNodeName: n } = e.options, r = e.getStyles();
      this.updateActiveClassName(v(`[data-color="${r.color || s}"]`, this.$el));
      const o = e.getCursorElement(!0).nodeName.toLowerCase();
      this.updateActiveClassName(v(`[data-tag="${o || n}"]`, this.$el));
    });
  }
  show() {
    this.$el.classList.add(S);
  }
  hide() {
    this.$el.classList.remove(S);
  }
  updateActiveClassName(e) {
    return !e || e.classList.contains("active") ? !1 : (v(".active", e.parentElement).classList.remove("active"), e.classList.add("active"), !0);
  }
  destroy() {
    this.$elMap.forEach((e, i) => {
      i.removeEventListener("click", e);
    });
  }
}
const Ue = {
  toolbarBeenFixed: !0,
  // toolbarHeight: '50px',
  // buttons name, and order
  toolbarButtons: ["choose-picture", "text-style"]
};
class We {
  constructor(e) {
    d(this, "editorInstance", null);
    d(this, "visible");
    d(this, "options");
    d(this, "$el");
    d(this, "_btnClickHandler");
    this.options = {
      ...Ue,
      ...e
    }, this.visible = this.options.toolbarBeenFixed;
    const [i, s] = $e(this.options.toolbarHeight || "");
    this.$el = f(
      "div",
      {
        class: "sp-editor__toolbar border-top",
        style: {
          "--bar-height": i ? `${i}${s}` : null
        }
      },
      '<dl class="inner-wrapper"></dl>'
    ), this._btnClickHandler = (n) => {
      const r = n.currentTarget;
      this.editorInstance && r && this.editorInstance.emit("toolbarButtonOnClick", r.getAttribute("data-name"));
    }, this.options.toolbarButtons.forEach((n) => {
      this.addButton({ name: n });
    });
  }
  install(e, i) {
    this.editorInstance = e, i && i.append(this.$el), this.visible && this.show();
  }
  show() {
    xe(this.$el, "__fade-in"), this.visible = !0, this.editorInstance.emit("toolbarShow", !0, this);
  }
  hide() {
    Le(this.$el, "__fade-in"), this.visible = !1, this.editorInstance.emit("toolbarShow", !1, this);
  }
  /**
   * add button
   * @param params
   * @param index Insert index
   */
  addButton(e, i) {
    const s = { ...e.style }, n = f(
      "dd",
      {
        class: Ce("icon-item", e.className),
        dataName: e.name,
        style: s
      },
      e.innerHtml
    ), r = $("dd", this.$el), o = v("dl", this.$el);
    typeof i == "number" && i >= 0 && i < r.length ? o.insertBefore(n, r[i]) : o.append(n), n.addEventListener("click", this._btnClickHandler);
  }
  destroy() {
    $(".icon-item", this.$el).forEach((e) => {
      e.removeEventListener("click", this._btnClickHandler);
    });
  }
}
/*!
 * image-process version 4.3.1
 * Author: Xing Zhong <capricorncd@qq.com, zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/image-process-tools
 * Released on: 2022-12-30 14:17:09 (GMT+0900)
 */
/*!
 * zx-sml version 0.6.0
 * Author: Xing Zhong<zx198401@gmail.com>
 * Repository: https://github.com/capricorncd/zx-sml
 * Released on: 2022-09-09 21:21:26 (GMT+0900)
 */
var ze = Object.defineProperty, W = Object.getOwnPropertySymbols, Ge = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable, z = (t, e, i) => e in t ? ze(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, G = (t, e) => {
  for (var i in e || (e = {}))
    Ge.call(e, i) && z(t, i, e[i]);
  if (W)
    for (var i of W(e))
      Ve.call(e, i) && z(t, i, e[i]);
  return t;
};
function qe(t) {
  return Array.isArray(t);
}
function oe(t) {
  return t !== null && !qe(t) && typeof t == "object";
}
var Ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, x = { exports: {} };
/*! For license information please see date-utils-2020.js.LICENSE.txt */
(function(t, e) {
  (function(i, s) {
    t.exports = s();
  })(typeof self < "u" ? self : Ye, function() {
    return (() => {
      var i = { 949: (n, r) => {
        Object.defineProperty(r, "__esModule", { value: !0 }), r.toTwoDigits = void 0, r.toTwoDigits = function(o) {
          return o[1] ? o : "0" + o;
        };
      }, 607: (n, r, o) => {
        Object.defineProperty(r, "__esModule", { value: !0 }), r.toTwoDigits = r.toDate = r.formatDate = void 0;
        var a = o(949);
        Object.defineProperty(r, "toTwoDigits", { enumerable: !0, get: function() {
          return a.toTwoDigits;
        } });
        var l = { weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] };
        function E(u) {
          if (u instanceof Date)
            return u;
          if (typeof u == "number")
            return new Date(u);
          if (typeof u == "string") {
            var c = u.trim();
            if (/^\d+$/.test(c)) {
              var w = c.length;
              return w === 8 ? new Date([c.substr(0, 4), c.substr(4, 2), c.substr(6, 2)].join("/")) : w === 6 ? new Date([c.substr(0, 4), c.substr(4, 2), "01"].join("/")) : w === 4 ? /* @__PURE__ */ new Date(c + "/01/01") : new Date(parseInt(u));
            }
            if (c = c.replace(/[年月日]/g, function(h) {
              return h === "日" ? "" : "/";
            }).replace(/[(（（].*?[)））]/g, " ").replace(/\bam|pm\b/gi, " ").replace(/\s+/g, " "), /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/.test(c))
              return new Date([RegExp.$1, RegExp.$2, RegExp.$3].join("/"));
            if (/^(\d{4})[-/](\d{1,2})$/.test(c))
              return new Date([RegExp.$1, RegExp.$2, "01"].join("/"));
            var m = new Date(c);
            return isNaN(m.getFullYear()) ? null : m;
          }
          return null;
        }
        r.formatDate = function(u, c, w) {
          var m, h = E(u);
          if (!h || !c)
            return u + "";
          if (c === "timestamp")
            return h.getTime().toString();
          /(y+)/i.test(c) && (m = RegExp.$1, c = c.replace(m, (h.getFullYear() + "").substr(4 - m.length))), w && Array.isArray(w.weeks) || (w = l);
          var p = { "M+": h.getMonth() + 1, "d+": h.getDate(), "h+": h.getHours(), "m+": h.getMinutes(), "s+": h.getSeconds(), "w+": h.getDay(), "W+": w.weeks[h.getDay()], "a+": h.getHours() < 12 ? "am" : "pm", "A+": h.getHours() < 12 ? "AM" : "PM" };
          for (var g in p)
            if (new RegExp("(" + g + ")").test(c)) {
              m = RegExp.$1;
              var y = p[g] + "";
              c = c.replace(m, m.length === 1 ? y : a.toTwoDigits(y));
            }
          if (/(g)/i.test(c)) {
            var _ = h.toString().split(/\s+/).slice(5), me = c.includes("g");
            c = c.replace(/g/i, me ? _[0] : _.join(" "));
          }
          return c;
        }, r.toDate = E;
      } }, s = {};
      return function n(r) {
        if (s[r])
          return s[r].exports;
        var o = s[r] = { exports: {} };
        return i[r](o, o.exports, n), o.exports;
      }(607);
    })();
  });
})(x);
function ae(t = "", e = "-") {
  return t.replace(/[A-Z]/g, (i, s) => `${s > 0 ? e : ""}${i.toLowerCase()}`);
}
function Ke(t = "", e = !1) {
  const i = t.replace(/[-_\s](\w)/g, (s, n) => n.toUpperCase());
  return e ? i.replace(/^\w/, (s) => s.toUpperCase()) : i;
}
function le(t = {}, e = !1) {
  const i = e ? Ke : ae, s = {};
  for (const [n, r] of Object.entries(t))
    s[i(n)] = oe(r) ? le(r, e) : r;
  return s;
}
function ce(t, e = !1, i = 2) {
  const s = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], n = e ? 1e3 : 1024;
  let r = String(t), o = "Byte";
  for (let a = 0, l = t / n; l > 1; l /= n, a++)
    r = l.toFixed(i), o = s[a];
  return e && (o = o.replace("i", "")), {
    text: r.replace(/\.0+$/, "") + o,
    value: +r,
    unit: o,
    bytes: t
  };
}
function de(t, e = {}, i) {
  const s = document.createElement(t);
  for (const [n, r] of Object.entries(e))
    s.setAttribute(ae(n), n === "style" && oe(r) ? Ze(r) : r);
  return i && (Array.isArray(i) || (i = [i]), i.forEach((n) => {
    if (typeof n == "string") {
      const r = de("div");
      r.innerHTML = n, s.append(...r.childNodes);
    } else
      s.append(n);
  })), s;
}
function Ze(...t) {
  const e = t.reduce((s, n) => G(G({}, s), le(n)), {}), i = [];
  for (const [s, n] of Object.entries(e))
    n === "" || typeof n > "u" || n === null || i.push(`${s}:${n}`);
  return i.join(";");
}
function Je(t) {
  return new Promise((e, i) => {
    const s = new FileReader();
    s.onload = (n) => {
      var r;
      const o = (r = n.target) == null ? void 0 : r.result;
      o ? e(o) : i(new Error(`FileReader's result is null, ${n.target}`));
    }, s.onerror = i, s.readAsDataURL(t);
  });
}
function he(t) {
  return (window.URL || window.webkitURL).createObjectURL(t);
}
function fe(t) {
  const e = t.split(",");
  let i = "";
  return /data:(\w+\/\w+);base64/.test(e[0]) && (i = RegExp.$1), {
    type: i,
    data: e[1]
  };
}
function ue(t, e) {
  const i = fe(t), s = window.atob(i.data);
  e = e || i.type;
  const n = new Uint8Array(s.length);
  for (let r = 0; r < s.length; r++)
    n[r] = s.charCodeAt(r);
  return new Blob([n], { type: e });
}
x.exports.formatDate;
x.exports.toDate;
x.exports.toTwoDigits;
const Qe = {
  enableDevicePixelRatio: !1,
  isForce: !1,
  mimeType: "image/jpeg",
  perResize: 500,
  quality: 0.9,
  width: 0,
  height: 0,
  longEdge: 0
}, Xe = /^data:(.+?);base64/, et = /^image\/.+/;
function tt(t, e) {
  return new Promise((i, s) => {
    var n;
    const r = {
      ...Qe,
      ...e,
      longEdge: (n = e == null ? void 0 : e.longEdge) != null ? n : e == null ? void 0 : e.longestSide
    };
    typeof t == "string" && Xe.test(t) ? V(t, r, i, s) : (t instanceof File || t instanceof Blob) && et.test(t.type) ? Je(t).then((o) => {
      V(o, r, i, s);
    }).catch(s) : s(new Error(`Invalid file, ${t}`));
  });
}
function V(t, e, i, s) {
  const { type: n } = fe(t), r = ue(t, n), o = new Image();
  o.onload = () => {
    const a = {
      element: o,
      blob: r,
      data: t,
      url: he(r),
      width: o.naturalWidth || o.width,
      height: o.naturalHeight || o.height,
      type: n,
      size: ce(r.size)
    };
    e.cropInfo && e.cropInfo.sw && e.cropInfo.sh ? q(a, e, i, s, {
      ...e.cropInfo,
      dx: 0,
      dy: 0,
      dw: e.cropInfo.sw,
      dh: e.cropInfo.sh
    }) : e.width && e.height ? q(a, e, i, s, st(a, e)) : e.width || e.height || e.longEdge ? it(a, e, i, s) : P({ ...a, raw: a }, e, i);
  }, o.onerror = s, o.src = t;
}
function q(t, e, i, s, n) {
  try {
    Object.prototype.hasOwnProperty.call(n, "enableDevicePixelRatio") || (n.enableDevicePixelRatio = e.enableDevicePixelRatio);
    const r = R(t.element, {
      enableDevicePixelRatio: e.enableDevicePixelRatio,
      sx: n.sx,
      sy: n.sy,
      sw: n.sw,
      sh: n.sh,
      dx: 0,
      dy: 0,
      dw: n.sw,
      dh: n.sh
    });
    !e.width && !e.height ? e.longEdge ? n.sw > n.sh ? (e.width = e.longEdge, e.height = n.sh * e.width / n.sw) : (e.height = e.longEdge, e.width = n.sw * e.height / n.sh) : (e.width = n.sw, e.height = n.sh) : e.width ? e.height = n.sh * e.width / n.sw : e.width = n.sw * e.height / n.sh, ge(
      r,
      t,
      e,
      {
        ...n,
        sx: 0,
        sy: 0,
        sw: r.width,
        sh: r.height
      },
      i
    );
  } catch (r) {
    s(r);
  }
}
function it(t, e, i, s) {
  try {
    e.longEdge && !e.width && !e.height && (t.width >= t.height ? e.width = e.longEdge : e.height = e.longEdge);
    const n = {
      enableDevicePixelRatio: e.enableDevicePixelRatio,
      sx: 0,
      sy: 0,
      sw: t.width,
      sh: t.height,
      dx: 0,
      dy: 0,
      dw: e.width,
      dh: e.height
    };
    if (e.width) {
      if (t.width < e.width && !e.isForce) {
        P({ ...t, raw: t }, e, i);
        return;
      }
      n.dh = t.height * e.width / t.width, e.height = n.dh;
    } else {
      if (t.height < e.height && !e.isForce) {
        P({ ...t, raw: t }, e, i);
        return;
      }
      n.dw = t.width * e.height / t.height, e.width = n.dw;
    }
    ge(t.element, t, e, n, i);
  } catch (n) {
    s(n);
  }
}
function P(t, e, i) {
  t.type !== e.mimeType ? (t.type = e.mimeType, pe(
    t.element,
    t.raw,
    e,
    {
      enableDevicePixelRatio: e.enableDevicePixelRatio,
      sx: 0,
      sy: 0,
      sw: t.width,
      sh: t.height,
      dx: 0,
      dy: 0,
      dw: t.width,
      dh: t.height
    },
    i
  )) : i(t);
}
function ge(t, e, i, s, n) {
  let r = e.width > e.height ? e.width - s.dw : e.height - s.dh;
  if (r > i.perResize) {
    const o = e.height / e.width;
    for (; r > i.perResize; )
      r -= i.perResize, s.sw = t.width, s.sh = t.height, s.dw = i.width + r, s.dh = s.dw * o, t = R(t, s);
  }
  s.sw = t.width, s.sh = t.height, s.dw = i.width, s.dh = i.height, pe(t, e, i, s, n);
}
function pe(t, e, i, s, n) {
  const r = R(t, s), o = /^\w+\/\*$/.test(i.mimeType) || !i.mimeType ? e.type : i.mimeType, a = r.toDataURL(o, i.quality), l = ue(a, o);
  n({
    element: r,
    type: o,
    width: r.width,
    height: r.height,
    blob: l,
    data: a,
    url: he(l),
    size: ce(l.size),
    raw: e
  });
}
function st(t, e) {
  const { width: i, height: s } = t, { width: n, height: r } = e;
  let o;
  const a = s * n / r;
  if (i > a)
    o = {
      sx: (i - a) / 2,
      sy: 0,
      sw: a,
      sh: s
    };
  else {
    const l = i * r / n;
    o = {
      sx: 0,
      sy: (s - l) / 2,
      sw: i,
      sh: l
    };
  }
  return {
    ...o,
    dx: 0,
    dy: 0,
    dw: n,
    dh: r
  };
}
function R(t, e) {
  const i = e.enableDevicePixelRatio && window.devicePixelRatio || 1, s = de("canvas");
  s.width = e.dw * i, s.height = e.dh * i;
  const n = s.getContext("2d");
  return n.scale(i, i), n.drawImage(
    t,
    e.sx,
    e.sy,
    e.sw,
    e.sh,
    e.dx,
    e.dy,
    e.dw,
    e.dh
  ), s;
}
const nt = {
  imageMaxWidth: 750,
  ignoreGif: !0,
  forceImageResize: !1,
  chooseFileMultiple: !0,
  chooseFileAccept: "image/*"
};
class ot extends Ie {
  constructor(i, s = {}) {
    let n = null;
    if (typeof i == "string" || i instanceof HTMLElement ? n = v(i) : (s = i || {}, typeof s.container == "string" && (n = v(s.container))), s = {
      ...nt,
      ...s
    }, !n)
      throw new Error(`Can't found '${i}' Node in document!`);
    const r = f("div", { class: "sp-editor" });
    super({
      ...s,
      container: r
    });
    d(this, "$el");
    d(this, "stylePanel");
    d(this, "toolbar");
    d(this, "fileInput", null);
    d(this, "_inputChangeHandler");
    n.append(r), this.$el = r, this.stylePanel = new Fe(s), this.use(this.stylePanel, this.$el), this.toolbar = new We(s), this.use(this.toolbar, this.$el), this._inputChangeHandler = (o) => {
      const a = o.currentTarget;
      this.handleImageFile(a.files).then((l) => {
        l.forEach((E) => {
          const u = /gif$/i.test(E.raw.type) && s.ignoreGif;
          this.insert(`<img src="${u ? E.raw.data : E.data}">`);
        });
      }).catch((l) => {
        this.emit("error", l);
      });
    }, this.on("toolbarButtonOnClick", (o) => {
      switch (o) {
        case "choose-picture":
          if (typeof s.customPictureHandler == "function")
            s.customPictureHandler();
          else if (this.fileInput)
            this.fileInput.click();
          else {
            const a = {
              type: "file",
              style: {
                display: "none"
              },
              accept: s.chooseFileAccept
            };
            s.chooseFileMultiple && (a.multiple = !0), this.fileInput = f("input", a), this.$el.append(this.fileInput), this.fileInput.addEventListener("change", this._inputChangeHandler), this.fileInput.click();
          }
          break;
        case "text-style":
          this.stylePanel.show();
          break;
      }
    });
  }
  /**
   * @method handleImageFile(files)
   * Image files handler.
   * @param files `FileList | File[] | Blob[] | null` Image files.
   * @returns `Promise<MediaFileHandlerData[]` [MediaFileHandlerData](https://github.com/capricorncd/image-process-tools#returns)
   */
  handleImageFile(i) {
    return i ? new Promise((s, n) => {
      Promise.all(b(i).map(this._handleFile)).then((r) => {
        s(r.sort((o, a) => o.index - a.index).map((o) => o.data));
      }).catch(n);
    }) : Promise.resolve([]);
  }
  _handleFile(i, s) {
    return new Promise((n, r) => {
      tt(i).then((o) => {
        n({
          data: o,
          index: s
        });
      }).catch(r);
    });
  }
  /**
   * @method addToolbarButton(params, index)
   * Add a custom button to `toolbar`.
   * @param params `ButtonOptions` [ButtonOptions](#ButtonOptions)
   * @param index? `number` New button insertion index.
   * ```js
   * // Add a button named 'custom-button-name' for toolbar.
   * editor.addToolbarButton({
   *   name: 'custom-button-name',
   * })
   *
   * // when the button is clicked
   * editor.on('toolbarButtonOnClick', (name) => {
   *   if (name === 'custom-button-name') {
   *     // do something ...
   *   }
   * })
   * ```
   */
  addToolbarButton(i, s) {
    this.toolbar.addButton(i, s);
  }
  /**
   * @method destroy()
   * destroy events
   */
  destroy() {
    var i;
    super.destroy(), this.stylePanel.destroy(), this.toolbar.destroy(), (i = this.fileInput) == null || i.removeEventListener("change", this._inputChangeHandler);
  }
}
export {
  se as ALLOWED_NODE_NAMES,
  ot as SpEditor
};
