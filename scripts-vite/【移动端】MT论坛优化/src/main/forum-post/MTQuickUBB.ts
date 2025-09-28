import { unsafeWindow } from "ViteGM";

export const MTQuickUBB = () => {
  return {
    rainbow1: {
      key: "转普通彩虹",
      value: "",
      isFunc: true,
      num: 1,
    },
    rainbow2: {
      key: "转黑白彩虹",
      value: "",
      isFunc: true,
      num: 2,
    },
    rainbow3: {
      key: "转黑红彩虹",
      value: "",
      isFunc: true,
      num: 3,
    },
    rainbow4: {
      key: "转蓝绿彩虹",
      value: "",
      isFunc: true,
      num: 4,
    },
    size: {
      key: "大小",
      value: "[size=][/size]",
      tagL: "=",
      tagR: "]",
      L: "[size=]",
      R: "[/size]",
      cursorL: "[size=",
      cursorLength: 6,
      quickUBBReplace: "[size=14]replace[/size]",
    },
    color: {
      key: "颜色",
      value: "[color=][/color]",
      tagL: "=",
      tagR: "]",
      L: "[color=]",
      R: "[/color]",
      cursorL: "[color=",
      cursorLength: 7,
      quickUBBReplace: "[color=#000]replace[/color]",
    },
    b: {
      key: "加粗",
      value: "[b][/b]",
      tagL: "]",
      tagR: "[",
      L: "[b]",
      R: "[/b]",
      cursorR: "[/b]",
      cursorLength: 4,
      quickUBBReplace: "[b]replace[/b]",
    },
    u: {
      key: "下划线",
      value: "[u][/u]",
      tagL: "]",
      tagR: "[",
      L: "[u]",
      R: "[/u]",
      cursorR: "[/u]",
      cursorLength: 4,
      quickUBBReplace: "[u]replace[/u]",
    },
    i: {
      key: "倾斜",
      value: "[i][/i]",
      tagL: "]",
      tagR: "[",
      L: "[i]",
      R: "[/i]",
      cursorR: "[/i]",
      cursorLength: 4,
      quickUBBReplace: "[i]replace[/i]",
    },
    s: {
      key: "中划线",
      value: "[s][/s]",
      tagL: "]",
      tagR: "[",
      L: "[s]",
      R: "[/s]",
      cursorR: "[/s]",
      cursorLength: 4,
      quickUBBReplace: "[s]replace[/s]",
    },
    lineFeed: {
      key: "换行",
      value: "[*]",
      L: "",
      R: "[*]",
      cursorL: "[*]",
      cursorLength: 3,
      quickUBBReplace: "replace[*]",
    },
    longHorizontalLine: {
      key: "水平线",
      value: "[hr]",
      L: "",
      R: "[hr]",
      cursorL: "[hr]",
      cursorLength: 4,
      quickUBBReplace: "replace[hr]",
    },
    link: {
      key: "链接",
      value: "[url=][/url]",
      tagL: "=",
      tagR: "]",
      L: "[url=]",
      R: "[/url]",
      cursorL: "[url=",
      cursorLength: 5,
      quickUBBReplace: "[url=replace]replace[/url]",
    },
    hide: {
      key: "隐藏",
      value: "[hide]\n[/hide]",
      tagL: "]",
      tagR: "[",
      L: "[hide]",
      R: "[/hide]",
      cursorR: "[/hide]",
      cursorLength: 7,
      quickUBBReplace: "[hide]replace\n[/hide]",
    },
    quote: {
      key: "引用",
      value: "[quote][/quote]",
      tagL: "]",
      tagR: "[",
      L: "[quote]",
      R: "[/quote]",
      cursorR: "[/quote]",
      cursorLength: 8,
      quickUBBReplace: "[quote]replace[/quote]",
    },
    email: {
      key: "邮件",
      value: "[email=][/email]",
      tagL: "=",
      tagR: "]",
      L: "[email=]",
      R: "[/email]",
      cursorL: "[email=",
      cursorLength: 7,
      quickUBBReplace: "[email=replace]replace[/email]",
    },
  };
};

