'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function CSharpPage() {
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
                <Link href="/categories/backend" className="text-gray-500 hover:text-gray-700">
                  后端开发
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">C#</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">C#</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              企业首选
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            C#是由微软开发的现代、面向对象的编程语言，是.NET平台的主要语言。它结合了C++的强大功能和Java的易用性，广泛应用于Windows应用程序、游戏开发、企业软件和Web开发等领域。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              对于初学者来说有一定挑战，但语法清晰、文档丰富，且有强大的开发工具支持，使学习过程相对顺畅。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">很好</span>
            </div>
            <p className="mt-4 text-gray-600">
              在企业级应用开发、游戏开发和Windows应用程序领域有大量就业机会，尤其在使用微软技术栈的公司中需求旺盛。
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
              C#开发者薪资普遍较高，尤其是在金融、企业软件和游戏开发领域，资深开发者和架构师薪资更为可观。
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
            <h2 className="text-2xl font-bold mb-4">C#简介</h2>
            <p className="mb-4">
              C#（发音为"C Sharp"）是一种现代、面向对象的编程语言，由微软公司的Anders Hejlsberg团队开发，作为.NET框架的一部分。C#的设计目标是成为一种简单、现代、通用且面向对象的编程语言，同时保持C风格语言的表达能力和优雅性。
            </p>
            <p className="mb-4">
              C#结合了C++的强大功能和Java的易用性，提供了自动垃圾回收、类型安全、异常处理、lambda表达式、属性、LINQ（语言集成查询）等现代编程语言特性。它是.NET平台的主要语言，广泛应用于Windows应用程序、游戏开发、企业软件和Web开发等领域。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">C#的历史</h3>
            <p className="mb-4">
              C#的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>2000年：微软宣布开发C#语言，作为.NET框架的一部分。</li>
              <li>2002年：C# 1.0随.NET Framework 1.0一起发布，提供了基本的面向对象编程功能。</li>
              <li>2005年：C# 2.0发布，引入了泛型、匿名方法、可空类型等特性。</li>
              <li>2007年：C# 3.0发布，引入了LINQ、lambda表达式、扩展方法等革命性特性。</li>
              <li>2010年：C# 4.0发布，增加了动态绑定、命名参数和可选参数等功能。</li>
              <li>2012年：C# 5.0发布，引入了异步编程模型（async/await）。</li>
              <li>2015年：C# 6.0发布，增加了多个语法改进，如字符串插值、null条件运算符等。</li>
              <li>2017年：C# 7.0发布，引入了元组、模式匹配、本地函数等特性。</li>
              <li>2019年：C# 8.0发布，增加了可空引用类型、异步流、接口默认实现等功能。</li>
              <li>2020年：C# 9.0发布，引入了记录类型、初始化器表达式、顶级语句等特性。</li>
              <li>2021年：C# 10.0发布，增加了全局using指令、文件范围命名空间、记录结构等功能。</li>
              <li>2022年：C# 11.0发布，引入了原始字符串文字、必要成员、泛型属性等特性。</li>
            </ul>
            <p className="mb-4">
              随着时间的推移，C#不断发展，增加了更多现代编程语言特性，同时保持了向后兼容性。.NET平台也从最初的Windows专属框架发展为跨平台的开源框架，使C#能够在Windows、Linux、macOS等多种操作系统上运行。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">C#的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>面向对象：C#是一种纯面向对象的语言，支持封装、继承和多态等面向对象编程概念。</li>
              <li>类型安全：C#是一种强类型语言，提供编译时类型检查，减少运行时错误。</li>
              <li>自动内存管理：C#使用垃圾回收机制自动管理内存，减轻了开发者的负担。</li>
              <li>丰富的标准库：.NET框架提供了丰富的类库，涵盖了文件操作、网络通信、数据库访问等各种功能。</li>
              <li>语言集成查询（LINQ）：允许使用类似SQL的语法直接在代码中查询各种数据源。</li>
              <li>异步编程：通过async/await关键字简化异步编程，提高应用程序的响应性和性能。</li>
              <li>跨平台支持：通过.NET Core（现在的.NET 5+）实现跨平台开发，可在Windows、Linux和macOS上运行。</li>
              <li>强大的开发工具：Visual Studio提供了强大的开发环境，包括智能代码补全、调试工具和性能分析器等。</li>
              <li>互操作性：C#可以与其他.NET语言（如F#、Visual Basic）无缝集成，也可以通过P/Invoke调用本地代码。</li>
              <li>持续创新：微软持续为C#添加新特性，使其保持现代化和竞争力。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C#应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">企业级应用开发</h3>
                </div>
                <p className="text-gray-600">
                  C#是企业级应用开发的首选语言之一，特别是在使用微软技术栈的企业中。它与.NET框架结合，提供了丰富的类库和工具，适合开发复杂的业务应用程序。企业资源规划(ERP)系统、客户关系管理(CRM)软件、财务系统和内部管理工具等都常使用C#开发。C#的强类型系统和面向对象特性使其非常适合构建可维护的大型企业应用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Web应用开发</h3>
                </div>
                <p className="text-gray-600">
                  C#与ASP.NET框架结合，是强大的Web应用开发平台。ASP.NET MVC和ASP.NET Core提供了现代化的Web开发框架，支持构建响应式、安全和高性能的Web应用。许多大型网站和Web应用，如Stack Overflow和GoDaddy，都使用C#和ASP.NET构建。C#的异步编程模型（async/await）使其特别适合处理高并发的Web请求，提高应用性能和可伸缩性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">游戏开发</h3>
                </div>
                <p className="text-gray-600">
                  C#是Unity游戏引擎的主要脚本语言，使其成为游戏开发领域的重要语言。Unity是全球最流行的游戏开发平台之一，支持开发2D和3D游戏，可发布到多个平台，包括PC、移动设备和游戏主机。许多知名游戏，如《荒野乱斗》、《神庙逃亡》和《炉石传说》等都使用Unity和C#开发。C#的易用性和强大功能使游戏开发者能够专注于创意而非底层技术细节。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Windows应用程序</h3>
                </div>
                <p className="text-gray-600">
                  C#是开发Windows桌面应用程序的首选语言之一。通过Windows Forms、WPF（Windows Presentation Foundation）和最新的WinUI/MAUI，开发者可以创建功能丰富、界面美观的Windows应用。许多企业内部工具、专业软件和生产力应用都使用C#开发。Visual Studio提供了强大的设计器和工具，简化了Windows应用程序的开发过程。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">移动应用开发</h3>
                </div>
                <p className="text-gray-600">
                  通过Xamarin（现在是.NET MAUI的一部分），C#可用于开发跨平台移动应用，一套代码可同时运行在iOS和Android平台上。这大大减少了开发和维护成本，特别适合企业移动应用开发。许多企业内部应用和商业应用，如UPS移动应用和阿拉斯加航空公司的应用，都使用Xamarin和C#开发。C#的面向对象特性和强大的类库使移动应用开发更加高效。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">云服务和微服务</h3>
                </div>
                <p className="text-gray-600">
                  C#与.NET Core（现在的.NET 5+）结合，是开发云服务和微服务的理想选择。它提供了高性能、跨平台的运行时，适合在容器化环境（如Docker）中运行。Azure Functions和AWS Lambda等无服务器计算平台也支持C#。许多企业使用C#构建微服务架构，实现系统的可伸缩性和弹性。C#的异步编程模型和高性能特性使其在云环境中表现出色。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C#优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大而现代的语言特性</h4>
                    <p className="text-gray-600">C#提供了丰富的现代编程语言特性，如LINQ、异步编程（async/await）、泛型、lambda表达式和模式匹配等，使开发者能够编写简洁、高效的代码。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强类型系统</h4>
                    <p className="text-gray-600">C#的强类型系统在编译时捕获错误，减少了运行时错误，提高了代码质量和可维护性。类型推断功能又减轻了显式类型声明的负担。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">丰富的生态系统</h4>
                    <p className="text-gray-600">.NET生态系统提供了丰富的类库和工具，涵盖了从UI开发到数据访问、网络通信等各个方面，大大提高了开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">优秀的开发工具</h4>
                    <p className="text-gray-600">Visual Studio提供了业界领先的开发体验，包括智能代码补全、强大的调试工具、实时代码分析和重构功能等，大大提高了开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">跨平台支持</h4>
                    <p className="text-gray-600">通过.NET Core（现在的.NET 5+），C#应用可以在Windows、Linux和macOS上运行，实现了真正的跨平台开发。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">企业级支持</h4>
                    <p className="text-gray-600">微软为C#和.NET提供了强大的企业级支持，包括长期支持版本、安全更新和技术支持，使其成为企业应用开发的理想选择。</p>
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
                    <h4 className="font-medium mb-1">学习曲线</h4>
                    <p className="text-gray-600">对于初学者来说，C#的面向对象概念和丰富的语言特性可能带来一定的学习曲线，特别是与脚本语言相比。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开发环境依赖</h4>
                    <p className="text-gray-600">虽然有跨平台的开发工具如Visual Studio Code和Rider，但最佳的C#开发体验仍然来自于Windows上的Visual Studio，这可能对非Windows用户造成一定限制。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">启动性能</h4>
                    <p className="text-gray-600">相比于一些轻量级语言，C#应用的启动时间可能较长，特别是第一次启动时需要JIT编译，这在某些场景下可能是一个缺点。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">微软生态系统依赖</h4>
                    <p className="text-gray-600">虽然.NET现在是开源的，但C#仍然与微软的生态系统紧密相连，这可能对某些偏好完全开源解决方案的开发者或组织造成顾虑。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">移动开发市场份额</h4>
                    <p className="text-gray-600">在移动应用开发领域，尽管有Xamarin/.NET MAUI，但C#的市场份额仍然不如Swift/Objective-C（iOS）和Kotlin/Java（Android）等原生开发语言。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">代码冗长</h4>
                    <p className="text-gray-600">与一些现代脚本语言相比，C#的代码可能显得更加冗长，尽管近年来的语言改进（如表达式体成员、初始化器等）已经大大改善了这一点。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C#学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://docs.microsoft.com/zh-cn/dotnet/csharp/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">微软C#官方文档</h4>
                      <p className="text-sm text-gray-600">最权威的C#参考资料，包括详细的语言特性说明、教程和示例代码。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://dotnet.microsoft.com/zh-cn/learn/csharp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">微软Learn C#</h4>
                      <p className="text-sm text-gray-600">微软提供的交互式C#学习平台，包含从入门到高级的教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://channel9.msdn.com/Series/CSharp-Fundamentals-for-Absolute-Beginners" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">C#基础视频教程</h4>
                      <p className="text-sm text-gray-600">微软Channel 9提供的C#入门视频教程，适合零基础学习者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://github.com/dotnet/docs" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">.NET文档GitHub仓库</h4>
                      <p className="text-sm text-gray-600">.NET文档的GitHub仓库，包含最新的文档更新和示例代码。</p>
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
                  <a href="https://www.pluralsight.com/paths/csharp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - C#学习路径</h4>
                      <p className="text-sm text-gray-600">全面的C#学习路径，从基础到高级，包含多个专业课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.udemy.com/course/complete-csharp-masterclass/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - C#大师班</h4>
                      <p className="text-sm text-gray-600">全面的C#课程，包含实践项目和练习，适合初学者到中级开发者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-c-sharp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - 学习C#</h4>
                      <p className="text-sm text-gray-600">互动式C#入门课程，通过实践学习基础知识。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.linkedin.com/learning/topics/c-sharp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">LinkedIn Learning - C#课程</h4>
                      <p className="text-sm text-gray-600">LinkedIn Learning提供的多个C#专题课程，涵盖不同应用场景。</p>
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
                    <h4 className="font-medium">《C# in Depth》</h4>
                    <p className="text-sm text-gray-600">作者：Jon Skeet</p>
                    <p className="text-sm text-gray-600">深入探讨C#语言的各个方面，适合有一定基础的开发者深入学习C#。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《C# 10.0 in a Nutshell》</h4>
                    <p className="text-sm text-gray-600">作者：Joseph Albahari, Eric Johannsen</p>
                    <p className="text-sm text-gray-600">全面介绍C#语言和.NET框架，是学习C#的权威参考书。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Head First C#》</h4>
                    <p className="text-sm text-gray-600">作者：Andrew Stellman, Jennifer Greene</p>
                    <p className="text-sm text-gray-600">以生动有趣的方式介绍C#编程，适合初学者入门。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《C#图解教程》</h4>
                    <p className="text-sm text-gray-600">作者：Daniel Solis</p>
                    <p className="text-sm text-gray-600">通过大量图解和示例讲解C#编程概念，适合视觉学习者。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/c%23" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的C#标签，可以提问和查找C#相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/csharp/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit C#社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的C#社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://discord.gg/csharp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">C# Discord</h4>
                      <p className="text-sm text-gray-600">C# Discord服务器，可以与其他开发者交流和获取帮助。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://dotnet.microsoft.com/zh-cn/platform/community" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">.NET社区</h4>
                      <p className="text-sm text-gray-600">微软官方的.NET社区页面，包含各种社区资源和活动信息。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C#案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名C#项目</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Unity截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Unity游戏引擎</h4>
                      <p className="text-sm text-gray-600">全球最流行的游戏开发平台之一，使用C#作为脚本语言。许多知名游戏如《荒野乱斗》、《神庙逃亡》等都使用Unity开发。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Stack Overflow截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">全球最大的程序员问答社区，使用C#和ASP.NET开发。该网站每天处理数百万次访问，展示了C#在高流量Web应用中的表现。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Visual Studio截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Visual Studio</h4>
                      <p className="text-sm text-gray-600">微软的旗舰IDE，部分使用C#开发。它是世界上最强大的开发工具之一，展示了C#在复杂桌面应用中的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">C#代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 基本类型和变量
