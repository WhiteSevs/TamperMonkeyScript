# -*- coding: utf-8 -*-
import os
import re
import httpx

import winreg


def get_ie_proxy():
    try:
        # 打开注册表
        reg = winreg.ConnectRegistry(None, winreg.HKEY_CURRENT_USER)
        key = winreg.OpenKey(
            reg, r"Software\Microsoft\Windows\CurrentVersion\Internet Settings")

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
    for libraryId in libraryIdList:
        httpx_proxy = None
        if ie_proxy:
            httpx_proxy = {
                'http://': f'http://{ie_proxy}',  # 代理1
                'https://': f"http://{ie_proxy}",  # 代理2
            }
        response = httpx.get(
            f"https://greasyfork.org/zh-CN/scripts/{libraryId}.json", proxies=httpx_proxy)
        respJson = response.json()
        code_url = respJson["code_url"]
        url = re.sub(r'\?version=.+', '', code_url)
        version = re.compile(r'\?version=([\d]+)').search(code_url)
        version = version[0].replace("?version=", "")
        result.append({
            "name": respJson["name"],
            "url": url,
            "version": version
        })
    return result

# 调用函数获取IE代理
ie_proxy = get_ie_proxy()
if ie_proxy:
    print("IE代理：", ie_proxy)
else:
    print("IE代理未启用")

directory = "./"

libraryList = handleLibraryData([
    "449471",
    "449512",
    "449562",
    "452322",
    "455186",
    "456470",
    "456485",
    "456607",
    "462234",
    "465550",
    "465772"
])

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".js"):
            file_path = os.path.join(root, file)
            content = ""
            replaced_content = ""
            with open(file=file_path, mode="r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            replaced_content = content
            for library in libraryList:
                pattern = f"""{library["url"]}(\?version=[\d]+|)"""
                replacement = f"""{library["url"]}?version={library["version"]}"""
                patternMatch = re.findall(
                    pattern, content)
                if len(patternMatch):
                    replaced_content = re.sub(
                        pattern, replacement, replaced_content)
                    findData = [item for item in patternMatch if item != '']
                    oldVersion = ""
                    if len(findData):
                        oldVersionMatch = re.compile(
                            r'version=([\d]+)').search(findData[0])
                        if oldVersion is not None:
                            oldVersion = oldVersionMatch[0].replace(
                                "version=", "")
                    if oldVersion != library["version"]:
                        print(
                            f"""{library["name"]} {len(patternMatch)}处 版本: {oldVersion} => {library["version"]}""")
            if content != replaced_content:
                with open(file=file_path, mode="w", encoding="utf-8", errors="ignore") as f:
                    f.write(replaced_content)
                file_path = re.sub(r'\.\/.+\\', '', file_path)
                print("当前文件: "+file_path)
                print("")
                print("")
