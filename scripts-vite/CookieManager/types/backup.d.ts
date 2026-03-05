/**
 * Cookie备份类型
 */
declare type CookieFormatType = "header_string" | "json";
/**
 * Cookie导入类型
 */
declare type CookieImportType = "import_from_text" | "import_from_file";
/**
 * Cookie导出的类型
 */
declare type CookieExportObject = {
  api: CookieManagerApiName;
  data: (CookieStoreData | GMCookieInstance)[];
};