using System;

class Program
{
    static void Main()
    {
        // 变量声明和初始化
        int number = 10;
        double pi = 3.14159;
        bool isValid = true;
        string message = "Hello, C#!";
        
        // 常量
        const int MaxValue = 100;
        
        // 输出到控制台
        Console.WriteLine(message);
        Console.WriteLine($"Number: {number}, Pi: {pi}");
        Console.WriteLine($"Is valid: {isValid}, Max value: {MaxValue}");
        
        // 数组
        int[] numbers = { 1, 2, 3, 4, 5 };
        Console.WriteLine($"Third number: {numbers[2]}");
        
        // 条件语句
        if (number > 5)
        {
            Console.WriteLine("Number is greater than 5");
        }
        else
        {
            Console.WriteLine("Number is not greater than 5");
        }
        
        // 循环
        Console.WriteLine("For loop:");
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Iteration {i}");
        }
        
        Console.WriteLine("While loop:");
        int counter = 0;
        while (counter < 3)
        {
            Console.WriteLine($"Counter: {counter}");
            counter++;
        }
        
        // 枚举
        DayOfWeek today = DayOfWeek.Monday;
        Console.WriteLine($"Today is {today}");
        
        // 调用方法
        int sum = Add(5, 3);
        Console.WriteLine($"5 + 3 = {sum}");
        
