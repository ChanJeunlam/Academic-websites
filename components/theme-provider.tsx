"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type Theme = "dark" | "light" | "system"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // 确保在客户端渲染时才挂载组件
  useEffect(() => {
    setMounted(true)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  const nextThemes = useContext(NextThemesProvider)

  if (!nextThemes) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return nextThemes
}
