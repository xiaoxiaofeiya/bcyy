'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BackendPage() {
  const backendLanguages = [
    {
      name: "Python",
      description: "Python是一种解释型、高级、通用型编程语言，以简洁易读的语法著称，广泛应用于Web开发、数据分析、人工智能等领域。",
      difficulty: "简单",
      jobProspect: "极好",
      salary: "优秀",
      tag: "行业标准",
      link: "/languages/python-ai"
    },
    {
      name: "Java",
      description: "Java是一种广泛使用的面向对象编程语言，具有'一次编写，到处运行'的特性，常用于企业级应用、Android开发和大型系统。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "企业首选",
      link: "/languages/java"
    },
    {
      name: "PHP",
      description: "PHP是一种专为Web开发设计的脚本语言，可嵌入HTML中，被广泛用于构建动态网站和Web应用程序。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "中等",
      tag: "Web开发",
      link: "/languages/php"
    },
    {
      name: "Ruby",
      description: "Ruby是一种动态、开源的编程语言，注重简洁和生产力，通过Ruby on Rails框架在Web开发领域广受欢迎。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "开发效率",
      link: "/languages/ruby"
    },
    {
      name: "C#",
      description: "C#是微软开发的面向对象编程语言，是.NET框架的一部分，广泛用于Windows应用、游戏开发和企业软件。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "微软生态",
      link: "/languages/csharp"
    },
    {
      name: "Go",
      description: "Go是Google开发的静态类型编译语言，专注于简单性和效率，特别适合构建高性能的网络服务和分布式系统。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "高性能",
      link: "/languages/go"
    },
    {
      name: "Node.js",
      description: "Node.js是基于Chrome V8引擎的JavaScript运行环境，使开发者能够使用JavaScript构建服务器端应用程序。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "全栈开发",
      link: "/languages/javascript"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">后端开发语言</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            后端开发关注服务器端逻辑和数据处理，负责构建API、处理数据库操作和实现业务逻辑，是Web应用和软件系统的核心。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {backendLanguages.map((language, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-blue-500 transition-colors duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{language.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
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
                          className={`bg-blue-500 h-2.5 rounded-full ${
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
                          className={`bg-blue-500 h-2.5 rounded-full ${
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
