'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function SwiftPage() {
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
                <span className="text-gray-700">Swift</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Swift</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              iOS开发
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Swift是苹果公司开发的强大而直观的编程语言，用于iOS、macOS、watchOS和tvOS应用程序开发，结合了现代编程语言的思想和苹果工程文化的智慧。
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
              语法简洁直观，对有编程基础的人来说较易上手，但掌握高级特性需要时间。
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
              iOS开发市场需求稳定，Swift开发者薪资水平高，尤其在北美和欧洲市场。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-5/6"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">极高</span>
            </div>
            <p className="mt-4 text-gray-600">
              Swift开发者平均薪资在技术行业中处于较高水平，尤其是有经验的iOS开发者。
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
            <h2 className="text-2xl font-bold mb-4">Swift简介</h2>
            <p className="mb-4">
              Swift是苹果公司于2014年WWDC（苹果全球开发者大会）上发布的编程语言，用于iOS、macOS、watchOS和tvOS应用程序开发。Swift设计为一种安全、快速、交互式的编程语言，旨在取代Objective-C成为苹果平台的主要开发语言。
            </p>
            <p className="mb-4">
              Swift结合了C和Objective-C的优点，没有C语言的兼容性限制。它采用了安全的编程模式，并添加了现代编程语言的特性，使开发更加容易、灵活和有趣。Swift提供了类似Python和Ruby的特性，如类型推断、泛型、闭包和命名参数等，同时保持了高性能。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Swift的历史</h3>
            <p className="mb-4">
              Swift的开发始于2010年，由苹果公司的Chris Lattner带领团队创建。Lattner之前也是LLVM编译器基础设施项目和Clang编译器的主要作者。Swift的设计吸取了许多现有编程语言的经验，包括Objective-C、Rust、Haskell、Ruby、Python等。
            </p>
            <p className="mb-4">
              2014年6月，Swift在苹果WWDC上首次公开发布。2015年12月，Swift宣布开源，并在GitHub上发布了源代码，同时发布了适用于Linux的Swift编译器。这一举措大大促进了Swift的发展和社区参与。
            </p>
            <p className="mb-4">
              Swift的版本迭代较快，每个版本都带来了重要的改进和新特性。Swift 5.0（2019年发布）引入了ABI稳定性，这意味着Swift应用程序不再需要包含Swift运行时库，大大减小了应用程序的大小。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Swift的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>安全性：Swift设计时考虑了安全性，包括强类型系统、可选类型、错误处理等，减少了常见的编程错误。</li>
              <li>性能：Swift的性能接近C++，远超过许多脚本语言。</li>
              <li>现代语法：简洁、表达力强的语法，减少了样板代码，提高了可读性。</li>
              <li>互操作性：可以与Objective-C代码无缝集成，允许在同一项目中混合使用两种语言。</li>
              <li>开源：Swift是开源的，有活跃的社区支持和贡献。</li>
              <li>Playground：Swift提供了交互式的Playground环境，可以实时查看代码执行结果，便于学习和实验。</li>
              <li>内存管理：使用自动引用计数（ARC）进行内存管理，简化了开发者的工作。</li>
              <li>函数式编程：支持高阶函数、闭包、泛型等函数式编程特性。</li>
              <li>协议导向编程：Swift鼓励使用协议（Protocols）和扩展（Extensions）来组织代码，提高代码复用性。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Swift应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">iOS应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Swift的主要应用场景是iOS应用开发。它是苹果官方推荐的iOS开发语言，提供了与iOS SDK的完美集成，可以创建从简单到复杂的各种iOS应用，包括社交媒体、游戏、工具类应用等。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">macOS应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Swift同样适用于macOS桌面应用开发。开发者可以使用Swift和AppKit或SwiftUI框架创建功能强大的桌面应用程序，如生产力工具、创意软件、开发工具等。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">watchOS应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Swift用于开发Apple Watch应用程序。开发者可以创建健康追踪、通知、快速操作等适合小屏幕设备的应用，提供便捷的用户体验。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">tvOS应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Swift可用于开发Apple TV应用程序，包括视频流媒体、游戏、教育内容等，为大屏幕设备提供沉浸式体验。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">服务器端开发</h3>
                </div>
                <p className="text-gray-600">
                  随着Swift在Linux上的支持，它也被用于服务器端开发。框架如Vapor、Kitura和Perfect允许开发者使用Swift创建Web应用和API服务，提供高性能和类型安全的服务器应用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">跨平台开发</h3>
                </div>
                <p className="text-gray-600">
                  虽然不如React Native或Flutter那样广泛，但Swift也可以用于跨平台开发。例如，Swift for TensorFlow允许使用Swift进行机器学习开发，而一些项目正在探索将Swift用于Android开发。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Swift优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">安全性</h4>
                    <p className="text-gray-600">Swift的设计注重类型安全和内存安全，通过可选类型、强类型系统和自动引用计数减少了常见的编程错误。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">性能</h4>
                    <p className="text-gray-600">Swift的性能接近C++，远超过许多脚本语言，适合开发对性能有要求的应用。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">现代语法</h4>
                    <p className="text-gray-600">Swift的语法简洁、表达力强，减少了样板代码，提高了可读性和开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">苹果官方支持</h4>
                    <p className="text-gray-600">作为苹果官方推荐的开发语言，Swift获得了完善的文档、工具和框架支持，与iOS生态系统深度集成。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开源社区</h4>
                    <p className="text-gray-600">Swift是开源的，拥有活跃的社区支持和贡献，不断有新的库和工具出现。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">Playground交互式环境</h4>
                    <p className="text-gray-600">Swift提供了Playground环境，可以实时查看代码执行结果，便于学习和实验。</p>
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
                    <h4 className="font-medium mb-1">平台限制</h4>
                    <p className="text-gray-600">虽然Swift已经支持Linux，但它主要还是用于苹果生态系统，在其他平台上的应用有限。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">版本兼容性</h4>
                    <p className="text-gray-600">Swift的版本迭代较快，早期版本之间存在兼容性问题，可能需要更新代码以适应新版本。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">相对年轻</h4>
                    <p className="text-gray-600">与一些成熟的语言相比，Swift还相对年轻，某些领域的库和工具可能不如其他语言丰富。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">编译时间</h4>
                    <p className="text-gray-600">大型Swift项目的编译时间可能较长，影响开发效率。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">学习曲线</h4>
                    <p className="text-gray-600">对于没有编程经验的人来说，Swift的一些高级特性（如泛型、协议扩展）可能有一定的学习难度。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">工具链不稳定</h4>
                    <p className="text-gray-600">Swift的工具链（如编译器、调试器）有时会出现问题，尤其是在新版本发布后。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Swift学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://swift.org/documentation/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Swift官方文档</h4>
                      <p className="text-sm text-gray-600">Swift官方网站提供的全面文档，包括语言指南、标准库参考等。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://developer.apple.com/swift/resources/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Apple开发者资源</h4>
                      <p className="text-sm text-gray-600">苹果提供的Swift学习资源，包括视频、示例代码和教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://docs.swift.org/swift-book/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Swift编程语言指南</h4>
                      <p className="text-sm text-gray-600">官方的Swift语言指南，详细介绍了语言特性和用法。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://developer.apple.com/tutorials/swiftui" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">SwiftUI教程</h4>
                      <p className="text-sm text-gray-600">苹果官方的SwiftUI教程，学习如何使用Swift和SwiftUI构建用户界面。</p>
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
                  <a href="https://www.raywenderlich.com/ios/paths" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">raywenderlich.com</h4>
                      <p className="text-sm text-gray-600">提供高质量的Swift和iOS开发教程、视频课程和书籍。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.udemy.com/topic/swift/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy Swift课程</h4>
                      <p className="text-sm text-gray-600">Udemy上的各种Swift编程课程，从入门到高级。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.coursera.org/courses?query=swift" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera Swift课程</h4>
                      <p className="text-sm text-gray-600">Coursera平台上的Swift和iOS开发课程，包括一些大学提供的专业课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.hackingwithswift.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Hacking with Swift</h4>
                      <p className="text-sm text-gray-600">提供免费的Swift教程、项目和挑战，适合各个水平的学习者。</p>
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
                    <h4 className="font-medium">《Swift编程权威指南》</h4>
                    <p className="text-sm text-gray-600">作者：苹果公司</p>
                    <p className="text-sm text-gray-600">苹果官方的Swift编程指南，全面介绍Swift语言特性。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《iOS编程（第7版）》</h4>
                    <p className="text-sm text-gray-600">作者：Christian Keur, Aaron Hillegass</p>
                    <p className="text-sm text-gray-600">使用Swift进行iOS开发的经典教材，包含实际项目和最佳实践。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Swift实战》</h4>
                    <p className="text-sm text-gray-600">作者：Jon Manning, Paris Buttfield-Addison</p>
                    <p className="text-sm text-gray-600">通过实际项目学习Swift编程，适合有一定编程基础的读者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Swift进阶》</h4>
                    <p className="text-sm text-gray-600">作者：王巍（onevcat）</p>
                    <p className="text-sm text-gray-600">深入探讨Swift的高级特性和最佳实践，适合有Swift基础的开发者。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://forums.swift.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Swift论坛</h4>
                      <p className="text-sm text-gray-600">官方Swift社区论坛，讨论Swift语言特性、提案和问题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://stackoverflow.com/questions/tagged/swift" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的Swift标签，可以提问和查找Swift相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/swift/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit Swift社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的Swift社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://twitter.com/swiftlang" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Swift官方Twitter</h4>
                      <p className="text-sm text-gray-600">Swift官方Twitter账号，发布Swift相关新闻和更新。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Swift案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名Swift应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">LinkedIn应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <p className="text-sm text-gray-600">LinkedIn的iOS应用使用Swift开发，提供专业社交网络功能，展示了Swift在大型社交应用中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Lyft应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Lyft</h4>
                      <p className="text-sm text-gray-600">Lyft的iOS应用使用Swift开发，展示了Swift在位置服务和实时数据处理方面的能力。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Khan Academy应用截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Khan Academy</h4>
                      <p className="text-sm text-gray-600">Khan Academy的iOS应用使用Swift开发，展示了Swift在教育应用和视频播放方面的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Swift代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 变量和常量
