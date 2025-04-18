"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Menu, X, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-[#2C3E50]">
            {language === "zh" ? "张教授" : "Prof. Zhang"}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.home")}
          </Link>
          <Link href="#research" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.research")}
          </Link>
          <Link href="#teaching" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.teaching")}
          </Link>
          <Link href="/cv" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.cv")}
          </Link>
          <Link href="/blog" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.blog")}
          </Link>
          <Link href="#contact" className="text-[#34495E] hover:text-[#E67E22]">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label={t("language.toggle")}>
            <Globe className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#research"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.research")}
            </Link>
            <Link
              href="#teaching"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.teaching")}
            </Link>
            <Link
              href="/cv"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.cv")}
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.blog")}
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-[#34495E] hover:text-[#E67E22]"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
