const GM_addElement = function () {
  if (arguments.length === 0) {
    /* 空参数，不做任何处理 */
    return;
  }
  /* 被添加的元素的父元素节点，默认为<head>标签 */
  let parentElement = document.head;
  /* 需要被添加的元素tagName */
  let needAppendElementTagName = "";
  /* 需要被添加的元素的属性信息 */
  let needAppendElementAttributeDetails = {};
  if (typeof arguments[0] === "string") {
    /* 第一个参数为字符串，判定为元素tag */
    needAppendElementTagName = arguments[0].trim();
    /* 如果参数有2个，且第二个参数为Object类型，判断为元素属性信息 */
    if (arguments.length === 2 && typeof arguments[1] === "object") {
      needAppendElementAttributeDetails = arguments[1];
    }
  } else if (arguments[0] instanceof Element) {
    /* 第一个参数是元素，判定为添加的父元素*/
    parentElement = arguments[0];
    if (typeof arguments[1] === "string") {
      /* 如果参数有2个，且第二个参数为string类型，判断为元素tag */
      needAppendElementTagName = arguments[1];
    }
    if (typeof arguments[2] === "object") {
      /* 如果参数有3个，且第三个参数为Object类型，判断为元素属性信息 */
      needAppendElementAttributeDetails = arguments[2];
    }
  } else {
    /* 不做处理 */
    return;
  }

  let needAppendElement = document.createElement(needAppendElementTagName);
  /* 遍历属性信息，为需要被添加的元素进行设置 */
  Object.keys(needAppendElementAttributeDetails).forEach((attributeName) => {
    let attributeValue = needAppendElementAttributeDetails[attributeName];
    if (attributeName in needAppendElement) {
      /* 该属性名在该元素对象上存在 */
      needAppendElement[attributeName] = attributeValue;
    } else {
      /* 该属性名不在该元素对象上，使用setAttribute进行设置 */
      needAppendElement.setAttribute(attributeName, attributeValue);
    }
  });
  /* 添加元素 */
  parentElement.appendChild(needAppendElement);
  /* 返回添加元素 */
  return needAppendElement;
};