        // 使用字符串方法
        string text = "   Hello, World!   ";
        string trimmed = text.Trim();
        string upper = trimmed.ToUpper();
        Console.WriteLine($"Original: '{text}', Trimmed: '{trimmed}', Upper: '{upper}'");
        
        // 异常处理
        try
        {
            int result = Divide(10, 0);
            Console.WriteLine($"Result: {result}");
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Exception handling complete");
        }
    }
    
    // 方法定义
    static int Add(int a, int b)
    {
        return a + b;
    }
    
    static int Divide(int a, int b)
    {
        return a / b;
    }
}

// 枚举定义
enum DayOfWeek
{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">面向对象编程示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`using System;
using System.Collections.Generic;

// 接口定义
interface IShape
{
    double CalculateArea();
    double CalculatePerimeter();
    void Display();
}

// 抽象类
abstract class Shape : IShape
{
    // 属性
    public string Name { get; set; }
    public string Color { get; set; }
    
    // 构造函数
    protected Shape(string name, string color)
    {
        Name = name;
        Color = color;
    }
    
    // 抽象方法
    public abstract double CalculateArea();
    public abstract double CalculatePerimeter();
    
    // 虚方法
    public virtual void Display()
    {
        Console.WriteLine($"Shape: {Name}, Color: {Color}");
        Console.WriteLine($"Area: {CalculateArea()}, Perimeter: {CalculatePerimeter()}");
    }
}

// 派生类
class Circle : Shape
{
    // 字段
    private readonly double _radius;
    
