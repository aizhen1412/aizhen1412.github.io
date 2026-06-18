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

## 本地预览

可以在 `docs` 目录启动任意静态服务器，例如：

```powershell
cd E:\Codes\admissions-agent-upload\docs
python -m http.server 8000
```

然后访问：

```text
http://127.0.0.1:8000/
```

如果本机没有 Python，也可以直接用浏览器打开 `index.html`，但推荐使用静态服务器预览相对路径资源。

## 上线到个人 GitHub Pages

如果使用仓库 `aizhen1412/aizhen1412.github.io`，把 `docs` 目录里的文件放到仓库根目录：

```text
aizhen1412.github.io/
├── index.html
├── ambassador.html
├── static.css
├── static.js
├── ambassador.js
├── assets/
└── .nojekyll
```

推送到 `main` 分支后，访问：

```text
https://aizhen1412.github.io/
```

## 上线到项目 GitHub Pages

如果继续使用项目仓库 `admissions-agent-upload`，可以保持当前 `docs` 目录结构，在 GitHub 仓库中设置：

```text
Settings -> Pages
Source: Deploy from a branch
Branch: main
Folder: /docs
```

发布后访问：

```text
https://aizhen1412.github.io/admissions-agent-upload/
```

## 发布前检查

上线前建议确认：

- 首页和推荐页都能打开。
- `static.css`、`static.js`、图片资源没有 404。
- “申请方式”步骤横向排列，邮箱投递卡片在步骤下方。
- 两个页面底部信息一致。
- 移动端导航和卡片排版没有重叠。
