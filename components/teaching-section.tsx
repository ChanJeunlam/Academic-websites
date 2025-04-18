"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { FileText, Users } from "lucide-react"
import Image from "next/image"

export default function TeachingSection() {
  const { t, language } = useLanguage()

  const courses = [
    {
      id: 1,
      codeZh: "CS401",
      codeEn: "CS401",
      nameZh: "高性能计算",
      nameEn: "High-Performance Computing",
      semesterZh: "2023秋季",
      semesterEn: "Fall 2023",
      levelZh: "研究生",
      levelEn: "Graduate",
      descriptionZh: "本课程介绍高性能计算的基本概念、架构和编程模型，包括并行算法、MPI、OpenMP和CUDA等。",
      descriptionEn:
        "This course introduces the basic concepts, architectures, and programming models of high-performance computing, including parallel algorithms, MPI, OpenMP, and CUDA.",
      syllabus: "/path/to/syllabus.pdf",
      students: 45,
      rating: 4.8,
    },
    {
      id: 2,
      codeZh: "CS302",
      codeEn: "CS302",
      nameZh: "数值分析",
      nameEn: "Numerical Analysis",
      semesterZh: "2023春季",
      semesterEn: "Spring 2023",
      levelZh: "本科生",
      levelEn: "Undergraduate",
      descriptionZh: "本课程介绍数值分析的基本理论和方法，包括插值、数值积分、常微分方程数值解和偏微分方程数值解等。",
      descriptionEn:
        "This course introduces the basic theories and methods of numerical analysis, including interpolation, numerical integration, numerical solutions of ordinary differential equations and partial differential equations.",
      syllabus: "/path/to/syllabus.pdf",
      students: 60,
      rating: 4.6,
    },
    {
      id: 3,
      codeZh: "CS501",
      codeEn: "CS501",
      nameZh: "计算流体力学",
      nameEn: "Computational Fluid Dynamics",
      semesterZh: "2022秋季",
      semesterEn: "Fall 2022",
      levelZh: "研究生",
      levelEn: "Graduate",
      descriptionZh: "本课程介绍计算流体力学的基本理论和数值方法，包括有限差分法、有限体积法和有限元法等。",
      descriptionEn:
        "This course introduces the basic theories and numerical methods of computational fluid dynamics, including finite difference methods, finite volume methods, and finite element methods.",
      syllabus: "/path/to/syllabus.pdf",
      students: 35,
      rating: 4.7,
    },
  ]

  return (
    <section id="teaching" className="py-12">
      <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-white mb-8">{t("teaching.title")}</h2>

      <Tabs defaultValue="courses">
        <TabsList className="mb-8">
          <TabsTrigger value="courses">{t("teaching.courses")}</TabsTrigger>
          <TabsTrigger value="students">{t("teaching.students")}</TabsTrigger>
          <TabsTrigger value="resources">{t("teaching.resources")}</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-[#2C3E50] dark:text-white">
                        {language === "zh" ? course.nameZh : course.nameEn}
                      </CardTitle>
                      <CardDescription className="text-[#7F8C8D] dark:text-gray-400 mt-1">
                        {course.codeEn} | {language === "zh" ? course.levelZh : course.levelEn}
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#E67E22] text-white hover:bg-[#D35400]">
                      {language === "zh" ? course.semesterZh : course.semesterEn}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#34495E] dark:text-gray-300 mb-4">
                    {language === "zh" ? course.descriptionZh : course.descriptionEn}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-[#7F8C8D] dark:text-gray-400">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>
                        {course.students} {language === "zh" ? "学生" : "Students"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium">评分:</span>
                      <div className="flex items-center ml-1">
                        <span>{course.rating}/5.0</span>
                        <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full ml-2">
                          <div
                            className="h-full bg-[#E67E22] rounded-full"
                            style={{ width: `${(course.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge
                    variant="outline"
                    className="flex items-center space-x-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <FileText className="h-3 w-3" />
                    <span>教学大纲</span>
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">指导学生</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/Academic-websites/focused-learner.png" alt="Student" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-[#34495E] dark:text-gray-300">李明</p>
                      <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                        {language === "zh" ? "博士生 (2021-至今)" : "Ph.D. Student (2021-Present)"}
                      </p>
                      <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                        {language === "zh" ? "研究方向：高性能计算" : "Research Focus: High-Performance Computing"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/Academic-websites/focused-learner.png" alt="Student" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-[#34495E] dark:text-gray-300">王芳</p>
                      <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                        {language === "zh" ? "硕士生 (2022-至今)" : "Master's Student (2022-Present)"}
                      </p>
                      <p className="text-sm text-[#7F8C8D] dark:text-gray-400">
                        {language === "zh" ? "研究方向：数值方法" : "Research Focus: Numerical Methods"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">学生评价</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "教学质量" : "Teaching Quality"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.5/5</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "课程内容" : "Course Content"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.4/5</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <p className="font-medium text-[#34495E] dark:text-gray-300">
                        {language === "zh" ? "答疑解惑" : "Q&A Support"}
                      </p>
                      <div className="flex-grow mx-4">
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-[#E67E22] rounded-full" style={{ width: "94%" }}></div>
                        </div>
                      </div>
                      <p className="text-[#34495E] dark:text-gray-300">4.7/5</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg italic text-[#34495E] dark:text-gray-300">
                    {language === "zh"
                      ? "教授的课程内容丰富，讲解清晰，对学生提问耐心解答，是一位非常优秀的老师。"
                      : "The professor's course content is rich, explanations are clear, and patiently answers student questions. A truly excellent teacher."}
                    <p className="text-right text-sm text-[#7F8C8D] dark:text-gray-400 mt-2">
                      — {language === "zh" ? "匿名学生" : "Anonymous Student"}, 2023
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "讲义" : "Lecture Notes"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "高性能计算导论" : "Introduction to High-Performance Computing"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "并行算法设计" : "Parallel Algorithm Design"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "数值方法基础" : "Fundamentals of Numerical Methods"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "实验指导" : "Lab Guides"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "MPI编程实验" : "MPI Programming Lab"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "OpenMP多线程编程" : "OpenMP Multithreaded Programming"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "CUDA GPU编程" : "CUDA GPU Programming"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50] dark:text-white">
                  {language === "zh" ? "参考资料" : "References"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "推荐书籍清单" : "Recommended Books List"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "学术论文推荐" : "Recommended Academic Papers"}</span>
                  </li>
                  <li className="flex items-center text-[#34495E] dark:text-gray-300">
                    <FileText className="h-4 w-4 mr-2 text-[#E67E22]" />
                    <span>{language === "zh" ? "在线学习资源" : "Online Learning Resources"}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