let constantName = "Swift"  // 常量
var variableName = "Programming"  // 变量

// 类型注解
let explicitDouble: Double = 70.0

// 字符串插值
let message = "\\(constantName) \\(variableName)"
print(message)  // 输出: "Swift Programming"

// 数组和字典
var fruits = ["Apple", "Banana", "Orange"]
fruits.append("Mango")

var scores = ["Alice": 95, "Bob": 85, "Charlie": 90]
scores["David"] = 88

// 控制流
let score = 85
if score >= 90 {
    print("A")
} else if score >= 80 {
    print("B")
} else {
    print("C or below")
}

// 循环
for fruit in fruits {
    print("I like \\(fruit)")
}

for (name, score) in scores {
    print("\\(name): \\(score)")
}

// 函数
func greet(person: String, day: String) -> String {
    return "Hello \\(person), today is \\(day)."
}

let greeting = greet(person: "John", day: "Monday")
print(greeting)`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">面向对象编程</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 类定义
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func introduce() -> String {
        return "Hi, I'm \\(name) and I'm \\(age) years old."
    }
}

// 类继承
class Student: Person {
    var school: String
    
    init(name: String, age: Int, school: String) {
        self.school = school
        super.init(name: name, age: age)
    }
    
    override func introduce() -> String {
        return "\\(super.introduce()) I study at \\(school)."
    }
}

// 创建实例
let john = Person(name: "John", age: 25)
print(john.introduce())

let alice = Student(name: "Alice", age: 20, school: "MIT")
print(alice.introduce())

// 属性观察器
class Progress {
    var task: String
    var amount: Int = 0 {
        willSet {
            print("About to set amount to \\(newValue)")
        }
        didSet {
            print("Changed amount from \\(oldValue) to \\(amount)")
            print("Task \\(task) is now \\(amount)% complete")
        }
    }
    
    init(task: String) {
        self.task = task
    }
}

let progress = Progress(task: "Loading Data")
progress.amount = 30
progress.amount = 80
progress.amount = 100`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Swift UI示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">UIKit示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`import UIKit

