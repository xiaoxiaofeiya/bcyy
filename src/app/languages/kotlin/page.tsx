'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function KotlinPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 面包屑导航 */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                首页
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/categories/mobile" className="text-gray-500 hover:text-gray-700">
                  移动应用开发
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">Kotlin</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Kotlin</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Android开发
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Kotlin是一种现代、简洁且安全的编程语言，由JetBrains开发，被Google官方推荐用于Android应用开发，同时也适用于服务器端、Web前端和跨平台开发。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              对于有Java基础的开发者来说非常容易上手，语法简洁直观，学习曲线平缓。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-5/6"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">极好</span>
            </div>
            <p className="mt-4 text-gray-600">
              作为Android开发的官方语言，Kotlin开发者需求量大，薪资水平高，就业前景广阔。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">很高</span>
            </div>
            <p className="mt-4 text-gray-600">
              Kotlin开发者平均薪资在技术行业中处于较高水平，尤其是有经验的Android开发者。
            </p>
          </Card>
        </div>

        {/* 详细信息标签页 */}
        <Tabs defaultValue="intro" className="mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="intro">基本介绍</TabsTrigger>
            <TabsTrigger value="applications">应用场景</TabsTrigger>
            <TabsTrigger value="pros-cons">优缺点分析</TabsTrigger>
            <TabsTrigger value="resources">学习资源</TabsTrigger>
            <TabsTrigger value="examples">案例展示</TabsTrigger>
          </TabsList>
          
          {/* 基本介绍 */}
          <TabsContent value="intro" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Kotlin简介</h2>
            <p className="mb-4">
              Kotlin是一种静态类型的编程语言，运行在Java虚拟机（JVM）上，也可以编译成JavaScript或原生代码。它由JetBrains公司开发，该公司以开发IntelliJ IDEA等流行的集成开发环境（IDE）而闻名。Kotlin于2011年首次公开发布，2017年在Google I/O大会上被宣布为Android开发的官方支持语言。
            </p>
            <p className="mb-4">
              Kotlin设计的目标是创建一种比Java更简洁、更安全、更实用的编程语言，同时保持与Java的完全互操作性。它结合了面向对象和函数式编程的特性，提供了许多现代语言特性，如空安全、扩展函数、数据类和协程等。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Kotlin的历史</h3>
            <p className="mb-4">
              Kotlin项目始于2010年，由JetBrains的团队启动。JetBrains希望创建一种比Java更现代、更高效的语言，同时能够与现有的Java代码无缝集成。Kotlin的名称来源于圣彼得堡附近的一个岛屿，JetBrains的一些开发人员来自那里。
            </p>
            <p className="mb-4">
              2012年，JetBrains开源了Kotlin项目。2016年2月，Kotlin 1.0正式发布，标志着语言的稳定性和成熟度。2017年5月，Google在其年度开发者大会上宣布Kotlin成为Android开发的官方支持语言，这大大提高了Kotlin的知名度和采用率。
            </p>
            <p className="mb-4">
              2019年，Google进一步宣布Kotlin优先（Kotlin-first）的Android开发策略，这意味着新的Android API和功能将首先用Kotlin实现。随着Android Studio 4.0的发布，Kotlin成为新项目的默认语言选项。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Kotlin的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>简洁性：Kotlin减少了样板代码，使代码更加简洁易读。</li>
              <li>安全性：Kotlin的类型系统旨在消除空指针异常（NPE），通过可空类型和非空类型的区分。</li>
              <li>互操作性：Kotlin与Java完全互操作，可以在同一项目中混合使用两种语言。</li>
              <li>函数式编程：支持高阶函数、lambda表达式、扩展函数等函数式编程特性。</li>
              <li>协程支持：提供了轻量级的线程（协程）支持，简化了异步编程。</li>
              <li>多平台支持：可以编译为JVM字节码、JavaScript或原生代码，支持跨平台开发。</li>
              <li>智能类型推断：减少了显式类型声明的需要，同时保持类型安全。</li>
              <li>扩展函数：允许向现有类添加新功能，而无需继承或使用设计模式。</li>
              <li>数据类：简化了创建仅用于存储数据的类的过程。</li>
              <li>空安全：通过编译时检查，减少了空指针异常的风险。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Kotlin应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Android应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin是Android开发的官方语言，提供了与Android SDK的完美集成。它简化了常见的Android开发任务，如UI布局、网络请求、数据存储等，同时提高了代码质量和开发效率。许多流行的Android应用，如Pinterest、Trello和Evernote等，都已经采用Kotlin开发。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">服务器端开发</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin可以用于开发服务器端应用程序，如Web应用和RESTful API。框架如Spring Boot、Ktor和Micronaut都提供了对Kotlin的良好支持。Kotlin的协程特性使异步编程变得简单，非常适合处理高并发的服务器应用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">跨平台移动开发</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin Multiplatform Mobile (KMM) 允许开发者使用Kotlin创建跨平台的移动应用，共享业务逻辑代码，同时保留原生UI。这种方法结合了跨平台开发的效率和原生开发的性能优势。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Web前端开发</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin可以编译为JavaScript，使其能够用于Web前端开发。Kotlin/JS支持与现有JavaScript库的互操作，同时提供类型安全和现代语言特性。框架如React和Vue.js都可以与Kotlin/JS一起使用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">数据科学和机器学习</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin正在数据科学和机器学习领域获得关注。库如Kotlin for Apache Spark和KotlinDL提供了在Kotlin中进行数据处理和深度学习的能力。Kotlin的简洁语法和类型安全使其成为这些领域的有吸引力的选择。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">桌面应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Kotlin可以用于开发桌面应用程序，特别是与JavaFX或TornadoFX（Kotlin的JavaFX框架）结合使用。Kotlin的简洁性和表达力使桌面应用开发变得更加高效和愉快。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Kotlin优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">简洁的语法</h4>
                    <p className="text-gray-600">Kotlin的语法比Java更简洁，减少了样板代码，提高了可读性和开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">空安全</h4>
                    <p className="text-gray-600">Kotlin的类型系统区分可空类型和非空类型，在编译时捕获潜在的空指针异常，提高了代码的健壮性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">与Java的互操作性</h4>
                    <p className="text-gray-600">Kotlin与Java完全互操作，可以在同一项目中混合使用两种语言，轻松集成现有的Java库和框架。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">协程支持</h4>
                    <p className="text-gray-600">Kotlin提供了协程支持，简化了异步编程和并发处理，使代码更加简洁和易于理解。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">扩展函数</h4>
                    <p className="text-gray-600">Kotlin允许向现有类添加新功能，而无需继承或使用设计模式，增强了代码的可扩展性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">官方支持</h4>
                    <p className="text-gray-600">作为Android开发的官方语言，Kotlin获得了Google和JetBrains的强力支持，拥有完善的工具和文档。</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-red-600">
                  <X className="h-5 w-5 mr-2" />
                  缺点
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">编译速度</h4>
                    <p className="text-gray-600">Kotlin的编译速度比Java稍慢，特别是在大型项目中，可能影响开发效率。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">学习曲线</h4>
                    <p className="text-gray-600">对于没有函数式编程经验的开发者来说，Kotlin的一些高级特性可能需要时间适应。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">社区规模</h4>
                    <p className="text-gray-600">虽然Kotlin社区正在快速增长，但与Java等成熟语言相比，社区规模和资源仍然较小。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">库生态系统</h4>
                    <p className="text-gray-600">尽管可以使用Java库，但专为Kotlin设计的库和框架数量相对较少。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">团队适应</h4>
                    <p className="text-gray-600">在已有Java代码库的团队中引入Kotlin可能需要时间适应，并可能导致代码风格不一致。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">运行时开销</h4>
                    <p className="text-gray-600">Kotlin的某些特性（如空安全检查）可能引入轻微的运行时开销，尽管在大多数情况下影响很小。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Kotlin学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://kotlinlang.org/docs/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kotlin官方文档</h4>
                      <p className="text-sm text-gray-600">Kotlin官方网站提供的全面文档，包括语言参考、标准库和教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://play.kotlinlang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kotlin Playground</h4>
                      <p className="text-sm text-gray-600">在线编写和运行Kotlin代码的交互式环境，无需安装任何工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://developer.android.com/kotlin" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Android开发者Kotlin指南</h4>
                      <p className="text-sm text-gray-600">Google提供的Kotlin在Android开发中的官方指南和教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://kotlinlang.org/docs/tutorials/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kotlin教程</h4>
                      <p className="text-sm text-gray-600">官方提供的各种Kotlin教程，从基础到高级主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-500" />
                  在线课程和学习平台
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udacity - 使用Kotlin开发Android应用</h4>
                      <p className="text-sm text-gray-600">Google与Udacity合作的官方Android开发课程，使用Kotlin语言。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.coursera.org/learn/kotlin-for-java-developers" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - 面向Java开发者的Kotlin</h4>
                      <p className="text-sm text-gray-600">JetBrains提供的课程，专为有Java经验的开发者设计。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/kotlin" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - Kotlin学习路径</h4>
                      <p className="text-sm text-gray-600">Pluralsight提供的Kotlin学习路径，包含多个课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.raywenderlich.com/kotlin" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">raywenderlich.com - Kotlin教程</h4>
                      <p className="text-sm text-gray-600">提供高质量的Kotlin和Android开发教程、视频课程和书籍。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
                  推荐书籍
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Kotlin实战》</h4>
                    <p className="text-sm text-gray-600">作者：Dmitry Jemerov, Svetlana Isakova</p>
                    <p className="text-sm text-gray-600">由JetBrains的Kotlin团队成员编写，全面介绍Kotlin语言特性和实际应用。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Android编程权威指南（第4版）》</h4>
                    <p className="text-sm text-gray-600">作者：Bill Phillips, Chris Stewart, Kristin Marsicano</p>
                    <p className="text-sm text-gray-600">使用Kotlin进行Android开发的经典教材，包含实际项目和最佳实践。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Kotlin编程实战》</h4>
                    <p className="text-sm text-gray-600">作者：Pierre-Yves Saumont</p>
                    <p className="text-sm text-gray-600">深入探讨Kotlin的函数式编程特性，适合有一定编程基础的读者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Head First Kotlin》</h4>
                    <p className="text-sm text-gray-600">作者：Dawn Griffiths, David Griffiths</p>
                    <p className="text-sm text-gray-600">以生动有趣的方式介绍Kotlin，适合初学者。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://kotlinlang.slack.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kotlin Slack社区</h4>
                      <p className="text-sm text-gray-600">官方Kotlin Slack频道，可以与其他Kotlin开发者交流和获取帮助。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://stackoverflow.com/questions/tagged/kotlin" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的Kotlin标签，可以提问和查找Kotlin相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/Kotlin/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit Kotlin社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的Kotlin社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://discuss.kotlinlang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kotlin论坛</h4>
                      <p className="text-sm text-gray-600">官方Kotlin论坛，讨论Kotlin语言特性、提案和问题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Kotlin案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名Kotlin应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Pinterest应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Pinterest</h4>
                      <p className="text-sm text-gray-600">Pinterest的Android应用使用Kotlin开发，展示了Kotlin在大型社交媒体应用中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Trello应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Trello</h4>
                      <p className="text-sm text-gray-600">Trello的Android应用使用Kotlin开发，展示了Kotlin在生产力工具中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Evernote应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Evernote</h4>
                      <p className="text-sm text-gray-600">Evernote的Android应用使用Kotlin开发，展示了Kotlin在笔记和生产力应用中的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Kotlin代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 变量和常量
