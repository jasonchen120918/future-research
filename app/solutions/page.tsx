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
  title: "行业方案 | AI算法商城",
  description: "为各行各业提供专业的AI解决方案，助力企业数字化转型",
}

const solutions = [
  {
    title: "智慧城市",
    description: "打造智能化城市管理系统，提升城市运营效率",
    image: "/images/solutions/city.svg",
    href: "/solutions/city",
    features: [
      "智能交通管理",
      "城市安防监控",
      "环境监测预警",
      "市政设施管理",
    ],
    bgColor: "bg-blue-50",
  },
  {
    title: "智慧工业",
    description: "工业生产智能化升级，实现效率与质量双提升",
    image: "/images/solutions/industry.svg",
    href: "/solutions/industry",
    features: [
      "设备预测性维护",
      "质量检测分析",
      "生产流程优化",
      "智能仓储物流",
    ],
    bgColor: "bg-green-50",
  },
  {
    title: "智慧金融",
    description: "AI赋能金融服务，提供智能化金融解决方案",
    image: "/images/solutions/finance.svg",
    href: "/solutions/finance",
    features: [
      "智能风控系统",
      "量化交易策略",
      "智能客服系统",
      "反欺诈预警",
    ],
    bgColor: "bg-yellow-50",
  },
  {
    title: "智慧医疗",
    description: "医疗服务智能化升级，提升诊疗效率与准确率",
    image: "/images/solutions/medical.svg",
    href: "/solutions/medical",
    features: [
      "医学影像诊断",
      "智能导诊分诊",
      "病历智能分析",
      "医疗质量控制",
    ],
    bgColor: "bg-red-50",
  },
  {
    title: "智慧零售",
    description: "零售行业数字化转型，打造智能购物体验",
    image: "/images/solutions/retail.svg",
    href: "/solutions/retail",
    features: [
      "智能选品推荐",
      "客流分析预测",
      "库存智能管理",
      "无人零售解决方案",
    ],
    bgColor: "bg-purple-50",
  },
]

export default function SolutionsPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">行业解决方案</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          我们为各行各业提供专业的AI解决方案，助力企业数字化转型升级
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <Card 
            key={solution.title} 
            className={cn("flex flex-col", solution.bgColor)}
          >
            <CardHeader>
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-2xl">{solution.title}</CardTitle>
              <CardDescription className="text-base">
                {solution.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-2">
                {solution.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={solution.href}
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