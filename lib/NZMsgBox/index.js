/**
 * 原地址     https://www.jq22.com/jquery-info24191
 * 演示地址   https://www.jq22.com/yanshi24191
 * 更新时间   2023-03-11 00:55:14
 * 版本       5.1.2
 * 作者       NEIL
 * 修改:      修正部分css在移动端的显示；
 *            修改居中的实现方式；
 *            新增除了tooltip的参数
              {
                buttons: {
                  reverse: false, // 底部按钮置反
                  autoClose: true, // 当点击cancel时不会自动关闭，会在callback里自动添加第二个参数用于自己调用关闭
                }
              }
 */
(function ($) {
  $(function () {
    $(document.body).append(
      $(`<style type="text/css" data-insert-from="NZMsgBox_Drag">
        .NZ-Drag {
          -moz-user-select: -moz-none;
          -moz-user-select: none;
          -o-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none
        }
        </style>`)
    );
  });
  var j = {
    init: function (a, b) {
      var c = $(this);
      var d = { bydragobj: c, isTransparent: true };
      var f = $.extend({}, $.fn.NZDrag.defaultparam, b);
      f = $.extend({}, d, f);
      var g = false;
      var h, divY;
      var i = 0,
        topUpper = 0,
        rightUpper = 0,
        bottomUpper = 0;
      c.bind({
        "click.NZDrag": function (e) {},
        "mousedown.NZDrag": function (e) {
          g = true;
          f = $.extend({}, $.fn.NZDrag.defaultparam, b);
          f = $.extend({}, d, f);
          switch (f.bydragobj.css("position")) {
            case "absolute":
            default:
              i =
                f.upper.left === null || typeof f.upper.left === "undefined"
                  ? -f.bydragobj.outerWidth() / 2
                  : f.upper.left;
              topUpper =
                f.upper.top === null || typeof f.upper.top === "undefined"
                  ? 0
                  : f.upper.top;
              rightUpper =
                f.upper.right === null || typeof f.upper.right === "undefined"
                  ? document.body.scrollWidth + f.bydragobj.outerWidth() / 2
                  : f.upper.right;
              bottomUpper =
                f.upper.bottom === null || typeof f.upper.bottom === "undefined"
                  ? document.body.scrollHeight - f.bydragobj.outerHeight() / 2
                  : f.upper.bottom;
              break;
            case "fixed":
              i =
                f.upper.left === null || typeof f.upper.left === "undefined"
                  ? -f.bydragobj.outerWidth() / 2
                  : f.upper.left;
              topUpper =
                f.upper.top === null || typeof f.upper.top === "undefined"
                  ? 0
                  : f.upper.top;
              rightUpper =
                f.upper.right === null || typeof f.upper.right === "undefined"
                  ? $(window).width() - f.bydragobj.outerWidth() / 2
                  : f.upper.right;
              bottomUpper =
                f.upper.bottom === null || typeof f.upper.bottom === "undefined"
                  ? $(window).height() - f.bydragobj.outerHeight() / 2
                  : f.upper.bottom;
              break;
          }
          h =
            e.pageX -
            parseInt(
              f.bydragobj.css("left") == "auto" ? 0 : f.bydragobj.css("left")
            );
          divY =
            e.pageY -
            parseInt(
              f.bydragobj.css("top") == "auto" ? 0 : f.bydragobj.css("top")
            );
          if (f.isTransparent) {
            f.bydragobj.fadeTo(20, 0.5);
          }
          if (f.bydragobj.find("iframe").length > 0) {
            f.bydragobj.find("iframe").hide();
          }
          $(document.body).attr("unselectable", "on").addClass("NZ-Drag");
          $(document).bind({
            "mousemove.NZDrag": function (e) {
              if (g) {
                f.bydragobj.css({
                  left:
                    e.pageX - h <= i
                      ? i
                      : e.pageX - h >= rightUpper
                      ? rightUpper
                      : e.pageX - h,
                  top:
                    e.pageY - divY <= topUpper
                      ? topUpper
                      : e.pageY - divY >= bottomUpper
                      ? bottomUpper
                      : e.pageY - divY,
                });
              }
            },
            "mouseup.NZDrag": function (e) {
              f.bydragobj.find("iframe").show();
              g = false;
              f.bydragobj.fadeTo("fast", 1);
              $(document).unbind(
                "mousemove.NZDrag mouseup.NZDrag selectstart.NZDrag"
              );
              $(document.body)
                .removeClass("NZ-Drag")
                .removeAttr("unselectable");
              $("#isfloat").html($(document.body).css("user-select"));
            },
            "selectstart.NZDrag": function (e) {
              return false;
            },
          });
          e.preventDefault();
          stopBubble(e);
        },
      });
    },
    destroy: function () {
      $(this).unbind("click.NZDrag").unbind("mousedown.NZDrag");
    },
  };
  $.fn.NZDrag = function (a, b) {
    if (j[a]) {
      return j[a].apply(this, arguments);
    } else if (typeof j === "object" || !a) {
      return j.show.apply(this, arguments);
    }
  };
  $.fn.NZDrag.defaultparam = {
    upper: { left: null, right: null, top: null, bottom: null },
  };
  function stopBubble(e) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }
  }
})(typeof jQuery === "undefined" ? $ : jQuery);

