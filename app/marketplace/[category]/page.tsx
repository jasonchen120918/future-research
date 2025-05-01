"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import Image from "next/image"

// 定义表单验证规则
const consultSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号码"),
  content: z.string().min(10, "咨询内容至少需要10个字符"),
})

const trialSchema = z.object({
  company: z.string().min(2, "公司名称至少需要2个字符"),
  contact: z.string().min(2, "联系人至少需要2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号码"),
  description: z.string().min(10, "需求说明至少需要10个字符"),
})

type ConsultFormData = z.infer<typeof consultSchema>
type TrialFormData = z.infer<typeof trialSchema>

export default function AlgorithmPage() {
  const params = useParams()
  const category = params.category as string
  const [isConsultDialogOpen, setIsConsultDialogOpen] = useState(false)
  const [isTrialDialogOpen, setIsTrialDialogOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 初始化表单
  const consultForm = useForm<ConsultFormData>({
    resolver: zodResolver(consultSchema),
  })

  const trialForm = useForm<TrialFormData>({
    resolver: zodResolver(trialSchema),
  })

  // 模拟算法数据
  const algorithmData = {
    construction: {
      title: "烟雾识别算法",
      tag: "热门",
      description: "烟雾识别算法基于大规模白色烟雾数据识别训练，配合摄像头实时识别监控区内室内和室外白色烟雾情况，检测到白色烟雾立刻发出警报，适用于工厂、商场、蒸汽作业等任何有火灾隐患的场所，并可用于室内多种复杂环境。",
      tags: ["建筑地产", "智慧城管", "智慧能源", "智慧工业", "明厨亮灶", "智慧养老"],
      images: [
        "/images/smoke-1.jpg",
        "/images/smoke-2.jpg",
        "/images/smoke-3.jpg"
      ],
      technicalSpecs: {
        "检测率": "≥90%",
        "响应时间": "<1秒",
        "支持分辨率": "4K/8K",
        "支持协议": "RTSP/RTMP/GB28181",
        "部署方式": "本地服务/云服务器",
        "计算平台": "华为昇腾/算能/瑞芯微/英伟达"
      },
      scenes: [
        {
          title: "建筑楼宇",
          description: "自动识别楼宇内烟雾情况，提醒管理人员，避免潜在危险"
        },
        {
          title: "加油站/油漆厂等",
          description: "针对加油站、油漆厂、原化石油站等极易发生火灾隐患的特殊场所，检测到烟雾即时报警，避免（潜在）危险"
        },
        {
          title: "日常活动场所",
          description: "自动检测环境，烟雾等地的烟雾聚集情况，提醒管理人员查看，避免（潜在）危险"
        }
      ],
      faqs: [
        {
          question: "算法怎么使用",
          answer: "算法支持本地服务和云服务器部署两种方式，边缘端部署可兼容华为昇腾/算能/瑞芯微/英伟达等设计计算平台，开箱即用"
        },
        {
          question: "算法怎么收费",
          answer: "算法支付方式灵活，可根据实际需求选择按次计费或包年计费，主要有按路数收取/服务器授权/年包授权"
        },
        {
          question: "算法对摄像头有什么要求",
          answer: "正常200万像素即可，支持摄像头4K/8K使用，RTSP/RTMP/GB28181等协议接入，节省效率成本"
        },
        {
          question: "算法如何定制",
          answer: "根据实际需求评估，通常单场景需要2000-5000张左右图片样本，定制流程：方案设计→数据采集→数据标注→算法开发→测试验收→算法迭代"
        },
        {
          question: "算法效果如何",
          answer: "平均检测率≥90%，采用深度学习技术可识别各种复杂场景，平均每个算法有500+小时场景，每个场景500-800张原始/标注样本注释，从源头保障算法质量"
        }
      ]
    },
    industry: {
      title: "火焰识别算法",
      tag: "热门",
      description: "火焰识别算法基于深度学习技术，能够准确识别各种环境下的火焰，包括明火、暗火、烟雾中的火焰等。适用于工厂、仓库、森林等需要火灾预警的场所。",
      tags: ["智慧工业", "智慧能源", "智慧城管", "智慧消防"],
      images: [
        "/images/fire-1.jpg",
        "/images/fire-2.jpg",
        "/images/fire-3.jpg"
      ],
      technicalSpecs: {
        "检测率": "≥95%",
        "响应时间": "<0.5秒",
        "支持分辨率": "4K/8K",
        "支持协议": "RTSP/RTMP/GB28181",
        "部署方式": "本地服务/云服务器",
        "计算平台": "华为昇腾/算能/瑞芯微/英伟达"
      },
      scenes: [
        {
          title: "工业厂房",
          description: "实时监控厂房内的火焰情况，及时发现火灾隐患"
        },
        {
          title: "森林防火",
          description: "用于森林防火监控，及时发现火源，防止火灾蔓延"
        },
        {
          title: "仓库管理",
          description: "监控仓库内的火灾隐患，保障货物安全"
        }
      ],
      faqs: [
        {
          question: "算法支持哪些场景",
          answer: "支持室内外多种场景，包括工厂、仓库、森林、建筑工地等，适应不同光照和天气条件"
        },
        {
          question: "算法如何部署",
          answer: "支持边缘计算和云端部署，可根据实际需求选择部署方式"
        },
        {
          question: "算法性能如何",
          answer: "检测准确率高，误报率低，响应速度快，可满足实时监控需求"
        }
      ]
    },
    transportation: {
      title: "车牌识别算法",
      tag: "热门",
      description: "车牌识别算法采用深度学习技术，能够准确识别各种环境下的车牌号码，包括不同角度、光照条件下的车牌。适用于停车场、收费站、交通管理等场景。",
      tags: ["智慧交通", "智慧城市", "智慧园区"],
      images: [
        "/images/plate-1.jpg",
        "/images/plate-2.jpg",
        "/images/plate-3.jpg"
      ],
      technicalSpecs: {
        "识别率": "≥98%",
        "响应时间": "<0.3秒",
        "支持分辨率": "4K/8K",
        "支持协议": "RTSP/RTMP/GB28181",
        "部署方式": "本地服务/云服务器",
        "计算平台": "华为昇腾/算能/瑞芯微/英伟达"
      },
      scenes: [
        {
          title: "停车场管理",
          description: "自动识别进出车辆车牌，实现无人值守管理"
        },
        {
          title: "交通执法",
          description: "辅助交通执法，识别违章车辆"
        },
        {
          title: "园区管理",
          description: "管理园区车辆进出，提高管理效率"
        }
      ],
      faqs: [
        {
          question: "支持哪些车牌类型",
          answer: "支持国内所有车牌类型，包括蓝牌、黄牌、新能源车牌等"
        },
        {
          question: "识别速度如何",
          answer: "单张图片识别时间小于0.3秒，可满足实时识别需求"
        },
        {
          question: "是否需要特殊摄像头",
          answer: "普通摄像头即可，建议使用200万像素以上摄像头，效果更佳"
        }
      ]
    },
    retail: {
      title: "客流统计算法",
      tag: "热门",
      description: "客流统计算法能够准确统计进出人数，支持多人同时进出场景，适用于商场、超市、景区等需要客流统计的场所。",
      tags: ["智慧零售", "智慧城市", "智慧景区"],
      images: [
        "/images/crowd-1.jpg",
        "/images/crowd-2.jpg",
        "/images/crowd-3.jpg"
      ],
      technicalSpecs: {
        "准确率": "≥95%",
        "响应时间": "实时",
        "支持分辨率": "4K/8K",
        "支持协议": "RTSP/RTMP/GB28181",
        "部署方式": "本地服务/云服务器",
        "计算平台": "华为昇腾/算能/瑞芯微/英伟达"
      },
      scenes: [
        {
          title: "商场客流统计",
          description: "统计商场客流量，分析客流趋势，优化运营策略"
        },
        {
          title: "景区管理",
          description: "监控景区客流量，防止拥挤，保障游客安全"
        },
        {
          title: "超市管理",
          description: "分析客流高峰时段，优化人员排班"
        }
      ],
      faqs: [
        {
          question: "支持多人同时进出吗",
          answer: "支持多人同时进出场景，准确率可达95%以上"
        },
        {
          question: "是否需要特殊安装",
          answer: "普通摄像头即可，建议安装在出入口上方，效果最佳"
        },
        {
          question: "数据如何导出",
          answer: "支持多种数据导出格式，可对接现有管理系统"
        }
      ]
    },
    nlp: {
      title: "文本分类算法",
      tag: "热门",
      description: "文本分类算法基于深度学习技术，能够准确识别和分类各种文本内容，包括新闻、评论、文档等。支持多分类和单分类任务，适用于内容审核、信息分类、智能客服等场景。",
      tags: ["智慧政务", "智慧金融", "智慧医疗", "智慧教育"],
      images: [
        "/images/text-class-1.svg",
        "/images/text-class-2.svg",
        "/images/text-class-3.svg"
      ],
      technicalSpecs: {
        "准确率": "≥95%",
        "处理速度": "1000条/秒",
        "支持语言": "中文/英文",
        "模型大小": "500MB",
        "部署方式": "本地服务/云服务器",
        "计算平台": "CPU/GPU"
      },
      scenes: [
        {
          title: "内容审核",
          description: "自动识别和过滤违规内容，提高审核效率"
        },
        {
          title: "智能客服",
          description: "自动分类用户问题，提高客服响应速度"
        },
        {
          title: "文档管理",
          description: "自动分类文档，提高管理效率"
        }
      ],
      faqs: [
        {
          question: "支持哪些文本类型",
          answer: "支持新闻、评论、文档、邮件等多种文本类型，支持中文和英文"
        },
        {
          question: "是否需要标注数据",
          answer: "需要一定量的标注数据进行模型训练，支持迁移学习，可复用预训练模型"
        },
        {
          question: "如何提高准确率",
          answer: "可以通过增加训练数据、优化模型参数、使用领域特定词典等方式提高准确率"
        }
      ]
    },
    sentiment: {
      title: "情感分析算法",
      tag: "热门",
      description: "情感分析算法能够准确识别文本中的情感倾向，包括正面、负面、中性等。适用于舆情监控、产品评价分析、客户反馈分析等场景。",
      tags: ["智慧政务", "智慧零售", "智慧金融", "智慧医疗"],
      images: [
        "/images/sentiment-1.svg",
        "/images/sentiment-2.svg",
        "/images/sentiment-3.svg"
      ],
      technicalSpecs: {
        "准确率": "≥90%",
        "处理速度": "2000条/秒",
        "支持语言": "中文/英文",
        "情感维度": "正面/负面/中性",
        "部署方式": "本地服务/云服务器",
        "计算平台": "CPU/GPU"
      },
      scenes: [
        {
          title: "舆情监控",
          description: "实时监控网络舆情，分析公众情绪"
        },
        {
          title: "产品评价分析",
          description: "分析产品评价，了解用户反馈"
        },
        {
          title: "客户服务",
          description: "分析客户反馈，提升服务质量"
        }
      ],
      faqs: [
        {
          question: "支持哪些情感类型",
          answer: "支持正面、负面、中性三种基本情感类型，可扩展为更细粒度的情感分类"
        },
        {
          question: "如何处理复杂情感",
          answer: "支持多标签分类，可以同时识别文本中的多种情感"
        },
        {
          question: "是否需要标注数据",
          answer: "需要一定量的标注数据进行模型训练，支持迁移学习"
        }
      ]
    },
    ner: {
      title: "命名实体识别算法",
      tag: "热门",
      description: "命名实体识别算法能够准确识别文本中的人名、地名、机构名等实体信息。适用于信息抽取、知识图谱构建、智能问答等场景。",
      tags: ["智慧政务", "智慧金融", "智慧医疗", "智慧教育"],
      images: [
        "/images/ner-1.svg",
        "/images/ner-2.svg",
        "/images/ner-3.svg"
      ],
      technicalSpecs: {
        "准确率": "≥92%",
        "处理速度": "1500条/秒",
        "支持语言": "中文/英文",
        "实体类型": "人名/地名/机构名/时间/数量等",
        "部署方式": "本地服务/云服务器",
        "计算平台": "CPU/GPU"
      },
      scenes: [
        {
          title: "信息抽取",
          description: "从文本中提取关键信息，构建知识库"
        },
        {
          title: "智能问答",
          description: "识别问题中的实体，提高问答准确率"
        },
        {
          title: "文档分析",
          description: "分析文档中的实体信息，提取关键内容"
        }
      ],
      faqs: [
        {
          question: "支持哪些实体类型",
          answer: "支持人名、地名、机构名、时间、数量等多种实体类型，可自定义实体类型"
        },
        {
          question: "如何处理未登录词",
          answer: "采用深度学习技术，结合上下文信息，提高未登录词的识别准确率"
        },
        {
          question: "是否需要标注数据",
          answer: "需要一定量的标注数据进行模型训练，支持迁移学习"
        }
      ]
    },
    qa: {
      title: "智能问答算法",
      tag: "热门",
      description: "智能问答算法基于深度学习技术，能够理解用户问题并给出准确回答。支持开放域问答和特定领域问答，适用于智能客服、知识库问答等场景。",
      tags: ["智慧政务", "智慧金融", "智慧医疗", "智慧教育"],
      images: [
        "/images/qa-1.svg",
        "/images/qa-2.svg",
        "/images/qa-3.svg"
      ],
      technicalSpecs: {
        "准确率": "≥85%",
        "响应时间": "<1秒",
        "支持语言": "中文/英文",
        "问答类型": "开放域/特定领域",
        "部署方式": "本地服务/云服务器",
        "计算平台": "CPU/GPU"
      },
      scenes: [
        {
          title: "智能客服",
          description: "自动回答用户问题，提高服务效率"
        },
        {
          title: "知识库问答",
          description: "基于知识库回答专业问题"
        },
        {
          title: "智能助手",
          description: "提供智能问答服务，提升用户体验"
        }
      ],
      faqs: [
        {
          question: "支持哪些问答类型",
          answer: "支持事实型问答、推理型问答、多轮对话等多种问答类型"
        },
        {
          question: "如何提高回答准确率",
          answer: "可以通过优化知识库、增加训练数据、改进模型结构等方式提高准确率"
        },
        {
          question: "是否需要标注数据",
          answer: "需要一定量的问答对数据进行模型训练，支持迁移学习"
        }
      ]
    }
  }

  const data = algorithmData[category as keyof typeof algorithmData]

  if (!data) {
    return <div>算法不存在</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length)
  }

  // 处理咨询表单提交
  const handleConsultSubmit = async (data: ConsultFormData) => {
    try {
      setIsSubmitting(true)
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      
      if (result.success) {
        toast.success(result.message)
        setIsConsultDialogOpen(false)
        consultForm.reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("提交失败，请稍后重试")
    } finally {
      setIsSubmitting(false)
    }
  }

  // 处理试用申请表单提交
  const handleTrialSubmit = async (data: TrialFormData) => {
    try {
      setIsSubmitting(true)
      const response = await fetch("/api/trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      
      if (result.success) {
        toast.success(result.message)
        setIsTrialDialogOpen(false)
        trialForm.reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error("提交失败，请稍后重试")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* 面包屑导航 */}
      <div className="border-b">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">首页</Link>
            <span>/</span>
            <Link href="/marketplace" className="hover:text-primary">算法商城</Link>
            <span>/</span>
            <span className="text-foreground">{data.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        {/* 算法标题和描述 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            {data.tag && (
              <span className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded">
                {data.tag}
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground mb-6">{data.description}</p>
          <div className="flex flex-wrap gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 算法效果展示 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">效果展示</h2>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={data.images[currentImageIndex]}
                  alt="算法效果展示"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 技术参数 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">技术参数</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(data.technicalSpecs).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg border bg-card"
              >
                <h3 className="text-lg font-semibold mb-2">{key}</h3>
                <p className="text-muted-foreground">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 应用场景 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">应用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.scenes.map((scene, index) => (
              <motion.div
                key={scene.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{scene.title}</h3>
                <p className="text-muted-foreground">{scene.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          <div className="grid gap-6">
            {data.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border bg-card"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-center gap-4">
          <Dialog open={isConsultDialogOpen} onOpenChange={setIsConsultDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="px-8">
                在线咨询
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>在线咨询</DialogTitle>
              </DialogHeader>
              <form onSubmit={consultForm.handleSubmit(handleConsultSubmit)}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Input
                      placeholder="您的姓名"
                      {...consultForm.register("name")}
                      error={consultForm.formState.errors.name?.message}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      placeholder="联系电话"
                      {...consultForm.register("phone")}
                      error={consultForm.formState.errors.phone?.message}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Textarea
                      placeholder="咨询内容"
                      className="min-h-[100px]"
                      {...consultForm.register("content")}
                      error={consultForm.formState.errors.content?.message}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    提交
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isTrialDialogOpen} onOpenChange={setIsTrialDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="px-8">
                申请试用
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>申请试用</DialogTitle>
              </DialogHeader>
              <form onSubmit={trialForm.handleSubmit(handleTrialSubmit)}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Input
                      placeholder="公司名称"
                      {...trialForm.register("company")}
                      error={trialForm.formState.errors.company?.message}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      placeholder="联系人"
                      {...trialForm.register("contact")}
                      error={trialForm.formState.errors.contact?.message}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Input
                      placeholder="联系电话"
                      {...trialForm.register("phone")}
                      error={trialForm.formState.errors.phone?.message}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Textarea
                      placeholder="试用需求说明"
                      className="min-h-[100px]"
                      {...trialForm.register("description")}
                      error={trialForm.formState.errors.description?.message}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    提交
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </motion.div>
  )
} 