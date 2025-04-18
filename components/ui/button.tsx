import * as React from "react"
import { cn } from "@/lib/utils"

// 添加这个接口来定义 variant 和 size 属性
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

// 使用新的 ButtonProps 接口替代 React.ButtonHTMLAttributes<HTMLButtonElement>
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
          className,
          variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          variant === "outline" && "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          size === "default" && "px-4 py-2",
          size === "sm" && "px-3 py-1.5 rounded-md",
          size === "lg" && "px-8 py-3 rounded-md",
          size === "icon" && "h-9 w-9",
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

// 为 Badge 组件添加类型定义
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className,
          variant === "default" && "bg-secondary text-secondary-foreground border-transparent",
          variant === "secondary" && "border-transparent bg-primary text-primary-foreground",
          variant === "destructive" && "border-transparent bg-destructive text-destructive-foreground",
          variant === "outline" && "text-foreground",
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Badge.displayName = "Badge"

export { Button, Badge }