(function ($) {
  $.NZ_MsgBox = {
    alert: function (details) {
      var new_details = $.extend({}, defaultDetails, details);
      new_details.buttons = $.extend(
        {},
        defaultDetails.buttons,
        details.buttons
      );
      show_MsgBox(new_details, "alert");
    },
    confirm: function (details) {
      var new_details = $.extend({}, defaultDetails, details);
      new_details.buttons = $.extend(
        {},
        defaultDetails.buttons,
        details.buttons
      );
      show_MsgBox(new_details, "confirm");
    },
    prompt: function (details) {
      var new_details = $.extend({}, defaultDetails, details);
      new_details.type = "";
      new_details.buttons = $.extend(
        {},
        defaultDetails.buttons,
        details.buttons
      );
      show_MsgBox(new_details, "prompt");
    },
    tipsbar: function (details) {
      var new_details = $.extend({}, defaultDetails_2, details);
      switch (new_details.location) {
        case "top":
          new_details.location = "locationT";
          break;
        case "right":
          new_details.location = "locationR";
          break;
        default:
          new_details.location = "locationR";
          break;
      }
      show_TipsBar(new_details);
    },
    tooltip: function (details) {
      var new_details = $.extend({}, defaultDetails_4, details);
      return show_ToolTips(new_details);
    },
    toast: function (details) {
      var new_details = $.extend({}, defaultDetails_3, details);
      return show_Toast(new_details);
    },
  };
  function show_MsgBox(details, msgBox_type) {
    var maxIndex = CalculateLayer("messagebox");
    var msgBoxBgNode = $("<div class='NZ-MsgBox-bg'></div>");
    msgBoxBgNode.show();
    var msgBoxAlertNode = $('<div class="NZ-MsgBox-alert"></div>');
    if (maxIndex >= 99999) {
      msgBoxBgNode.css({ "z-index": maxIndex - 1 });
      msgBoxAlertNode.css({ "z-index": maxIndex });
    }
    var distopNode = $('<div class="distop"></div>');
    msgBoxAlertNode.append(distopNode);
    var msgcontainerNode = $('<div class="msgcontainer"></div>');
    msgBoxAlertNode.append(msgcontainerNode);
    if (msgBox_type === "confirm") {
      var _msgbox_type_ =
        details.type !== null &&
        typeof details.type !== "undefined" &&
        details.type !== "none"
          ? details.type
          : "question";
      details.type = _msgbox_type_;
      msgcontainerNode.append('<div class="icon ' + _msgbox_type_ + '"></div>');
    } else if (
      details.type !== null &&
      typeof details.type !== "undefined" &&
      details.type !== "" &&
      details.type !== "none" &&
      msgBox_type !== "prompt"
    ) {
      msgcontainerNode.append('<div class="icon ' + details.type + '"></div>');
    }
    if (details.title !== null && details.title !== "") {
      msgcontainerNode.append(
        '<div class="msgtitle">' + details.title + "</div>"
      );
    }
    var keyconNode = $('<input type="text" class="keycon">');
    if (msgBox_type === "prompt") {
      msgcontainerNode.append(keyconNode);
    }
    if (details.content !== null && details.content !== "") {
      if (msgBox_type === "prompt") {
        keyconNode.val(details.content);
      } else {
        msgcontainerNode.append(
          '<div class="msgcon">' + details.content + "</div>"
        );
      }
    }
    var operatebarNode = $('<div class="operatebar"></div>');
    msgBoxAlertNode.append(operatebarNode);
    var confirmBtnNode = $(
      '<button type="button">' + details.buttons.confirm.text + "</button>"
    );
    var cancelBtnNode = $(
      '<button type="button" class="cancel">' +
        details.buttons.cancel.text +
        "</button>"
    );
    switch (details.type) {
      case "success":
        confirmBtnNode.addClass("success");
        break;
      case "question":
      case "input":
        confirmBtnNode.addClass("normal");
        break;
      case "warning":
        confirmBtnNode.addClass("warning");
        break;
      case "error":
        confirmBtnNode.addClass("error");
        break;
      default:
        confirmBtnNode.addClass("normal");
        msgcontainerNode.addClass("typenone");
        break;
    }
    switch (msgBox_type) {
      case "alert":
        operatebarNode.append(confirmBtnNode);
        break;
      case "confirm":
      case "prompt":
        operatebarNode.append(confirmBtnNode).append(cancelBtnNode);
        if (!details.buttons.reverse) {
          confirmBtnNode.addClass("beleft");
          cancelBtnNode.addClass("beright");
        } else {
          confirmBtnNode.addClass("beright");
          cancelBtnNode.addClass("beleft");
        }
        break;
      default:
        operatebarNode.append(confirmBtnNode);
        break;
    }
    if (details.buttons.reverse) {
      operatebarNode.css("flex-direction", "row-reverse");
    }
    if ($(".NZ-MsgBox-alert").length > 0) {
      var intervalId = setInterval(function () {
        if ($(".NZ-MsgBox-alert").length <= 0) {
          clearInterval(intervalId);
          show();
        }
      }, 500);
    } else {
      show();
    }
    function show() {
      if (details.aero) {
        $(document.body).css("overflow-x", "hidden");
        msgBoxBgNode.addClass("aero");
      }
      $(document.body).after(msgBoxBgNode);
      $(document.body).after(msgBoxAlertNode);
      if (
        parseInt($(window).width()) < parseInt(msgBoxAlertNode.css("max-wdith"))
      ) {
        msgBoxAlertNode.css({
          "max-width": parseInt($(window).width()) - 10 + "px",
        });
      }
      calMainConHeight();
      $(window).on("resize.NZ_MSGBOX", function () {
        calMainConHeight();
      });
      function calMainConHeight() {
        var maxHeight =
          parseInt($(window).height()) -
          distopNode.outerHeight() -
          operatebarNode.outerHeight() -
          120;
        msgBoxAlertNode
          .find("div.msgcon")
          .css({ "max-height": maxHeight <= 100 ? 100 : maxHeight });
      }
      msgBoxBgNode.addClass("NZ-MsgBox--motion NZ-MsgBox-bg--show");
      msgBoxAlertNode
        .show()
        .css({
          left:
            (parseInt($(window).width()) - parseInt(msgBoxAlertNode.width())) /
            2,
          top:
            (parseInt($(window).height()) -
              parseInt(msgBoxAlertNode.height())) /
            2,
        })
        .addClass("NZ-MsgBox--motion NZ-MsgBox-alert--open")
        .on("animationend webkitAnimationEnd", function () {
          msgBoxAlertNode.removeClass("NZ-MsgBox-alert--open");
          msgBoxBgNode.mousedown(function () {
            msgBoxAlertNode.addClass("NZ-MsgBox--leap");
            msgBoxAlertNode.on(
              "animationend.leap webkitAnimationEnd.leap",
              function () {
                $(this).removeClass("NZ-MsgBox--leap");
                msgBoxAlertNode.find(cancelBtnNode).length > 0
                  ? cancelBtnNode.focus()
                  : confirmBtnNode.focus();
              }
            );
          });
        });
      msgBoxAlertNode
        .find("div.icon")
        .addClass("NZ-MsgBox--showicon NZ-MsgBox--motion");
      /**
       * 在4个defaultDetails内添加showIcon = false，用于控制图标是否显示
       */
      if (!details.showIcon) {
        msgBoxAlertNode.find("div.icon").remove();
      }
      showInit();
    }
    function showInit() {
      msgBox_type === "alert" ? confirmBtnNode.focus() : cancelBtnNode.focus();
      if (details.dragmove) {
        distopNode.NZDrag("init", { bydragobj: msgBoxAlertNode });
        distopNode.css("cursor", "move");
      }
      if (msgBox_type === "prompt") {
        keyconNode.focus();
        cancelBtnNode.click(function () {
          close(null);
        });
        confirmBtnNode.click(function () {
          close(keyconNode.val());
        });
      } else {
        cancelBtnNode.click(function () {
          close(false);
        });
        confirmBtnNode.click(function () {
          close(true);
        });
      }
    }
    function msgBoxAlertNodeClose() {
      msgBoxAlertNode
        .removeClass("NZ-MsgBox-alert--open")
        .addClass("NZ-MsgBox-alert--close")
        .on("animationend webkitAnimationEnd", function () {
          $(document.body).css("overflow-x", "initial");
          $(this).remove();
        });
      $(document.body).removeClass("NZ-MsgBox-bg--aero");
      msgBoxBgNode
        .removeClass("NZ-MsgBox-bg--show")
        .addClass("NZ-MsgBox-bg--hide")
        .css({ "animation-delay": ".3s" })
        .on("animationend webkitAnimationEnd", function () {
          $(this).remove();
        });
    }
    function close(status) {
      if (details.buttons.autoClose) {
        msgBoxAlertNodeClose();
      } else if (typeof details.callback === "function") {
        details.callback(status, msgBoxAlertNodeClose);
      }
    }
  }
  function show_TipsBar(details) {
    var tipsBarContainerNode = $("<div></div>");
    if (
      $(".NZ-TipsBar-Container." + details.location + "." + details.tipsort)
        .length > 0
    ) {
      tipsBarContainerNode = $(
        ".NZ-TipsBar-Container." + details.location + "." + details.tipsort
      );
    } else {
      tipsBarContainerNode
        .addClass(
          "NZ-TipsBar-Container " + details.location + " " + details.tipsort
        )
        .css({
          "z-index": CalculateLayer("tips"),
        });
      $(document.body).append(tipsBarContainerNode);
    }
    var tipsBarCapsuleNode = $(
      '<div class="tipbar-capsule" style="height:0px"></div>'
    );
    var tipbarNode = $('<div class="tipbar"></div>');
    if (details.type !== "" && details.type !== null) {
      tipbarNode.addClass("carrystate " + details.type);
      tipbarNode.append(
        '<i class="tipsbar-icon icon-state NZ-TipsBar--motion NZ-MsgBox--showicon"></i>'
      );
      tipbarNode
        .children(".tipsbar-icon")
        .on("animationend webkitAnimationEnd", function (event) {
          event.stopPropagation();
        });
    }
    if (details.title !== "" && details.title !== null) {
      tipbarNode.append(
        '<div class="title NZ-TipsBar--motion NZ-Motion--inlinecon">' +
          details.title +
          "</div>"
      );
      tipbarNode
        .children(".title")
        .on("animationend webkitAnimationEnd", function (event) {
          event.stopPropagation();
        });
    }
    if (details.content !== "" && details.content !== null) {
      tipbarNode.append(
        '<div class="con NZ-TipsBar--motion NZ-Motion--inlinecon" style="' +
          (tipbarNode.find(".title").length > 0 ? "margin-top:5px" : "") +
          '">' +
          details.content +
          "</div > "
      );
      tipbarNode
        .children(".con")
        .on("animationend webkitAnimationEnd", function (event) {
          event.stopPropagation();
        })
        .css({ "animation-delay": ".3s" });
    }
    if (
      details.tipsort === "top" &&
      tipsBarContainerNode.children().length > 0
    ) {
      tipsBarContainerNode.children(":eq(0)").before(tipsBarCapsuleNode);
    } else {
      tipsBarContainerNode.append(tipsBarCapsuleNode);
    }
    if (details.closebtn) {
      var closeBtnNode = $('<button type="button" class="close"></button>');
      tipbarNode.append(closeBtnNode);
      closeBtnNode.click(function () {
        close();
      });
    }
    var tipsBarShowRightClassName = "NZ-TipsBar-show--right",
      motiontype_hide = "NZ-TipsBar-hide--right";
    if (details.location === "locationT") {
      tipsBarShowRightClassName = "NZ-TipsBar-show--top";
      motiontype_hide = "NZ-TipsBar-hide--top";
    }
    tipsBarCapsuleNode.append(tipbarNode);
    tipsBarCapsuleNode
      .height(tipbarNode.outerHeight() + 10)
      .on("transitionend webkitTransitionEnd", function () {
        $(document.body).css("overflow-x", "hidden");
      });
    tipbarNode
      .addClass("NZ-TipsBar--motion " + tipsBarShowRightClassName)
      .on("animationend webkitAnimationEnd", function (event) {
        tipsBarCapsuleNode.css({ height: "auto" });
        $(document.body).css("overflow-x", "initial");
        if (details.showtime !== null && typeof details.showtime === "number") {
          if (details.processbar) {
            var processbarNode = $('<div class="processbar"><div></div></div>');
            processbarNode
              .children()
              .addClass("NZ-TipsBar--motion NZ-TipsBar--process")
              .css({ "animation-duration": details.showtime / 1000 + "s" })
              .on("animationend webkitAnimationEnd", function (event) {
                close();
                event.stopPropagation();
              });
            tipbarNode.append(processbarNode);
            tipbarNode.on({
              mouseover: function () {
                processbarNode
                  .children()
                  .css({ "animation-play-state": "paused" });
              },
              mouseout: function () {
                processbarNode
                  .children()
                  .css({ "animation-play-state": "running" });
              },
            });
          } else {
            var timeoutId = setTimeout(function () {
              clearTimeout(timeoutId);
              close();
            }, details.showtime);
          }
        }
        event.stopPropagation();
      });
    function close() {
      tipsBarCapsuleNode.css("height", tipsBarCapsuleNode.outerHeight());
      tipbarNode
        .removeClass(tipsBarShowRightClassName)
        .off("animationend webkitAnimationEnd")
        .addClass(motiontype_hide)
        .on("animationend webkitAnimationEnd", function () {
          $(this).remove();
          tipsBarCapsuleNode
            .height("0")
            .off("transitionend webkitTransitionEnd")
            .on("transitionend webkitTransitionEnd", function (event) {
              $(this).remove();
              if (
                details.callback !== null &&
                typeof details.callback === "function"
              ) {
                details.callback();
              }
              if (tipsBarContainerNode.children().length === 0) {
                tipsBarContainerNode.remove();
              }
              event.stopPropagation();
            });
        });
    }
  }
  function show_Toast(details) {
    var toastNode;
    var toastShowEvent = (function () {
      details.onshowbefore();
      toastNode = $("<div>" + details.content + "</div>");
      toastNode.addClass("NZ-Toast");
      if (details.masklayer) {
        $(document.body).append('<div class="NZ-Toast-bg"></div>');
      }
      if (toastNode.find("img").length > 0) {
        try {
          toastNode.find("img").load(function () {
            showmain();
          });
        } catch (e) {
          showmain();
        }
      } else {
        showmain();
      }
      function showmain() {
        $(document.body).append(toastNode);
        if (details.location === "center") {
          toastNode.addClass("NZ-MsgBox--motion NZ-MsgBox-alert--open").css({
            "margin-left": -toastNode.outerWidth() / 2,
            "margin-top": -toastNode.outerHeight() / 2,
          });
        } else if (details.location === "top") {
          toastNode.addClass("top NZ-MsgBox--motion NZ-Motion--fadeInTop").css({
            "margin-left": -toastNode.outerWidth() / 2,
            "margin-top": 0,
          });
        }
        details.onshow();
        if (details.showtime !== null) {
          setTimeout(function () {
            toastHideEvent();
          }, details.showtime);
        }
      }
    })();
    var toastHideEvent = function () {
      details.onhidebefore();
      if (details.location === "center") {
        toastNode
          .removeClass("NZ-MsgBox-alert--open")
          .addClass("NZ-MsgBox-alert--close")
          .on("animationend webkitAnimationEnd", function () {
            $(this).remove();
            details.onhide();
          });
      } else if (details.location === "top") {
        toastNode
          .removeClass("NZ-Motion--fadeInTop")
          .addClass("NZ-Motion--fadeOutTop")
          .on("animationend webkitAnimationEnd", function () {
            $(this).remove();
            details.onhide();
          });
      }
      if (details.masklayer) {
        $(".NZ-Toast-bg").remove();
      }
    };
    var toastMoveEvent = function (details) {
      toastNode.html(details.content);
      if (toastNode.find("img").length > 0) {
        toastNode.find("img").load(function () {
          toastNode.css({
            "margin-left": -toastNode.outerWidth() / 2,
            "margin-top": -toastNode.outerHeight() / 2,
          });
        });
      } else {
        toastNode.css({
          "margin-left": -toastNode.outerWidth() / 2,
          "margin-top": -toastNode.outerHeight() / 2,
        });
      }
    };
    return { hide: toastHideEvent, update: toastMoveEvent };
  }
  function show_ToolTips(details) {
    if (details.tiptarget === null) return;
    var tipTargetNode = $(details.tiptarget);
    var toolTipsMotionNode = $(
      '<div class="NZ-Tooltips NZ-MsgBox--motion"></div>'
    );
    tipTargetNode
      .on(details.show, function () {
        $(this).trigger(details.hide);
        toolTipsMotionNode = $(
          '<div class="NZ-Tooltips NZ-MsgBox--motion"></div>'
        );
        if (details.theme !== "") toolTipsMotionNode.addClass(details.theme);
        if (details.contentAttr !== "") {
          toolTipsMotionNode
            .html($(this).attr(details.contentAttr))
            .append('<div class="tip-arrow"></div>');
        } else if (details.content !== "") {
          toolTipsMotionNode
            .html(details.content)
            .append('<div class="tip-arrow"></div>');
        } else {
          return false;
        }
        toolTipsMotionNode.css({ "z-index": CalculateLayer() + 1 });
        $(document.body).append(toolTipsMotionNode);
        var spacing = 25;
        var positionConfig = {
          Top: {
            left:
              $(this).offset().left +
              $(this).outerWidth() / 2 -
              toolTipsMotionNode.width() * 0.2 -
              spacing / 2,
            top:
              $(this).offset().top -
              toolTipsMotionNode.outerHeight() -
              spacing / 2,
            arrow: "",
            motion: "NZ-Motion--fadeInTop",
          },
          Right: {
            left: $(this).offset().left + $(this).outerWidth() + spacing / 2,
            top:
              $(this).offset().top +
              $(this).outerHeight() / 2 -
              toolTipsMotionNode.outerHeight() / 2,
            arrow: "left",
            motion: "NZ-Motion--fadeInRight",
          },
          Bottom: {
            left:
              $(this).offset().left +
              $(this).outerWidth() / 2 -
              toolTipsMotionNode.width() * 0.2 -
              spacing / 2,
            top: $(this).offset().top + $(this).outerHeight() + spacing / 2,
            arrow: "top",
            motion: "NZ-Motion--fadeInDown",
          },
          Left: {
            left:
              $(this).offset().left -
              toolTipsMotionNode.outerWidth() -
              spacing / 2,
            top:
              $(this).offset().top +
              $(this).outerHeight() / 2 -
              toolTipsMotionNode.outerHeight() / 2,
            arrow: "right",
            motion: "NZ-Motion--fadeInLeft",
          },
        };
        toolTipsMotionNode
          .mouseenter(function () {
            if (parseInt($(this).css("opacity")) > 0.5) {
              $(this).css({ "animation-play-state": "paused" });
            }
          })
          .mouseleave(function () {
            $(this).css({ "animation-play-state": "running" });
          });
        switch (details.location) {
          case "auto":
          default:
            if (positionConfig.Top.left > 0 && positionConfig.Top.top > 0) {
              toolTipsMotionNode.css({
                left: positionConfig.Top.left,
                top: positionConfig.Top.top,
              });
              toolTipsMotionNode.addClass(positionConfig.Top.motion);
            } else if (positionConfig.Right.left <= $(window).width) {
              toolTipsMotionNode
                .css({
                  left: positionConfig.Right.left,
                  top: positionConfig.Right.top,
                })
                .addClass(positionConfig.Right.motion);
              toolTipsMotionNode
                .find(".tip-arrow")
                .addClass(positionConfig.Right.arrow);
            } else if (positionConfig.Left.left > 0) {
              toolTipsMotionNode
                .css({
                  left: positionConfig.Left.left,
                  top: positionConfig.Left.top,
                })
                .addClass(positionConfig.Left.motion);
              toolTipsMotionNode
                .find(".tip-arrow")
                .addClass(positionConfig.Left.arrow);
            } else {
              toolTipsMotionNode
                .css({
                  left: positionConfig.Bottom.left,
                  top: positionConfig.Bottom.top,
                })
                .addClass(positionConfig.Bottom.motion);
              toolTipsMotionNode
                .find(".tip-arrow")
                .addClass(positionConfig.Bottom.arrow);
            }
            break;
          case "top":
            toolTipsMotionNode
              .css({
                left: positionConfig.Top.left,
                top: positionConfig.Top.top,
              })
              .addClass(positionConfig.Top.motion);
            break;
          case "right":
            toolTipsMotionNode
              .css({
                left: positionConfig.Right.left,
                top: positionConfig.Right.top,
              })
              .addClass(positionConfig.Right.motion);
            toolTipsMotionNode
              .find(".tip-arrow")
              .addClass(positionConfig.Right.arrow);
            break;
          case "bottom":
            toolTipsMotionNode
              .css({
                left: positionConfig.Bottom.left,
                top: positionConfig.Bottom.top,
              })
              .addClass(positionConfig.Bottom.motion);
            toolTipsMotionNode
              .find(".tip-arrow")
              .addClass(positionConfig.Bottom.arrow);
            break;
          case "left":
            toolTipsMotionNode
              .css({
                left: positionConfig.Left.left,
                top: positionConfig.Left.top,
              })
              .addClass(positionConfig.Left.motion);
            toolTipsMotionNode
              .find(".tip-arrow")
              .addClass(positionConfig.Left.arrow);
            break;
        }
      })
      .on(details.hide, function () {
        let target_motion = "";
        if (toolTipsMotionNode.find(".tip-arrow").hasClass("left")) {
          target_motion = "NZ-Motion--fadeInRight";
        } else if (toolTipsMotionNode.find(".tip-arrow").hasClass("top")) {
          target_motion = "NZ-Motion--fadeInDown";
        } else if (toolTipsMotionNode.find(".tip-arrow").hasClass("right")) {
          target_motion = "NZ-Motion--fadeInLeft";
        } else {
          target_motion = "NZ-Motion--fadeInTop";
        }
        toolTipsMotionNode
          .removeClass(target_motion)
          .addClass(target_motion.replace("In", "Out"))
          .on("animationend webkitAnimationEnd", function () {
            $(this).remove();
          });
      });
  }
  var defaultDetails = {
    title: "",
    content: "",
    type: "none",
    showIcon: false,
    aero: true,
    dragmove: true,
    inputMode: "text",
    buttons: {
      confirm: { text: "确定" },
      cancel: { text: "取消" },
      reverse: false,
      autoClose: true,
    },
    callback: function (a) {},
  };
  var defaultDetails_2 = {
    title: "",
    content: "",
    location: "right",
    tipsort: "top",
    type: "",
    showIcon: false,
    showtime: null,
    closebtn: true,
    processbar: true,
    callback: null,
  };
  var defaultDetails_3 = {
    onshowbefore: function () {},
    onshow: function () {},
    onhidebefore: function () {},
    onhide: function () {},
    content: null,
    location: "center",
    masklayer: false,
    showtime: null,
    showIcon: false,
  };
  var defaultDetails_4 = {
    tiptarget: null,
    content: "",
    contentAttr: "",
    location: "auto",
    show: "mouseenter",
    hide: "mouseleave",
    theme: "",
    showIcon: false,
  };
  /**
   * 计算页面index
   * @param {String|null} attrName
   * @returns
   */
  function CalculateLayer(attrName) {
    let layerindex = 0;
    switch (attrName) {
      case "messagebox":
        break;
      case "news":
        if ($(".NZ-MsgBox-alert").length > 0) {
          layerindex = parseFloat($(".NZ-MsgBox-alert").css("z-index")) - 3;
        }
        break;
      case "tips":
        if ($(".NZ-TipsBar-Container").length > 0) {
          layerindex =
            parseFloat($(".NZ-TipsBar-Container").css("z-index")) + 1;
        }
        break;
      default:
    }
    if (layerindex <= 0) {
      layerindex = Math.max.apply(
        null,
        $.map($("body *"), function (nodeItem, n) {
          /* 不对position为static和display为none的元素进行获取它们的z-index */
          if (
            $(nodeItem).css("position") !== "static" &&
            $(nodeItem).css("display") !== "none"
          )
            return parseInt($(nodeItem).css("z-index")) || -1;
        })
      );
      if (layerindex <= 0 || layerindex == "auto") {
        layerindex = 9999;
      }
    }
    return layerindex;
  }
})(typeof jQuery === "undefined" ? $ : jQuery);

