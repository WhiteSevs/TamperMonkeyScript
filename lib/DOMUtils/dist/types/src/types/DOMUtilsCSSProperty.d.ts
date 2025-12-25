/**
 * 属性转驼峰
 */
export type DOMUtilsCamelToKebabCSSProperty<S extends string> = S extends `webkit${infer U}`
  ? `-${Lowercase<"webkit">}${U extends `${infer First}${infer Rest}`
      ? First extends Uppercase<First>
        ? `-${Uncapitalize<First>}${DOMUtilsCamelToKebabCSSProperty<Rest>}`
        : `${First}${DOMUtilsCamelToKebabCSSProperty<Rest>}`
      : U}`
  : S extends `${infer T}${infer U}`
    ? U extends Uncapitalize<U>
      ? `${Uncapitalize<T>}${DOMUtilsCamelToKebabCSSProperty<U>}`
      : `${Uncapitalize<T>}-${DOMUtilsCamelToKebabCSSProperty<U>}`
    : S;

export type DOMUtilsCSSPropertyType = DOMUtilsCamelToKebabCSSProperty<
  Extract<
    keyof Omit<
      CSSStyleDeclaration,
      | "cssFloat"
      | "cssText"
      | "length"
      | "parentRule"
      | "getPropertyPriority"
      | "getPropertyValue"
      | "item"
      | "removeProperty"
      | "setProperty"
    >,
    string
  >
>;

export type DOMUtilsCSSProperty = {
  [P in DOMUtilsCSSPropertyType]: string | number;
};
