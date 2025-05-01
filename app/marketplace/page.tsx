"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

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
  title: "算法商城 | AI算法平台",
  description: "提供丰富的AI算法解决方案，包括计算机视觉、自然语言处理、语音识别等",
}

// 热门搜索关键词
const hotSearches = [
  "离岗识别", "工服识别", "皮带跑偏检测", "烟雾识别", "抽烟识别", 
  "无人机光伏巡检算法", "车牌识别", "占道经营识别", "街道垃圾识别", 
  "客流/人数统计", "摔倒识别", "火焰识别", "安全帽识别", "反光衣识别"
]

// 行业分类
const industries = [
  "全部", "建筑地产", "智慧城管", "智慧工业", "智慧能源", "智慧交通",
  "智慧园区", "智慧水务", "智慧矿山", "智慧零售", "明厨亮灶", 
  "智慧油站", "智慧物流", "智慧城市", "智慧农业", "智慧养老", "智慧消防"
]

// 场景分类
const scenes = [
  "全部", "城市道路", "工厂", "工地", "楼宇", "无人机", "光伏发电",
  "城管", "园区", "海上", "港口码头", "体育场", "山林", "田野",
  "景区", "公园", "社区", "快递站", "商场门店", "安检", "加油站"
]

// 算法列表
const algorithms = [
  {
    id: "smoke",
    title: "烟雾识别",
    isHot: true,
    tags: ["建筑地产", "智慧城管", "智慧能源"],
    href: "/marketplace/construction"
  },
  {
    id: "fire",
    title: "火焰识别",
    isHot: true,
    tags: ["智慧城管", "智慧工业", "智慧矿山"],
    href: "/marketplace/industry"
  },
  {
    id: "helmet",
    title: "安全帽识别",
    isHot: true,
    tags: ["建筑地产", "智慧工业", "智慧园区"],
    href: "/marketplace/construction"
  },
  {
    id: "reflective",
    title: "反光衣识别",
    isHot: true,
    tags: ["智慧交通", "智慧城管", "建筑地产"],
    href: "/marketplace/transportation"
  }
]

const categories = [
  {
    title: "计算机视觉",
    description: "图像识别、目标检测、人脸识别等",
    image: "/images/marketplace/vision.svg",
    href: "/marketplace/vision",
    features: [
      "图像分类",
      "目标检测",
      "人脸识别",
      "OCR文字识别",
    ],
  },
  {
    title: "自然语言处理",
    description: "文本分类、情感分析、机器翻译等",
    image: "/images/marketplace/nlp.svg",
    href: "/marketplace/nlp",
    features: [
      "文本分类",
      "情感分析",
      "机器翻译",
      "智能问答",
    ],
  },
  {
    title: "语音识别",
    description: "语音转文字、语音合成、声纹识别等",
    image: "/images/marketplace/speech.svg",
    href: "/marketplace/speech",
    features: [
      "语音转文字",
      "语音合成",
      "声纹识别",
      "语音情感分析",
    ],
  },
  {
    title: "推荐系统",
    description: "个性化推荐、协同过滤、内容推荐等",
    image: "/images/marketplace/recommendation.svg",
    href: "/marketplace/recommendation",
    features: [
      "个性化推荐",
      "协同过滤",
      "内容推荐",
      "实时推荐",
    ],
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("全部")
  const [selectedScene, setSelectedScene] = useState("全部")

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">算法商城</h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          提供丰富的AI算法解决方案，助力企业数字化转型
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Card key={category.title} className="flex flex-col">
            <CardHeader>
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-2xl">{category.title}</CardTitle>
              <CardDescription className="text-base">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-2">
                {category.features.map((feature) => (
                  <li key={feature} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Link
                href={category.href}
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