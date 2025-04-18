import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CVPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#2C3E50]">简历 | Curriculum Vitae</h1>
          <div className="flex space-x-2">
            <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">
              <Download className="h-4 w-4 mr-2" />
              下载中文简历
            </Button>
            <Button className="bg-[#2C3E50] hover:bg-[#1A252F] text-white">
              <Download className="h-4 w-4 mr-2" />
              Download English CV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2C3E50]">个人信息 | Personal Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium text-[#34495E]">姓名 | Name</h3>
                  <p className="text-[#7F8C8D]">张教授 | Prof. Zhang</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">职位 | Position</h3>
                  <p className="text-[#7F8C8D]">博士后研究员 | Postdoctoral Fellow</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">机构 | Institution</h3>
                  <p className="text-[#7F8C8D]">数值模拟研究组 | Numerical Simulation Research Group</p>
                  <p className="text-[#7F8C8D]">计算科学与工程学院 | School of Computational Science and Engineering</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#34495E]">邮箱 | Email</h3>
                  <p className="text-[#7F8C8D]">professor@university.edu</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">教育背景 | Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">Dr.-Ing. in Computational Engineering Science, 2017</h3>
                    <p className="text-[#7F8C8D]">RWTH Aachen University, Germany</p>
                    <p className="text-[#34495E] mt-1">论文题目：高性能计算在多物理场耦合模拟中的应用</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">Dipl.-Ing. in Aerospace Engineering, 2011</h3>
                    <p className="text-[#7F8C8D]">University of Stuttgart, Germany</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">MS in Aerospace Engineering, 2010</h3>
                    <p className="text-[#7F8C8D]">Georgia Institute of Technology, USA</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">研究经历 | Research Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">博士后研究员 | Postdoctoral Fellow (2020-至今)</h3>
                    <p className="text-[#7F8C8D]">数值模拟研究组 | Numerical Simulation Research Group</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>开发高性能计算框架</li>
                      <li>研究多物理场耦合模拟方法</li>
                      <li>指导研究生科研工作</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">研究助理 | Research Assistant (2017-2020)</h3>
                    <p className="text-[#7F8C8D]">RWTH Aachen University, Germany</p>
                    <ul className="list-disc list-inside mt-2 text-[#34495E]">
                      <li>开发分层网格方法</li>
                      <li>参与欧盟高性能计算项目</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2C3E50]">教学经历 | Teaching Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-[#34495E]">高性能计算 | High-Performance Computing (2023)</h3>
                    <p className="text-[#7F8C8D]">研究生课程 | Graduate Course</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">数值分析 | Numerical Analysis (2022-2023)</h3>
                    <p className="text-[#7F8C8D]">本科生课程 | Undergraduate Course</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#34495E]">
                      计算流体力学 | Computational Fluid Dynamics (2021-2022)
                    </h3>
                    <p className="text-[#7F8C8D]">研究生课程 | Graduate Course</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#7F8C8D]">
            如需完整简历，请点击上方下载按钮或
            <Link href="#contact" className="text-[#E67E22] hover:underline">
              联系我
            </Link>
            。
          </p>
          <p className="text-[#7F8C8D]">
            For a complete CV, please click the download button above or
            <Link href="#contact" className="text-[#E67E22] hover:underline">
              contact me
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