    // 构造函数
    public Circle(string color, double radius) : base("Circle", color)
    {
        _radius = radius;
    }
    
    // 实现抽象方法
    public override double CalculateArea()
    {
        return Math.PI * _radius * _radius;
    }
    
    public override double CalculatePerimeter()
    {
        return 2 * Math.PI * _radius;
    }
    
    // 重写虚方法
    public override void Display()
    {
        base.Display();
        Console.WriteLine($"Radius: {_radius}");
    }
}

// 另一个派生类
class Rectangle : Shape
{
    // 自动实现的属性
    public double Width { get; set; }
    public double Height { get; set; }
    
    // 构造函数
    public Rectangle(string color, double width, double height) : base("Rectangle", color)
    {
        Width = width;
        Height = height;
    }
    
    // 实现抽象方法
    public override double CalculateArea()
    {
        return Width * Height;
    }
    
    public override double CalculatePerimeter()
    {
        return 2 * (Width + Height);
    }
    
    // 重写虚方法
    public override void Display()
    {
        base.Display();
        Console.WriteLine($"Width: {Width}, Height: {Height}");
    }
}

// 泛型类
class ShapeCollection<T> where T : IShape
{
    private List<T> _shapes = new List<T>();
    
    public void AddShape(T shape)
    {
        _shapes.Add(shape);
    }
    
