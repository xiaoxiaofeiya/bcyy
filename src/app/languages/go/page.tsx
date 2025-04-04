'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function GoPage() {
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
                <span className="text-gray-700">Go</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Go</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
              高性能
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Go（又称Golang）是由Google开发的一种静态类型、编译型、并发型，并具有垃圾回收功能的编程语言。Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-2/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">简单</span>
            </div>
            <p className="mt-4 text-gray-600">
              Go语言设计简洁，语法规则少，没有复杂的特性，对于有编程基础的人来说非常容易上手。
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
              Go在云原生、微服务、DevOps等领域需求旺盛，大型科技公司如Google、Uber、Dropbox等都在大量使用Go。
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
              Go开发者的薪资普遍较高，尤其是在云服务、分布式系统和高性能应用领域，薪资水平处于编程语言的前列。
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
            <h2 className="text-2xl font-bold mb-4">Go语言简介</h2>
            <p className="mb-4">
              Go（又称Golang）是由Google的Robert Griesemer、Rob Pike和Ken Thompson于2007年开始设计，并于2009年正式对外发布的一种静态类型、编译型、并发型，并具有垃圾回收功能的编程语言。Go语言的设计目标是创建一种兼具静态类型语言的安全性和动态类型语言的表达力的编程语言，同时保持简单、高效和可读性。
            </p>
            <p className="mb-4">
              Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程。Go语言的并发机制使其非常适合编写高性能的网络服务器和分布式系统。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Go语言的历史</h3>
            <p className="mb-4">
              Go语言的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>2007年：Google内部开始设计Go语言，旨在解决C++的复杂性和缓慢的编译速度问题。</li>
              <li>2009年11月：Go语言首次公开发布，作为开源项目。</li>
              <li>2012年3月：Go 1.0版本发布，承诺向后兼容性。</li>
              <li>2014年8月：Go 1.3版本发布，改进了垃圾回收器。</li>
              <li>2016年2月：Go 1.6版本发布，默认启用HTTP/2支持。</li>
              <li>2017年2月：Go 1.8版本发布，进一步减少了垃圾回收暂停时间。</li>
              <li>2018年8月：Go 1.11版本发布，引入了Go模块系统（初步支持）。</li>
              <li>2019年9月：Go 1.13版本发布，Go模块系统成为默认的依赖管理方式。</li>
              <li>2020年8月：Go 1.15版本发布，改进了链接器，减少了内存使用。</li>
              <li>2021年8月：Go 1.17版本发布，引入了模块的延迟加载和泛型的预览。</li>
              <li>2022年3月：Go 1.18版本发布，正式支持泛型。</li>
              <li>2023年8月：Go 1.21版本发布，引入了新的内置函数和工具链改进。</li>
            </ul>
            <p className="mb-4">
              随着时间的推移，Go语言不断发展，增加了更多功能，同时保持了其简单性和性能优势。Go语言已经成为云计算、微服务和DevOps领域的主要语言之一，被许多大型科技公司采用。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Go语言的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>简洁的语法：Go语言的语法简单明了，关键字少，易于学习和使用。</li>
              <li>静态类型：Go是一种静态类型语言，提供编译时类型检查，减少运行时错误。</li>
              <li>并发支持：Go语言内置了goroutine和channel，使并发编程变得简单和高效。</li>
              <li>垃圾回收：自动内存管理，减轻了开发者的负担。</li>
              <li>快速编译：Go语言的编译速度非常快，提高了开发效率。</li>
              <li>标准库丰富：Go提供了丰富的标准库，涵盖了网络、加密、压缩等各种功能。</li>
              <li>跨平台：Go支持交叉编译，可以在一个平台上编译出能在其他平台上运行的程序。</li>
              <li>内置测试支持：Go语言内置了测试框架，方便进行单元测试和基准测试。</li>
              <li>代码格式化：Go提供了官方的代码格式化工具gofmt，保证了代码风格的一致性。</li>
              <li>接口隐式实现：Go的接口是隐式实现的，增加了代码的灵活性。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Go语言应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">云原生应用</h3>
                </div>
                <p className="text-gray-600">
                  Go是云原生应用开发的理想选择，许多云原生工具和平台都是用Go编写的。Kubernetes、Docker、Prometheus、Istio等云原生生态系统中的核心项目都使用Go开发。Go的高性能、低内存占用和并发特性使其非常适合构建可扩展的云服务。Go的静态二进制文件部署简单，非常适合容器化环境，这也是它在云原生领域流行的原因之一。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">微服务架构</h3>
                </div>
                <p className="text-gray-600">
                  Go的轻量级并发模型（goroutines）和网络编程能力使其成为构建微服务的理想选择。Go服务启动快、资源占用少，可以在同一硬件上运行更多实例。Go的标准库提供了HTTP服务器和客户端的实现，使网络编程变得简单。框架如Go kit、Micro和Gin提供了构建微服务的工具和模式。许多公司，如Uber、Netflix和Monzo，都使用Go构建了他们的微服务架构。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">DevOps工具</h3>
                </div>
                <p className="text-gray-600">
                  Go已成为DevOps工具开发的首选语言之一。许多流行的DevOps工具，如Docker、Kubernetes、Terraform、Prometheus和Grafana，都是用Go编写的。Go的跨平台编译能力使得构建在不同操作系统上运行的工具变得简单。Go程序可以编译成单个二进制文件，不需要运行时依赖，简化了部署和分发。Go的并发模型和性能特性使其适合处理复杂的系统操作和监控任务。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">网络编程</h3>
                </div>
                <p className="text-gray-600">
                  Go的标准库提供了强大的网络编程支持，使其成为构建网络服务和协议的理想选择。Go被广泛用于开发高性能的Web服务器、API网关、代理服务器和负载均衡器。许多流行的网络工具，如Caddy Web服务器、Traefik代理和NATS消息系统，都是用Go编写的。Go的并发模型使其能够高效处理大量并发连接，而不会导致系统资源耗尽。Go的网络库支持HTTP/2、WebSocket和gRPC等现代协议。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">分布式系统</h3>
                </div>
                <p className="text-gray-600">
                  Go的并发模型和网络编程能力使其成为构建分布式系统的理想选择。Go的goroutines和channels提供了一种简单而强大的方式来处理并发和通信。许多分布式系统和数据库，如etcd、CockroachDB和InfluxDB，都是用Go编写的。Go的标准库提供了对分布式系统常见需求的支持，如JSON处理、加密和压缩。Go的性能特性使其能够高效处理大量数据和请求，这在分布式系统中至关重要。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">命令行工具</h3>
                </div>
                <p className="text-gray-600">
                  Go是开发命令行工具和实用程序的理想选择。Go程序可以编译成单个二进制文件，不需要运行时依赖，使分发和安装变得简单。Go的跨平台编译能力使得构建在不同操作系统上运行的工具变得容易。Go的标准库提供了处理命令行参数、文件操作和文本处理的功能。许多流行的命令行工具，如Hugo静态网站生成器、fzf模糊查找器和vegeta负载测试工具，都是用Go编写的。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Go语言优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">简洁的语法</h4>
                    <p className="text-gray-600">Go语言的语法简单明了，关键字少（只有25个），没有复杂的特性，易于学习和使用。这减少了开发者之间的沟通成本，提高了代码的可读性和可维护性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">高性能</h4>
                    <p className="text-gray-600">Go是一种编译型语言，性能接近C/C++，但开发效率更高。Go的垃圾回收器经过多次优化，暂停时间短，对性能影响小。Go程序启动快，内存占用少，非常适合微服务和云环境。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">并发支持</h4>
                    <p className="text-gray-600">Go语言内置了goroutines和channels，使并发编程变得简单和高效。Goroutines是轻量级的线程，可以同时运行数千个而不会耗尽系统资源。Channels提供了一种安全的方式来在goroutines之间通信，避免了传统并发编程中的许多陷阱。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">标准库丰富</h4>
                    <p className="text-gray-600">Go提供了丰富的标准库，涵盖了网络、加密、压缩、图像处理等各种功能，减少了对第三方库的依赖。标准库的质量高，API设计一致，文档完善，使开发者能够快速构建功能完整的应用程序。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">静态类型和编译检查</h4>
                    <p className="text-gray-600">Go是一种静态类型语言，提供编译时类型检查，减少了运行时错误。Go编译器会强制执行严格的代码规范，如未使用的导入和变量，这有助于保持代码的整洁和高效。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">跨平台和部署简单</h4>
                    <p className="text-gray-600">Go支持交叉编译，可以在一个平台上编译出能在其他平台上运行的程序。Go程序可以编译成单个二进制文件，不需要运行时依赖，简化了部署和分发过程，特别适合容器化环境。</p>
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
                    <h4 className="font-medium mb-1">缺乏泛型（在Go 1.18之前）</h4>
                    <p className="text-gray-600">Go 1.18之前缺乏泛型支持，导致代码重复和类型转换。虽然Go 1.18引入了泛型，但实现相对简单，功能有限，可能不如其他语言的泛型系统强大。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">错误处理冗长</h4>
                    <p className="text-gray-600">Go的错误处理基于返回值而非异常，这导致了大量的if err != nil检查代码。虽然这种方式使错误处理更明确，但也使代码变得冗长，可能影响可读性。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">缺乏某些现代语言特性</h4>
                    <p className="text-gray-600">Go缺乏一些现代编程语言的特性，如函数式编程、操作符重载和继承等。这是设计上的选择，旨在保持语言简单，但可能限制了某些编程范式的应用。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">包管理系统的演变</h4>
                    <p className="text-gray-600">Go的包管理系统经历了多次变化，从GOPATH到dep再到Go Modules，这给一些项目带来了迁移成本。虽然Go Modules现在已经成熟，但早期的不稳定性曾经是一个问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">生态系统相对年轻</h4>
                    <p className="text-gray-600">与一些成熟的语言相比，Go的生态系统相对年轻，某些领域的库和工具可能不如其他语言丰富。不过，这种情况正在迅速改善，特别是在云原生和微服务领域。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">不适合所有类型的应用</h4>
                    <p className="text-gray-600">Go不是万能的，它不太适合GUI应用开发、游戏开发或需要极致性能的系统编程。在这些领域，C++、Rust或专门的游戏引擎可能是更好的选择。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Go语言学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://golang.org/doc/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Go官方文档</h4>
                      <p className="text-sm text-gray-600">最权威的Go语言参考资料，包括详细的语言规范、标准库文档和教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://tour.golang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Go语言之旅</h4>
                      <p className="text-sm text-gray-600">官方交互式教程，通过浏览器直接学习和实践Go语言基础知识。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://golang.org/doc/effective_go" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Effective Go</h4>
                      <p className="text-sm text-gray-600">官方指南，介绍如何编写清晰、惯用的Go代码，是进阶必读资料。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://go.dev/blog/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Go官方博客</h4>
                      <p className="text-sm text-gray-600">Go团队的官方博客，发布语言更新、最佳实践和深入技术文章。</p>
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
                  <a href="https://www.udemy.com/course/go-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - Go完全开发者指南</h4>
                      <p className="text-sm text-gray-600">全面的Go入门课程，涵盖基础知识和实际项目开发。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/go" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - Go学习路径</h4>
                      <p className="text-sm text-gray-600">系统的Go学习路径，从基础到高级主题，包含多个专业课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.coursera.org/specializations/google-golang" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - Go编程专项课程</h4>
                      <p className="text-sm text-gray-600">由加州大学尔湾分校提供的专业Go编程课程系列。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://exercism.io/tracks/go" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Exercism - Go练习</h4>
                      <p className="text-sm text-gray-600">通过实际编码练习和导师反馈学习Go语言。</p>
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
                    <h4 className="font-medium">《Go程序设计语言》</h4>
                    <p className="text-sm text-gray-600">作者：Alan A. A. Donovan, Brian W. Kernighan</p>
                    <p className="text-sm text-gray-600">由Go团队成员和著名计算机科学家合著的权威指南，被认为是学习Go的必读书籍。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Go Web编程》</h4>
                    <p className="text-sm text-gray-600">作者：Sau Sheong Chang</p>
                    <p className="text-sm text-gray-600">深入介绍如何使用Go构建Web应用程序，从基础HTTP到模板、数据库和部署。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Go语言实战》</h4>
                    <p className="text-sm text-gray-600">作者：William Kennedy, Brian Ketelsen, Erik St. Martin</p>
                    <p className="text-sm text-gray-600">通过实际项目学习Go语言，涵盖了并发、测试和包管理等主题。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Go并发编程实战》</h4>
                    <p className="text-sm text-gray-600">作者：Katherine Cox-Buday</p>
                    <p className="text-sm text-gray-600">专注于Go的并发模型，深入讲解goroutines、channels和并发模式。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/go" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的Go标签，可以提问和查找Go相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/golang/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit Go社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的Go社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://gophers.slack.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Gophers Slack</h4>
                      <p className="text-sm text-gray-600">Go开发者的Slack社区，有多个专题频道讨论各种Go相关话题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://github.com/golang/go/wiki/Conferences" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Go会议和聚会</h4>
                      <p className="text-sm text-gray-600">全球Go会议和聚会的信息，是结识其他Go开发者的好方式。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Go语言案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名Go项目</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Docker截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Docker</h4>
                      <p className="text-sm text-gray-600">容器化平台，使应用程序的部署和运行变得简单。Docker的大部分组件都是用Go编写的，展示了Go在容器技术中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Kubernetes截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Kubernetes</h4>
                      <p className="text-sm text-gray-600">容器编排平台，用于自动化应用程序的部署、扩展和管理。Kubernetes是用Go编写的，是云原生领域的旗舰项目。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Prometheus截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Prometheus</h4>
                      <p className="text-sm text-gray-600">开源的监控和告警系统，专为云原生环境设计。Prometheus是用Go编写的，展示了Go在系统监控领域的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Go代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 包声明
