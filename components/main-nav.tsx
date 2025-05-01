import * as React from 'react'
import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

interface MainNavProps {
  items?: {
    title: string
    href: string
    children?: {
      title: string
      href: string
    }[]
  }[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.map((item, index) => (
        <div key={index} className="relative group">
          <Link
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
          {item.children && (
            <div className="absolute top-full left-0 hidden group-hover:block w-48 py-2 bg-background shadow-lg rounded-md">
              {item.children.map((child, childIndex) => (
                <Link
                  key={childIndex}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-foreground/60 hover:text-primary hover:bg-muted"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
