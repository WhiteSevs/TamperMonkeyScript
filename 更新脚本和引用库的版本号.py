# -*- coding: utf-8 -*-
from git.repo import Repo
import os
import re
import httpx
import winreg
import datetime
import urllib.parse


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
        version = re.compile(rf"/{script_id}/([\d]+)/").search(code_url)
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

    notUpdateFileNameList = [
        "蛋仔乐消除",
        "ImmortalWrt-passwall优化",
        "问卷星随机答案",
        "MT论坛",
    ]
    repo_path = os.path.dirname(os.path.realpath(__file__))
    repo = Repo(repo_path)
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

    def get_tomorrow_zero_time(self):
        "获取明天的0点时间"
        return datetime.datetime.now().replace(
            hour=0, minute=0, second=0, microsecond=0
        ) + datetime.timedelta(days=1)

    def get_need_git_commit(self, file_path) -> bool:
        """获取是否在git中需要commit，如果是，那么需要进行更新版本号"""
        # 确保文件路径是相对于仓库根目录的
        relative_file_path = os.path.relpath(file_path, self.repo_path)
        # 检查文件是否被修改但还未添加到暂存区
        if self.repo.is_dirty(path=relative_file_path):
            return True
        # 检查文件是否已经在暂存区但还未提交
        for diff_obj in self.repo.index.diff(None):
            if relative_file_path == diff_obj.a_path:
                # 文件在暂存区但不在HEAD中（新增的文件）
                return True
            elif relative_file_path == diff_obj.b_path and diff_obj.new_file:
                # 文件是重命名或复制操作中的新文件
                return True
        return False

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
        # 用于判断是否进行更新内容
        flag = False
        for scriptInfo in scriptInfoList:
            encode_script_name = urllib.parse.quote(scriptInfo.name)
            pattern = rf"""https://update.greasyfork.org/scripts/{scriptInfo.id}/[\d]+/{encode_script_name}.js"""
            replacement = scriptInfo.code_url
            patternMatch = re.findall(pattern, content)
            if len(patternMatch):
                replaced_content = re.sub(pattern, replacement, replaced_content)
                find_data = [item for item in patternMatch if item != ""]
                old_library_script_version = ""
                if len(find_data):
                    old_library_script_version_match = re.compile(
                        rf"update.greasyfork.org/scripts/{scriptInfo.id}/([\d]+)/"
                    ).search(find_data[0])
                    if old_library_script_version_match:
                        old_library_script_version = old_library_script_version_match[1]
                if old_library_script_version != scriptInfo.version and int(
                    old_library_script_version
                ) < int(scriptInfo.version):
                    flag = True
                    print(
                        f"""库【{scriptInfo.name}】 {len(patternMatch)}处 版本: {old_library_script_version} => {scriptInfo.version}"""
                    )
        if not flag:
            flag = self.get_need_git_commit(file_path)
        if flag:
            version_pattern = r"""// @version([\s]+)(.+)"""
            version_pattern_match = re.findall(version_pattern, replaced_content)
            if update_meta_version and len(version_pattern_match):
                # 参数是更新且能找到@version的meta块
                space_str = version_pattern_match[0][0]
                old_version: str = version_pattern_match[0][1]
                old_version = old_version.strip()
                new_version = self.get_new_version(old_version)
                if new_version is not None:
                    old_version_meta = f"""// @version{space_str}{old_version}"""
                    new_version_meta = f"""// @version{space_str}{new_version}"""
                    replaced_content = re.sub(
                        old_version_meta,
                        new_version_meta,
                        replaced_content,
                    )
                    print(
                        f"""{len(version_pattern_match)}处 meta信息@version：{old_version} => {new_version}"""
                    )

        if content != replaced_content and flag:
            with open(file=file_path, mode="w", encoding="utf-8", errors="ignore") as f:
                f.write(replaced_content)
            print("当前文件: " + file_name)
            print("")
            print("")

    def convert_version_to_time(self, version):
        "版本号转换成时间"
        version_parts = version.split(".")
        time_parts = []
        for i, part in enumerate(version_parts):
            if i == 0:
                time_parts.append(int(part))
            else:
                time_parts.append(int(part) if part else 0)

        return datetime.datetime(*time_parts)

    def get_new_version(self, version: str) -> str | None:
        "获取新的版本号"
        compare_time = {
            "day": {
                "version": self.get_new_script_version_meta("%#Y.%#m.%#d"),
                "time": datetime.datetime.strptime(
                    self.get_current_time("%Y-%m-%d 00:00:00"), "%Y-%m-%d %H:%M:%S"
                ),
            },
            "tomorrow": {
                "version": self.get_tomorrow_zero_time().strftime("%#Y.%#m.%#d"),
                "time": self.get_tomorrow_zero_time(),
            },
            "hour": {
                "version": self.get_new_script_version_meta("%#Y.%#m.%#d.%#H"),
                "time": datetime.datetime.strptime(
                    self.get_current_time("%Y-%m-%d %H:00:00"), "%Y-%m-%d %H:%M:%S"
                ),
            },
            "nextHour": {
                "time": datetime.datetime.now() + datetime.timedelta(hours=1),
            },
            "minute": {
                "version": self.get_new_script_version_meta("%#Y.%#m.%#d.%#H.%#M"),
                "time": datetime.datetime.strptime(
                    self.get_current_time("%Y-%m-%d %H:%M:00"), "%Y-%m-%d %H:%M:%S"
                ),
            },
            "nextMinute": {
                "time": datetime.datetime.now() + datetime.timedelta(minutes=1),
            },
        }
        version_split_length = version.split(".")
        new_version = None
        try:
            version_info = {
                "version": version,
                "time": self.convert_version_to_time(version),
            }
        except Exception:
            print("不规范的版本号: " + version)
            return compare_time["day"]["version"]
        # 例如当前版本号是2023.3.1 转换为时间就是2023-3-1 00:00:00
        # day的时间是2023-3-2 00:00:00
        # tomorrow的时间是2023-3-3 00:00:00
        if (
            version_info["time"] < compare_time["day"]["time"]
            or version_info["time"] > compare_time["tomorrow"]["time"]
        ):
            """ 版本号是今天之前或者今天之后，直接改为今天的三位版本号 """
            new_version = compare_time["day"]["version"]
        else:
            """ 今天 """
            """ 当前的小时之前，通通变成四位 """
            #      2023.3.1.12 √
            #      2023.3.1.14 ×
            # hour 2023.3.1.14
            if version_info["time"] < compare_time["hour"]["time"]:
                new_version = compare_time["hour"]["version"]
            #        2023.3.1.14
            # hour   2023.3.1.14
            # 同一小时，但是在分钟之前
            elif (
                version_info["time"].hour == compare_time["hour"]["time"].hour
                and version_info["time"] < compare_time["minute"]["time"]
            ):
                new_version = compare_time["minute"]["version"]
        return new_version

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


def check_file_for_commit(repo_path, file_path):
    # 初始化 Git 仓库对象
    repo = Repo(repo_path)

    # 确保文件路径是相对于仓库根目录的
    relative_file_path = os.path.relpath(file_path, repo_path)
    # 检查文件是否被修改但还未添加到暂存区
    if repo.is_dirty(path=relative_file_path):
        return True
    # 检查文件是否已经在暂存区但还未提交
    for diff_obj in repo.index.diff(None):
        if relative_file_path == diff_obj.a_path:
            # 文件在暂存区但不在HEAD中（新增的文件）
            return True
        elif relative_file_path == diff_obj.b_path and diff_obj.new_file:
            # 文件是重命名或复制操作中的新文件
            return True
    return False


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
            "488179",  # showdown
        ]
    )
    if len(libraryList):
        scriptFile = ScriptFile()
        scriptFile.traverse_user_js(
            path="./", scriptInfoList=libraryList, update_meta_version=True
        )
