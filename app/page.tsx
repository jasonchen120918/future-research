"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Carousel } from "@/components/ui/carousel"
import { Metadata } from "next"
import Image from "next/image"

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AI算法平台 - 专业的AI视觉算法解决方案提供商",
  description: "提供丰富的AI算法解决方案，覆盖计算机视觉、自然语言处理、语音识别等多个领域",
}

const features = [
  {
    title: "丰富的算法库",
    description: "提供1000+成熟算法，覆盖50+行业场景",
    icon: "📊",
  },
  {
    title: "快速部署",
    description: "标准API接口，支持快速集成和部署",
    icon: "⚡",
  },
  {
    title: "高准确率",
    description: "算法平均准确率超过95%",
    icon: "🎯",
  },
  {
    title: "专业服务",
    description: "7x24小时技术支持，快速响应",
    icon: "💡",
  },
]

const industries = [
  {
    title: "智慧城市",
    description: "城市管理、交通监控、公共安全",
    image: "/images/industries/city.svg",
    href: "/solutions/city",
  },
  {
    title: "智慧工业",
    description: "生产监控、质量检测、安全管理",
    image: "/images/industries/industry.svg",
    href: "/solutions/industry",
  },
  {
    title: "智慧金融",
    description: "身份认证、风险控制、智能客服",
    image: "/images/industries/finance.svg",
    href: "/solutions/finance",
  },
  {
    title: "智慧医疗",
    description: "影像诊断、智能导诊、健康管理",
    image: "/images/industries/medical.svg",
    href: "/solutions/medical",
  },
]

export default function HomePage() {
  const { toast } = useToast()

  const slides = [
    {
      image: "/img/background.jpg",
      title: "AI视觉算法商城",
      description: "累计成熟图像识别/视频分析算法1500+，覆盖行业100+，落地项目500+"
    },
    {
      image: "/img/background.jpg",
      title: "算法定制服务",
      description: "全新行业算法定制仅需8-12周，助力'AI+全场景'落地"
    },
    {
      image: "/img/background.jpg",
      title: "专业解决方案",
      description: "提供专业的AI视觉算法解决方案，满足各行业需求"
    }
  ]

  const categories = siteConfig.mainNav
    .find(item => item.title === "算法商城")
    ?.children || []

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="container flex flex-col items-center gap-4 py-12 text-center md:py-24">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          专业的AI算法平台
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          提供丰富的AI算法解决方案，助力企业数字化转型
        </p>
        <div className="flex gap-4">
          <Link
            href="/marketplace"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            进入算法商城
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            联系我们
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          行业解决方案
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.title} href={industry.href}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="relative h-40 w-full mb-4">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">
              立即开始使用我们的AI算法
            </h2>
            <p className="max-w-[600px] text-primary-foreground/80">
              提供免费试用，快速接入，专业的技术支持团队随时为您服务
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" })
              )}
            >
              申请试用
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
