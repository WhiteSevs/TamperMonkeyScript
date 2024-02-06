# -*- coding: utf-8 -*-
import os
import re
import httpx
import winreg
import datetime


class ScriptInfo:
    def __init__(self, id: str, name: str, version: str, code_url: str) -> None:
        self.id = id
        self.name = name
        self.version = version
        self.code_url = code_url


class ScriptNetWork:
    ie_proxy: str | None
    "IE代理"

    def __init__(self) -> None:
        self.ie_proxy = self.get_ie_proxy()

    def get_ie_proxy(self):
        "获取本机代理"
        try:
            # 打开注册表
            reg = winreg.ConnectRegistry(None, winreg.HKEY_CURRENT_USER)
            key = winreg.OpenKey(
                reg, r"Software\Microsoft\Windows\CurrentVersion\Internet Settings"
            )
            # 获取代理设置
            proxy_enabled, _ = winreg.QueryValueEx(key, "ProxyEnable")
            proxy_server, _ = winreg.QueryValueEx(key, "ProxyServer")
            # 判断代理是否启用
            if proxy_enabled == 1:
                return proxy_server
            else:
                return None

        except Exception as e:
            print("获取IE代理失败：", e)
            return None

    def get_script_info(self, script_id) -> ScriptInfo:
        "获取脚本信息"
        httpx_proxy = None
        if self.ie_proxy:
            httpx_proxy = {
                "http://": f"http://{self.ie_proxy}",  # http代理
                "https://": f"http://{self.ie_proxy}",  # https代理
            }
        response = httpx.get(
            f"https://greasyfork.org/zh-CN/scripts/{script_id}.json",
            proxies=httpx_proxy,  # type: ignore
        )
        respJson = response.json()
        code_url = respJson["code_url"]
        version = re.compile(rf"\/{script_id}\/([\d]+)\/").search(code_url)
        if version:
            version = version[1]
        version = str(version)
        return ScriptInfo(
            id=script_id,
            name=respJson["name"],
            version=version,
            code_url=respJson["code_url"],
        )

    def handle_more_library(self, libraryIdList: list[str]) -> list[ScriptInfo]:
        "处理更多库"
        result = []
        for libraryId in libraryIdList:
            try:
                script_info = self.get_script_info(libraryId)
                result.append(script_info)
            except Exception as e:
                print(e)
        return result


