"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Carousel } from "@/components/ui/carousel"
import Image from "next/image"
import React from 'react'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { FloatingCard } from '@/components/ui/floating-card'

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}

const features: Feature[] = [
  {
    title: "专业导师团队",
    description: "汇聚海内外知名高校博士及教授，提供一对一指导",
    icon: "👨‍🏫",
  },
  {
    title: "全程论文指导",
    description: "从选题到发表，提供全流程专业指导服务",
    icon: "📝",
  },
  {
    title: "SCI期刊发表",
    description: "协助选择合适期刊，提高论文发表成功率",
    icon: "📊",
  },
  {
    title: "快速响应",
    description: "24小时在线咨询，专业团队及时解答",
    icon: "⚡",
  },
]

const services: Service[] = [
  {
    title: "论文写作指导",
    description: "提供选题建议、研究方法指导、写作技巧培训",
    image: "/images/services/writing.svg",
    href: "/papers/writing",
  },
  {
    title: "论文修改服务",
    description: "语言润色、逻辑优化、格式规范调整",
    image: "/images/services/revision.svg",
    href: "/papers/revision",
  },
  {
    title: "期刊投稿咨询",
    description: "SCI期刊推荐、投稿策略指导、返修意见解析",
    image: "/images/services/publish.svg",
    href: "/papers/publish",
  },
  {
    title: "学术能力提升",
    description: "科研方法培训、文献阅读技巧、学术写作能力培养",
    image: "/images/services/training.svg",
    href: "/papers/training",
  },
]

export default function HomePage() {
  const { toast } = useToast()

  return (
    <>
      <BackgroundGradient />
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <section className="container flex flex-col items-center gap-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              您的
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                科研成长助手
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-center text-muted-foreground md:text-xl"
          >
            专业的论文指导服务，助您在学术道路上更进一步
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4"
          >
            <Link
              href="/papers/writing"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full")}
            >
              开始写作指导
            </Link>
            <Link
              href="/contact/consult"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}
            >
              预约咨询
            </Link>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FloatingCard>
                  <Card className="h-full backdrop-blur-sm bg-white/50">
                    <CardHeader>
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="container py-12 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter text-center mb-12"
          >
            我们的服务
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <FloatingCard>
                    <Card className="h-full transition-all hover:shadow-lg backdrop-blur-sm bg-white/50">
                      <CardHeader>
                        <div className="relative h-40 w-full mb-4">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </FloatingCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-12 md:py-24">
          <FloatingCard>
            <Card className="bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground backdrop-blur-sm">
              <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold tracking-tighter"
                >
                  开启您的学术成长之旅
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-[600px] text-primary-foreground/80"
                >
                  专业的导师团队随时待命，为您的科研之路保驾护航
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-4"
                >
                  <Link
                    href="/contact/consult"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "lg" }),
                      "rounded-full"
                    )}
                  >
                    立即咨询
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </FloatingCard>
        </section>
      </div>
      <Toaster />
    </>
  )
}
