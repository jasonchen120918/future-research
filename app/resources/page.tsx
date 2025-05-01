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
  title: "资源中心 | AI算法商城",
  description: "提供全面的技术文档、API文档、SDK下载和帮助支持",
}

const resources = [
  {
    title: "开发文档",
    description: "详细的开发指南和最佳实践，帮助您快速上手我们的产品",
    image: "/images/resources/docs.svg",
    href: "/resources/docs",
    features: [
      "快速入门指南",
      "详细API使用说明",
      "代码示例和Demo",
      "常见问题解答",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "📚",
  },
  {
    title: "API文档",
    description: "全面的API接口文档，包含详细的参数说明和返回值格式",
    image: "/images/resources/api.svg",
    href: "/resources/api",
    features: [
      "RESTful API文档",
      "接口调用示例",
      "错误码说明",
      "在线API测试工具",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🔌",
  },
  {
    title: "SDK下载",
    description: "多语言SDK包下载，支持Python、Java、Node.js等主流开发语言",
    image: "/images/resources/sdk.svg",
    href: "/resources/sdk",
    features: [
      "Python SDK",
      "Java SDK",
      "Node.js SDK",
      "更多语言支持",
    ],
    color: "from-green-500 to-emerald-500",
    icon: "📦",
  },
  {
    title: "帮助中心",
    description: "提供全面的技术支持和问题解答服务",
    image: "/images/resources/help.svg",
    href: "/resources/help",
    features: [
      "技术支持服务",
      "常见问题解答",
      "故障排查指南",
      "在线工单系统",
    ],
    color: "from-orange-500 to-yellow-500",
    icon: "💡",
  },
]

export default function ResourcesPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">资源中心</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          提供全面的技术支持和学习资源，帮助您更好地使用我们的产品和服务
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <Card key={resource.title} className="flex flex-col overflow-hidden">
            <div className={cn(
              "h-2 w-full bg-gradient-to-r",
              resource.color
            )} />
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">{resource.icon}</span>
                <CardTitle className="text-2xl">{resource.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {resource.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-2">
                {resource.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={resource.href}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full"
                )}
              >
                访问资源
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">需要帮助？</h2>
        <p className="text-muted-foreground mb-6">
          如果您在使用过程中遇到任何问题，欢迎联系我们的技术支持团队
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline" })}
          >
            联系我们
          </Link>
          <Link
            href="/resources/help"
            className={buttonVariants({ variant: "default" })}
          >
            在线支持
          </Link>
        </div>
      </div>
    </div>
  )
} 