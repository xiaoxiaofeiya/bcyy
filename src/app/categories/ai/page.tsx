'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AIDataSciencePage() {
  const aiDataScienceLanguages = [
    {
      name: "Python",
      description: "Python在AI和数据科学领域占据主导地位，拥有TensorFlow、PyTorch、scikit-learn等强大的库和框架。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "行业标准",
      link: "/languages/python-ai"
    },
    {
      name: "R",
      description: "R是专为统计分析和数据可视化设计的语言，在学术研究和数据分析领域广泛使用。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "统计分析",
      link: "/languages/r"
    },
    {
      name: "Julia",
      description: "Julia是一种高性能的科学计算语言，旨在结合Python的易用性和C的性能，适用于复杂数值计算。",
      difficulty: "困难",
      jobProspect: "一般",
      salary: "良好",
      tag: "高性能计算",
      link: "/languages/julia"
    },
    {
      name: "MATLAB",
      description: "MATLAB是一种用于数值计算的高级语言和交互式环境，在工程、科学研究和金融领域广泛使用。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "科学计算",
      link: "/languages/javascript"
    },
    {
      name: "Scala",
      description: "Scala结合了面向对象和函数式编程，在大数据处理和分布式计算中常与Apache Spark一起使用。",
      difficulty: "困难",
      jobProspect: "良好",
      salary: "优秀",
      tag: "大数据",
      link: "/languages/javascript"
    },
    {
      name: "SQL",
      description: "SQL是用于管理关系数据库的标准语言，在数据科学中用于数据提取、转换和分析，是数据专业人士的基本技能。",
      difficulty: "简单",
      jobProspect: "极好",
      salary: "良好",
      tag: "数据查询",
      link: "/languages/javascript"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">AI与数据科学语言</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            AI与数据科学领域专注于从数据中提取洞察和构建智能系统，包括机器学习、深度学习、统计分析和数据可视化。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {aiDataScienceLanguages.map((language, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-purple-500 transition-colors duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{language.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    {language.tag}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{language.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">学习难度</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`bg-purple-500 h-2.5 rounded-full ${
                            language.difficulty === "简单" ? "w-1/3" : 
                            language.difficulty === "中等" ? "w-3/5" : "w-4/5"
                          }`}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{language.difficulty}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">就业前景</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`bg-purple-500 h-2.5 rounded-full ${
                            language.jobProspect === "一般" ? "w-2/5" : 
                            language.jobProspect === "良好" ? "w-3/5" : "w-4/5"
                          }`}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{language.jobProspect}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">薪资水平</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                        <div 
                          className={`bg-green-500 h-2.5 rounded-full ${
                            language.salary === "中等" ? "w-2/5" : 
                            language.salary === "良好" ? "w-3/5" : "w-4/5"
                          }`}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{language.salary}</span>
                    </div>
                  </div>
                </div>
                
                <Link href={language.link}>
                  <Button variant="outline" className="w-full">
                    查看详情 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">不确定哪种语言适合你？</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            通过我们的AI助手，根据你的兴趣、经验和职业目标获取个性化推荐。
          </p>
          <Link href="/chat">
            <Button size="lg" className="rounded-md px-8">
              咨询AI助手
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* 广告位 */}
        <div className="mt-16">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500 text-sm">广告位</p>
            <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-400">728x90 广告横幅</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