export const MTUBB_Rainbow = (num: number, text: string) => {
  if (text == "") {
    return "";
  }
  var wr_text = text;
  var wr_code, wr_rgb, r, g, b, i, j, istep;
  var wr_rgb1, wr_rgb2, r1, g1, b1, r2, g2, b2;

  r1 = g1 = b1 = r2 = g2 = b2 = 0;
  r = 0;
  g = 0;
  b = 0;
  istep = 0;
  wr_code = "";

  if (num == 1) {
    istep = 40;
    r = 255;
    i = 1;
    j = 0;
    do {
      if (wr_text.charCodeAt(j) != 32) {
        if (g + istep < 256) {
          if (i == 1) g += istep;
        } else if (i == 1) {
          i = 2;
          g = 255;
        }
        if (r - istep > -1) {
          if (i == 2) r -= istep;
        } else if (i == 2) {
          i = 3;
          r = 0;
        }
        if (b + istep < 256) {
          if (i == 3) b += istep;
        } else if (i == 3) {
          i = 4;
          b = 255;
        }
        if (g - istep > -1) {
          if (i == 4) g -= istep;
        } else if (i == 4) {
          i = 5;
          g = 0;
        }
        if (r + istep < 256) {
          if (i == 5) r += istep;
        } else if (i == 5) {
          i = 6;
          r = 255;
        }
        if (b - istep > -1) {
          if (i == 6) b -= istep;
        } else if (i == 6) {
          i = 1;
          b = 0;
        }
        wr_rgb = "";
        wr_rgb +=
          // @ts-ignore
          parseInt(r).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(r).toString(16)
            : // @ts-ignore
              parseInt(r).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(g).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(g).toString(16)
            : // @ts-ignore
              parseInt(g).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(b).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(b).toString(16)
            : // @ts-ignore
              parseInt(b).toString(16);
        wr_rgb = wr_rgb.toUpperCase();
        wr_code += `[color=#${wr_rgb}]${wr_text.charAt(j)}[/color]`;
      } else {
        wr_code += wr_text.charAt(j);
      }
      j++;
    } while (j < wr_text.length);
  } else if (num == 2) {
    istep = 255 / wr_text.length;
    for (i = 1; i < wr_text.length + 1; i++) {
      if (wr_text.charCodeAt(i - 1) != 32) {
        r += istep;
        g += istep;
        b += istep;
        if (r > 255) r = 255;
        if (g > 255) g = 255;
        if (b > 255) b = 255;
        wr_rgb = "";
        wr_rgb +=
          // @ts-ignore
          parseInt(r).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(r).toString(16)
            : // @ts-ignore
              parseInt(r).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(g).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(g).toString(16)
            : // @ts-ignore
              parseInt(g).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(b).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(b).toString(16)
            : // @ts-ignore
              parseInt(b).toString(16);
        wr_rgb = wr_rgb.toUpperCase();
        wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
      } else {
        wr_code += wr_text.charAt(i - 1);
      }
    }
  } else if (num == 3) {
    istep = 255 / wr_text.length;
    for (i = 1; i < wr_text.length + 1; i++) {
      if (wr_text.charCodeAt(i - 1) != 32) {
        r += istep;
        g = 29;
        b = 36;
        if (r > 255) r = 255;
        if (g > 255) g = 255;
        if (b > 255) b = 255;
        wr_rgb = "";
        wr_rgb +=
          // @ts-ignore
          parseInt(r).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(r).toString(16)
            : // @ts-ignore
              parseInt(r).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(g).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(g).toString(16)
            : // @ts-ignore
              parseInt(g).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(b).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(b).toString(16)
            : // @ts-ignore
              parseInt(b).toString(16);
        wr_rgb = wr_rgb.toUpperCase();
        wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
      } else {
        wr_code += wr_text.charAt(i - 1);
      }
    }
  } else if (num == 4) {
    istep = 255 / wr_text.length;
    for (i = 1; i < wr_text.length + 1; i++) {
      if (wr_text.charCodeAt(i - 1) != 32) {
        r = 0;
        g = 174;
        b += istep;
        if (r > 255) r = 255;
        if (g > 255) g = 255;
        if (b > 255) b = 255;
        wr_rgb = "";
        wr_rgb +=
          // @ts-ignore
          parseInt(r).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(r).toString(16)
            : // @ts-ignore
              parseInt(r).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(g).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(g).toString(16)
            : // @ts-ignore
              parseInt(g).toString(16);
        wr_rgb +=
          // @ts-ignore
          parseInt(255 - b).toString(16).length == 1
            ? // @ts-ignore
              0 + parseInt(255 - b).toString(16)
            : // @ts-ignore
              parseInt(255 - b).toString(16);
        wr_rgb = wr_rgb.toUpperCase();
        wr_code += `[color=#${wr_rgb}]${wr_text.charAt(i - 1)}[/color]`;
      } else {
        wr_code += wr_text.charAt(i - 1);
      }
    }
  }
  return wr_code;
};

