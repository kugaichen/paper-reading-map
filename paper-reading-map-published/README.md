# Paper Reading Map — Published Edition

这是一个可直接部署的 **Obsidian 论文阅读地图**。它默认只在主表展示：

- 标题
- 时间
- 会议
- 主题
- 阅读阶段
- 一句话描述

点击每一行左侧的 `+` 后，再展开看：

- 优点
- 缺点
- 感想

同时支持两类跳转：

- **标题**：优先跳转到论文主页；如果没有论文主页，就跳转到站内详情页
- **精读笔记**：如果识别到 `精读` 标签，会显示 “精读笔记” 按钮，跳到站内单篇详情页

---

## 1. 你的当前模板，这个项目怎么读

项目已经对准你当前的笔记模板：

```yaml
---
type: paper
title: "..."
publicationTitle: "#OSDI"
year: "2024"
authors:
  - Hanze Zhang
topics:
  - "#硬件实现"
  - "#可编程交换机"
tags:
  - "交换机卸载"
status: "#AI读"
zoteroLink: "zotero://..."
notelink: "..."
# 可选新增：
paperUrl: "https://..."
obsidianUrl: "obsidian://open?..."
---
```

正文里会优先识别：

```text
oneSentence:: ...
pros:: ...
cons:: ...
thoughts:: ...
```

### 自动规范化

显示前会自动清洗：

- `publicationTitle: "#OSDI"` → `OSDI`
- `topics` 里每项带 `#` → 去掉 `#`
- `status: "#AI读"` → `AI读`
- `year: "2024"` → `2024`
- `authors` 数组 → 整理成作者列表

### 自动派生阅读阶段

如果你没有手动写 `readingStage`，会按 `status` 自动推断：

- `AI读 / 已读 / 未读完 / 评估未读 / 没读实现和评估` → `粗读`
- `已精读` → `精读`
- `值得复盘` → `值得复盘`
- 其他 → `未读`

---

## 2. 让标题直接跳到论文主页

最推荐你给每篇笔记补一个字段：

```yaml
paperUrl: "https://www.usenix.org/conference/osdi24/presentation/..."
```

这样主表里的标题会直接跳到这个公开网页。

如果你不写 `paperUrl`，但写了 DOI：

```yaml
doi: "10.xxxx/xxxx"
```

项目会自动把标题跳转到：

```text
https://doi.org/你的DOI
```

如果 `paperUrl` 和 `doi` 都没有，标题会退回到站内详情页 `/papers/[slug]`。

---

## 3. 让“精读”直接指向详细笔记

只要这篇笔记的 `status` 里包含：

```yaml
status:
  - 已精读
```

或者你手动写：

```yaml
readingStage: "精读"
```

主表展开后就会显示一个 **精读笔记** 按钮，跳到站内的单篇详情页。

### 如果你还想从详情页直接打开 Obsidian

你可以给笔记补：

```yaml
obsidianUrl: "obsidian://open?vault=kugaichen&file=001_Paper_note_in%2F%40zhangfast"
```

或者在项目根目录配置：

```bash
OBSIDIAN_VAULT_NAME=kugaichen
```

这样详情页会自动生成 `Open in Obsidian`。

---

## 4. 如何调整字体、大小、布局

你刚才提到“字体想再小一点”，这个版本已经整体收了一轮。以后你自己改，只需要动：

```text
app/globals.css
```

最重要的几个变量在最上面：

```css
:root {
  --title-size: clamp(2.8rem, 7vw, 5.6rem);
  --intro-size: 1.05rem;
  --table-head-size: 0.9rem;
  --table-body-size: 0.95rem;
  --table-line-height: 1.75;
}
```

### 你要怎么改

#### 页面大标题更小

把：

```css
--title-size: clamp(2.8rem, 7vw, 5.6rem);
```

改成比如：

```css
--title-size: clamp(2.4rem, 6vw, 4.8rem);
```

