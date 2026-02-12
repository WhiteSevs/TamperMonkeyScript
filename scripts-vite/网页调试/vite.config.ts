import fs from "fs";
import { defineConfig } from "vite";
import { GenerateUserConfig } from "./../../script-components/components/vite.config.base";
import { GetLib, ViteUtils } from "./../../vite.utils";

/**
 * 更新README.md的版本信息
 */
const updateREADMEInfo = (name: "erdua" | "VConsole" | "PageSpy", replace: string) => {
  const filePath = Utils.getAbsolutePath("./README.md");
  const README_Text = fs.readFileSync(filePath, { encoding: "utf-8" });
  const README_Text_Split = README_Text.split("\n");
  let flag = false;
  for (let index = 0; index < README_Text_Split.length; index++) {
    const text = README_Text_Split[index].trim().toLowerCase();
    if (text.startsWith("## " + name.toLowerCase())) {
      flag = true;
      continue;
    }
    if (flag) {
      if (text.startsWith("- 当前版本：")) {
        const newText = `- 当前版本：\`${replace}\``;
        README_Text_Split[index] = newText;
        console.log(`更新README.md`);
        console.log("原内容：" + README_Text_Split[index]);
        console.log("新内容：" + newText);
        break;
      }
    }
  }
  fs.writeFileSync(filePath, README_Text_Split.join("\n"), {
    encoding: "utf-8",
  });
};
/**
 * @link file:///./src/setting/panel-setting-config.ts
 * @link file:///./src/main/version.json
 */
const getResource = () => {
  const resourceMap = {};
  const eruda_DynamicQueryResourceVersion = [
    {
      npm: "eruda-monitor",
      resourceName: "Resource_erudaMonitor",
    },
    {
      npm: "eruda-features",
      resourceName: "Resource_erudaFeatures",
    },
    {
      npm: "eruda-timing",
      resourceName: "Resource_erudaTiming",
    },
    {
      npm: "eruda-code",
      resourceName: "Resource_erudaCode",
    },
    {
      npm: "eruda-benchmark",
      resourceName: "Resource_erudaBenchmark",
    },
    {
      npm: "eruda-orientation",
      resourceName: "Resource_erudaOrientation",
    },
    {
      npm: "eruda-vue",
      resourceName: "Resource_erudaVue",
    },
    {
      npm: "eruda-touches",
      resourceName: "Resource_erudaTouches",
    },
    {
      npm: "eruda-outline-plugin",
      resourceName: "Resource_erudaOutlinePlugin",
    },
    {
      npm: "eruda-pixel",
      resourceName: "Resource_erudaPixel",
    },
  ];

  const vConsole_DynamicQueryResourceVersion = [
    {
      npm: "vue-vconsole-devtools",
      resourceName: "Resource_vConsoleVueDevtools",
    },
  ];
  // 插件版本json路径
  const versionJSONFilePath = Utils.getAbsolutePath("./src/main/version.json");
  // 读取版本json
  const versionJSON = JSON.parse(
    fs.readFileSync(versionJSONFilePath, {
      encoding: "utf-8",
    })
  ) as ToolVersionInfo;
  // 获取并更新eruda及插件版本
  let erudaVersion = Utils.getNpmLibVersion("eruda");
  if (versionJSON["eruda"].version != erudaVersion) {
    console.log(`更新Eruda版本 ${versionJSON["eruda"].version} ==> ${erudaVersion}`);
    updateREADMEInfo("erdua", erudaVersion);
  }
  versionJSON["eruda"].version = erudaVersion;
  eruda_DynamicQueryResourceVersion.forEach((item) => {
    let version = Utils.getNpmLibVersion(item.npm);
    if (versionJSON["eruda"]["plugin"][item.npm] != version) {
      console.log(`更新Eruda插件${item.npm}版本 ${versionJSON["eruda"]["plugin"][item.npm]} ==> ${version}`);
    }
    versionJSON["eruda"]["plugin"][item.npm] = version;
    resourceMap[item.resourceName] = `https://fastly.jsdelivr.net/npm/${item.npm}@${version}`;
  });
  // 获取并更新vConsole及插件版本
  let vConsoleVersion = Utils.getNpmLibVersion("vconsole");
  if (versionJSON["vconsole"].version != vConsoleVersion) {
    console.log(`更新vConsole版本 ${versionJSON["vconsole"].version} ==> ${vConsoleVersion}`);
    updateREADMEInfo("VConsole", vConsoleVersion);
  }
  versionJSON["vconsole"].version = vConsoleVersion;
  vConsole_DynamicQueryResourceVersion.forEach((item) => {
    let version = Utils.getNpmLibVersion(item.npm);
    if (versionJSON["vconsole"]["plugin"][item.npm] != version) {
      console.log(`更新vConsole插件${item.npm}版本 ${versionJSON["vconsole"]["plugin"][item.npm]} ==> ${version}`);
    }
    versionJSON["vconsole"]["plugin"][item.npm] = version;
    resourceMap[item.resourceName] = `https://fastly.jsdelivr.net/npm/${item.npm}@${version}`;
  });
  // 获取并更新pageSpy版本
  let pageSpyVersion = Utils.getNpmLibVersion("@huolala-tech/page-spy-browser");
  if (versionJSON["@huolala-tech/page-spy-browser"].version != pageSpyVersion) {
    console.log(`更新vConsole版本 ${versionJSON["@huolala-tech/page-spy-browser"].version} ==> ${pageSpyVersion}`);
    updateREADMEInfo("PageSpy", pageSpyVersion);
  }
  versionJSON["@huolala-tech/page-spy-browser"].version = pageSpyVersion;

  // 写入版本文件
  fs.writeFileSync(versionJSONFilePath, JSON.stringify(versionJSON, null, 2), {
    encoding: "utf-8",
  });

  return resourceMap;
};

const Utils = new ViteUtils(__dirname);
const pkg = Utils.getPackageJSON();

const userConfig = await GenerateUserConfig({
  __dirname: __dirname,
  gitProjectPath: "scripts-vite/网页调试",
  monkeyOption: {
    userscript: {
      name: "网页调试",
      // GM_xmlhttpRequest允许访问的域
      connect: ["*"],
      // 脚本描述
      description: "内置多种网页调试工具，包括：Eruda、vConsole、PageSpy、Chii，可在设置菜单中进行详细配置",
      // 脚本图标
      icon: "data:image/png;base64,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",
      // 脚本运行域
      match: ["*://*/*"],
      // 引用库
      require: [...(await GetLib(["Eruda", "vConsole", "PageSpy"]))],
      // 资源引用
      resource: {
        ...getResource(),
        Resource_erudaGeolocation: await Utils.getGitHubLibLatestVersionUrl(
          "WhiteSevs/eruda-geolocation",
          "master",
          "eruda-geolocation.js"
        ),
      },
      otherGrant: [
        // chromext
        "GM.ChromeXt",
        // scriptcat
        "CAT_userConfig",
        "CAT_fileStorage",
        "CAT_scriptLoaded",
        // scriptcat deprecated
        "CAT_setProxy",
        "CAT_clearProxy",
        "CAT_click",
      ],
    },
    build: {
      // import库的文件映射
      externalGlobals: {},
      // import资源文件的映射
      externalResource: {},
    },
  },
});

export default defineConfig(userConfig);
