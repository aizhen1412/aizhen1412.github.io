# 智能光电探测实验室静态主页

这是智能光电探测实验室招生与推荐说明的 GitHub Pages 静态站点。站点不依赖后端服务，不收集简历、不上传附件、不保存个人信息，申请方式为邮件投递。

## 页面

- `index.html`：招生主页，包含实验室简介、研究方向、招生项目、申请方式和常见问题。
- `ambassador.html`：推荐说明页，包含推荐原则、有效推荐支持、长期协助支持和合规要求。

## 目录结构

```text
docs/
├── index.html
├── ambassador.html
├── static.css
├── static.js
├── ambassador.js
├── assets/
│   └── lab/
├── .nojekyll
└── README.md
```

## 文件职责

- `static.css`：两个页面共用的布局、颜色、卡片、响应式和页脚样式。
- `static.js`：主页动态渲染数据，包括研究方向、招生项目、培养支持、科研平台、学生去向、申请流程和 FAQ。
- `ambassador.js`：推荐页预留脚本，目前无交互逻辑。
- `assets/lab/`：研究方向和实验室相关图片。
- `.nojekyll`：让 GitHub Pages 原样发布静态文件，避免 Jekyll 处理资源路径。

## 内容维护

主页主要内容集中在 `static.js` 顶部的数据数组中：

- `researchDirections`：研究方向卡片和弹窗内容。
- `programs`：招生项目、申请要求、待遇说明。
- `supportItems`：培养与科研支持。
- `resources`：科研平台与合作资源。
- `achievements`：代表成果与项目基础。
- `outcomes`：学生发展去向。
- `processItems`：申请方式步骤。
- `faqItems`：常见问题。

固定页面结构在 `index.html` 和 `ambassador.html` 中维护。视觉风格、边框、对齐和响应式行为统一在 `static.css` 中维护。