    public void DisplayAll()
    {
        foreach (var shape in _shapes)
        {
            shape.Display();
            Console.WriteLine();
        }
    }
    
    public double CalculateTotalArea()
    {
        double totalArea = 0;
        foreach (var shape in _shapes)
        {
            totalArea += shape.CalculateArea();
        }
        return totalArea;
    }
}

class Program
{
    static void Main()
    {
        // 创建对象
        Circle circle = new Circle("Red", 5);
        Rectangle rectangle = new Rectangle("Blue", 4, 6);
        
        // 使用泛型集合
        ShapeCollection<IShape> shapes = new ShapeCollection<IShape>();
        shapes.AddShape(circle);
        shapes.AddShape(rectangle);
        
        // 显示所有形状
        Console.WriteLine("All Shapes:");
        shapes.DisplayAll();
        
        // 计算总面积
        double totalArea = shapes.CalculateTotalArea();
        Console.WriteLine($"Total Area: {totalArea}");
        
        // 使用多态性
        IShape shape = circle;
        Console.WriteLine("Using polymorphism:");
        shape.Display();
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">C#项目示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">ASP.NET Core Web API</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;

// 模型类
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int StockQuantity { get; set; }
}

// 数据库上下文
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    
    public DbSet<Product> Products { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // 种子数据
        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Laptop", Description = "High-performance laptop", Price = 1200.00m, StockQuantity = 10 },
            new Product { Id = 2, Name = "Smartphone", Description = "Latest smartphone", Price = 800.00m, StockQuantity = 15 },
            new Product { Id = 3, Name = "Headphones", Description = "Noise-cancelling headphones", Price = 150.00m, StockQuantity = 20 }
        );
    }
}

