/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 设置基础路径，用于 GitHub Pages 部署
  // 在开发环境中为空，在生产环境中为 /future-research
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // 为静态导出添加尾部斜杠
  trailingSlash: true,
};

export default nextConfig;