val name = "Kotlin"  // 不可变（类似Java的final）
var version = 1.5    // 可变

// 类型推断和显式类型
val explicitDouble: Double = 70.0

// 字符串模板
val message = "Hello, $name $version!"
println(message)  // 输出: "Hello, Kotlin 1.5!"

// 条件表达式
val max = if (a > b) a else b

// 空安全
val length = name?.length  // 如果name为null，返回null
val length2 = name?.length ?: 0  // 如果name为null，返回0

// 智能类型转换
if (obj is String) {
    // obj在这个作用域内自动转换为String类型
    println(obj.length)
}

// 范围和循环
for (i in 1..10) {
    println(i)  // 打印1到10
}

// when表达式（类似switch但更强大）
when (x) {
    1 -> println("x is 1")
    2 -> println("x is 2")
    else -> println("x is neither 1 nor 2")
}

// 函数定义
fun sum(a: Int, b: Int): Int {
    return a + b
}

// 单表达式函数
fun sum(a: Int, b: Int) = a + b

// 命名参数
println(sum(b = 1, a = 2))  // 输出: 3`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">面向对象编程</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 类定义
class Person(val name: String, var age: Int) {
    // 属性和构造函数在类头部定义
    
    // 方法
    fun introduce(): String {
        return "Hi, I'm $name and I'm $age years old."
    }
    
