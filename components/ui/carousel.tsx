"use client"

import * as React from "react"
import { useCallback } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

type CarouselProps = {
  options?: EmblaOptionsType
  slides: {
    image: string
    title?: string
    description?: string
  }[]
  className?: string
}

export function Carousel({ options, slides, className }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0"
            >
              <div className="relative aspect-video w-full">
                <img
                  src={slide.image}
                  alt={slide.title || `Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 text-white">
                    {slide.title && (
                      <h3 className="text-2xl font-bold">{slide.title}</h3>
                    )}
                    {slide.description && (
                      <p className="mt-2 text-center">{slide.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        onClick={scrollPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        onClick={scrollNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}
