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
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "成功案例 | AI算法商城",
  description: "展示我们在各个领域的成功实践，助力企业数字化转型的真实案例",
}

const cases = [
  {
    title: "智慧城市交通管理系统",
    description: "为某省会城市打造的智能交通管理平台，实现交通信号智能调节、车流量预测等功能",
    image: "/images/cases/traffic.svg",
    href: "/cases/government/traffic",
    category: "政府项目",
    tags: ["智慧城市", "交通管理", "AI预测"],
    results: [
      "交通拥堵时间减少40%",
      "通行效率提升35%",
      "事故率下降25%",
    ],
  },
  {
    title: "工业质量检测系统",
    description: "为某大型制造企业开发的AI视觉质量检测系统，提高产品质量检测效率和准确率",
    image: "/images/cases/factory.svg",
    href: "/cases/enterprise/quality",
    category: "企业项目",
    tags: ["智慧工业", "质量检测", "计算机视觉"],
    results: [
      "检测效率提升300%",
      "误检率降低80%",
      "人工成本节省60%",
    ],
  },
  {
    title: "智能医疗影像诊断",
    description: "为多家三甲医院开发的医学影像AI辅助诊断系统，提高诊断准确率和效率",
    image: "/images/cases/medical.svg",
    href: "/cases/enterprise/medical",
    category: "企业项目",
    tags: ["智慧医疗", "影像诊断", "深度学习"],
    results: [
      "诊断效率提升200%",
      "准确率达到98%",
      "医生工作负荷降低40%",
    ],
  },
  {
    title: "智能客服机器人",
    description: "为某互联网金融公司开发的智能客服系统，提供7x24小时在线服务",
    image: "/images/cases/customer-service.svg",
    href: "/cases/innovation/chatbot",
    category: "创新项目",
    tags: ["智能客服", "自然语言处理", "机器学习"],
    results: [
      "客服成本降低50%",
      "用户满意度提升30%",
      "问题解决率达到85%",
    ],
  },
]

export default function CasesPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">成功案例</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          展示我们在各个领域的成功实践，这些案例展现了AI技术如何为企业创造实际价值
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((case_) => (
          <Card key={case_.title} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={case_.image}
                  alt={case_.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{case_.category}</Badge>
                {case_.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <CardTitle className="text-2xl">{case_.title}</CardTitle>
              <CardDescription className="text-base">
                {case_.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <h3 className="font-semibold mb-2">项目成效：</h3>
              <ul className="list-disc list-inside space-y-2">
                {case_.results.map((result) => (
                  <li key={result} className="text-muted-foreground">
                    {result}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={case_.href}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full"
                )}
              >
                查看详情
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 