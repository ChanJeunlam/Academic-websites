"use client"

import { useLanguage } from "./language-provider"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download } from "lucide-react"

export default function PublicationsSection() {
  const { t, language } = useLanguage()
  const [yearFilter, setYearFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [fieldFilter, setFieldFilter] = useState("all")

  const publications = [
    {
      id: 1,
      titleZh: "高性能计算在多物理场耦合模拟中的应用",
      titleEn: "Applications of High-Performance Computing in Multiphysics Coupling Simulation",
      authors: "Zhang, J., Wang, L., & Smith, J.",
      journal: "Journal of Computational Physics",
      year: 2023,
      type: "journal",
      field: "multiphysics",
      doi: "10.1016/j.jcp.2023.01.001",
      impactFactor: 3.8,
      abstractZh: "本文研究了高性能计算技术在多物理场耦合模拟中的应用，提出了一种新的并行算法，显著提高了计算效率。",
      abstractEn:
        "This paper investigates the application of high-performance computing technologies in multiphysics coupling simulation, proposing a new parallel algorithm that significantly improves computational efficiency.",
    },
    {
      id: 2,
      titleZh: "自适应高阶方法在流体力学中的应用",
      titleEn: "Applications of Adaptive High-Order Methods in Fluid Mechanics",
      authors: "Zhang, J., & Johnson, R.",
      journal: "Journal of Fluid Mechanics",
      year: 2022,
      type: "journal",
      field: "fluid",
      doi: "10.1017/jfm.2022.02.003",
      impactFactor: 4.2,
      abstractZh: "本文提出了一种新的自适应高阶方法，用于求解复杂流体力学问题，提高了数值模拟的精度和效率。",
      abstractEn:
        "This paper proposes a new adaptive high-order method for solving complex fluid mechanics problems, improving the accuracy and efficiency of numerical simulations.",
    },
    {
      id: 3,
      titleZh: "分层网格方法在大规模计算中的应用",
      titleEn: "Applications of Hierarchical Mesh Methods in Large-Scale Computation",
      authors: "Zhang, J., Chen, H., & Miller, T.",
      conference: "International Conference on High Performance Computing",
      year: 2021,
      type: "conference",
      field: "hpc",
      doi: "10.1109/hpc.2021.1234",
      abstractZh: "本文提出了一种新的分层网格方法，用于大规模计算，显著减少了内存占用和计算时间。",
      abstractEn:
        "This paper proposes a new hierarchical mesh method for large-scale computation, significantly reducing memory usage and computational time.",
    },
    {
      id: 4,
      titleZh: "高性能计算框架设计与实现",
      titleEn: "Design and Implementation of High-Performance Computing Framework",
      authors: "Zhang, J.",
      book: "Advances in High Performance Computing",
      publisher: "Springer",
      year: 2020,
      type: "book",
      field: "hpc",
      doi: "10.1007/978-3-030-12345-6_7",
      abstractZh: "本章介绍了高性能计算框架的设计与实现，包括并行算法、负载平衡和通信优化等关键技术。",
      abstractEn:
        "This chapter introduces the design and implementation of high-performance computing frameworks, including key technologies such as parallel algorithms, load balancing, and communication optimization.",
    },
  ]

  const filteredPublications = publications.filter((pub) => {
    return (
      (yearFilter === "all" || pub.year.toString() === yearFilter) &&
      (typeFilter === "all" || pub.type === typeFilter) &&
      (fieldFilter === "all" || pub.field === fieldFilter)
    )
  })

  return (
    <section id="publications" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("publications.title")}</h2>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.year")}
          </label>
          <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.type")}
          </label>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="journal">Journal</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="book">Book</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#34495E] dark:text-gray-300 mb-2">
            {t("publications.field")}
          </label>
          <Select value={fieldFilter} onValueChange={setFieldFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Fields" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="multiphysics">Multiphysics</SelectItem>
              <SelectItem value="fluid">Fluid Mechanics</SelectItem>
              <SelectItem value="hpc">HPC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPublications.map((pub) => (
          <Card key={pub.id} className="hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-[#2C3E50] dark:text-white">
                    {language === "zh" ? pub.titleZh : pub.titleEn}
                  </CardTitle>
                  <CardDescription className="text-[#7F8C8D] dark:text-gray-400 mt-1">{pub.authors}</CardDescription>
                </div>
                <Badge className="bg-[#E67E22] text-white hover:bg-[#D35400]">{pub.year}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#34495E] dark:text-gray-300 mb-4">
                {language === "zh" ? pub.abstractZh : pub.abstractEn}
              </p>
              <div className="text-sm text-[#7F8C8D] dark:text-gray-400">
                {pub.type === "journal" && (
                  <div className="flex items-center">
                    <span className="font-medium mr-2">Journal:</span>
                    <span>{pub.journal}</span>
                    <span className="mx-2">|</span>
                    <span className="font-medium mr-2">Impact Factor:</span>
                    <span>{pub.impactFactor}</span>
                  </div>
                )}
                {pub.type === "conference" && (
                  <div>
                    <span className="font-medium mr-2">Conference:</span>
                    <span>{pub.conference}</span>
                  </div>
                )}
                {pub.type === "book" && (
                  <div>
                    <span className="font-medium mr-2">Book:</span>
                    <span>{pub.book}</span>
                    <span className="mx-2">|</span>
                    <span className="font-medium mr-2">Publisher:</span>
                    <span>{pub.publisher}</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                  {pub.type}
                </Badge>
                <Badge variant="outline" className="bg-[#2C3E50] text-white hover:bg-[#1A252F]">
                  {pub.field}
                </Badge>
              </div>
              <div className="flex space-x-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <FileText className="h-3 w-3" />
                  <span>DOI: {pub.doi}</span>
                </Badge>
                <Badge
                  variant="outline"
                  className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Download className="h-3 w-3" />
                  <span>PDF</span>
                </Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
