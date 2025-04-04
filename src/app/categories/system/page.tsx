'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SystemPage() {
  const systemLanguages = [
    {
      name: "C",
      description: "C是一种通用的编程语言，以高效、可移植和低级内存访问著称，广泛用于操作系统、嵌入式系统和性能关键型应用。",
      difficulty: "困难",
      jobProspect: "良好",
      salary: "良好",
      tag: "底层编程",
      link: "/languages/javascript"
    },
    {
      name: "C++",
      description: "C++是C语言的扩展，增加了面向对象特性、模板和标准库，广泛用于系统软件、游戏开发和高性能应用。",
      difficulty: "困难",
      jobProspect: "良好",
      salary: "优秀",
      tag: "性能关键",
      link: "/languages/cpp"
    },
    {
      name: "Rust",
      description: "Rust是一种系统编程语言，专注于安全性、并发和性能，提供内存安全保证而不需要垃圾回收，适合系统编程和WebAssembly。",
      difficulty: "困难",
      jobProspect: "良好",
      salary: "优秀",
      tag: "内存安全",
      link: "/languages/javascript"
    },
    {
      name: "Assembly",
      description: "汇编语言是低级编程语言，直接对应处理器指令集，用于需要极致性能优化、嵌入式系统和底层硬件交互的场景。",
      difficulty: "非常困难",
      jobProspect: "一般",
      salary: "良好",
      tag: "底层编程",
      link: "/languages/javascript"
    },
    {
      name: "Go",
      description: "Go是Google开发的静态类型编译语言，专注于简单性和效率，特别适合构建高性能的网络服务和分布式系统。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "高性能",
      link: "/languages/go"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">系统编程语言</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            系统编程关注底层软件开发，包括操作系统、驱动程序、嵌入式系统和性能关键型应用，需要对硬件和内存管理有深入理解。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {systemLanguages.map((language, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-red-500 transition-colors duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{language.name}</h2>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
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
                          className={`bg-red-500 h-2.5 rounded-full ${
                            language.difficulty === "中等" ? "w-3/5" : 
                            language.difficulty === "困难" ? "w-4/5" : "w-5/5"
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
                          className={`bg-red-500 h-2.5 rounded-full ${
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
