'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FrontendPage() {
  const frontendLanguages = [
    {
      name: "JavaScript",
      description: "JavaScript是一种高级的、解释型的编程语言，是Web的核心技术之一，几乎所有现代网站都使用JavaScript。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "网络标准",
      link: "/languages/javascript"
    },
    {
      name: "TypeScript",
      description: "TypeScript是JavaScript的超集，添加了静态类型定义，提高了代码质量和开发效率，特别适合大型项目。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "类型安全",
      link: "/languages/typescript"
    },
    {
      name: "HTML/CSS",
      description: "HTML和CSS是Web开发的基础，HTML提供网页结构，CSS负责样式和布局，是前端开发的必备技能。",
      difficulty: "简单",
      jobProspect: "良好",
      salary: "中等",
      tag: "基础技能",
      link: "/languages/html-css"
    },
    {
      name: "React",
      description: "React是由Facebook开发的JavaScript库，用于构建用户界面，特别是单页应用。它使用组件化思想和虚拟DOM提高性能。",
      difficulty: "中等",
      jobProspect: "极好",
      salary: "优秀",
      tag: "组件化",
      link: "/languages/javascript"
    },
    {
      name: "Vue.js",
      description: "Vue.js是一个渐进式JavaScript框架，用于构建用户界面。它的设计易于上手，同时也能满足复杂应用的需求。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "渐进式框架",
      link: "/languages/vue"
    },
    {
      name: "Angular",
      description: "Angular是由Google维护的开源前端框架，提供了完整的解决方案，包括模板、数据绑定、路由和依赖注入等。",
      difficulty: "困难",
      jobProspect: "良好",
      salary: "优秀",
      tag: "企业首选",
      link: "/languages/javascript"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">前端开发语言</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            前端开发关注用户界面和交互体验，使用HTML、CSS和JavaScript等技术构建网站和Web应用的客户端部分。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {frontendLanguages.map((language, index) => (
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