package main

// 导入包
import (
    "fmt"
    "math/rand"
    "time"
)

// 常量定义
const (
    Pi = 3.14159
    Version = "1.0.0"
)

// 变量定义
var (
    name string
    age  int
    isActive bool
)

// 结构体定义
type Person struct {
    Name string
    Age  int
}

// 为结构体定义方法
func (p Person) SayHello() string {
    return fmt.Sprintf("Hello, my name is %s and I'm %d years old", p.Name, p.Age)
}

// 接口定义
type Speaker interface {
    SayHello() string
}

// 函数定义
func greet(s Speaker) {
    fmt.Println(s.SayHello())
}

// 主函数
func main() {
    // 变量初始化
    name = "Gopher"
    age = 10
    isActive = true
    
    // 短变量声明
    message := "Welcome to Go!"
    
    // 打印输出
    fmt.Println(message)
    fmt.Printf("Name: %s, Age: %d, Active: %t\\n", name, age, isActive)
    
    // 条件语句
    if age >= 18 {
        fmt.Println("Adult")
    } else {
        fmt.Println("Minor")
    }
    
    // 循环
    fmt.Println("Counting:")
    for i := 0; i < 5; i++ {
        fmt.Printf("%d ", i)
    }
    fmt.Println()
    
    // 数组
    var numbers [5]int
    numbers[0] = 1
    numbers[1] = 2
    fmt.Println("Array:", numbers)
    
    // 切片
    fruits := []string{"apple", "banana", "cherry"}
    fruits = append(fruits, "date")
    fmt.Println("Slice:", fruits)
    
    // 映射
    person := map[string]string{
        "name": "Alice",
        "city": "Wonderland",
    }
    fmt.Println("Map:", person)
    
    // 结构体实例化
    p := Person{Name: "Bob", Age: 25}
    fmt.Println("Person:", p)
    
    // 调用方法
    fmt.Println(p.SayHello())
    
    // 通过接口调用
    greet(p)
    
    // 随机数生成
    rand.Seed(time.Now().UnixNano())
    fmt.Println("Random number:", rand.Intn(100))
    
    // 错误处理
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
    
    result, err = divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}