// 控制器
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly AppDbContext _context;
    
    public ProductsController(AppDbContext context)
    {
        _context = context;
    }
    
    // GET: api/products
    [HttpGet]
    public ActionResult<IEnumerable<Product>> GetProducts()
    {
        return _context.Products.ToList();
    }
    
    // GET: api/products/5
    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
        var product = _context.Products.Find(id);
        
        if (product == null)
        {
            return NotFound();
        }
        
        return product;
    }
    
    // POST: api/products
    [HttpPost]
    public ActionResult<Product> CreateProduct(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();
        
        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }
    
    // PUT: api/products/5
    [HttpPut("{id}")]
    public IActionResult UpdateProduct(int id, Product product)
    {
        if (id != product.Id)
        {
            return BadRequest();
        }
        
        _context.Entry(product).State = EntityState.Modified;
        
        try
        {
            _context.SaveChanges();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProductExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        
        return NoContent();
    }
    
    // DELETE: api/products/5
    [HttpDelete("{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var product = _context.Products.Find(id);
        if (product == null)
        {
            return NotFound();
        }
        
        _context.Products.Remove(product);
        _context.SaveChanges();
        
        return NoContent();
    }
    
    private bool ProductExists(int id)
    {
        return _context.Products.Any(e => e.Id == id);
    }
}

// 启动类
public class Program
{
    public static void Main(string[] args)
    {
        CreateHostBuilder(args).Build().Run();
    }
    
    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
                webBuilder.UseStartup<Startup>();
            });
}

// 配置类
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    
    public IConfiguration Configuration { get; }
    
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
        
        services.AddControllers();
        
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Products API", Version = "v1" });
        });
    }
    
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Products API v1"));
        }
        
        app.UseHttpsRedirection();
        
        app.UseRouting();
        
        app.UseAuthorization();
        
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Unity游戏脚本</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 玩家控制器
public class PlayerController : MonoBehaviour
{
    // 可在Unity编辑器中设置的公共变量
    public float moveSpeed = 5f;
    public float jumpForce = 10f;
    public Transform groundCheck;
    public float groundCheckRadius = 0.2f;
    public LayerMask groundLayer;
    public int maxHealth = 100;
    public GameObject bulletPrefab;
    public Transform firePoint;
    public float fireRate = 0.5f;
    
    // 私有变量
    private Rigidbody2D rb;
    private Animator animator;
    private bool isGrounded;
    private bool isFacingRight = true;
    private int currentHealth;
    private float nextFireTime = 0f;
    
    // 初始化
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
        currentHealth = maxHealth;
    }
    
    // 每帧更新
    void Update()
    {
        // 检查是否在地面上
        isGrounded = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, groundLayer);
        
        // 获取水平输入
        float horizontalInput = Input.GetAxis("Horizontal");
        
        // 移动玩家
        rb.velocity = new Vector2(horizontalInput * moveSpeed, rb.velocity.y);
        
        // 更新动画参数
        animator.SetFloat("Speed", Mathf.Abs(horizontalInput));
        animator.SetBool("IsGrounded", isGrounded);
        
        // 翻转角色朝向
        if (horizontalInput > 0 && !isFacingRight)
        {
            Flip();
        }
        else if (horizontalInput < 0 && isFacingRight)
        {
            Flip();
        }
        
        // 跳跃
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            rb.AddForce(new Vector2(0f, jumpForce), ForceMode2D.Impulse);
            animator.SetTrigger("Jump");
        }
        
        // 射击
        if (Input.GetButtonDown("Fire1") && Time.time >= nextFireTime)
        {
            Shoot();
            nextFireTime = Time.time + 1f / fireRate;
        }
    }
    
    // 翻转角色朝向
    void Flip()
    {
        isFacingRight = !isFacingRight;
        Vector3 scale = transform.localScale;
        scale.x *= -1;
        transform.localScale = scale;
    }
    
    // 射击方法
    void Shoot()
    {
        animator.SetTrigger("Shoot");
        
        // 创建子弹
        GameObject bullet = Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
        
        // 设置子弹方向
        Bullet bulletScript = bullet.GetComponent<Bullet>();
        if (bulletScript != null)
        {
            bulletScript.direction = isFacingRight ? 1 : -1;
        }
    }
    
    // 受到伤害
    public void TakeDamage(int damage)
    {
        currentHealth -= damage;
        
        // 播放受伤动画
        animator.SetTrigger("Hurt");
        
        if (currentHealth <= 0)
        {
            Die();
        }
    }
    
    // 死亡方法
    void Die()
    {
        // 播放死亡动画
        animator.SetBool("IsDead", true);
        
        // 禁用玩家控制
        this.enabled = false;
        rb.velocity = Vector2.zero;
        rb.bodyType = RigidbodyType2D.Static;
        
        // 通知游戏管理器
        GameManager.instance.GameOver();
    }
}

