"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("contact.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2C3E50] dark:text-white">{t("contact.info")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-2">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#34495E] dark:text-gray-300">{t("contact.email")}</p>
                  <p className="text-[#7F8C8D] dark:text-gray-400">professor@university.edu</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-2">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#34495E] dark:text-gray-300">{t("contact.phone")}</p>
                  <p className="text-[#7F8C8D] dark:text-gray-400">+86 123 4567 8910</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-[#2C3E50] dark:bg-[#E67E22] rounded-full p-2">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#34495E] dark:text-gray-300">{t("contact.address")}</p>
                  <p className="text-[#7F8C8D] dark:text-gray-400">
                    计算科学与工程学院
                    <br />
                    某某大学
                    <br />
                    北京市海淀区
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2C3E50] dark:text-white">{t("contact.message")}</CardTitle>
              <CardDescription className="text-[#7F8C8D] dark:text-gray-400">
                {t("contact.message.desc")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#34495E] dark:text-gray-300">
                      {t("contact.name")}
                    </label>
                    <Input id="name" placeholder={t("contact.name.placeholder")} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#34495E] dark:text-gray-300">
                      {t("contact.email")}
                    </label>
                    <Input id="email" type="email" placeholder={t("contact.email.placeholder")} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-[#34495E] dark:text-gray-300">
                    {t("contact.subject")}
                  </label>
                  <Input id="subject" placeholder={t("contact.subject.placeholder")} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#34495E] dark:text-gray-300">
                    {t("contact.message.label")}
                  </label>
                  <Textarea id="message" placeholder={t("contact.message.placeholder")} rows={4} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white">
                <Send className="h-4 w-4 mr-2" />
                {t("contact.send")}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