export const ExtendJQueryFn = function () {
  unsafeWindow.$.fn.extend({
    insertAtCaret: function (this: any, myValue: any) {
      var $t = unsafeWindow.$(this)[0];
      if ((document as any).selection) {
        this.focus();
        var sel = (document as any).selection.createRange();
        sel.text = myValue;
        this.focus();
      } else if ($t.selectionStart || $t.selectionStart == "0") {
        var startPos = $t.selectionStart;
        var endPos = $t.selectionEnd;
        var scrollTop = $t.scrollTop;
        $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
        this.focus();
        $t.selectionStart = startPos + myValue.length;
        $t.selectionEnd = startPos + myValue.length;
        $t.scrollTop = scrollTop;
      } else {
        this.value += myValue;
        this.focus();
      }
    },
    selectRange: function (this: any, start: number, end: number) {
      if (end === undefined) {
        end = start;
      }
      return this.each(function () {
        // @ts-ignore
        if ("selectionStart" in this) {
          // @ts-ignore
          this.selectionStart = start;
          // @ts-ignore
          this.selectionEnd = end;
          // @ts-ignore
        } else if (this.setSelectionRange) {
          // @ts-ignore
          this.setSelectionRange(start, end);
          // @ts-ignore
        } else if (this.createTextRange) {
          // @ts-ignore
          var range = this.createTextRange();
          range.collapse(true);
          range.moveEnd("character", end);
          range.moveStart("character", start);
          range.select();
        }
      });
    },
    getCursorPosition: function () {
      var el = unsafeWindow.$(this)[0];
      var pos = 0;
      if ("selectionStart" in el) {
        pos = el.selectionStart;
      } else if ("selection" in document) {
        el.focus();
        // @ts-ignore
        var Sel = document.selection.createRange();
        // @ts-ignore
        var SelLength = document.selection.createRange().text.length;
        Sel.moveStart("character", -el.value.length);
        pos = Sel.text.length - SelLength;
      }
      return pos;
    },
    moveCursorInCenterByText: function (this: any, leftTextFlag: string, rightTextFlag: string) {
      var el = unsafeWindow.$(this)[0];
      var el_text = el.value;
      for (let i = el.selectionStart - 1; i > 0; i--) {
        let LText = el_text[i - 1];
        let currentText = el_text[i];
        if (LText == leftTextFlag && currentText == rightTextFlag) {
          this.selectRange(i);
          break;
        }
      }
    },
    moveCursorToCenterByTextWithLeft: function (this: any, leftMatchText: string, _length_: number) {
      var el = unsafeWindow.$(this)[0];
      var el_text = el.value;
      for (let index = el.selectionStart - 1; index > 0; index--) {
        let lTexts = el_text.substring(index - _length_, index);
        if (lTexts == leftMatchText) {
          this.selectRange(index);
          break;
        }
      }
    },
    moveCursorToCenterByTextWithRight: function (rightMatchText: string, _length_: number) {
      var el = unsafeWindow.$(this)[0];
      var el_text = el.value;
      for (let i = el.selectionStart - 1; i > 0; i--) {
        let rTexts = el_text.substring(i, i + _length_);
        if (rTexts == rightMatchText) {
          this.selectRange(i + _length_);
          break;
        }
      }
    },
  });
};
