export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "未来通科研",
  description: "专业的科研论文指导平台，助力学术成长之路",
  mainNav: [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "论文指导",
      href: "/papers",
      children: [
        { title: "论文写作", href: "/papers/writing" },
        { title: "论文发表", href: "/papers/publish" },
        { title: "论文修改", href: "/papers/revision" },
        { title: "SCI选刊", href: "/papers/journal" },
      ],
    },
    {
      title: "指导老师",
      href: "/mentors",
      children: [
        { title: "导师团队", href: "/mentors/team" },
        { title: "研究方向", href: "/mentors/research" },
        { title: "预约咨询", href: "/mentors/consult" },
      ],
    },
    {
      title: "科研成果",
      href: "/achievements",
      children: [
        { title: "发表论文", href: "/achievements/papers" },
        { title: "成功案例", href: "/achievements/cases" },
        { title: "学员反馈", href: "/achievements/feedback" },
      ],
    },
    {
      title: "联系我们",
      href: "/contact",
      children: [
        { title: "关于我们", href: "/contact/about" },
        { title: "加入我们", href: "/contact/join" },
        { title: "联系方式", href: "/contact/info" },
      ],
    },
  ],
  links: {
    wechat: "未来通科研",
    email: "contact@futureconnect.com",
  },
}