    // 次构造函数
    constructor(name: String) : this(name, 0)
}

// 创建实例
val john = Person("John", 25)
println(john.name)  // 访问属性
println(john.introduce())  // 调用方法

// 继承
open class Animal(val name: String) {
    open fun makeSound() {
        println("Some generic sound")
    }
}

class Dog(name: String) : Animal(name) {
    override fun makeSound() {
        println("Woof!")
    }
}

// 数据类
data class User(val name: String, val email: String)

// 自动生成equals(), hashCode(), toString(), copy()等方法
val user1 = User("Alice", "alice@example.com")
val user2 = user1.copy(email = "newalice@example.com")

// 单例对象
object Singleton {
    val property = "I'm a singleton!"
    fun function() = "I'm a singleton function!"
}

// 伴生对象（类似Java的静态成员）
class MyClass {
    companion object {
        const val CONSTANT = 100
        fun create(): MyClass = MyClass()
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Kotlin高级特性示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">扩展函数和属性</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 扩展函数
fun String.addExclamation(): String {
    return this + "!"
}

val message = "Hello".addExclamation()  // 返回 "Hello!"

// 扩展属性
val String.lastChar: Char
    get() = this[length - 1]

println("Kotlin".lastChar)  // 输出: 'n'

// 可空接收者的扩展
fun String?.isNullOrBlank(): Boolean {
    return this == null || this.isBlank()
}

// 集合扩展
fun <T> List<T>.second(): T {
    if (size < 2) throw NoSuchElementException("List has fewer than 2 elements")
    return this[1]
}

val list = listOf(1, 2, 3)
println(list.second())  // 输出: 2`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">协程</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`import kotlinx.coroutines.*

// 基本协程
fun main() = runBlocking {
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello,")
    delay(2000L)
}

// 异步操作
suspend fun fetchUserData(): String {
    delay(1000L)  // 模拟网络请求
    return "User data"
}

suspend fun fetchProductData(): String {
    delay(1000L)  // 模拟网络请求
    return "Product data"
}

fun main() = runBlocking {
    val time = measureTimeMillis {
        val userData = async { fetchUserData() }
        val productData = async { fetchProductData() }
        
        // 并行执行两个请求
        println("User: ${userData.await()}")
        println("Product: ${productData.await()}")
    }
    
    println("Completed in $time ms")  // 约1000ms，而不是2000ms
}

// 协程上下文和调度器
fun main() = runBlocking {
    launch(Dispatchers.Default) {
        // 在默认调度器上执行CPU密集型工作
    }
    
    launch(Dispatchers.IO) {
        // 在IO调度器上执行IO操作
    }
    
    launch(Dispatchers.Main) {
        // 在主线程上更新UI（在Android中）
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Android开发示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Activity示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// MainActivity.kt
class MainActivity : AppCompatActivity() {
    
    private lateinit var binding: ActivityMainBinding
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // 使用视图绑定
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        // 设置点击监听器
        binding.button.setOnClickListener {
            val name = binding.editText.text.toString()
            if (name.isNotEmpty()) {
                binding.textView.text = "Hello, $name!"
            } else {
                binding.textView.text = "Please enter your name"
            }
        }
        
        // 启动协程
        lifecycleScope.launch {
            val result = fetchData()
            binding.resultText.text = result
        }
    }
    
    // 挂起函数
    private suspend fun fetchData(): String {
        delay(1000)  // 模拟网络请求
        return "Data loaded successfully"
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">ViewModel和LiveData示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// UserViewModel.kt
class UserViewModel : ViewModel() {
    
    private val _user = MutableLiveData<User>()
    val user: LiveData<User> = _user
    
    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            try {
                _loading.value = true
                val result = userRepository.getUser(userId)
                _user.value = result
            } catch (e: Exception) {
                // 处理错误
            } finally {
                _loading.value = false
            }
        }
    }
}

// MainActivity.kt
class MainActivity : AppCompatActivity() {
    
    private lateinit var binding: ActivityMainBinding
    private val viewModel: UserViewModel by viewModels()
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        
        // 观察LiveData
        viewModel.user.observe(this) { user ->
            binding.nameText.text = user.name
            binding.emailText.text = user.email
        }
        
        viewModel.loading.observe(this) { isLoading ->
            binding.progressBar.isVisible = isLoading
        }
        
        // 加载用户数据
        viewModel.loadUser("123")
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 相关语言推荐 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关语言推荐</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/languages/swift">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Swift</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Kotlin的现代语法和安全特性，但需要开发iOS应用，Swift是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/java">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Java</h3>
                  <p className="mt-2 text-sm text-gray-600">Kotlin与Java完全互操作，如果你需要更成熟的生态系统或处理遗留代码，Java是一个不错的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/dart">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Dart</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你想开发跨平台移动应用，Dart（配合Flutter框架）是一个值得考虑的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/typescript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">TypeScript</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要开发Web应用并喜欢类型安全，TypeScript是一个不错的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* AI助手快速咨询 */}
        <div className="mb-12 bg-purple-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-2">还有疑问？咨询AI助手</h2>
              <p className="text-gray-600 mb-4">
                如果你对Kotlin还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
              </p>
              <Link href="/chat">
                <Button size="lg" className="rounded-md px-6 py-2">
                  开始对话
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-gray-800 text-sm">Kotlin适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Kotlin是一个相对友好的编程语言，特别适合已经有一些编程基础的初学者。对于有Java经验的开发者来说，学习Kotlin会非常容易，因为两种语言有很多相似之处，而Kotlin解决了Java的许多痛点。对于完全没有编程经验的初学者，Kotlin的语法相对简洁，错误处理机制良好，可能比Java更容易入门，但一些高级特性（如协程、高阶函数）可能需要时间理解。总的来说，如果你对Android开发感兴趣，Kotlin是一个很好的选择。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 广告位 */}
        <div className="mb-12">
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
