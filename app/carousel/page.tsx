import { Carousel } from "@/components/ui/carousel"

export default function CarouselPage() {
  const slides = [
    {
      image: "/img/background.jpg",
      title: "第一张图片",
      description: "这是第一张图片的描述"
    },
    {
      image: "/img/background.jpg",
      title: "第二张图片",
      description: "这是第二张图片的描述"
    },
    {
      image: "/img/background.jpg",
      title: "第三张图片",
      description: "这是第三张图片的描述"
    }
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">图片轮播展示</h1>
      <div className="mx-auto max-w-4xl">
        <Carousel
          slides={slides}
          options={{
            loop: true
          }}
        />
      </div>
    </div>
  )
} 