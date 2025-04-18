"use client"

import { useLanguage } from "./language-provider"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"

export default function ResearchSection() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  const researchAreas = [
    {
      id: "multiphysics",
      name: t("research.item1"),
      descriptionZh: "研究多物理场耦合模拟方法，包括流体-结构相互作用、热-机械耦合等复杂系统。",
      descriptionEn:
        "Research on multiphysics coupling simulation methods, including fluid-structure interaction, thermal-mechanical coupling, and other complex systems.",
      image: "/Academic-websites/coupled-flow-thermal-analysis.png",
    },
    {
      id: "adaptive",
      name: t("research.item2"),
      descriptionZh: "开发自适应高阶数值方法，提高计算精度和效率，适用于复杂几何和多尺度问题。",
      descriptionEn:
        "Development of adaptive high-order numerical methods to improve computational accuracy and efficiency, suitable for complex geometries and multiscale problems.",
      image: "/Academic-websites/numerical-simulation-refinement.png",
    },
    {
      id: "mesh",
      name: t("research.item3"),
      descriptionZh: "研究分层网格方法，实现高效的网格细化和粗化，优化计算资源分配。",
      descriptionEn:
        "Research on hierarchical mesh methods, implementing efficient mesh refinement and coarsening, optimizing computational resource allocation.",
      image: "/Academic-websites/hierarchical-mesh-visualization.png",
    },
    {
      id: "hpc",
      name: t("research.item4"),
      descriptionZh: "探索高性能计算技术，包括并行算法、GPU加速和分布式计算框架。",
      descriptionEn:
        "Exploration of high-performance computing technologies, including parallel algorithms, GPU acceleration, and distributed computing frameworks.",
      image: "/Academic-websites/data-vortex.png",
    },
    {
      id: "applications",
      name: t("research.item5"),
      descriptionZh: "将数值方法应用于流体力学、空气声学和天体物理学等领域的实际问题。",
      descriptionEn:
        "Application of numerical methods to practical problems in fluid mechanics, aeroacoustics, and astrophysics.",
      image: "/Academic-websites/computational-aeroacoustics-flow.png",
    },
  ]

  return (
    <section id="research" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("research.title")}</h2>

      <div className="mb-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">{t("research.overview")}</TabsTrigger>
            <TabsTrigger value="timeline">{t("research.timeline")}</TabsTrigger>
            <TabsTrigger value="projects">{t("research.projects")}</TabsTrigger>
            <TabsTrigger value="collaborations">{t("research.collaborations")}</TabsTrigger>
            <TabsTrigger value="funding">{t("research.funding")}</TabsTrigger>
            <TabsTrigger value="impact">{t("research.impact")}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area) => (
                <Card key={area.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={area.image || "/placeholder.svg"}
                      alt={area.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#2C3E50] dark:text-white">{area.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#34495E] dark:text-gray-300">
                      {language === "zh" ? area.descriptionZh : area.descriptionEn}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-[#E67E22] text-white hover:bg-[#D35400]">
                        研究
                      </Badge>
                      <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                        {area.id}
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <div className="relative border-l-2 border-[#2C3E50] ml-4 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">2023 - {language === "zh" ? "现在" : "Present"}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">
                  {language === "zh" ? "高性能计算框架开发" : "High-Performance Computing Framework Development"}
                </h3>
                <p className="text-[#34495E] mt-2">
                  {language === "zh"
                    ? "开发新一代高性能计算框架，支持异构计算和动态负载平衡。"
                    : "Development of a new generation high-performance computing framework, supporting heterogeneous computing and dynamic load balancing."}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">2020 - 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">
                  {language === "zh" ? "自适应多物理场模拟" : "Adaptive Multiphysics Simulation"}
                </h3>
                <p className="text-[#34495E] mt-2">
                  {language === "zh"
                    ? "研究复杂多物理场耦合问题的自适应数值方法，提高模拟精度和效率。"
                    : "Research on adaptive numerical methods for complex multiphysics coupling problems, improving simulation accuracy and efficiency."}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#E67E22]"></div>
                <div className="mb-2">
                  <span className="text-[#7F8C8D]">2017 - 2020</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50]">
                  {language === "zh" ? "分层网格方法" : "Hierarchical Mesh Methods"}
                </h3>
                <p className="text-[#34495E] mt-2">
                  {language === "zh"
                    ? "开发分层网格方法，实现高效的网格细化和粗化，优化计算资源分配。"
                    : "Development of hierarchical mesh methods, implementing efficient mesh refinement and coarsening, optimizing computational resource allocation."}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {language === "zh" ? "高性能流体动力学模拟" : "High-Performance Fluid Dynamics Simulation"}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">2021 - 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {language === "zh"
                      ? "开发高性能流体动力学模拟软件，支持大规模并行计算和复杂几何建模。"
                      : "Development of high-performance fluid dynamics simulation software, supporting large-scale parallel computing and complex geometric modeling."}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {language === "zh" ? "自适应网格细化" : "Adaptive Mesh Refinement"}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">2019 - 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {language === "zh"
                      ? "研究自适应网格细化技术，提高计算精度和效率，适用于多尺度问题。"
                      : "Research on adaptive mesh refinement techniques, improving computational accuracy and efficiency, suitable for multiscale problems."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collaborations">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-university-crest.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {language === "zh" ? "清华大学" : "Tsinghua University"}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-research-logo.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {language === "zh" ? "中科院计算所" : "Institute of Computing Technology, CAS"}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/global-knowledge-emblem.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">MIT</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <Image src="/Academic-websites/abstract-tech-logo.png" alt="Collaboration Partner" width={100} height={100} />
                </div>
                <p className="text-center text-[#34495E] font-medium">
                  {language === "zh" ? "华为研究院" : "Huawei Research Institute"}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="funding">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {language === "zh" ? "国家自然科学基金" : "National Natural Science Foundation"}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">2022 - 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {language === "zh"
                      ? "高性能计算与多物理场耦合模拟研究"
                      : "Research on High-Performance Computing and Multiphysics Coupling Simulation"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">
                    {language === "zh" ? "科技部重点研发计划" : "Ministry of Science and Technology Key R&D Program"}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D]">2020 - 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {language === "zh"
                      ? "新一代高性能计算框架开发与应用"
                      : "Development and Application of New Generation High-Performance Computing Framework"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">25+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{language === "zh" ? "发表SCI论文" : "SCI Papers Published"}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">{language === "zh" ? "引用次数" : "Citations"}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#E67E22]">10+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E]">
                    {language === "zh" ? "国际合作项目" : "International Collaboration Projects"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