// 返回错误的函数
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">并发编程示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`package main

import (
    "fmt"
    "sync"
    "time"
)

// 简单的goroutine示例
func simpleGoroutine() {
    fmt.Println("=== Simple Goroutine Example ===")
    
    // 启动一个goroutine
    go func() {
        fmt.Println("Hello from goroutine!")
    }()
    
    // 主函数继续执行
    fmt.Println("Hello from main function!")
    
    // 等待goroutine完成
    time.Sleep(100 * time.Millisecond)
}

// 使用channel进行通信
func channelExample() {
    fmt.Println("\\n=== Channel Example ===")
    
    // 创建一个无缓冲的channel
    messages := make(chan string)
    
    // 启动一个goroutine发送消息
    go func() {
        fmt.Println("Goroutine: Sending message...")
        messages <- "Hello from goroutine!"
    }()
    
    // 从channel接收消息
    msg := <-messages
    fmt.Println("Main: Received message:", msg)
}

// 使用缓冲channel
func bufferedChannelExample() {
    fmt.Println("\\n=== Buffered Channel Example ===")
    
    // 创建一个缓冲大小为2的channel
    buffer := make(chan string, 2)
    
    // 发送消息到channel
    buffer <- "Message 1"
    buffer <- "Message 2"
    
    // 接收消息
    fmt.Println("Received:", <-buffer)
    fmt.Println("Received:", <-buffer)
}

