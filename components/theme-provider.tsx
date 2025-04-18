"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useTheme as useNextTheme } from "next-themes"

type Theme = "dark" | "light" | "system"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // 确保在客户端渲染时才挂载组件
  useEffect(() => {
    setMounted(true)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  // 直接使用 next-themes 提供的 useTheme hook
  return useNextTheme()
}