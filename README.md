# 阅读网站

无需构建工具的静态个人作品集，收录一篇技术文章与一部连载小说。

## 文件结构

```text
.
├── index.html          # 首页
├── article.html        # 短文阅读页
├── novel.html          # 小说章节页
├── 404.html            # GitHub Pages 404 页面
└── assets
    ├── content.js      # 你的所有文字内容和个人信息
    ├── style.css       # 网站样式
    └── app.js          # 交互逻辑
```

## 已收录内容

- 《从打孔纸带到自然语言：人类如何一步步教会计算机“听懂话”》
- 《未命名小说》：第一章至第五章

网站内容保存在 `assets/content.js`。根目录中的 Word 源稿只用于本地留存，已由 `.gitignore` 排除，不会随网站公开发布。

## 修改内容

打开 `assets/content.js`：

- `essays`：添加或替换短篇文章。
- `novel`：修改小说信息并添加章节。

每篇短文需要一个唯一的 `id`，阅读链接会自动使用：

```text
article.html?id=你的文章id
```

小说章节会自动使用：

```text
novel.html?chapter=1
```

## 部署到 GitHub Pages

### 方式一：个人主页仓库

1. 新建名为 `你的用户名.github.io` 的仓库。
2. 将本项目全部文件上传到仓库根目录。
3. 打开仓库的 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/ (root)` 目录。
6. 保存后访问 `https://你的用户名.github.io`。

### 方式二：普通仓库

1. 新建任意名称的公开仓库，例如 `my-writing`。
2. 上传本项目全部文件。
3. 在 `Settings → Pages` 中启用 `main` 分支和 `/ (root)`。
4. 访问 `https://你的用户名.github.io/my-writing/`。

本网站使用相对路径，因此两种部署方式都可正常工作。

## 本地预览

直接双击 `index.html` 即可浏览。为了获得更稳定的本地效果，也可以在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