(function ($) {
  let cssResource = `@charset "utf-8";
  .NZ-MsgBox-bg{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background-color:hsla(0,0%,96.1%,.55);}
  .NZ-MsgBox-bg.aero{backdrop-filter:saturate(.5) blur(3px)!important;}
  .NZ-MsgBox-bg--aero{filter:url(blur.svg#blur);-webkit-filter:blur(3px);-moz-filter:blur(3px);-ms-filter:blur(3px);filter:blur(3px);}
  .NZ-MsgBox-alert{position:fixed;top:0;left:0;z-index:99999;box-sizing:initial;max-width:500px;min-width:350px;border-radius:5px;background-color:#fff;box-shadow:0 3px 12px rgba(0,0,0,.23),0 3px 12px rgba(0,0,0,.16);}
  .NZ-MsgBox-alert .distop{height:30px;border-radius:0;border-top-right-radius:5px;border-top-left-radius:5px;background:#fff;}
  .NZ-MsgBox-alert .msgcontainer{position:relative;padding:13px 30px 40px 105px;color:#6c6c6c;font-family:Roboto-Medium,Noto Sans CJK DemiLight,Microsoft YaHei UI,Arial,Helvetica,sans-serif;}
  .NZ-MsgBox-alert .msgcontainer.typenone{padding-left:30px;}
  .NZ-MsgBox-alert .msgcontainer .msgtitle{text-align:left;font-weight:600;font-size:18px;}
  .NZ-MsgBox-alert .msgcontainer .msgcon{overflow-y:auto;margin-top:10px;max-height:400px;text-align:left;font-weight:400;font-size:16px;line-height:normal;word-break:break-all;}
  .NZ-MsgBox-alert .msgcontainer input.keycon{margin-top:10px;width:100%;height:35px;outline:0;border:0;border-bottom:1px solid #ccc;color:#6c6c6c;text-align:left;text-indent:2px;font-weight:400;font-size:15px;line-height:35px;transition:all .3s;}
  .NZ-MsgBox-alert .msgcontainer input.keycon:focus{border-bottom:1px solid #0c99eb;transition:all .3s;}
  .NZ-MsgBox-alert .msgcontainer .icon{position:absolute;top:8px;left:20px;z-index:1000;width:64px;height:64px;background-image:url("data:image/png;base64,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");background-repeat:no-repeat;}
  .NZ-MsgBox-alert .msgcontainer .icon.success{background-position:0 0;}
  .NZ-MsgBox-alert .msgcontainer .icon.question{background-position:0 -64px;}
  .NZ-MsgBox-alert .msgcontainer .icon.warning{background-position:0 -192px;}
  .NZ-MsgBox-alert .msgcontainer .icon.error{background-position:0 -128px;}
  .NZ-MsgBox-alert .msgcontainer .icon.input{background-position:0 -256px;}
  .NZ-MsgBox-alert .operatebar{display:flex;}
  .NZ-MsgBox-alert .operatebar button{padding:14px 0;outline:0;border:0;border-radius:0;border-bottom-right-radius:5px;border-bottom-left-radius:5px;color:#fff;text-align:center;font-size:1.1em;transition:all .5s ease-in;flex:1;-ms-flex:1;-webkit-flex:1;-webkit-user-select:none;user-select:none;}
  .NZ-MsgBox-alert .operatebar button:hover{transition:all .5s ease-out;}
  .NZ-MsgBox-alert .operatebar button.success{background:#60bf80;}
  .NZ-MsgBox-alert .operatebar button.success:hover{background:rgba(96,191,128,.8);}
  .NZ-MsgBox-alert .operatebar button.warning{background:#f29f45;}
  .NZ-MsgBox-alert .operatebar button.warning:hover{background:rgba(242,159,69,.8);}
  .NZ-MsgBox-alert .operatebar button.error{background:#ef5350;}
  .NZ-MsgBox-alert .operatebar button.error:hover{background:rgba(239,83,80,.8);}
  .NZ-MsgBox-alert .operatebar button.cancel{background:#e4e4e4;color:#666;}
  .NZ-MsgBox-alert .operatebar button.cancel:hover{background:hsla(0,0%,93.3%,.8);}
  .NZ-MsgBox-alert .operatebar button.normal{background:#1e90ff;}
  .NZ-MsgBox-alert .operatebar button.normal:hover{background:rgba(30,144,255,.8);}
  .NZ-MsgBox-alert .operatebar button.beleft{border-bottom-right-radius:0;}
  .NZ-MsgBox-alert .operatebar button.beright{border-bottom-left-radius:0;}
  .NZ-TipsBar-Container{position:fixed;display:flex;padding:10px;height:auto;background-color:transparent;font-family:Roboto-Light,Noto Sans CJK Light;transition:all .5s;pointer-events:none;flex-direction:column;}
  .NZ-TipsBar-Container.locationR{right:0;}
  .NZ-TipsBar-Container.locationT{top:0;right:25%;left:25%;width:50%;}
  .NZ-TipsBar-Container.top{top:0;bottom:auto;}
  .NZ-TipsBar-Container.bottom{top:auto;bottom:10px;}
  .NZ-TipsBar-Container .tipbar-capsule{width:100%;height:auto;max-height:1000px;font-size:0;transition:all .5s cubic-bezier(.25,.8,.25,1);transform:translateZ(0);backface-visibility:hidden;}
  .NZ-TipsBar-Container .tipbar{position:relative;overflow:hidden;margin:5px 0;padding:15px;width:auto;min-width:280px;border-radius:3px;background-color:hsla(0,0%,93.3%,.95);box-shadow:0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12);color:#757575;font-size:14px;pointer-events:all;backface-visibility:hidden;}
  .NZ-TipsBar-Container.locationT .tipbar{min-width:auto!important;flex:1;-webkit-flex:1;}
  .NZ-TipsBar-Container .tipbar.carrystate{padding-left:60px;border:0;}
  .NZ-TipsBar-Container .tipbar.success{background-color:rgba(180,241,196,.95);color:#7cb342;}
  .NZ-TipsBar-Container .tipbar.success .icon-state{width:24px;height:24px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAItAAACLQHlZp/kAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAD9QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxQXeHgAAABR0Uk5TAAMGCCAhIiNVV1lboaTb4OHi4/zOYgETAAAAuklEQVRYhe2VyxbCIAxEg+K7FZX8/7e6EFqPp6VhZuEms793EZJBxOP5d3YkH+9njk+aLxyvmq8crzqQ/Bicd975OXuSv6UTx2d9GQwtXg2G9fkNqgZDY/5hNBia71cMzyPIGwyb+7NhMOxf02Da34bBuP/F8DiA/Kqh4/4WDV33u2DovP9qiCA/GVIE+R8D1F9fBrD/JgPcn9WA928xEP09G9D+rwb4/ygGnP8YGF4kjBwvEkje4+nMG2DWH9EwoSnuAAAAAElFTkSuQmCC") no-repeat 50% 50%;background-size:85%;}
  .NZ-TipsBar-Container .tipbar.warning{background-color:rgba(255,236,179,.95);color:#fb8c00;}
  .NZ-TipsBar-Container .tipbar.warning .icon-state{width:24px;height:24px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMWRjNjc0NS0yZDRmLWQyNDctODczZS02Yjk4NjgzNTU0NWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDNEMzQ3Q0M5NzA2MTFFNkEyNDU4OEU1RkRBRDkzREQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDNEMzQ3Q0I5NzA2MTFFNkEyNDU4OEU1RkRBRDkzREQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMWRjNjc0NS0yZDRmLWQyNDctODczZS02Yjk4NjgzNTU0NWIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDFkYzY3NDUtMmQ0Zi1kMjQ3LTg3M2UtNmI5ODY4MzU1NDViIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pK1ECgAABPFJREFUeNrsW0lrFEEUrqqeRB0j0QQiRiJojDsYXIIbLnhQEBdQBC9uFw+JeBAUQfSiqH/C5SfoVVRQXPAgKCoal6BoXNBoMIjo2OX3pkudJD2dmpmq7p6e+aBmmunprldfffXq1etqLqVkUYPz1B76ljJzLnJboiaEcz6aM9GdJYS5M2DPjyjtEZHLg4lOfLR4JXtcuQqBOuqhjpc4bFA/9UEl02BTf0UqRDBxOIcMQoP6rfIUAnU0Qx3PcJgecuo7VNIGu3orSiFQwnEfMghpda5yFAJ1zIA6HuEwlecvGahkLmzrTjwhIEOAjAc4nDvCX8nBtsK+rwkfMs4uDTL+OthDiVZIThDWonkJOdjpsPFdQhXyLwjTBTnYY4lUiE8QpgtysLNh5/NEKcQnCNNFCteeSJRCAoIwXcBKdxFsvZcIhQQEYfqcMn4qEQrRCML0ZcLEWil/XS1rhaBnT5ogw7uXPF3WQwbq6MDnNnN3lIs5T20t2yEjuIC8+Zr/kneLVMagfnuq1jm/y0ohnNesyyXDIGYi/N9TVgrhBCZoimwf7BSNKITwVoX0P8pEIc6OoWT8bVgxxQeTYfp+K6aTQkwWoAaNeIEiNQoWbc5OXDMRZQKOt9DiT/PaPqrLuP3mCRH7NRv0AX9u8iE0jXMPde5BdcWaEKCOGqrZmH3575NaXQCpdSbbYNiHiIPU63r/da8ELHBv4+OXxk2aVJ3xm2UwrzSR76Ae0wvD3TFBs4TgznvlW0bCgEo1fozVLIMF3FFdMgyjTtUdH4VAHVOhjic4rNVfqBlTCOEn7jcL9+uJhUJUAqeWRYdaU0kkYUAd7dDYDhYxyAayJXpCvMQNZ9HDSBJJlGZBDRZvfD2LDfh6z6aoCAkhYRO2TaJ4dVCiRnaw2EF2lJJEEsWRwVPoiZMspiDbyMYQFeLs9RI1scVMZaP9wAzMp9UzlubSpkmjgZkfetXGm++WFSIOlEpGSGhWttpTCNTRoJ7P1pceSFlXCKFfbeLrs6IQhMdHTJChMDHIaeNrvIE66pXN5ocMjGyBlrrMKdpZGXByIcooQyF9F9muf4F2Jkmc1cxi6ZZXqH6cT9bN4cy5Y7Iust1oChGYgxtnDBNC5THuvYp5jzpJrQtAxk0L9WSoDTpt1XKqgouLGDSbLM4I5FzpSdxYixHsJVe6m0ueZTD+loHhmywBwIyzHO29VZJThYTPsIRApy1ihAXcRvC6giUGcoXXpiKGjNpgex+H8yxa+A21n2DMpU0wP9E/yzljxw0EZEF4iKEzH+12C5p2aYOtBW+fW76gklafGa0R53ps1k1tK2japaCI4gS7RonOgM7YYLkzKAYaVcCTu+wG2yl2x7N7Of+539fUNGwLU/K9vTXMh6gNtvQErtHyFNiCut/kT0CJAVPhex58Vk/8+gNnGbXhvtG+x3eWBJxst0xG1lf5vVwwSCHomUnoGdpCnbZPCHupvP3AEHXQWuYGNLQ0BBuGvVwghqjjWEhkEKaB/LsgYFV2iNA0zzmtZa6HRAZh2MsF/xQCY9rUYivFwkcIa5m8oJcLaOH3bJBChJdui4IMwuiIyCCkRE6qMasQKBZBmDzPKhhgYbeUmQtcBWHd9uOO2OM1vWrvUGYarGxnVdRjwHyhDbafwok7ygKfubeuqEI7Y1ZpEFUKqoRUCSkEfwQYALtKyHv0Xn99AAAAAElFTkSuQmCC") no-repeat 50% 50%;background-size:85%;}
  .NZ-TipsBar-Container .tipbar.error{background-color:rgba(255,204,188,.95);color:#f4511e;}
  .NZ-TipsBar-Container .tipbar.error .icon-state{width:24px;height:24px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG9AAABvQG676d5AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAORQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEmT/QAAAEt0Uk5TAAEDBQYLEBUYGxwyNTZAQkVGTVRVVldYWVpiY2Rpa3BydX+Bh4qPmZuio6SoqbCys7a6u76/wsPExcrNztLY293e4+bx8vX3+/3+EVs5KAAAAsdJREFUWMOtl2l76UAUgE8oUarUVlpqqa3XUtSulBRF/v//qZs5kwySmPPcO1+SzJk3yZx9AByGL5avNPqLzWbRb1TyMR+Qhvr0/qOfjJ/3J1WWvsmN9rrN2A9zNxK4klnpjmOVUa7xD5+66/h8cMVvP/Sr4+PWmb/7FlfuVuNWtVgo19vzgzj/fefEPwqaXzfTfsEqyZomWOTRXnuv1pJu1Hsu9iQmlvzVRpfKH1M8i9j/YbhnLnm7fIP5fc3FVNk1X1W62D+XDF0dLjjAZYf4mf65/mpeVzsHv/iHtqET+6P9di8gyR+3GhAE3H8IvK53BP/l/0/hdf3etCD6/1By/1+oySk3VwY3pUrywSBaM4Xxj/GbkeWP/sBulyw/5ND/FGkeAH0yZ8hG7CFC4CHMnkZGpLH81aXwACyy9n/V9sxEURIPCTbxfLztsPj3knjwaNyZfCwKmjQeoMZyiw9iTJgm8pBkkzHIsyjyE3lQWZ7MQ4UlfCoPMDemK9AwrmMyD21jvgF949oi81A3BH1YGNcqmYeyIVnAxrgWyTwUDNEGX1Ag81DEF7AtlMk8VHELTIl1Mg8tVCIzY5vMwxjNyBxpTuZhhY7EXPmgUnn/Dl0ZgylJ5CHNgwnDuUbkocnDGROK5qHx3rVZnTClJUg8RK2Uhkl1QuKhayVVntbDFD4ipHVeWHoEXpmJhYWXtqw0z6spljb+uA7K8qp2UlzN8j6Q5L3Ds/JuNhhyPJYEocGwWhwp/uWyxTGbLCl+Z9NkWW3e1f3XbNs8odEcuL5AHTo0mkKru866nGY0x1YXlDdTC72wg//O3JptUErWsWKS8FxsPto1xYeSfT8V3wqNbC0pZDl/urm2ZNu40x5DmugPh3m7Xi4Uq63xaifOayFnJQc61w9dnYCrne+n7vj0/urBM7V0xpepqwfPfz/6/ofDN+34/wtfWqtteombTwAAAABJRU5ErkJggg==") no-repeat 50% 50%;background-size:85%;}
  .NZ-TipsBar-Container .tipbar.info{background-color:rgba(178,235,242,.95);color:#00acc1;}
  .NZ-TipsBar-Container .tipbar.info .icon-state{width:24px;height:24px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG9AAABvQG676d5AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAL1QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAguN3MAAAAD50Uk5TAAECAwQJChATFBsiJigpKiswMTY5SExdYmZocHF3gIWLkZSdn6Gpqqyws7y9wMrNz9DU5OXm7O/09/r7/P576NJaAAABQUlEQVRYw+3X507DQBBGUadAeu+k917s9GQz7/9YoASDQzy7swMSCPn+zncU70qWbBiysuPNZpw12JVO8NapxN3HDnDtEGMCTXivyQRmNjBjAqYNmL8CRCpTYQNiWolozhODM9x1HiQ05tGegIdEL0rdF3fg2q5ImvtbF0C6tPzqva8Lkro+JdAGaW3VvgaKavJ98qgCjknZPrAAZYuABCgDobLkBiwKYOE3UQBSBRQY0YAReoR7GrDHjjEHxHIIUKcCdQToUIEOAgypwBAB5lRgjgArKrBSvYVVmR7gAR7w3wGLClju+waQa3xz7ypo7V0Ezf2DoL3/IjD2d0IaWKU/gAwPyPwcEH5hFTb+eHHnv40zgLzzvPIM4Nnx1SKeOM/Q/wT6rEMIre39OsQ7xtTytl+muBcRrE6220k1KPvNK+p25cd3vT+OAAAAAElFTkSuQmCC") no-repeat 50% 50%;background-size:85%;}
  .NZ-TipsBar-Container .tipbar .tipsbar-icon{position:absolute;top:50%;left:16px;display:inline-block;margin-top:-12px;color:#000;font-size:35px;line-height:24px;opacity:0;}
  .NZ-TipsBar-Container .tipbar .title{color:#505050;text-align:left!important;font-weight:600;opacity:0;}
  .NZ-TipsBar-Container .tipbar .con{overflow:hidden;max-width:300px;max-height:80px;text-align:left!important;text-overflow:ellipsis;font-weight:400;opacity:0;}
  .NZ-TipsBar-Container.locationT .tipbar .con{max-width:550px;max-height:100px;}
  .NZ-TipsBar-Container .tipbar .close{position:absolute;top:0;right:0;padding:0;width:25px;height:25px;outline:0;border:0;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAJPAAACTwBcGfW0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD3SURBVFiF1ZdtDoMgDEBfdi4PwAX8vLFn0qT7wxantojKupmQmCi8R4tSACpgjC2ICCUbEBa8ingjsU1AXRBeR8aLN64FiknswN8CYefBBDQ3whuFESy7WyQMeC0ipEI0A+0FeBvHUFN8xPaUhAH/iKoWsnXHGegy4J0yxialOfaHJAz4bhRzQzgDvdGnz4GbAonZbCQMuBm1K/kcFu8Mp1N2cFFpsxsMuJqqbIGExGl4loARajU1twskJLLhIsID7+tvUoDnIjTg5T9DPH9EBrz8rxjPzciAl9+O8SxI8CzJ8CxKFfh3ynK8Dyb8wNHM/XDqejx/AtNyPO87tNybAAAAAElFTkSuQmCC") no-repeat 50% 50%;background-size:8px;}
  .NZ-TipsBar-Container .processbar{position:absolute;bottom:0;left:0;z-index:1;width:100%;background:hsla(0,0%,100%,.2);}
  .NZ-TipsBar-Container .processbar>div{width:100%;height:2px;border-radius:0 0 3px 3px;background:rgba(0,0,0,.2);}
  .NZ-Toast-bg{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;}
  .NZ-Toast{position:fixed;top:50%;left:50%;z-index:99999;padding:22px 32px 19px;border-radius:.5em;background-color:rgba(10,10,10,.7);color:#efefef;text-align:center;font-size:1em;user-select:none;}
  .NZ-Toast.top{top:20px;}
  .NZ-Tooltips{position:absolute;top:0;left:0;padding:13px;max-width:400px;max-height:300px;border-radius:2px;background-color:#fff;box-shadow:0 1.5px 4px rgba(0,0,0,.24),0 1.5px 6px rgba(0,0,0,.12);color:#4e4e4e;font-size:14px;}
  .NZ-Tooltips .tip-arrow{position:absolute;top:100%;left:25%;overflow:hidden;width:50px;height:12.5px;transform:translateX(-50%);}
  .NZ-Tooltips .tip-arrow:after{position:absolute;top:0;left:50%;width:12px;height:12px;background:#fff;box-shadow:0 1px 7px rgba(0,0,0,.24),0 1px 7px rgba(0,0,0,.12);content:"";transform:translateX(-50%) translateY(-50%) rotate(45deg);}
  .NZ-Tooltips .tip-arrow.left{top:50%;left:-12.5px;width:12.5px;height:50px;transform:translateY(-50%);}
  .NZ-Tooltips .tip-arrow.left:after{position:absolute;top:50%;left:100%;content:"";}
  .NZ-Tooltips .tip-arrow.right{top:50%;right:-12.5px;left:auto;width:12.5px;height:50px;transform:translateY(-50%);}
  .NZ-Tooltips .tip-arrow.right:after{position:absolute;top:50%;left:0;content:"";}
  .NZ-Tooltips .tip-arrow.top{top:-12.5px;left:25%;transform:translateX(-50%);}
  .NZ-Tooltips .tip-arrow.top:after{position:absolute;top:100%;left:50%;content:"";}
  .NZ-Tooltips.lightyellow{border:2px solid #f1d031;background-color:#ffffa3;box-shadow:none;}
  .NZ-Tooltips.lightyellow .tip-arrow:after{border:2px solid #f1d031;background:#ffffa3;box-shadow:none;}
  .NZ-Tooltips.green{border:2px solid #90d93f;background-color:#caed9e;box-shadow:none;}
  .NZ-Tooltips.green .tip-arrow:after{border:2px solid #90d93f;background:#caed9e;box-shadow:none;}
  .NZ-Tooltips.blue{border:2px solid #add9ed;background-color:#e5f6fe;box-shadow:none;}
  .NZ-Tooltips.blue .tip-arrow:after{border:2px solid #add9ed;background:#e5f6fe;box-shadow:none;}
  .NZ-Tooltips.red{border:2px solid #d95252;background-color:#f78b83;box-shadow:none;}
  .NZ-Tooltips.red .tip-arrow:after{border:2px solid #d95252;background:#f78b83;box-shadow:none;}
  .NZ-Tooltips.dark{border:2px solid #303030;background-color:#505050;box-shadow:none;color:#efeeee;}
  .NZ-Tooltips.dark .tip-arrow:after{border:2px solid #303030;background:#505050;box-shadow:none;}
  .NZ-MsgBox--motion{-webkit-animation-duration:.25s;animation-duration:.25s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}
  .NZ-MsgBox-alert--open{-webkit-animation-name:anim-open;animation-name:anim-open;animation-timing-function:cubic-bezier(.49,.49,.13,1.3);}
  .NZ-MsgBox-alert--close{-webkit-animation-name:anim-close;animation-name:anim-close;animation-timing-function:cubic-bezier(.32,.37,.06,.87);}
  .NZ-MsgBox-bg--show{-webkit-animation-name:MsgBox-Bg-show;animation-name:MsgBox-Bg-show;animation-timing-function:linear;}
  .NZ-MsgBox-bg--hide{-webkit-animation-name:MsgBox-Bg-hide;animation-name:MsgBox-Bg-hide;animation-timing-function:linear;}
  .NZ-MsgBox--leap{animation:MsgBox-leap;animation-duration:.15s;animation-timing-function:linear;-webkit-animation:MsgBox-leap;-webkit-animation-duration:.15s;-webkit-animation-timing-function:linear;}
  .NZ-MsgBox--showicon{animation-name:MsgBox-showicon;animation-duration:.2s;animation-delay:.2s;animation-timing-function:cubic-bezier(1,.08,.59,1.76);}
  .NZ-TipsBar--motion{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}
  .NZ-TipsBar-show--right{animation-name:TipsBar-show--right;animation-timing-function:cubic-bezier(.17,.67,.19,1.06);}
  .NZ-TipsBar-hide--right{animation-name:TipsBar-hide--right;animation-timing-function:cubic-bezier(.05,.01,0,1);}
  .NZ-TipsBar-show--top{-webkit-animation-name:TipsBar-show--top;animation-name:TipsBar-show--top;animation-duration:.9s;animation-timing-function:cubic-bezier(.35,0,.25,1);}
  .NZ-TipsBar-hide--top,.NZ-TipsBar-show--top{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;}
  .NZ-TipsBar-hide--top{-webkit-animation-name:TipsBar-hide--top;animation-name:TipsBar-hide--top;animation-duration:.7s;animation-timing-function:cubic-bezier(.4,.45,.15,.91);}
  .NZ-TipsBar--process{animation-name:TipsBar-Process;animation-timing-function:linear;}
  .NZ-Motion--inlinecon{animation-name:NZ-Motion--inlinecon;animation-delay:.2s;}
  @-webkit-keyframes anim-open{0%{opacity:0;-webkit-transform:scale3d(.8,.8,1);}
  to{opacity:1;-webkit-transform:scaleX(1);}
  }
  @keyframes anim-open{0%{opacity:0;-webkit-transform:scale3d(.8,.8,1);transform:scale3d(.7,.7,1);}
  to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);}
  }
  @-webkit-keyframes anim-close{0%{opacity:1;}
  to{opacity:0;-webkit-transform:scale3d(1.25,1.25,1);}
  }
  @keyframes anim-close{0%{opacity:1;}
  to{opacity:0;-webkit-transform:scale3d(1.25,1.25,1);transform:scale3d(1.25,1.25,1);}
  }
  @keyframes MsgBox-Bg-show{0%{opacity:0;}
  to{opacity:1;}
  }
  @keyframes MsgBox-Bg-hide{0%{opacity:1;}
  to{opacity:0;}
  }
  @keyframes MsgBox-leap{0%{transform:scaleX(1);}
  to{transform:scale3d(1.03,1.03,1);}
  }
  @-webkit-keyframes MsgBox-leap{0%{-webkit-transform:scaleX(1);transform:scaleX(1);}
  to{-webkit-transform:scale3d(1.03,1.03,1);transform:scale3d(1.03,1.03,1);}
  }
  @keyframes MsgBox-showicon{0%{opacity:0;transform:scale3d(.3,.3,1);}
  to{opacity:1;transform:scaleX(1);}
  }
  @-webkit-keyframes MsgBox-showicon{0%{opacity:0;-webkit-transform:scale3d(.3,.3,1);transform:scale3d(.3,.3,1);}
  to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1);}
  }
  @keyframes TipsBar-show--right{0%{opacity:0;transform:translateX(300px);}
  to{opacity:1;transform:translateX(0);}
  }
  @-webkit-keyframes TipsBar-show--right{0%{opacity:0;-webkit-transform:translateX(300px);transform:translateX(300px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  }
  @keyframes TipsBar-hide--right{0%{opacity:1;transform:translateX(0);}
  to{opacity:0;transform:translateX(300px);}
  }
  @-webkit-keyframes TipsBar-hide--right{0%{opacity:0;-webkit-transform:translateX(0);transform:translateX(0);}
  to{opacity:1;-webkit-transform:translateX(300px);transform:translateX(300px);}
  }
  @-webkit-keyframes TipsBar-show--top{0%{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);}
  0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
  40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);}
  60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);}
  80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg);}
  to{-webkit-transform:perspective(400px);transform:perspective(400px);}
  }
  @keyframes TipsBar-show--top{0%{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);}
  0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
  40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);}
  60%{opacity:1;-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);}
  80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg);}
  to{-webkit-transform:perspective(400px);transform:perspective(400px);}
  }
  @-webkit-keyframes TipsBar-hide--top{0%{-webkit-transform:perspective(400px);transform:perspective(400px);}
  30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);}
  to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);}
  }
  @keyframes TipsBar-hide--top{0%{-webkit-transform:perspective(400px);transform:perspective(400px);}
  30%{opacity:1;-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);}
  to{opacity:0;-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);}
  }
  @keyframes TipsBar-Process{0%{width:100%;}
  to{width:0;}
  }
  @-webkit-keyframes TipsBar-Process{0%{width:100%;}
  to{width:0;}
  }
  @-webkit-keyframes NZ-Motion--inlinecon{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  }
  @keyframes NZ-Motion--inlinecon{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
  }
  @-webkit-keyframes NZ-Motion--fadeInTop{0%{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  }
  @keyframes NZ-Motion--fadeInTop{0%{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
  to{opacity:1;transform:translateX(0);-ms-transform:translateX(0);}
  }
  .NZ-Motion--fadeInTop{-webkit-animation-name:NZ-Motion--fadeInTop;animation-name:NZ-Motion--fadeInTop;animation-timing-function:cubic-bezier(.49,.49,.13,1.3);}
  @-webkit-keyframes NZ-Motion--fadeOutTop{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
  to{opacity:0;-webkit-transform:translateY(-30px);transform:translateY(-30px);}
  }
  @keyframes NZ-Motion--fadeOutTop{0%{opacity:1;transform:translateY(0);-ms-transform:translateY(0);}
  to{opacity:0;transform:translateY(-30px);-ms-transform:translateY(-30px);}
  }
  .NZ-Motion--fadeOutTop{-webkit-animation-name:NZ-Motion--fadeOutTop;animation-name:NZ-Motion--fadeOutTop;animation-timing-function:cubic-bezier(.32,.37,.06,.87);}
  @-webkit-keyframes NZ-Motion--fadeInDown{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
  to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
  }
  @keyframes NZ-Motion--fadeInDown{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
  to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
  }
  .NZ-Motion--fadeInDown{-webkit-animation-name:NZ-Motion--fadeInDown;animation-name:NZ-Motion--fadeInDown;}
  @-webkit-keyframes NZ-Motion--fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);}
  to{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);}
  }
  @keyframes NZ-Motion--fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);-ms-transform:translateY(0);}
  to{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px);-ms-transform:translateY(20px);}
  }
  .NZ-Motion--fadeOutDown{-webkit-animation-name:NZ-Motion--fadeOutDown;animation-name:NZ-Motion--fadeOutDown;}
  @-webkit-keyframes NZ-Motion--fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  }
  @keyframes NZ-Motion--fadeInLeft{0%{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);-ms-transform:translateX(-30px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
  }
  .NZ-Motion--fadeInLeft{-webkit-animation-name:NZ-Motion--fadeInLeft;animation-name:NZ-Motion--fadeInLeft;}
  @-webkit-keyframes NZ-Motion--fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  to{opacity:0;-webkit-transform:translateX(-30px);transform:translateX(-30px);}
  }
  @keyframes NZ-Motion--fadeOutLeft{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
  to{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px);-ms-transform:translateX(-20px);}
  }
  .NZ-Motion--fadeOutLeft{-webkit-animation-name:NZ-Motion--fadeOutLeft;animation-name:NZ-Motion--fadeOutLeft;}
  @-webkit-keyframes NZ-Motion--fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  }
  @keyframes NZ-Motion--fadeInRight{0%{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
  to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
  }
  .NZ-Motion--fadeInRight{-webkit-animation-name:NZ-Motion--fadeInRight;animation-name:NZ-Motion--fadeInRight;}
  @-webkit-keyframes NZ-Motion--fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);}
  to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);}
  }
  @keyframes NZ-Motion--fadeOutRight{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0);-ms-transform:translateX(0);}
  to{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px);-ms-transform:translateX(20px);}
  }
  .NZ-Motion--fadeOutRight{-webkit-animation-name:NZ-Motion--fadeOutRight;animation-name:NZ-Motion--fadeOutRight;}

  /* 自己定义的css start */
  .NZ-MsgBox-alert{top:0!important;right:0;bottom:0;left:0!important;display:inline-grid;margin:auto;width:80vw;height:82vh;max-height:520px;align-content:space-between;}
  .NZ-MsgBox-alert .distop{display:none;}
  .NZ-MsgBox-alert .msgcontainer.typenone{margin:20px 10px 0 10px;padding:0;}
  .NZ-TipsBar-Container .tipbar .close{opacity:.6;cursor:pointer;}
  .NZ-Toast{padding:22px 32px 19px 32px;}
  .NZ-Tooltips{max-width:300px;max-height:200px;}
  .NZ-TipsBar-show--top{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;}
  .NZ-MsgBox-alert .operatebar button.beright{border-bottom-left-radius:0;}
  /* 自己定义的css end */
  `;
  let cssResourceNode = $(`<style>${cssResource}</style>`);
  cssResourceNode.attr("type", "text/css");
  cssResourceNode.attr("data-insert-from", "viewer");

  if (document.head) {
    $(document.head).append(cssResourceNode);
  } else if (document.documentElement) {
    if (document.documentElement.childNodes.length === 0) {
      $(document.documentElement).append(cssResourceNode);
    } else {
      $(document.documentElement).before(cssResourceNode);
    }
  } else {
    throw new Error("未找到可以插入到页面中的元素");
  }
})(typeof jQuery === "undefined" ? $ : jQuery);
