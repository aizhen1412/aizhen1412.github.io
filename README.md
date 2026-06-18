# 智能光电探测实验室招生静态主页

这个目录是给 GitHub Pages 使用的纯静态版本，不依赖原项目后端。

## 文件

- `index.html`：静态主页入口。
- `static.css`：页面样式。
- `static.js`：静态内容渲染、研究方向弹窗、导航和复制邮箱交互。
- `assets/lab/`：页面图片资源。
- `.nojekyll`：让 GitHub Pages 原样发布静态文件。

## GitHub Pages 设置

在仓库 `Settings -> Pages` 中选择：

- Source: `Deploy from a branch`
- Branch: 主分支
- Folder: `/docs`

保存后 GitHub 会发布这个目录里的静态网页。

## 内容维护

主要文字和列表在 `static.js` 中维护：

- `researchDirections`
- `programs`
- `supportItems`
- `resources`
- `outcomes`
- `faqItems`

当前静态版不收集简历、不上传附件、不保存个人信息，申请方式为邮件投递。