// 子弹脚本
public class Bullet : MonoBehaviour
{
    public float speed = 20f;
    public int damage = 20;
    public float lifetime = 2f;
    public GameObject impactEffect;
    
    [HideInInspector]
    public int direction = 1;
    
    private Rigidbody2D rb;
    
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        rb.velocity = new Vector2(speed * direction, 0);
        
        // 设置自动销毁
        Destroy(gameObject, lifetime);
    }
    
    void OnTriggerEnter2D(Collider2D collision)
    {
        // 检查是否击中敌人
        Enemy enemy = collision.GetComponent<Enemy>();
        if (enemy != null)
        {
            enemy.TakeDamage(damage);
        }
        
        // 创建碰撞效果
        if (impactEffect != null)
        {
            Instantiate(impactEffect, transform.position, transform.rotation);
        }
        
        // 销毁子弹
        Destroy(gameObject);
    }
}

// 游戏管理器
public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    
    public GameObject gameOverUI;
    public GameObject pauseMenuUI;
    
    private bool isGamePaused = false;
    
    void Awake()
    {
        // 单例模式
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
            return;
        }
        
        DontDestroyOnLoad(gameObject);
    }
    
    void Update()
    {
        // 暂停/恢复游戏
        if (Input.GetKeyDown(KeyCode.Escape))
        {
            if (isGamePaused)
            {
                ResumeGame();
            }
            else
            {
                PauseGame();
            }
        }
    }
    
    public void GameOver()
    {
        gameOverUI.SetActive(true);
        Time.timeScale = 0f;
    }
    
    public void PauseGame()
    {
        pauseMenuUI.SetActive(true);
        Time.timeScale = 0f;
        isGamePaused = true;
    }
    
    public void ResumeGame()
    {
        pauseMenuUI.SetActive(false);
        Time.timeScale = 1f;
        isGamePaused = false;
    }
    
    public void RestartGame()
    {
        Time.timeScale = 1f;
        UnityEngine.SceneManagement.SceneManager.LoadScene(
            UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
    }
    
    public void QuitGame()
    {
        #if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false;
        #else
        Application.Quit();
        #endif
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
            <Link href="/languages/java">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Java</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C#的面向对象特性，但需要更广泛的跨平台支持和更大的开源生态系统，Java是一个不错的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C#的类型系统，但需要在Web前端开发中应用类似的概念，TypeScript是一个很好的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要更接近硬件的控制和更高的性能，同时保留面向对象特性，C++是C#的一个强大替代品。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/python-ai">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Python</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你想要更简洁的语法和更快的开发速度，同时保持良好的可读性，Python是一个值得考虑的选择。</p>
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
                如果你对C#还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">C#适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">C#对于初学者来说是一个不错的选择，尽管它有一定的学习曲线。它的语法清晰、一致，并且有丰富的文档和学习资源。Visual Studio提供了出色的开发环境，包括智能代码补全和调试工具，这对初学者非常有帮助。C#的强类型系统可以在编译时捕获错误，减少了调试的难度。此外，C#的应用范围广泛，从Windows应用到游戏开发（通过Unity），再到Web开发（通过ASP.NET），学习C#可以为你打开多个领域的大门。不过，如果你完全没有编程经验，可能会发现一些概念（如面向对象编程）一开始有些难以理解，但随着学习的深入，这些概念会变得更加清晰。总的来说，如果你愿意投入时间学习，C#是一个值得考虑的起点。</p>
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
