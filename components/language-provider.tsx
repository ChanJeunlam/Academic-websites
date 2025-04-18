"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  zh: {
    "nav.home": "首页",
    "nav.research": "研究",
    "nav.teaching": "教学",
    "nav.cv": "简历",
    "nav.blog": "博客",
    "nav.contact": "联系",
    "profile.title": "个人简介",
    "profile.position": "博士后研究员",
    "profile.intro1": "我是一名博士后研究员和研究软件工程师，专注于数值模拟和高性能计算。",
    "profile.intro2": "我的研究重点是自适应多物理模拟、高阶方案和高性能计算。",
    "profile.intro3": "在这个网站上，我展示了我的科学研究成果，并撰写关于我感兴趣的科学和软件工程相关话题。",
    "research.title": "研究领域",
    "research.item1": "多物理模拟",
    "research.item2": "自适应高阶方案",
    "research.item3": "分层网格方法",
    "research.item4": "高性能计算",
    "research.item5": "流体力学、空气声学和天体物理学应用",
    "education.title": "教育背景",
    "publications.title": "发表成果",
    "publications.filter": "筛选",
    "publications.year": "年份",
    "publications.type": "类型",
    "publications.field": "领域",
    "teaching.title": "教学经历",
    "contact.title": "联系方式",
    "footer.copyright": "版权所有",
    "language.toggle": "切换语言",
    "research.overview": "概览",
    "research.timeline": "时间轴",
    "research.projects": "项目",
    "research.collaborations": "合作",
    "research.funding": "资助",
    "research.impact": "影响",
    "teaching.courses": "课程",
    "teaching.students": "学生",
    "teaching.resources": "教学资源",
    "contact.info": "联系信息",
    "contact.email": "电子邮件",
    "contact.phone": "电话",
    "contact.address": "地址",
    "contact.message": "发送消息",
    "contact.message.desc": "如有任何问题或合作意向，请填写以下表单联系我。",
    "contact.name": "姓名",
    "contact.name.placeholder": "请输入您的姓名",
    "contact.email.placeholder": "请输入您的电子邮件",
    "contact.subject": "主题",
    "contact.subject.placeholder": "请输入消息主题",
    "contact.message.label": "消息",
    "contact.message.placeholder": "请输入您的消息",
    "contact.send": "发送消息",
    "footer.about": "关于",
    "footer.about.desc": "学术个人主页，展示研究成果、教学经历和学术贡献。",
    "footer.quicklinks": "快速链接",
    "footer.resources": "学术资源",
    "footer.privacy": "隐私政策",
    "footer.terms": "使用条款",
    "cv.title": "简历",
    "cv.download.zh": "下载中文简历",
    "cv.download.en": "下载英文简历",
    "cv.personal": "个人信息",
    "cv.name": "姓名",
    "cv.position": "职位",
    "cv.institution": "机构",
    "cv.email": "邮箱",
    "cv.education": "教育背景",
    "cv.research": "研究经历",
    "cv.teaching": "教学经历",
    "cv.complete": "如需完整简历，请点击上方下载按钮或",
    "cv.contact": "联系我",
    "blog.title": "博客",
    "blog.latest": "最新文章",
    "blog.categories": "分类",
    "blog.tags": "标签",
    "blog.readmore": "阅读更多",
  },
  en: {
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.teaching": "Teaching",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "profile.title": "Profile",
    "profile.position": "Postdoctoral Fellow",
    "profile.intro1":
      "I am a postdoctoral fellow and research software engineer focusing on numerical simulation and high-performance computing.",
    "profile.intro2":
      "My research focus is on numerical methods for adaptive multiphysics simulations, high-order schemes, and high-performance computing.",
    "profile.intro3":
      "On this website I present some of my scientific research and write about things that I find interesting, mostly related to science and software engineering.",
    "research.title": "Research Interests",
    "research.item1": "Multiphysics simulations",
    "research.item2": "Adaptive high-order schemes",
    "research.item3": "Hierarchical mesh methods",
    "research.item4": "High-performance computing",
    "research.item5": "Applications in fluid mechanics, aeroacoustics, and astrophysics",
    "education.title": "Education",
    "publications.title": "Publications",
    "publications.filter": "Filter",
    "publications.year": "Year",
    "publications.type": "Type",
    "publications.field": "Field",
    "teaching.title": "Teaching",
    "contact.title": "Contact",
    "footer.copyright": "Copyright",
    "language.toggle": "Toggle language",
    "research.overview": "Overview",
    "research.timeline": "Timeline",
    "research.projects": "Projects",
    "research.collaborations": "Collaborations",
    "research.funding": "Funding",
    "research.impact": "Impact",
    "teaching.courses": "Courses",
    "teaching.students": "Students",
    "teaching.resources": "Resources",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.message": "Send Message",
    "contact.message.desc": "If you have any questions or collaboration interests, please fill out the form below.",
    "contact.name": "Name",
    "contact.name.placeholder": "Enter your name",
    "contact.email.placeholder": "Enter your email",
    "contact.subject": "Subject",
    "contact.subject.placeholder": "Enter message subject",
    "contact.message.label": "Message",
    "contact.message.placeholder": "Enter your message",
    "contact.send": "Send Message",
    "footer.about": "About",
    "footer.about.desc": "Academic personal website showcasing research, teaching, and scholarly contributions.",
    "footer.quicklinks": "Quick Links",
    "footer.resources": "Academic Resources",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "cv.title": "Curriculum Vitae",
    "cv.download.zh": "Download Chinese CV",
    "cv.download.en": "Download English CV",
    "cv.personal": "Personal Information",
    "cv.name": "Name",
    "cv.position": "Position",
    "cv.institution": "Institution",
    "cv.email": "Email",
    "cv.education": "Education",
    "cv.research": "Research Experience",
    "cv.teaching": "Teaching Experience",
    "cv.complete": "For a complete CV, please click the download button above or",
    "cv.contact": "contact me",
    "blog.title": "Blog",
    "blog.latest": "Latest Posts",
    "blog.categories": "Categories",
    "blog.tags": "Tags",
    "blog.readmore": "Read More",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
