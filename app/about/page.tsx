import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "关于我们 | AI算法商城",
  description: "了解我们的使命、愿景和团队，以及我们如何帮助企业实现AI转型",
}

const stats = [
  {
    number: "50+",
    label: "AI算法",
    description: "覆盖计算机视觉、自然语言处理等多个领域",
  },
  {
    number: "1000+",
    label: "企业客户",
    description: "来自各行各业的优质客户选择我们",
  },
  {
    number: "100+",
    label: "技术专家",
    description: "拥有丰富经验的AI研发和实施团队",
  },
  {
    number: "24/7",
    label: "技术支持",
    description: "全天候专业技术支持服务",
  },
]

const milestones = [
  {
    year: "2020",
    title: "公司成立",
    description: "致力于为企业提供专业的AI解决方案",
  },
  {
    year: "2021",
    title: "发布AI开放平台",
    description: "推出首个AI算法开放平台，支持多种算法服务",
  },
  {
    year: "2022",
    title: "完成A轮融资",
    description: "获得知名投资机构数亿元投资",
  },
  {
    year: "2023",
    title: "产品矩阵升级",
    description: "推出新一代AI训练平台和推理平台",
  },
]

const values = [
  {
    title: "创新驱动",
    description: "持续创新，推动AI技术发展",
    icon: "💡",
  },
  {
    title: "客户至上",
    description: "以客户需求为导向，提供最优解决方案",
    icon: "🤝",
  },
  {
    title: "专业专注",
    description: "专注AI领域，提供专业服务",
    icon: "🎯",
  },
  {
    title: "开放共赢",
    description: "开放合作，实现共同发展",
    icon: "🌟",
  },
]

export default function AboutPage() {
  return (
    <div className="container py-8 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">关于我们</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          我们是专业的AI解决方案提供商，致力于帮助企业实现数字化转型
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">
                {stat.number}
              </CardTitle>
              <CardDescription className="text-lg font-medium">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Company Values */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">企业价值观</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">发展历程</h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={cn(
                "flex items-start gap-4 p-4",
                index % 2 === 0 ? "bg-muted/50" : "bg-background"
              )}
            >
              <div className="text-2xl font-bold text-primary min-w-[100px]">
                {milestone.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">加入我们</h2>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          我们正在寻找优秀的人才加入团队，一起推动AI技术的发展与应用
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about/jobs"
            className={buttonVariants({ variant: "default" })}
          >
            查看职位
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline" })}
          >
            联系我们
          </Link>
        </div>
      </div>
    </div>
  )
} 