// 使用select语句
func selectExample() {
    fmt.Println("\\n=== Select Example ===")
    
    c1 := make(chan string)
    c2 := make(chan string)
    
    // 启动两个goroutine发送消息
    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()
    
    // 使用select等待两个channel
    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("Received from c1:", msg1)
        case msg2 := <-c2:
            fmt.Println("Received from c2:", msg2)
        }
    }
}

// 使用WaitGroup等待多个goroutine完成
func waitGroupExample() {
    fmt.Println("\\n=== WaitGroup Example ===")
    
    var wg sync.WaitGroup
    
    // 启动多个goroutine
    for i := 1; i <= 3; i++ {
        wg.Add(1) // 增加计数器
        
        // 启动goroutine
        go func(id int) {
            defer wg.Done() // 完成时减少计数器
            
            fmt.Printf("Worker %d starting\\n", id)
            time.Sleep(time.Second)
            fmt.Printf("Worker %d done\\n", id)
        }(i)
    }
    
    // 等待所有goroutine完成
    wg.Wait()
    fmt.Println("All workers done")
}

// 使用互斥锁保护共享资源
func mutexExample() {
    fmt.Println("\\n=== Mutex Example ===")
    
    // 共享计数器
    var counter = 0
    
    // 互斥锁
    var mutex sync.Mutex
    
    // WaitGroup等待所有goroutine完成
    var wg sync.WaitGroup
    
    // 启动多个goroutine增加计数器
    for i := 0; i < 1000; i++ {
        wg.Add(1)
        
        go func() {
            defer wg.Done()
            
            // 加锁
            mutex.Lock()
            // 修改共享资源
            counter++
            // 解锁
            mutex.Unlock()
        }()
    }
    
    // 等待所有goroutine完成
    wg.Wait()
    fmt.Println("Counter:", counter)
}