class ScriptFile:
    "脚本文件处理"

    notUpdateFileNameList = ["蛋仔乐消除", "ImmortalWrt-passwall优化", "问卷星随机答案"]
    "不更新的js文件名"

    # 不建议将库设置为自动同步，因为代码无更新的时候，它也会自动更新版本id
    def __init__(self) -> None:
        pass

    def check_is_update_file(self, fileName: str) -> bool:
        "检查是否更新文件（排除掉黑名单文件）"
        isUpdate = True
        for notUpdateFileName in self.notUpdateFileNameList:
            if notUpdateFileName.strip() in fileName.strip():
                isUpdate = False
                break
        return isUpdate

    def get_new_script_version_meta(self, format_str: str = "%#Y.%#m.%#d.%#H") -> str:
        "获取脚本的@version版本号，默认是年.月.日.时"
        return self.get_current_time(format_str)

    def get_current_time(self, format_str: str) -> str:
        "获取格式化的当前最新的时间"
        current_time = datetime.datetime.now()
        formatted_time = current_time.strftime(format_str)
        return formatted_time

    def handle_file_content(
        self,
        scriptInfoList: list[ScriptInfo],
        file_path: str,
        file_name: str,
        update_meta_version: bool = True,
    ):
        "处理单个文件内容替换"
        # 文件内容
        content = ""
        # 替换的内容
        replaced_content = ""
        with open(file=file_path, mode="r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            replaced_content = content
        flag = False
        for scriptInfo in scriptInfoList:
            pattern = rf"""https://update.greasyfork.org/scripts/{scriptInfo.id}/[\d]+/{scriptInfo.name}.js"""
            replacement = scriptInfo.code_url
            patternMatch = re.findall(pattern, content)
            if len(patternMatch):
                replaced_content = re.sub(pattern, replacement, replaced_content)
                findData = [item for item in patternMatch if item != ""]
                oldVersion = ""
                if len(findData):
                    oldVersionMatch = re.compile(
                        rf"update.greasyfork.org/scripts/{scriptInfo.id}/([\d]+)/"
                    ).search(findData[0])
                    if oldVersionMatch:
                        oldVersion = oldVersionMatch[1]
                if oldVersion != scriptInfo.version and int(oldVersion) < int(
                    scriptInfo.version
                ):
                    flag = True
                    print(
                        f"""库【{scriptInfo.name}】 {len(patternMatch)}处 版本: {oldVersion} => {scriptInfo.version}"""
                    )

                    versionPattern = r"""// @version([\s]+)(.+)"""
                    versionPatternMatch = re.findall(versionPattern, replaced_content)
                    if update_meta_version and len(versionPatternMatch):
                        spaceStr = versionPatternMatch[0][0]
                        oldVersionStr = versionPatternMatch[0][1]

                        oldVersionStrSplit = oldVersionStr.split(".")

                        newVersionStr = ""
                        newVersionStr_3 = self.get_new_script_version_meta(
                            "%#Y.%#m.%#d"
                        )
                        newVersionStr_4 = self.get_new_script_version_meta(
                            "%#Y.%#m.%#d.%#H"
                        )
                        newVersionStr_5 = self.get_new_script_version_meta(
                            "%#Y.%#m.%#d.%#H.%#M"
                        )
                        if len(oldVersionStrSplit) == 3:
                            # 年 月 日
                            if oldVersionStr == newVersionStr_3:
                                newVersionStr = newVersionStr_4
                            else:
                                newVersionStr = newVersionStr_3
                        elif len(oldVersionStrSplit) == 4:
                            # 年 月 日 时
                            if oldVersionStr != newVersionStr_4:
                                newVersionStr = newVersionStr_4
                        elif len(oldVersionStrSplit) == 5:
                            # 年 月 日 时 分
                            if oldVersionStr != newVersionStr_5:
                                newVersionStr = newVersionStr_5
                        else:
                            pass
                        if newVersionStr != "":
                            oldVersionMetaStr = (
                                f"""// @version{spaceStr}{oldVersionStr}"""
                            )
                            newVersionMetaStr = (
                                f"""// @version{spaceStr}{newVersionStr_4}"""
                            )

                            replaced_content = re.sub(
                                oldVersionMetaStr,
                                newVersionMetaStr,
                                replaced_content,
                            )
                            print(
                                f"""{len(versionPatternMatch)}处 meta信息@version：{oldVersionStr} => {newVersionStr}"""
                            )

        if content != replaced_content and flag:
            with open(file=file_path, mode="w", encoding="utf-8", errors="ignore") as f:
                f.write(replaced_content)
            print("当前文件: " + file_name)
            print("")
            print("")

    def traverse_user_js(
        self,
        path: str,
        scriptInfoList: list[ScriptInfo],
        update_meta_version: bool = True,
    ):
        "遍历路径下所有的.user.js文件"
        for root, dirs, files in os.walk(path):
            for file in files:
                """ 判断是否是.user.js结尾的js文件 """
                if not file.endswith(".user.js"):
                    continue
                file_path = os.path.join(root, file)
                fileName = re.sub(r"\.\/.+\\", "", file_path)
                fileName = re.sub(r"\.\/", "", fileName)
                fileName = re.sub(r"\.js$", "", fileName)
                """ 判断是否文件名是否满足条件 """
                if not self.check_is_update_file(fileName):
                    continue
                self.handle_file_content(
                    scriptInfoList=scriptInfoList,
                    file_path=file_path,
                    file_name=fileName,
                    update_meta_version=update_meta_version,
                )


if __name__ == "__main__":
    scriptNetWork = ScriptNetWork()
    libraryList = scriptNetWork.handle_more_library(
        [
            "449471",  # Viewer
            "449512",  # Xtiper
            "449562",  # NZMsgBox
            "452322",  # js-watermark
            "455186",  # WhiteSevsUtils
            "456470",  # 网盘链接识别-图标库
            "456485",  # pops
            "456607",  # GM_html2canvas
            "462234",  # Message|Qmsg
            "465550",  # JS-分页插件
            "465772",  # DOMUtils
            "482990",  # elementPlusIconSVG
            "483694",  # Eruda-2
            "483695",  # vConsole-2
            "483696",  # PageSpy-2
            "483765",  # Leaflet
            "486152",  # Crypto-JS
        ]
    )
    if len(libraryList):
        scriptFile = ScriptFile()
        scriptFile.traverse_user_js(
            path="./", scriptInfoList=libraryList, update_meta_version=True
        )
