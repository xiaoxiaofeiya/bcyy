'use client'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MobilePage() {
  const mobileLanguages = [
    {
      name: "Swift",
      description: "Swift是Apple开发的编程语言，用于iOS、macOS、watchOS和tvOS应用开发，以安全、性能和现代语法特性著称。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "iOS开发",
      link: "/languages/swift"
    },
    {
      name: "Kotlin",
      description: "Kotlin是一种跨平台的静态类型编程语言，被Google推荐用于Android开发，提供了比Java更简洁的语法和更多现代特性。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "优秀",
      tag: "Android开发",
      link: "/languages/kotlin"
    },
    {
      name: "React Native",
      description: "React Native是Facebook开发的框架，允许使用JavaScript和React构建原生移动应用，一套代码可运行在iOS和Android平台。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "跨平台",
      link: "/languages/javascript"
    },
    {
      name: "Flutter/Dart",
      description: "Flutter是Google的UI工具包，使用Dart语言，可以构建美观、原生编译的多平台应用，包括移动、Web、桌面和嵌入式设备。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "跨平台",
      link: "/languages/javascript"
    },
    {
      name: "Java (Android)",
      description: "Java是Android开发的传统语言，虽然Google现在推荐Kotlin，但Java仍被广泛用于Android应用开发，拥有庞大的生态系统。",
      difficulty: "中等",
      jobProspect: "良好",
      salary: "良好",
      tag: "Android开发",
      link: "/languages/java"
    },
    {
      name: "Objective-C",
      description: "Objective-C是iOS和macOS开发的传统语言，虽然Swift正在取代它，但许多现有应用仍使用Objective-C，了解它对维护旧代码很重要。",
      difficulty: "困难",
      jobProspect: "一般",
      salary: "良好",
      tag: "iOS开发",
      link: "/languages/javascript"
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">移动应用开发语言</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            移动应用开发专注于为智能手机和平板电脑创建应用程序，包括原生开发（iOS、Android）和跨平台解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mobileLanguages.map((language, index) => (
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
