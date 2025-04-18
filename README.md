# 学术个人主页 | Academic Personal Website

这是一个基于 Next.js 构建的现代化学术个人主页，支持中英文切换和响应式设计。

## 功能特点

- 🌐 中英文双语支持
- 📱 完全响应式设计，适配桌面和移动设备
- 🎨 现代化卡片式布局
- 📊 交互式研究和教学展示
- 🔍 SEO 友好

## 在 GitHub Pages 部署

### 前提条件

- 安装 [Node.js](https://nodejs.org/) (推荐 v18 或更高版本)
- 安装 [Git](https://git-scm.com/)
- 拥有 GitHub 账户

### 详细部署步骤

1. **克隆仓库**

   \`\`\`bash
   git clone https://github.com/yourusername/academic-website.git
   cd academic-website
   \`\`\`

2. **安装依赖**

   \`\`\`bash
   npm install
   npm install --legacy-peer-deps
   \`\`\`

3. **本地测试**

   \`\`\`bash
   npm run dev
   \`\`\`

   访问 http://localhost:3000 查看网站效果。

4. **配置 GitHub Pages**

   在项目根目录创建 `.github/workflows/deploy.yml` 文件，内容如下：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm install --legacy-peer-deps
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out
          branch: gh-pages
```



5. **修改 Next.js 配置**

   创建或修改 `next.config.mjs` 文件，内容如下：

   \`\`\`javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
     trailingSlash: true,
   };

   export default nextConfig;
   \`\`\`

   **注意：** 将 `your-repo-name` 替换为你的 GitHub 仓库名称。

6. **创建 `.nojekyll` 文件**

   在 `public` 目录中创建一个空的 `.nojekyll` 文件，以防止 GitHub Pages 使用 Jekyll 处理你的站点。

   这个空文件告诉 GitHub Pages 不要使用 Jekyll 处理你的站点，这对于 Next.js 静态导出很重要。

   \`\`\`bash
   touch public/.nojekyll
   \`\`\`

7. **修改 package.json**

   确保 package.json 中包含以下脚本：

   \`\`\`json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start",
     "lint": "next lint"
   }
   \`\`\`

8. **提交并推送到 GitHub**

   \`\`\`bash
   git add .
   git commit -m "Setup for GitHub Pages"
   git push origin main
   \`\`\`

9. **在 GitHub 仓库设置中启用 GitHub Pages**

**需要先将仓库设为公开**（如果不想升级账户）：

    - 在您当前的设置页面，点击左侧导航栏中的 "General"
    - 滚动到页面底部的 "Danger Zone" 区域
    - 找到 "Change repository visibility" 选项
    - 点击 "Change visibility" 按钮
    - 选择 "Make public"
    - 按照提示确认更改

   - 在 GitHub 仓库页面，点击 "Settings"
   - 在左侧导航栏中点击 "Pages"
   - 在 "Build and deployment" 部分，选择 "Source" 为 "GitHub Actions"
   - 等待 GitHub Actions 工作流完成，你的网站将在 `https://yourusername.github.io/your-repo-name` 上线


10. debug

- GitHub 权限问题。错误信息显示 GitHub Actions 机器人没有权限推送到您的仓库：

```
remote: Permission to ChanJeunlam/Academic-websites.git denied to github-actions[bot].
fatal: unable to access 'https://github.com/ChanJeunlam/Academic-websites.git/': The requested URL returned error: 403
```

GitHub Pages 通常需要几分钟时间来完成部署后的设置。如果您现在访问上面的 URL，您应该能够看到您的学术个人主页。

```
https://chanjeunlam.github.io/Academic-websites/
```

1. **检查 next.config.mjs 文件**：

1. 确保您的 `next.config.mjs` 文件中正确设置了 `basePath` 和 `assetPrefix`
2. 它们应该设置为 `/Academic-websites`（与您的仓库名称匹配）



2. **等待几分钟**：

1. GitHub Pages 有时需要几分钟才能完全部署

3. 检查 gh-pages 分支

现在您的工作流已成功运行，应该已经创建了 `gh-pages` 分支：

1. 前往您的 GitHub 仓库
2. 点击分支下拉菜单（显示 "main"）
3. 查看是否有 `gh-pages` 分支
4. 如果有，点击进入查看内容，确认有 `index.html` 文件在根目录

## 检查 GitHub Pages 设置

1. 前往仓库的 "Settings" > "Pages"
2. 确认以下设置：

1. Source: 应该设置为 "Deploy from a branch"（不是 "GitHub Actions"）
2. Branch: 应该选择 "gh-pages" 和 "/ (root)"

这一点很重要：即使您使用 GitHub Actions 部署，"Source" 设置仍应为 "Deploy from a branch"，因为 Actions 实际上是将文件部署到 `gh-pages` 分支。

## 图床不显示

需要添加的前缀是 `/Academic-websites`，这与您在 `next.config.mjs` 中设置的 `basePath` 相同。

```
// 修改前
<Image
  src="/thoughtful-scholar.png"
  alt="Profile Photo"
  width={400}
  height={400}
  className="object-cover"
  priority
/>

// 修改后
<Image
  src="/Academic-websites/thoughtful-scholar.png"
  alt="Profile Photo"
  width={400}
  height={400}
  className="object-cover"
  priority
/>
```

### 方法1：更新仓库设置中的工作流权限

1. 前往 GitHub 仓库
2. 点击 "Settings"（设置）选项卡
3. 在左侧菜单中，点击 "Actions" > "General"
4. 在 "Workflow permissions" 部分，选择 "Read and write permissions"
5. 保存更改

### 使用自定义域名

如果你想使用自定义域名而不是 GitHub Pages 默认的域名，可以按照以下步骤操作：

1. **购买域名**

   从任何域名注册商（如 Namecheap、GoDaddy、阿里云等）购买一个域名。

2. **配置 DNS 记录**

   在你的域名注册商的 DNS 设置中，添加以下记录：

   - 如果使用 apex 域名（如 `example.com`）：
     - 添加 A 记录，指向 GitHub Pages 的 IP 地址：
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

   - 如果使用子域名（如 `www.example.com`）：
     - 添加 CNAME 记录，指向 `yourusername.github.io`

3. **在 GitHub 仓库中配置**

   - 在 `public` 目录中创建一个名为 `CNAME` 的文件（没有扩展名）
   - 在文件中写入你的自定义域名，例如 `example.com` 或 `www.example.com`

   \`\`\`bash
   echo "example.com" > public/CNAME
   \`\`\`

4. **在 GitHub 仓库设置中确认**

   - 在 GitHub 仓库页面，点击 "Settings"
   - 在左侧导航栏中点击 "Pages"
   - 在 "Custom domain" 部分，确认你的域名已经正确设置
   - 勾选 "Enforce HTTPS" 选项以启用 HTTPS

DNS 更改可能需要几小时到 24 小时才能生效。一旦生效，你的网站将可以通过你的自定义域名访问。

## 更新网站内容

### 更新个人信息

1. 编辑 `components/profile-section.tsx` 文件，更新个人信息、照片和简介。

2. 如果需要更新中英文翻译，编辑 `components/language-provider.tsx` 文件中的 `translations` 对象。

### 添加新的研究项目

1. 在 `components/research-section.tsx` 文件中找到 `researchAreas` 数组，添加新的研究项目：

   \`\`\`javascript
   const researchAreas = [
     // 现有项目...
     {
       id: "new-project",
       name: t("research.new-item"),
       description: "新项目描述...",
       image: "/path-to-image.png",
     },
   ];
   \`\`\`

2. 在 `components/language-provider.tsx` 中添加对应的翻译：

   \`\`\`javascript
   zh: {
     // 其他翻译...
     "research.new-item": "新研究项目名称",
   },
   en: {
     // 其他翻译...
     "research.new-item": "New Research Project Name",
   },
   \`\`\`

### 添加新的发表成果

1. 在 `components/publications-section.tsx` 文件中找到 `publications` 数组，添加新的发表成果：

   \`\`\`javascript
   const publications = [
     // 现有发表成果...
     {
       id: 5,
       title: "新论文标题",
       authors: "Zhang, J., & New Co-author",
       journal: "Journal Name",
       year: 2024,
       type: "journal",
       field: "multiphysics",
       doi: "10.1016/j.example.2024.01.001",
       impactFactor: 4.5,
       abstract: "论文摘要...",
     },
   ];
   \`\`\`

### 添加新的教学课程

1. 在 `components/teaching-section.tsx` 文件中找到 `courses` 数组，添加新的课程：

   \`\`\`javascript
   const courses = [
     // 现有课程...
     {
       id: 4,
       code: "CS501",
       name: "新课程名称",
       semester: "2024春季",
       level: "研究生",
       description: "课程描述...",
       syllabus: "/path/to/syllabus.pdf",
       students: 40,
       rating: 4.9,
     },
   ];
   \`\`\`

## 常见部署问题及解决方案

### 图片无法显示

如果部署后图片无法显示，可能是路径问题。确保所有图片路径都是相对于 `public` 目录的，并且在 `next.config.mjs` 中正确配置了 `basePath` 和 `assetPrefix`。

解决方案：

1. 检查图片路径，确保以 `/` 开头，例如 `/images/photo.jpg`

2. 在 `next/image` 组件中使用时，确保正确设置：

   \`\`\`jsx
   import Image from 'next/image';

   <Image
     src="/images/photo.jpg"
     alt="Description"
     width={300}
     height={200}
   />
   \`\`\`

### 路由问题

如果点击链接后页面显示 404，可能是路由配置问题。

解决方案：

1. 确保在 `next.config.mjs` 中设置了 `trailingSlash: true`

2. 检查所有链接是否使用了正确的路径，考虑 `basePath`

3. 对于内部链接，使用 Next.js 的 `Link` 组件而不是普通的 `<a>` 标签

### 部署失败

如果 GitHub Actions 部署失败，可能有几个原因：

解决方案：

1. 检查 GitHub Actions 日志以查看具体错误

2. 确保 `package.json` 中的依赖项版本兼容

3. 确保 `.github/workflows/deploy.yml` 文件格式正确

4. 尝试在本地运行 `npm run build && npm run export` 看是否能成功构建

## 性能优化建议

1. **图片优化**：
   - 使用适当大小的图片，避免过大的文件
   - 考虑使用 WebP 格式代替 JPEG 或 PNG
   - 为不同设备提供不同分辨率的图片

2. **代码分割**：
   - 利用 Next.js 的动态导入功能
   - 只在需要时加载组件和库

3. **缓存策略**：
   - 设置适当的缓存头
   - 使用 Service Worker 缓存静态资源

4. **延迟加载**：
   - 对非关键资源使用延迟加载
   - 使用 `loading="lazy"` 属性延迟加载图片

## 技术支持

如有任何问题或需要进一步的帮助，请通过 GitHub Issues 联系我们。

## 许可证

MIT
