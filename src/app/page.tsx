'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRight, Code, Database, Cpu, Smartphone, Brain } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              编程语言指南
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              为编程新手提供清晰的语言选择指南，帮助你根据自己的兴趣、目标和应用场景选择最合适的编程语言
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/chat">
                <Button size="lg" className="rounded-md px-8 py-3 bg-white text-blue-600 hover:bg-gray-100">
                  开始对话
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Programming Section */}
      <section className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              为什么要了解不同的编程语言？
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              在编程世界中，不同的语言就像不同的工具，各有各的特点和适用场景。
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">提高开发效率</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        避免用复杂的语言解决简单的问题
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">适应特定领域</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        更好地适应特定领域的需求
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">职业发展</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        为未来的职业发展打下更坚实的基础
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-medium text-gray-900">团队合作</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        在团队合作中更好地理解和参与项目
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Language Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              编程语言分类
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              根据应用场景和用途，编程语言可以分为以下几类
            </p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/categories/frontend">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-orange-500 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Code className="h-8 w-8 text-orange-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">前端开发</h3>
                  </div>
                  <p className="mt-4 text-gray-600">构建用户可见的界面，包括网页布局、样式和交互效果。</p>
                  <div className="mt-6 flex items-center text-orange-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/categories/backend">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-blue-500 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Database className="h-8 w-8 text-blue-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">后端开发</h3>
                  </div>
                  <p className="mt-4 text-gray-600">支持应用程序的服务器端，包括数据处理、业务逻辑和服务器管理。</p>
                  <div className="mt-6 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/categories/mobile">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-green-500 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Smartphone className="h-8 w-8 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">移动应用</h3>
                  </div>
                  <p className="mt-4 text-gray-600">开发iOS和Android应用，包括原生应用和跨平台应用。</p>
                  <div className="mt-6 flex items-center text-green-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/categories/ai">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-purple-500 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Brain className="h-8 w-8 text-purple-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">AI与数据科学</h3>
                  </div>
                  <p className="mt-4 text-gray-600">机器学习、数据分析和人工智能应用开发。</p>
                  <div className="mt-6 flex items-center text-purple-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/categories/system">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="bg-pink-500 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center">
                    <Cpu className="h-8 w-8 text-pink-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">系统编程</h3>
                  </div>
                  <p className="mt-4 text-gray-600">底层系统和性能关键应用，包括操作系统、嵌入式系统和高性能计算。</p>
                  <div className="mt-6 flex items-center text-pink-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                与AI对话，获取编程语言建议
              </h2>
              <p className="mt-4 text-lg">
                不确定从哪里开始？我们的AI助手可以根据你的兴趣、目标和背景，为你推荐最合适的编程语言。
              </p>
              <div className="mt-8">
                <Link href="/chat">
                  <Button size="lg" className="rounded-md px-8 py-3 bg-white text-purple-600 hover:bg-gray-100">
                    立即咨询
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 border-b">
                  <h3 className="text-gray-800 font-medium">AI助手</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">你好！我是编程语言助手。我可以帮你选择适合的编程语言，或者回答你关于各种编程语言的问题。请告诉我你的兴趣和目标。</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">我想开发一个移动应用，但不确定应该学习哪种语言。</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">对于移动应用开发，你有几个很好的选择：如果只针对iOS，可以学习Swift；如果只针对Android，可以学习Kotlin；如果想同时开发两个平台，可以考虑React Native或Flutter。你更倾向于哪个平台呢？</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500 text-sm">广告位</p>
            <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-400">728x90 广告横幅</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