// 工作池模式
func workerPoolExample() {
    fmt.Println("\\n=== Worker Pool Example ===")
    
    const numJobs = 5
    const numWorkers = 3
    
    // 创建任务和结果channel
    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)
    
    // 启动工作goroutine
    for w := 1; w <= numWorkers; w++ {
        go worker(w, jobs, results)
    }
    
    // 发送任务
    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)
    
    // 收集结果
    for a := 1; a <= numJobs; a++ {
        <-results
    }
}

// 工作者函数
func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Printf("Worker %d started job %d\\n", id, j)
        time.Sleep(time.Second)
        fmt.Printf("Worker %d finished job %d\\n", id, j)
        results <- j * 2
    }
}

func main() {
    // 运行所有示例
    simpleGoroutine()
    channelExample()
    bufferedChannelExample()
    selectExample()
    waitGroupExample()
    mutexExample()
    workerPoolExample()
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Go项目示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">RESTful API服务</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`package main

import (
    "encoding/json"
    "log"
    "net/http"
    "strconv"
    "sync"

    "github.com/gorilla/mux"
)

// 产品模型
type Product struct {
    ID          int     \`json:"id"\`
    Name        string  \`json:"name"\`
    Description string  \`json:"description"\`
    Price       float64 \`json:"price"\`
    Quantity    int     \`json:"quantity"\`
}

// 内存数据存储
var (
    products     []Product
    nextID       int = 1
    productMutex sync.RWMutex
)

// 初始化一些示例数据
func init() {
    products = []Product{
        {ID: 1, Name: "Laptop", Description: "High-performance laptop", Price: 999.99, Quantity: 10},
        {ID: 2, Name: "Smartphone", Description: "Latest smartphone", Price: 499.99, Quantity: 15},
        {ID: 3, Name: "Headphones", Description: "Noise-cancelling headphones", Price: 149.99, Quantity: 20},
    }
    nextID = 4
}

// 获取所有产品
func getProducts(w http.ResponseWriter, r *http.Request) {
    productMutex.RLock()
    defer productMutex.RUnlock()
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(products)
}

// 获取单个产品
func getProduct(w http.ResponseWriter, r *http.Request) {
    productMutex.RLock()
    defer productMutex.RUnlock()
    
    params := mux.Vars(r)
    id, err := strconv.Atoi(params["id"])
    if err != nil {
        http.Error(w, "Invalid product ID", http.StatusBadRequest)
        return
    }
    
    for _, product := range products {
        if product.ID == id {
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(product)
            return
        }
    }
    
    http.Error(w, "Product not found", http.StatusNotFound)
}

// 创建产品
func createProduct(w http.ResponseWriter, r *http.Request) {
    productMutex.Lock()
    defer productMutex.Unlock()
    
    var product Product
    err := json.NewDecoder(r.Body).Decode(&product)
    if err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    
    product.ID = nextID
    nextID++
    
    products = append(products, product)
    
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(product)
}

// 更新产品
func updateProduct(w http.ResponseWriter, r *http.Request) {
    productMutex.Lock()
    defer productMutex.Unlock()
    
    params := mux.Vars(r)
    id, err := strconv.Atoi(params["id"])
    if err != nil {
        http.Error(w, "Invalid product ID", http.StatusBadRequest)
        return
    }
    
    var updatedProduct Product
    err = json.NewDecoder(r.Body).Decode(&updatedProduct)
    if err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    
    for i, product := range products {
        if product.ID == id {
            updatedProduct.ID = id
            products[i] = updatedProduct
            
            w.Header().Set("Content-Type", "application/json")
            json.NewEncoder(w).Encode(updatedProduct)
            return
        }
    }
    
    http.Error(w, "Product not found", http.StatusNotFound)
}

// 删除产品
func deleteProduct(w http.ResponseWriter, r *http.Request) {
    productMutex.Lock()
    defer productMutex.Unlock()
    
    params := mux.Vars(r)
    id, err := strconv.Atoi(params["id"])
    if err != nil {
        http.Error(w, "Invalid product ID", http.StatusBadRequest)
        return
    }
    
    for i, product := range products {
        if product.ID == id {
            products = append(products[:i], products[i+1:]...)
            w.WriteHeader(http.StatusNoContent)
            return
        }
    }
    
    http.Error(w, "Product not found", http.StatusNotFound)
}

// 中间件：请求日志
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Printf("%s %s", r.Method, r.RequestURI)
        next.ServeHTTP(w, r)
    })
}

func main() {
    // 创建路由器
    router := mux.NewRouter()
    
    // 应用中间件
    router.Use(loggingMiddleware)
    
    // 定义API路由
    router.HandleFunc("/api/products", getProducts).Methods("GET")
    router.HandleFunc("/api/products/{id}", getProduct).Methods("GET")
    router.HandleFunc("/api/products", createProduct).Methods("POST")
    router.HandleFunc("/api/products/{id}", updateProduct).Methods("PUT")
    router.HandleFunc("/api/products/{id}", deleteProduct).Methods("DELETE")
    
    // 启动服务器
    log.Println("Server starting on port 8000...")
    log.Fatal(http.ListenAndServe(":8000", router))
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">微服务示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`package main

import (
    "context"
    "encoding/json"
    "log"
    "net/http"
    "os"
    "os/signal"
    "time"

    "github.com/gorilla/mux"
    "go.mongodb.org/mongo-driver/bson"
    "go.mongodb.org/mongo-driver/bson/primitive"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

// 用户模型
type User struct {
    ID        primitive.ObjectID \`json:"id,omitempty" bson:"_id,omitempty"\`
    Name      string             \`json:"name" bson:"name"\`
    Email     string             \`json:"email" bson:"email"\`
    CreatedAt time.Time          \`json:"created_at" bson:"created_at"\`
}

// 应用配置
type Config struct {
    ServerPort  string
    MongoURI    string
    DatabaseName string
    CollectionName string
}

// 应用上下文
type App struct {
    Router     *mux.Router
    DB         *mongo.Database
    Collection *mongo.Collection
    Config     Config
}

// 初始化应用
func (app *App) Initialize() {
    // 设置默认配置
    app.Config = Config{
        ServerPort:     "8080",
        MongoURI:       "mongodb://localhost:27017",
        DatabaseName:   "userservice",
        CollectionName: "users",
    }
    
    // 从环境变量覆盖配置
    if port := os.Getenv("SERVER_PORT"); port != "" {
        app.Config.ServerPort = port
    }
    if uri := os.Getenv("MONGO_URI"); uri != "" {
        app.Config.MongoURI = uri
    }
    
    // 连接MongoDB
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    
    clientOptions := options.Client().ApplyURI(app.Config.MongoURI)
    client, err := mongo.Connect(ctx, clientOptions)
    if err != nil {
        log.Fatal(err)
    }
    
    // 检查连接
    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }
    
    log.Println("Connected to MongoDB!")
    
    app.DB = client.Database(app.Config.DatabaseName)
    app.Collection = app.DB.Collection(app.Config.CollectionName)
    
    // 初始化路由
    app.Router = mux.NewRouter()
    app.setupRoutes()
}

// 设置API路由
func (app *App) setupRoutes() {
    app.Router.HandleFunc("/health", app.healthCheck).Methods("GET")
    app.Router.HandleFunc("/users", app.getUsers).Methods("GET")
    app.Router.HandleFunc("/users/{id}", app.getUser).Methods("GET")
    app.Router.HandleFunc("/users", app.createUser).Methods("POST")
    app.Router.HandleFunc("/users/{id}", app.updateUser).Methods("PUT")
    app.Router.HandleFunc("/users/{id}", app.deleteUser).Methods("DELETE")
}

// 健康检查端点
func (app *App) healthCheck(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]bool{"ok": true})
}

// 获取所有用户
func (app *App) getUsers(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    var users []User
    
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    cursor, err := app.Collection.Find(ctx, bson.M{})
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer cursor.Close(ctx)
    
    if err = cursor.All(ctx, &users); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    json.NewEncoder(w).Encode(users)
}

// 获取单个用户
func (app *App) getUser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    params := mux.Vars(r)
    id, err := primitive.ObjectIDFromHex(params["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    var user User
    
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    err = app.Collection.FindOne(ctx, bson.M{"_id": id}).Decode(&user)
    if err != nil {
        if err == mongo.ErrNoDocuments {
            http.Error(w, "User not found", http.StatusNotFound)
        } else {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
        return
    }
    
    json.NewEncoder(w).Encode(user)
}

// 创建用户
func (app *App) createUser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    
    user.CreatedAt = time.Now()
    
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    result, err := app.Collection.InsertOne(ctx, user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    user.ID = result.InsertedID.(primitive.ObjectID)
    
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(user)
}

// 更新用户
func (app *App) updateUser(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    params := mux.Vars(r)
    id, err := primitive.ObjectIDFromHex(params["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    var user User
    if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }
    
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    update := bson.M{
        "$set": bson.M{
            "name":  user.Name,
            "email": user.Email,
        },
    }
    
    result, err := app.Collection.UpdateOne(ctx, bson.M{"_id": id}, update)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    if result.MatchedCount == 0 {
        http.Error(w, "User not found", http.StatusNotFound)
        return
    }
    
    user.ID = id
    json.NewEncoder(w).Encode(user)
}

// 删除用户
func (app *App) deleteUser(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    id, err := primitive.ObjectIDFromHex(params["id"])
    if err != nil {
        http.Error(w, "Invalid user ID", http.StatusBadRequest)
        return
    }
    
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    result, err := app.Collection.DeleteOne(ctx, bson.M{"_id": id})
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    
    if result.DeletedCount == 0 {
        http.Error(w, "User not found", http.StatusNotFound)
        return
    }
    
    w.WriteHeader(http.StatusNoContent)
}

// 启动服务器
func (app *App) Run() {
    server := &http.Server{
        Addr:         ":" + app.Config.ServerPort,
        Handler:      app.Router,
        ReadTimeout:  15 * time.Second,
        WriteTimeout: 15 * time.Second,
        IdleTimeout:  60 * time.Second,
    }
    
    // 在goroutine中启动服务器
    go func() {
        log.Printf("Server starting on port %s...", app.Config.ServerPort)
        if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
            log.Fatalf("Could not listen on port %s: %v", app.Config.ServerPort, err)
        }
    }()
    
    // 等待中断信号优雅地关闭服务器
    c := make(chan os.Signal, 1)
    signal.Notify(c, os.Interrupt)
    
    // 阻塞直到收到信号
    <-c
    
    // 创建一个5秒的超时上下文
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    // 关闭服务器
    log.Println("Shutting down server...")
    if err := server.Shutdown(ctx); err != nil {
        log.Fatalf("Server forced to shutdown: %v", err)
    }
    
    log.Println("Server gracefully stopped")
}

func main() {
    var app App
    app.Initialize()
    app.Run()
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
            <Link href="/languages/rust">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Rust</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Go的性能和安全性，但需要更精细的内存控制和零成本抽象，Rust是一个很好的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Go的简洁性，但需要更快的开发速度和更丰富的数据科学生态系统，Python是一个不错的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要更成熟的企业级生态系统和更丰富的面向对象特性，Java是一个值得考虑的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要极致的性能和更低级别的系统编程能力，C++提供了更多的控制和灵活性。</p>
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
                如果你对Go还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Go适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Go是一个非常适合初学者的编程语言，因为它的设计理念就是简单和易用。Go的语法简洁明了，关键字少（只有25个），没有复杂的特性，容易理解和掌握。Go的标准库丰富且文档完善，可以快速构建实用的应用程序。Go的编译器提供了清晰的错误信息，有助于调试和学习。此外，Go社区友好且资源丰富，有许多优质的学习材料和教程。Go的并发模型虽然强大，但概念简单，使用goroutines和channels可以轻松编写并发程序。对于有一些编程基础的人来说，Go可能是一个理想的第二语言，特别是如果你对后端开发、云服务或系统工具感兴趣。总的来说，Go的学习曲线相对平缓，是一个值得初学者考虑的编程语言。</p>
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
