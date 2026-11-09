import { Panel } from "@components/setting/panel";

export type DouYinLayoutMode = "auto" | "bottom" | "right";

const choices: { value: DouYinLayoutMode; label: string }[] = [
  { value: "auto", label: "自动" },
  { value: "bottom", label: "下方" },
  { value: "right", label: "右侧" },
];

export const getLayoutMode = (key: string): DouYinLayoutMode => {
  const value = Panel.getValue<DouYinLayoutMode>(key, "auto");
  return choices.some((item) => item.value === value) ? value : "auto";
};

export const resolveLayoutMode = (mode: DouYinLayoutMode): "bottom" | "right" =>
  mode === "auto" ? (window.matchMedia("(orientation: portrait)").matches ? "bottom" : "right") : mode;

/** 一个轻量级的三态布局菜单，设置在视频和直播之间分别保存。 */
export const createLayoutPicker = (key: string) => {
  const $picker = document.createElement("details");
  $picker.className = "dy-layout-picker";
  const $trigger = document.createElement("summary");
  $trigger.title = "切换评论、章节或聊天区域的位置";
  const $menu = document.createElement("div");
  $menu.className = "dy-layout-picker-menu";

  const buttons = choices.map((choice) => {
    const $button = document.createElement("button");
    $button.type = "button";
    $button.textContent = choice.label;
    $button.addEventListener("click", () => {
      Panel.setValue(key, choice.value);
      update();
      $picker.open = false;
    });
    $menu.appendChild($button);
    return $button;
  });

  const update = () => {
    const current = getLayoutMode(key);
    const title = `布局：${choices.find((item) => item.value === current)!.label} ▾`;
    if ($trigger.textContent !== title) $trigger.textContent = title;
    buttons.forEach(($button, i) => {
      const pressed = String(choices[i].value === current);
      if ($button.getAttribute("aria-pressed") !== pressed) $button.setAttribute("aria-pressed", pressed);
    });
  };

  $picker.append($trigger, $menu);
  // 不让按钮上的点击传递给抖音视频的播放/暂停处理器。
  ["pointerdown", "click", "dblclick"].forEach((eventName) => {
    $picker.addEventListener(eventName, (event) => event.stopPropagation());
  });
  const onPointerDown = (event: PointerEvent) => {
    if (!$picker.contains(event.target as Node)) $picker.open = false;
  };
  document.addEventListener("pointerdown", onPointerDown, true);
  update();

  return {
    element: $picker,
    update,
    destroy: () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      $picker.remove();
    },
  };
};