#### 表格正文更小

把：

```css
--table-body-size: 0.95rem;
```

改成：

```css
--table-body-size: 0.9rem;
```

#### 行距更紧凑

把：

```css
--table-line-height: 1.75;
```

改成：

```css
--table-line-height: 1.6;
```

#### 想换字体

正文默认用：

```css
--body-font: Inter, ui-sans-serif, ...
```

标题默认用：

```css
--display-font: Georgia, "Times New Roman", serif;
```

你可以直接改成自己喜欢的字体栈。

---

## 5. 如何添加或更新一篇精读笔记

### 最少要写的字段

```yaml
---
title: "论文标题"
publicationTitle: "#OSDI"
year: "2024"
topics:
  - "#硬件实现"
status:
  - "#已精读"
paperUrl: "https://..."
---
```

正文里：

```text
## 一句话总结
oneSentence:: 这里写一句话总结

## 表格关键字段
**优点 (Pros):**
- pros:: 这里写优点

**缺点 (Cons):**
- cons:: 这里写缺点

**感想 (Thoughts):**
- thoughts:: 这里写感想
```

### 放到哪里

放在：

```text
obsidian/001_Paper_note_in/
```

或者你自己的外部 Obsidian 仓库目录。

---

## 6. 如何连接你现有的 Obsidian 仓库

在项目根目录新建 `.env.local`：

```bash
OBSIDIAN_PAPERS_DIR=G:/你的Obsidian仓库/001_Paper_note_in
OBSIDIAN_VAULT_NAME=kugaichen
```

然后启动：

```bash
npm install
npm run dev
```

如果你准备上线前要把外部 Obsidian 笔记同步进项目仓库：

```bash
npm run sync:obsidian
```

---

## 7. 本地开发

```bash
npm install
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

Next.js 支持通过 `.env*` 文件读取环境变量，`.env.local` 是常见本地开发方式。官方文档也说明 `.env*.local` 通常不该提交到仓库。 citeturn525336search2

---

## 8. 发布到 GitHub

在项目根目录执行：

```bash
git init
git add .
git commit -m "init paper reading map"
git branch -M main
git remote add origin <你的 GitHub 仓库地址>
git push -u origin main
```

如果你准备公开发布，请确认：

- `.env.local` 不要提交
- 本地 `file:///...` 路径不要作为公网链接依赖
- 真正想给读者点开的论文页面，最好写 `paperUrl`

---

## 9. 发布到 Vercel

### 方式一：GitHub 导入（最推荐）

1. 打开 Vercel
2. `Add New Project`
3. 选择你的 GitHub 仓库
4. Vercel 会自动识别 Next.js 项目
5. 直接 Deploy

导入 Git 仓库后，后续每次 push 都会自动触发新部署。Vercel 官方文档明确支持 GitHub/GitLab/Bitbucket 仓库导入和自动部署。 citeturn525336search1turn525336search6

### 方式二：命令行部署

```bash
npm i -g vercel
vercel
```

如果要正式发布到生产：

```bash
vercel --prod
```

Vercel 官方 Next.js 文档也支持在项目根目录直接用 `vercel` 命令部署。 citeturn525336search0

---

## 10. 你以后最常改的几个文件

### 改页面结构 / 布局

```text
components/PaperReadingMapPage.js
```

### 改字体 / 字号 / 美观

```text
app/globals.css
```

### 改解析器逻辑

```text
lib/papers.js
```

### 改示例或接入的 Obsidian 内容

```text
obsidian/001_Paper_note_in/
```

---

## 11. 这个版本当前的页面逻辑

### 主表默认只看：

- 标题
- 时间
- 会议
- 主题
- 阅读阶段
- 一句话描述

### 展开后再看：

- 优点
- 缺点
- 感想
- 论文主页
- 精读笔记入口

这就是更适合浏览和复盘的两层结构。
