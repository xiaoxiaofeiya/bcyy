'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function JavaPage() {
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
                <span className="text-gray-700">Java</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Java</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              企业级开发
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Java是一种广泛使用的面向对象编程语言，以"一次编写，到处运行"的特性著称，广泛应用于企业级应用、Web开发、移动应用和大数据处理等领域。
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
              语法相对严格，但概念清晰，有大量学习资源，适合初学者入门面向对象编程。
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
              Java开发者需求量大，尤其在企业级应用、金融、电商等领域，就业机会稳定。
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
              Java开发者平均薪资在技术行业中处于较高水平，尤其是有企业级开发经验的资深工程师。
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
            <h2 className="text-2xl font-bold mb-4">Java简介</h2>
            <p className="mb-4">
              Java是由Sun Microsystems（现已被Oracle收购）的James Gosling于1995年开发的一种面向对象的编程语言。Java的设计目标是"一次编写，到处运行"（Write Once, Run Anywhere），这意味着编译后的Java代码可以在任何支持Java的平台上运行，而无需重新编译。
            </p>
            <p className="mb-4">
              Java通过Java虚拟机（JVM）实现了平台独立性，Java程序首先被编译成字节码（bytecode），然后由JVM解释执行。这种设计使Java成为一种跨平台的语言，适用于各种环境，从嵌入式设备到企业服务器。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Java的历史</h3>
            <p className="mb-4">
              Java项目始于1991年，最初被称为"Oak"，旨在为家用电器等嵌入式系统开发一种简单、可靠的编程语言。随着互联网的兴起，Java的焦点转向了Web应用开发。1995年，Java正式发布，并迅速获得了广泛的关注和采用。
            </p>
            <p className="mb-4">
              1996年，JDK 1.0发布，标志着Java开发工具包的第一个正式版本。随后的几年里，Java不断发展，增加了更多功能和改进。2006年，Sun Microsystems将大部分Java实现开源，形成了OpenJDK项目。2010年，Oracle收购Sun Microsystems后，成为Java的主要维护者。
            </p>
            <p className="mb-4">
              Java的版本更新一直在继续，每次更新都带来新的语言特性和性能改进。Java 8（2014年）引入了lambda表达式和流API，Java 9（2017年）引入了模块系统，Java 11（2018年）和Java 17（2021年）是长期支持（LTS）版本，提供了更长时间的维护和支持。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Java的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>面向对象：Java是一种纯面向对象的语言，一切皆为对象（基本数据类型除外）。</li>
              <li>平台独立性：Java程序可以在任何装有JVM的平台上运行，无需修改或重新编译。</li>
              <li>简单性：Java语法基于C++，但移除了指针、运算符重载等复杂特性，使其更易学习和使用。</li>
              <li>安全性：Java提供了多层安全机制，包括类型检查、访问控制和内存管理。</li>
              <li>多线程：Java内置了对多线程编程的支持，简化了并发应用的开发。</li>
              <li>健壮性：Java的强类型检查、异常处理和自动内存管理（垃圾回收）提高了程序的稳定性。</li>
              <li>分布式：Java设计时就考虑了网络编程，提供了丰富的网络API。</li>
              <li>高性能：JIT（即时编译）技术使Java程序的执行速度接近原生代码。</li>
              <li>丰富的生态系统：Java拥有庞大的开源社区和丰富的第三方库，几乎可以满足任何开发需求。</li>
              <li>向后兼容性：Java非常注重向后兼容，确保旧代码在新版本中仍能正常运行。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Java应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">企业级应用开发</h3>
                </div>
                <p className="text-gray-600">
                  Java是企业级应用开发的首选语言之一，特别是使用Spring框架。Java的稳定性、安全性和可扩展性使其适合开发银行、金融、保险、电信等行业的大型企业应用系统。Java EE（Enterprise Edition）提供了一套完整的企业级API，包括Web服务、消息传递、事务管理等。
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
                  Java用于开发各种Web应用，从简单的网站到复杂的Web服务。框架如Spring MVC、JSF和Play Framework简化了Web开发过程。Servlet和JSP技术是Java Web开发的基础，而Spring Boot等现代框架提供了更高效的开发体验。许多大型网站，如LinkedIn、Amazon和eBay，都使用Java作为后端技术。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Android应用开发</h3>
                </div>
                <p className="text-gray-600">
                  虽然Kotlin现在是Android开发的首选语言，但Java仍然是Android应用开发的重要语言。Android SDK提供了基于Java的API，使开发者能够创建各种Android应用。大量现有的Android应用都是用Java开发的，Java开发者可以轻松过渡到Android开发。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">大数据处理</h3>
                </div>
                <p className="text-gray-600">
                  Java在大数据生态系统中扮演着重要角色。Hadoop、Spark、Flink等主要的大数据处理框架都是用Java或基于JVM的语言开发的。Java的可靠性、性能和跨平台特性使其成为处理和分析大规模数据集的理想选择。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">云应用和微服务</h3>
                </div>
                <p className="text-gray-600">
                  Java适合开发云原生应用和微服务架构。Spring Cloud和Micronaut等框架提供了构建分布式系统的工具。Java的强大生态系统支持容器化、服务发现、配置管理等云环境所需的功能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">科学计算和数据分析</h3>
                </div>
                <p className="text-gray-600">
                  Java用于科学计算和数据分析，特别是在需要高性能和可靠性的场景。库如Apache Commons Math、Deeplearning4j和Weka提供了数学计算、机器学习和数据挖掘的功能。Java的并行处理能力使其适合处理复杂的科学计算任务。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Java优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">平台独立性</h4>
                    <p className="text-gray-600">Java的"一次编写，到处运行"特性使其成为真正的跨平台语言，程序可以在任何支持JVM的设备上运行。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的生态系统</h4>
                    <p className="text-gray-600">Java拥有庞大的开源社区和丰富的第三方库，几乎可以满足任何开发需求，从Web开发到大数据处理。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">企业级支持</h4>
                    <p className="text-gray-600">Java在企业级应用开发中有着广泛的应用，拥有成熟的框架和工具，如Spring、Hibernate等。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">安全性</h4>
                    <p className="text-gray-600">Java提供了多层安全机制，包括类型检查、访问控制、沙箱模型和加密API，使其成为开发安全应用的理想选择。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">自动内存管理</h4>
                    <p className="text-gray-600">Java的垃圾回收机制自动管理内存，减少了内存泄漏和悬挂指针等常见问题，提高了程序的稳定性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">多线程支持</h4>
                    <p className="text-gray-600">Java内置了对多线程编程的支持，提供了同步机制和线程API，简化了并发应用的开发。</p>
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
                    <h4 className="font-medium mb-1">性能开销</h4>
                    <p className="text-gray-600">相比C/C++等直接编译为机器码的语言，Java的JVM解释执行模式会带来一定的性能开销，尽管JIT编译技术已经大大改善了这一问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存消耗</h4>
                    <p className="text-gray-600">Java应用通常需要较多的内存，JVM本身也需要一定的内存开销，这在资源受限的环境中可能是一个问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">启动时间</h4>
                    <p className="text-gray-600">Java应用的启动时间相对较长，因为JVM需要加载类和进行初始化，这对于桌面应用和命令行工具可能是一个缺点。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">冗长的语法</h4>
                    <p className="text-gray-600">Java的语法相对冗长，需要大量的样板代码，尤其是在处理集合、异常和I/O操作时，虽然新版本的Java已经有所改进。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">缺乏原生UI</h4>
                    <p className="text-gray-600">Java的桌面UI框架（如Swing和JavaFX）在用户体验和外观上不如原生应用，这限制了Java在桌面应用开发中的应用。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">版本更新和兼容性</h4>
                    <p className="text-gray-600">Java的版本更新可能带来兼容性问题，特别是在企业环境中，升级到新版本可能需要大量的测试和修改。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Java学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Oracle Java教程</h4>
                      <p className="text-sm text-gray-600">Oracle官方提供的Java编程语言教程，涵盖从基础到高级的各个方面。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://dev.java/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Java开发者门户</h4>
                      <p className="text-sm text-gray-600">Oracle提供的Java开发者资源，包括教程、示例代码和最新动态。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://docs.oracle.com/en/java/javase/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Java SE文档</h4>
                      <p className="text-sm text-gray-600">Java Standard Edition的官方文档，包括API参考、开发指南和工具文档。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.baeldung.com/java-tutorial" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Baeldung Java教程</h4>
                      <p className="text-sm text-gray-600">提供高质量的Java和Spring教程，涵盖各种实际应用场景。</p>
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
                  <a href="https://www.coursera.org/specializations/java-programming" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - Java编程与软件工程基础</h4>
                      <p className="text-sm text-gray-600">杜克大学提供的Java编程专项课程，适合初学者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.udemy.com/course/java-the-complete-java-developer-course/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - 完整Java开发者课程</h4>
                      <p className="text-sm text-gray-600">全面的Java编程课程，从基础到高级主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-java" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - Java课程</h4>
                      <p className="text-sm text-gray-600">交互式Java学习平台，通过实践学习Java编程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/java" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - Java学习路径</h4>
                      <p className="text-sm text-gray-600">提供从初级到高级的Java学习路径，包含多个课程。</p>
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
                    <h4 className="font-medium">《Java编程思想》（Thinking in Java）</h4>
                    <p className="text-sm text-gray-600">作者：Bruce Eckel</p>
                    <p className="text-sm text-gray-600">Java编程的经典著作，深入讲解Java的核心概念和编程思想。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Effective Java》</h4>
                    <p className="text-sm text-gray-600">作者：Joshua Bloch</p>
                    <p className="text-sm text-gray-600">提供了78条Java编程的最佳实践，是进阶Java开发者的必读书籍。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Java核心技术》（Core Java）</h4>
                    <p className="text-sm text-gray-600">作者：Cay S. Horstmann</p>
                    <p className="text-sm text-gray-600">全面介绍Java编程语言的核心特性和标准库，适合初学者和有经验的开发者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《深入理解Java虚拟机》</h4>
                    <p className="text-sm text-gray-600">作者：周志明</p>
                    <p className="text-sm text-gray-600">详细讲解JVM的工作原理、内存模型、垃圾回收等高级主题，适合想深入了解Java底层机制的读者。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/java" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的Java标签，可以提问和查找Java相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/java/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit Java社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的Java社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://coderanch.com/f/33/java" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">CodeRanch Java论坛</h4>
                      <p className="text-sm text-gray-600">友好的Java编程社区，适合初学者提问和讨论。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.javaworld.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">JavaWorld</h4>
                      <p className="text-sm text-gray-600">提供Java编程文章、教程和新闻的网站。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Java案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名Java应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Minecraft游戏截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Minecraft</h4>
                      <p className="text-sm text-gray-600">这款流行的沙盒游戏是用Java开发的，展示了Java在游戏开发中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Eclipse IDE截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Eclipse IDE</h4>
                      <p className="text-sm text-gray-600">流行的开发环境Eclipse是用Java开发的，展示了Java在桌面应用开发中的能力。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Hadoop系统截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Apache Hadoop</h4>
                      <p className="text-sm text-gray-600">这个大数据处理框架是用Java开发的，展示了Java在大规模分布式系统中的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Java代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 类定义
