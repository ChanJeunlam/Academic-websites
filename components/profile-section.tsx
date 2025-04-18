"use client"

import Image from "next/image"
import { useLanguage } from "./language-provider"
import { Mail, Github, Linkedin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[#2C3E50] dark:border-[#E67E22]">
            <Image
              src="/Academic-websites/thoughtful-scholar.png"
              alt="Profile Photo"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-[#2C3E50] dark:text-white">{t("profile.position")}</h1>
          <p className="text-[#7F8C8D] dark:text-gray-400">数值模拟研究组 | Numerical Simulation Research Group</p>
          <p className="text-[#7F8C8D] dark:text-gray-400">
            计算科学与工程学院 | School of Computational Science and Engineering
          </p>
          <div className="flex space-x-3 mt-4">
            <Button variant="outline" size="icon" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="ResearchGate">
              <BookOpen className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro1")}</p>
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro2")}</p>
            <p className="text-[#34495E] dark:text-gray-300 leading-relaxed">{t("profile.intro3")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {t("research.title")}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#34495E] dark:text-gray-300">
                <li>{t("research.item1")}</li>
                <li>{t("research.item2")}</li>
                <li>{t("research.item3")}</li>
                <li>{t("research.item4")}</li>
                <li>{t("research.item5")}</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2C3E50] dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                {t("education.title")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-1">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">
                      Dr.-Ing. in Computational Engineering Science, 2017
                    </p>
                    <p className="text-[#7F8C8D] dark:text-gray-400">RWTH Aachen University, Germany</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-1">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">
                      Dipl.-Ing. in Aerospace Engineering, 2011
                    </p>
                    <p className="text-[#7F8C8D] dark:text-gray-400">University of Stuttgart, Germany</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-1">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[#34495E] dark:text-gray-300">MS in Aerospace Engineering, 2010</p>
                    <p className="text-[#7F8C8D] dark:text-gray-400">Georgia Institute of Technology, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
