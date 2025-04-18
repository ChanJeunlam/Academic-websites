"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Github, Linkedin, Mail, BookOpen } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.about")}</h3>
            <p className="text-gray-300">{t("footer.about.desc")}</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-300 hover:text-white" />
              </Link>
              <Link href="#" aria-label="ResearchGate">
                <BookOpen className="h-5 w-5 text-gray-300 hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link href="#research" className="text-gray-300 hover:text-white">
                  研究
                </Link>
              </li>
              <li>
                <Link href="#publications" className="text-gray-300 hover:text-white">
                  发表成果
                </Link>
              </li>
              <li>
                <Link href="#teaching" className="text-gray-300 hover:text-white">
                  教学
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  联系
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Google Scholar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ResearchGate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  ORCID
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Scopus
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} 学术个人主页. {t("footer.copyright")}.
          </p>
          <p className="mt-2">
            <Link href="#" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            {" | "}
            <Link href="#" className="hover:text-white">
              {t("footer.terms")}
            </Link>
          </p>
          <p className="mt-2">ORCID: 0000-0000-0000-0000</p>
        </div>
      </div>
    </footer>
  )
}
