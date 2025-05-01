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
  title: "核心产品 | AI算法商城",
  description: "我们提供全方位的AI解决方案，包括开放平台、训练平台、推理平台和定制开发服务",
}

const products = [
  {
    title: "AI开放平台",
    description: "提供丰富的API接口，让您轻松接入各类AI能力",
    image: "/images/products/platform.svg",
    href: "/products/platform",
    features: [
      "支持REST API和SDK调用",
      "丰富的算法模型库",
      "按量计费，灵活经济",
      "7x24小时技术支持",
    ],
  },
  {
    title: "AI训练平台",
    description: "一站式模型训练平台，从数据处理到模型部署全流程支持",
    image: "/images/products/training.svg",
    href: "/products/training",
    features: [
      "图形化训练流程",
      "自动化数据标注",
      "分布式训练支持",
      "模型评估优化",
    ],
  },
  {
    title: "AI推理平台",
    description: "高性能的模型推理服务，支持多种硬件加速方案",
    image: "/images/products/inference.svg",
    href: "/products/inference",
    features: [
      "低延迟推理服务",
      "自动弹性伸缩",
      "多硬件平台支持",
      "实时监控告警",
    ],
  },
  {
    title: "定制开发服务",
    description: "专业团队提供端到端的AI解决方案定制服务",
    image: "/images/products/custom.svg",
    href: "/products/custom",
    features: [
      "需求分析咨询",
      "算法定制开发",
      "系统集成部署",
      "运维技术支持",
    ],
  },
]

export default function ProductsPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">核心产品</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          我们提供全方位的AI解决方案，从开放平台到定制开发，满足您的各类AI需求
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
              <CardDescription className="text-base">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={product.href}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full"
                )}
              >
                了解更多
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 