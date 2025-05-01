import { NextResponse } from "next/server"
import { z } from "zod"

// 定义表单验证规则
const consultSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号码"),
  content: z.string().min(10, "咨询内容至少需要10个字符"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // 验证表单数据
    const validatedData = consultSchema.parse(body)
    
    // TODO: 这里可以添加发送邮件或保存到数据库的逻辑
    
    return NextResponse.json({
      success: true,
      message: "咨询提交成功，我们会尽快与您联系"
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: error.errors[0].message },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: "提交失败，请稍后重试" },
      { status: 500 }
    )
  }
} 