public class HelloWorld {
    // 主方法，程序入口
    public static void main(String[] args) {
        // 打印到控制台
        System.out.println("Hello, World!");
        
        // 变量声明和初始化
        int number = 10;
        double pi = 3.14159;
        boolean isJavaFun = true;
        String message = "Java Programming";
        
        // 条件语句
        if (number > 5) {
            System.out.println("Number is greater than 5");
        } else {
            System.out.println("Number is less than or equal to 5");
        }
        
        // 循环
        for (int i = 0; i < 5; i++) {
            System.out.println("Count: " + i);
        }
        
        // 数组
        int[] numbers = {1, 2, 3, 4, 5};
        for (int num : numbers) {
            System.out.println("Array element: " + num);
        }
        
        // 方法调用
        int sum = addNumbers(5, 3);
        System.out.println("Sum: " + sum);
    }
    
    // 方法定义
    public static int addNumbers(int a, int b) {
        return a + b;
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">面向对象编程</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 类定义
public class Person {
    // 实例变量
    private String name;
    private int age;
    
    // 构造函数
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Getter和Setter方法
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
    
    // 实例方法
    public void introduce() {
        System.out.println("Hi, I'm " + name + " and I'm " + age + " years old.");
    }
    
    // 静态方法
    public static Person createAdult(String name) {
        return new Person(name, 18);
    }
}

// 继承
public class Student extends Person {
    private String school;
    
    public Student(String name, int age, String school) {
        super(name, age);  // 调用父类构造函数
        this.school = school;
    }
    
    public String getSchool() {
        return school;
    }
    
    public void setSchool(String school) {
        this.school = school;
    }
    
    // 方法重写
    @Override
    public void introduce() {
        System.out.println("Hi, I'm " + getName() + ", I'm " + getAge() + 
                           " years old, and I study at " + school + ".");
    }
}

// 接口
public interface Drawable {
    void draw();
}

// 实现接口
public class Circle implements Drawable {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Java框架示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Spring Boot示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// Spring Boot应用
@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

// REST控制器
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private final UserService userService;
    
    // 构造函数注入
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    // GET请求处理
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    // GET请求处理（带路径变量）
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    // POST请求处理
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = userService.save(user);
        return ResponseEntity.created(URI.create("/api/users/" + savedUser.getId()))
                .body(savedUser);
    }
    
    // PUT请求处理
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return userService.update(id, user)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    // DELETE请求处理
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        if (userService.delete(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Hibernate示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 实体类
@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(name = "birth_date")
    private LocalDate birthDate;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders = new ArrayList<>();
    
    // 构造函数、Getter和Setter方法
    
    // 添加订单
    public void addOrder(Order order) {
        orders.add(order);
        order.setUser(this);
    }
    
    // 移除订单
    public void removeOrder(Order order) {
        orders.remove(order);
        order.setUser(null);
    }
}

// 数据访问对象
@Repository
public class UserRepository {
    
    private final EntityManager entityManager;
    
    public UserRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    
    // 保存用户
    @Transactional
    public User save(User user) {
        entityManager.persist(user);
        return user;
    }
    
    // 查找所有用户
    public List<User> findAll() {
        return entityManager.createQuery("SELECT u FROM User u", User.class)
                .getResultList();
    }
    
    // 根据ID查找用户
    public Optional<User> findById(Long id) {
        User user = entityManager.find(User.class, id);
        return Optional.ofNullable(user);
    }
    
    // 更新用户
    @Transactional
    public Optional<User> update(Long id, User userData) {
        User user = entityManager.find(User.class, id);
        if (user != null) {
            user.setName(userData.getName());
            user.setEmail(userData.getEmail());
            user.setBirthDate(userData.getBirthDate());
            entityManager.merge(user);
            return Optional.of(user);
        }
        return Optional.empty();
    }
    
    // 删除用户
    @Transactional
    public boolean delete(Long id) {
        User user = entityManager.find(User.class, id);
        if (user != null) {
            entityManager.remove(user);
            return true;
        }
        return false;
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Java的生态系统但想要更现代的语法和特性，Kotlin是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/csharp">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">C#</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Java的面向对象特性但需要更深入的Windows集成，C#是一个不错的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你想要更简洁的语法和更快的开发速度，Python是一个值得考虑的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要全栈开发能力，JavaScript（配合Node.js）是一个流行的选择。</p>
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
                如果你对Java还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Java适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Java是一个很好的初学编程的语言选择。它的语法规则清晰，面向对象的概念直观，错误处理机制完善，这些特性都有助于培养良好的编程习惯。Java也有丰富的学习资源和活跃的社区支持，初学者可以轻松找到教程、书籍和解答。此外，Java的广泛应用意味着学习它可以为你打开许多就业机会。虽然相比Python等语言，Java的语法可能稍显冗长，但这种严谨性对于理解编程基础概念反而是有益的。</p>
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
