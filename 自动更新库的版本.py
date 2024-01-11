# -*- coding: utf-8 -*-
import os
import re
import httpx
import winreg

# 不更新的js文件名
notUpdateFileNameList = ["蛋仔乐消除", "ImmortalWrt-passwall优化", "问卷星随机答案"]

# 不建议将库设置为自动同步，因为代码无更新的时候，它也会自动更新版本id


def get_ie_proxy():
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


def handleLibraryData(libraryIdList):
    result = []
    # 调用函数获取IE代理
    ie_proxy = get_ie_proxy()
    if ie_proxy:
        print("IE代理：", ie_proxy)
    else:
        print("IE代理未启用")
    for libraryId in libraryIdList:
        httpx_proxy = None
        if ie_proxy:
            httpx_proxy = {
                "http://": f"http://{ie_proxy}",  # 代理1
                "https://": f"http://{ie_proxy}",  # 代理2
            }
        response = httpx.get(
            f"https://greasyfork.org/zh-CN/scripts/{libraryId}.json",
            proxies=httpx_proxy,  # type: ignore
        )
        respJson = response.json()
        code_url = respJson["code_url"]
        version = re.compile(rf"\/{libraryId}\/([\d]+)\/").search(code_url)
        if version:
            version = version[1]
        result.append(
            {
                "id": libraryId,
                "name": respJson["name"],
                "version": version,
                "code_url": respJson["code_url"],
            }
        )
    return result


""" 检测文件名是否是可以更新的文件 """


def checkIsUpdateFile(fileName):
    isUpdate = True
    for notUpdateFileName in notUpdateFileNameList:
        if notUpdateFileName.strip() in fileName.strip():
            isUpdate = False
            break
    return isUpdate


def replaceContent(path, dataList):
    for root, dirs, files in os.walk(path):
        for file in files:
            if file.endswith(".js"):
                file_path = os.path.join(root, file)
                fileName = re.sub(r"\.\/.+\\", "", file_path)
                fileName = re.sub(r"\.\/", "", fileName)
                fileName = re.sub(r"\.js$", "", fileName)
                if not checkIsUpdateFile(fileName):
                    continue
                content = ""
                replaced_content = ""
                with open(
                    file=file_path, mode="r", encoding="utf-8", errors="ignore"
                ) as f:
                    content = f.read()
                replaced_content = content
                flag = False
                for library in dataList:
                    pattern = rf"""https://update.greasyfork.org/scripts/{library["id"]}/[\d]+/{library["name"]}.js"""
                    replacement = library["code_url"]
                    patternMatch = re.findall(pattern, content)
                    if len(patternMatch):
                        replaced_content = re.sub(
                            pattern, replacement, replaced_content
                        )
                        findData = [item for item in patternMatch if item != ""]
                        oldVersion = ""
                        if len(findData):
                            oldVersionMatch = re.compile(
                                rf'update.greasyfork.org/scripts/{library["id"]}/([\d]+)/'
                            ).search(findData[0])
                            if oldVersionMatch:
                                oldVersion = oldVersionMatch[1]
                        if oldVersion != library["version"] and int(oldVersion) < int(
                            library["version"]
                        ):
                            flag = True
                            print(
                                f"""{library["name"]} {len(patternMatch)}处 版本: {oldVersion} => {library["version"]}"""
                            )
                if content != replaced_content and flag:
                    with open(
                        file=file_path, mode="w", encoding="utf-8", errors="ignore"
                    ) as f:
                        f.write(replaced_content)
                    print("当前文件: " + fileName)
                    print("")
                    print("")


if __name__ == "__main__":
    libraryList = handleLibraryData(
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
        ]
    )
    replaceContent("./", libraryList)