class ViewController: UIViewController {
    
    // UI元素
    private let nameLabel = UILabel()
    private let nameTextField = UITextField()
    private let greetButton = UIButton(type: .system)
    private let resultLabel = UILabel()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
    }
    
    private func setupUI() {
        view.backgroundColor = .white
        
        // 配置nameLabel
        nameLabel.text = "Enter your name:"
        nameLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(nameLabel)
        
        // 配置nameTextField
        nameTextField.borderStyle = .roundedRect
        nameTextField.placeholder = "Your name"
        nameTextField.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(nameTextField)
        
        // 配置greetButton
        greetButton.setTitle("Greet", for: .normal)
        greetButton.addTarget(self, action: #selector(greetButtonTapped), for: .touchUpInside)
        greetButton.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(greetButton)
        
        // 配置resultLabel
        resultLabel.textAlignment = .center
        resultLabel.numberOfLines = 0
        resultLabel.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(resultLabel)
        
        // 设置约束
        NSLayoutConstraint.activate([
            nameLabel.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 20),
            nameLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            
            nameTextField.topAnchor.constraint(equalTo: nameLabel.bottomAnchor, constant: 8),
            nameTextField.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            nameTextField.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20),
            
            greetButton.topAnchor.constraint(equalTo: nameTextField.bottomAnchor, constant: 20),
            greetButton.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            
            resultLabel.topAnchor.constraint(equalTo: greetButton.bottomAnchor, constant: 20),
            resultLabel.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 20),
            resultLabel.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -20)
        ])
    }
    
    @objc private func greetButtonTapped() {
        guard let name = nameTextField.text, !name.isEmpty else {
            resultLabel.text = "Please enter your name"
            return
        }
        
        resultLabel.text = "Hello, \\(name)! Welcome to Swift programming."
        view.endEditing(true)
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">SwiftUI示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`import SwiftUI

struct ContentView: View {
    @State private var name = ""
    @State private var greetingMessage = ""
    
    var body: some View {
        VStack(spacing: 20) {
            Text("SwiftUI Example")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            TextField("Enter your name", text: $name)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding(.horizontal)
            
            Button(action: {
                if !name.isEmpty {
                    greetingMessage = "Hello, \\(name)! Welcome to SwiftUI."
                } else {
                    greetingMessage = "Please enter your name"
                }
                // 隐藏键盘
                UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
            }) {
                Text("Greet")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            
            Text(greetingMessage)
                .padding()
                .multilineTextAlignment(.center)
            
            Spacer()
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
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
            <Link href="/languages/kotlin">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Kotlin</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Swift的现代语法和安全特性，但需要开发Android应用，Kotlin是一个很好的选择。</p>
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
            <Link href="/languages/javascript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">JavaScript</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你想开发跨平台应用但希望有更广泛的生态系统，JavaScript（配合React Native）是一个不错的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/cpp">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">C++</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要更底层的控制和跨平台能力，C++是一个传统而强大的选择。</p>
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
                如果你对Swift还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Swift适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Swift是一个相对友好的编程语言，特别适合想要开发iOS应用的初学者。它的语法简洁明了，错误处理机制良好，并且有丰富的文档和学习资源。苹果提供的Swift Playgrounds应用更是专为编程初学者设计，通过互动游戏化的方式学习编程概念。不过，如果你完全没有编程经验，可能需要一些时间来适应编程思维，建议从基础教程开始，循序渐进地学习。</p>
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
