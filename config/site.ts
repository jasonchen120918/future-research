export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "AI算法平台",
  description: "专业的AI视觉算法平台，提供丰富的算法解决方案",
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "算法商城",
      href: "/marketplace",
      children: [
        { title: "计算机视觉", href: "/marketplace/vision" },
        { title: "自然语言处理", href: "/marketplace/nlp" },
        { title: "语音识别", href: "/marketplace/speech" },
        { title: "推荐系统", href: "/marketplace/recommendation" },
      ],
    },
    {
      title: "核心产品",
      href: "/products",
      children: [
        { title: "AI开放平台", href: "/products/platform" },
        { title: "AI训练平台", href: "/products/training" },
        { title: "AI推理平台", href: "/products/inference" },
        { title: "定制开发服务", href: "/products/custom" },
      ],
    },
    {
      title: "行业方案",
      href: "/solutions",
      children: [
        { title: "智慧城市", href: "/solutions/city" },
        { title: "智慧工业", href: "/solutions/industry" },
        { title: "智慧金融", href: "/solutions/finance" },
        { title: "智慧医疗", href: "/solutions/medical" },
        { title: "智慧零售", href: "/solutions/retail" },
      ],
    },
    {
      title: "成功案例",
      href: "/cases",
      children: [
        { title: "政府项目", href: "/cases/government" },
        { title: "企业项目", href: "/cases/enterprise" },
        { title: "创新项目", href: "/cases/innovation" },
      ],
    },
    {
      title: "资源中心",
      href: "/resources",
      children: [
        { title: "开发文档", href: "/resources/docs" },
        { title: "API文档", href: "/resources/api" },
        { title: "SDK下载", href: "/resources/sdk" },
        { title: "帮助中心", href: "/resources/help" },
      ],
    },
    {
      title: "关于我们",
      href: "/about",
      children: [
        { title: "公司介绍", href: "/about/company" },
        { title: "新闻动态", href: "/about/news" },
        { title: "加入我们", href: "/about/jobs" },
        { title: "联系我们", href: "/about/contact" },
      ],
    },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
}
