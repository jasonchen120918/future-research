"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { FloatingCard } from "@/components/ui/floating-card"

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

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: "computer-vision",
    title: "计算机视觉",
    description: "图像识别、目标检测、场景分析等视觉AI解决方案",
    icon: "/icons/vision.svg"
  },
  {
    id: "nlp",
    title: "自然语言处理",
    description: "文本分类、情感分析、命名实体识别等NLP解决方案",
    icon: "/icons/nlp.svg"
  },
  {
    id: "speech",
    title: "语音技术",
    description: "语音识别、语音合成、声纹识别等语音AI解决方案",
    icon: "/icons/speech.svg"
  },
  {
    id: "multimodal",
    title: "多模态技术",
    description: "图文理解、视频分析、跨模态检索等多模态解决方案",
    icon: "/icons/multimodal.svg"
  }
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <BackgroundGradient />
      <main className="flex-1">
        <div className="container py-8 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              算法商城
            </h1>
            <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
              提供丰富的AI算法解决方案，包括计算机视觉、自然语言处理、语音识别等
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.title} href={`/marketplace/${category.id}`}>
                <FloatingCard className="p-4 h-full">
                  <div className="flex flex-col items-center text-center gap-2 h-full">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={64}
                      height={64}
                      className="w-16 h-16"
                    />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </FloatingCard>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
} 