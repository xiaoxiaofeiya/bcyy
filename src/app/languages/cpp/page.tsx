'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function CppPage() {
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
                <Link href="/categories/system" className="text-gray-500 hover:text-gray-700">
                  系统编程
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">C++</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">C++</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              高性能系统
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            C++是一种通用的编程语言，支持多种编程范式，包括面向对象、过程式和泛型编程。它以高性能、高效率和对硬件的精确控制而闻名，广泛应用于系统软件、游戏开发、嵌入式系统和高性能计算等领域。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-red-500 h-2.5 rounded-full w-5/6"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">困难</span>
            </div>
            <p className="mt-4 text-gray-600">
              语法复杂，内存管理需要手动控制，指针和引用概念较难掌握，学习曲线陡峭。
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
              C++开发者需求稳定，尤其在游戏、金融、嵌入式系统和高性能计算领域，薪资水平较高。
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
              熟练的C++开发者薪资在技术行业中处于较高水平，尤其是在金融科技和游戏开发领域。
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
            <h2 className="text-2xl font-bold mb-4">C++简介</h2>
            <p className="mb-4">
              C++是由Bjarne Stroustrup于1979年开始设计和开发的编程语言，最初被称为"带类的C"（C with Classes）。它是C语言的扩展，增加了面向对象编程、异常处理、泛型编程、命名空间和运算符重载等特性。C++于1985年正式命名，并在1998年被标准化为ISO/IEC 14882:1998，通常被称为C++98。
            </p>
            <p className="mb-4">
              C++结合了高级语言和低级语言的特性，既提供了抽象机制，又允许对硬件进行精确控制。这种灵活性使C++成为开发操作系统、设备驱动程序、嵌入式软件、高性能服务器和客户端应用程序、游戏和科学计算软件的理想选择。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">C++的历史</h3>
            <p className="mb-4">
              C++的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>1979-1983年：Bjarne Stroustrup在贝尔实验室开始开发"带类的C"，增加了类、派生类、强类型检查和默认参数等特性。</li>
              <li>1983年：语言被重命名为C++，增加了虚函数、函数重载、引用和const关键字等特性。</li>
              <li>1985年：C++的第一个商业版本发布，同时发布了《C++程序设计语言》第一版。</li>
              <li>1989年：C++2.0发布，增加了多重继承、抽象类和静态成员函数等特性。</li>
              <li>1998年：C++98标准发布，增加了模板、异常处理、命名空间和标准模板库（STL）等特性。</li>
              <li>2003年：C++03标准发布，对C++98进行了修正和改进。</li>
              <li>2011年：C++11标准发布，这是一次重大更新，增加了auto关键字、lambda表达式、右值引用、智能指针、并发支持等现代特性。</li>
              <li>2014年：C++14标准发布，进一步改进了C++11的特性。</li>
              <li>2017年：C++17标准发布，增加了结构化绑定、if constexpr、std::optional等特性。</li>
              <li>2020年：C++20标准发布，增加了模块、协程、概念和范围等重要特性。</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 mt-6">C++的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>多范式编程：支持面向对象、过程式、函数式和泛型编程等多种编程范式。</li>
              <li>性能优先：设计理念是"不为你没有使用的特性付出代价"，允许低级内存操作和高效的机器码生成。</li>
              <li>强类型系统：提供强类型检查，帮助在编译时捕获错误。</li>
              <li>内存管理：允许手动内存管理，同时提供RAII（资源获取即初始化）模式和智能指针等工具。</li>
              <li>模板元编程：通过模板实现编译时多态和代码生成。</li>
              <li>标准模板库（STL）：提供容器、算法、迭代器和函数对象等可复用组件。</li>
              <li>向后兼容性：与C语言高度兼容，可以直接使用C代码和库。</li>
              <li>不断发展：语言标准定期更新，引入现代编程特性，同时保持对现有代码的兼容性。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C++应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">游戏开发</h3>
                </div>
                <p className="text-gray-600">
                  C++是游戏开发的主要语言之一，尤其是对性能要求高的3D游戏和大型多人在线游戏。主流游戏引擎如Unreal Engine、Unity（C++核心）和CryEngine都使用C++开发。C++的高性能、内存控制能力和硬件接近性使其成为实现复杂游戏物理、渲染系统和AI的理想选择。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">系统软件开发</h3>
                </div>
                <p className="text-gray-600">
                  C++广泛用于开发操作系统、设备驱动程序、编译器和数据库系统等系统软件。Windows、Linux和macOS的部分组件都使用C++编写。C++的低级特性和高效率使其适合需要直接与硬件交互或需要精确控制系统资源的软件开发。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">嵌入式系统</h3>
                </div>
                <p className="text-gray-600">
                  C++用于开发嵌入式系统和物联网设备，如智能家电、医疗设备、汽车电子系统和工业控制系统。C++的效率和对硬件的精确控制使其适合资源受限的环境，同时其面向对象特性有助于管理复杂性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">高性能计算</h3>
                </div>
                <p className="text-gray-600">
                  C++在科学计算、数值分析、物理模拟和金融建模等高性能计算领域广泛应用。库如Eigen（线性代数）和TensorFlow（机器学习）的核心都是用C++实现的。C++的性能优势和并行计算能力使其成为处理大规模数据和复杂算法的首选语言。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">金融系统</h3>
                </div>
                <p className="text-gray-600">
                  C++在金融行业广泛应用于开发交易系统、风险分析工具和高频交易平台。C++的高性能和低延迟特性对于需要实时处理大量数据和执行复杂计算的金融应用至关重要。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">图形和多媒体应用</h3>
                </div>
                <p className="text-gray-600">
                  C++用于开发图形处理软件、视频编辑工具、3D建模应用和多媒体播放器。Adobe Photoshop、Autodesk Maya和Blender等专业软件都使用C++开发。C++的性能和与图形API（如OpenGL、DirectX）的良好集成使其适合处理复杂的图形和多媒体任务。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C++优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">高性能</h4>
                    <p className="text-gray-600">C++生成的代码非常高效，接近汇编语言的性能，适合对性能要求严格的应用。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存控制</h4>
                    <p className="text-gray-600">提供对内存的精确控制，允许开发者优化内存使用和管理资源分配。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">多范式支持</h4>
                    <p className="text-gray-600">支持多种编程范式，包括面向对象、过程式、函数式和泛型编程，提供灵活的解决问题方法。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">丰富的标准库</h4>
                    <p className="text-gray-600">标准模板库（STL）提供了丰富的容器、算法和工具，简化了常见编程任务。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">向后兼容性</h4>
                    <p className="text-gray-600">与C语言高度兼容，可以直接使用C代码和库，便于集成现有系统。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">广泛的应用领域</h4>
                    <p className="text-gray-600">适用于从系统编程到游戏开发、从嵌入式系统到高性能计算的各种应用领域。</p>
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
                    <h4 className="font-medium mb-1">学习曲线陡峭</h4>
                    <p className="text-gray-600">语法复杂，概念众多，特别是指针、内存管理和模板等高级特性，对初学者不友好。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">易出错</h4>
                    <p className="text-gray-600">手动内存管理容易导致内存泄漏、悬挂指针和缓冲区溢出等问题，增加了调试难度。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">编译时间长</h4>
                    <p className="text-gray-600">特别是使用模板和大型项目时，编译和链接时间可能很长，影响开发效率。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">语言复杂性</h4>
                    <p className="text-gray-600">C++是一个非常大和复杂的语言，有许多特性和细节需要掌握，增加了学习和使用的难度。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">历史包袱</h4>
                    <p className="text-gray-600">为了保持向后兼容性，C++保留了一些过时或不理想的特性，增加了语言的复杂性。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开发周期长</h4>
                    <p className="text-gray-600">相比Python等高级语言，C++的开发周期通常更长，需要更多的代码和更复杂的错误处理。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C++学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://en.cppreference.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">cppreference.com</h4>
                      <p className="text-sm text-gray-600">C++标准库的完整参考，包括详细的API文档和示例代码。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Standard C++</h4>
                      <p className="text-sm text-gray-600">C++标准委员会的官方网站，提供语言标准、新闻和资源。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Learn C++</h4>
                      <p className="text-sm text-gray-600">免费的C++教程，从基础到高级主题，适合初学者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.cplusplus.com/doc/tutorial/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">cplusplus.com教程</h4>
                      <p className="text-sm text-gray-600">全面的C++教程，涵盖语言基础和标准库。</p>
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
                  <a href="https://www.udemy.com/course/beginning-c-plus-plus-programming/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - C++编程入门到高级</h4>
                      <p className="text-sm text-gray-600">全面的C++课程，从基础语法到高级特性，包含实践项目。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.coursera.org/specializations/coding-for-everyone" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - C/C++编程专项课程</h4>
                      <p className="text-sm text-gray-600">加州大学圣克鲁兹分校提供的C和C++编程课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/c-plus-plus" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - C++学习路径</h4>
                      <p className="text-sm text-gray-600">从初级到高级的C++课程系列，包括现代C++特性。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.edx.org/course/introduction-to-c-plus-plus" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">edX - C++入门</h4>
                      <p className="text-sm text-gray-600">微软提供的C++入门课程，涵盖基础概念和语法。</p>
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
                    <h4 className="font-medium">《C++程序设计语言》（The C++ Programming Language）</h4>
                    <p className="text-sm text-gray-600">作者：Bjarne Stroustrup</p>
                    <p className="text-sm text-gray-600">C++创始人编写的权威指南，全面介绍C++语言的特性和用法。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《C++ Primer》</h4>
                    <p className="text-sm text-gray-600">作者：Stanley B. Lippman, Josée Lajoie, Barbara E. Moo</p>
                    <p className="text-sm text-gray-600">全面而深入的C++入门书籍，适合有编程基础的读者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Effective C++》</h4>
                    <p className="text-sm text-gray-600">作者：Scott Meyers</p>
                    <p className="text-sm text-gray-600">提供55条改进C++程序设计和设计的具体建议，是进阶C++开发者的必读书籍。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《C++标准库》（The C++ Standard Library）</h4>
                    <p className="text-sm text-gray-600">作者：Nicolai M. Josuttis</p>
                    <p className="text-sm text-gray-600">详细介绍C++标准库的使用，包括容器、算法、迭代器和函数对象等。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/c%2b%2b" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的C++标签，可以提问和查找C++相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/cpp/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit C++社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的C++社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://cppcast.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">CppCast</h4>
                      <p className="text-sm text-gray-600">专注于C++的播客，邀请C++专家讨论语言特性、库和工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.cplusplus.com/forum/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">cplusplus.com论坛</h4>
                      <p className="text-sm text-gray-600">活跃的C++论坛，适合初学者和有经验的开发者讨论问题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">C++案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名C++应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Unreal Engine截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Unreal Engine</h4>
                      <p className="text-sm text-gray-600">由Epic Games开发的流行游戏引擎，用C++编写，展示了C++在游戏开发中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Adobe Photoshop截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Adobe Photoshop</h4>
                      <p className="text-sm text-gray-600">专业图像编辑软件，主要用C++开发，展示了C++在图形处理和桌面应用开发中的能力。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Google Chrome截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Google Chrome</h4>
                      <p className="text-sm text-gray-600">流行的Web浏览器，其核心部分（如V8 JavaScript引擎）是用C++开发的，展示了C++在高性能Web技术中的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">C++代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

// 函数声明
void printMessage(const std::string& message);
int add(int a, int b);

// 类定义
class Person {
private:
    std::string name;
    int age;

public:
    // 构造函数
    Person(const std::string& name, int age) : name(name), age(age) {}

    // 成员函数
    void introduce() const {
        std::cout << "Hi, I'm " << name << " and I'm " << age << " years old." << std::endl;
    }

    // Getter和Setter
    std::string getName() const { return name; }
    void setName(const std::string& newName) { name = newName; }
    int getAge() const { return age; }
    void setAge(int newAge) { age = newAge; }
};

int main() {
    // 基本输出
    std::cout << "Hello, World!" << std::endl;

    // 变量和数据类型
    int number = 42;
    double pi = 3.14159;
    bool isTrue = true;
    std::string message = "C++ Programming";

    // 条件语句
    if (number > 0) {
        std::cout << "Number is positive" << std::endl;
    } else if (number < 0) {
        std::cout << "Number is negative" << std::endl;
    } else {
        std::cout << "Number is zero" << std::endl;
    }

    // 循环
    for (int i = 0; i < 5; ++i) {
        std::cout << "Count: " << i << std::endl;
    }

    // 数组和向量
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    for (const auto& num : numbers) {
        std::cout << "Vector element: " << num << std::endl;
    }

    // 函数调用
    printMessage("Function call example");
    int sum = add(5, 3);
    std::cout << "Sum: " << sum << std::endl;

    // 类和对象
    Person person("Alice", 30);
    person.introduce();
    person.setAge(31);
    std::cout << person.getName() << " is now " << person.getAge() << " years old." << std::endl;

    // 算法
    std::sort(numbers.begin(), numbers.end(), std::greater<int>());
    std::cout << "Sorted vector (descending): ";
    for (const auto& num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}

// 函数定义
void printMessage(const std::string& message) {
    std::cout << "Message: " << message << std::endl;
}

int add(int a, int b) {
    return a + b;
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">现代C++特性</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <functional>
#include <algorithm>

// 智能指针
void smartPointerExample() {
    // 独占所有权的智能指针
    std::unique_ptr<int> uniquePtr = std::make_unique<int>(42);
    std::cout << "Unique pointer value: " << *uniquePtr << std::endl;

    // 共享所有权的智能指针
    std::shared_ptr<std::string> sharedPtr1 = std::make_shared<std::string>("Shared pointer");
    std::shared_ptr<std::string> sharedPtr2 = sharedPtr1;
    std::cout << "Shared pointer value: " << *sharedPtr1 << std::endl;
    std::cout << "Shared pointer count: " << sharedPtr1.use_count() << std::endl;
}

// Lambda表达式
void lambdaExample() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    // 简单的lambda表达式
    auto printNumber = [](int n) { std::cout << n << " "; };
    std::for_each(numbers.begin(), numbers.end(), printNumber);
    std::cout << std::endl;

    // 带捕获的lambda表达式
    int threshold = 3;
    auto countAboveThreshold = [threshold](const std::vector<int>& nums) {
        return std::count_if(nums.begin(), nums.end(), 
                            [threshold](int n) { return n > threshold; });
    };
    std::cout << "Numbers above threshold: " << countAboveThreshold(numbers) << std::endl;
}

// 移动语义和右值引用
class Resource {
private:
    std::string name;
    std::vector<int> data;

public:
    // 构造函数
    Resource(std::string n, std::vector<int> d) : name(std::move(n)), data(std::move(d)) {
        std::cout << "Resource constructed" << std::endl;
    }

    // 移动构造函数
    Resource(Resource&& other) noexcept : name(std::move(other.name)), data(std::move(other.data)) {
        std::cout << "Resource moved" << std::endl;
    }

    // 移动赋值运算符
    Resource& operator=(Resource&& other) noexcept {
        if (this != &other) {
            name = std::move(other.name);
            data = std::move(other.data);
            std::cout << "Resource move assigned" << std::endl;
        }
        return *this;
    }

    // 禁用拷贝
    Resource(const Resource&) = delete;
    Resource& operator=(const Resource&) = delete;

    // 析构函数
    ~Resource() {
        std::cout << "Resource destroyed" << std::endl;
    }

    void print() const {
        std::cout << "Resource name: " << name << ", data size: " << data.size() << std::endl;
    }
};

void moveExample() {
    Resource r1("Original", {1, 2, 3, 4, 5});
    r1.print();

    // 使用std::move将r1移动到r2
    Resource r2 = std::move(r1);
    r2.print();
    // r1现在处于有效但未指定的状态
}

// 可变参数模板
template<typename T>
T sum(T t) {
    return t;
}

template<typename T, typename... Args>
T sum(T first, Args... args) {
    return first + sum(args...);
}

int main() {
    std::cout << "Smart Pointer Example:" << std::endl;
    smartPointerExample();

    std::cout << "\nLambda Example:" << std::endl;
    lambdaExample();

    std::cout << "\nMove Semantics Example:" << std::endl;
    moveExample();

    std::cout << "\nVariadic Template Example:" << std::endl;
    std::cout << "Sum: " << sum(1, 2, 3, 4, 5) << std::endl;
    std::cout << "Sum: " << sum(1.1, 2.2, 3.3) << std::endl;
    std::cout << "Concatenation: " << sum(std::string("Hello, "), std::string("C++"), std::string("!")) << std::endl;

    return 0;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">C++项目示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">游戏开发示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 简单的游戏引擎组件示例
#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <algorithm>

// 游戏对象基类
class GameObject {
protected:
    std::string name;
    float x, y, z; // 位置

public:
    GameObject(const std::string& name, float x = 0, float y = 0, float z = 0)
        : name(name), x(x), y(y), z(z) {}
    
    virtual ~GameObject() = default;
    
    virtual void update(float deltaTime) = 0;
    virtual void render() const = 0;
    
    const std::string& getName() const { return name; }
    void setPosition(float newX, float newY, float newZ) {
        x = newX;
        y = newY;
        z = newZ;
    }
    
    void getPosition(float& outX, float& outY, float& outZ) const {
        outX = x;
        outY = y;
        outZ = z;
    }
};

// 玩家类
class Player : public GameObject {
private:
    float health;
    float speed;

public:
    Player(const std::string& name, float x = 0, float y = 0, float z = 0)
        : GameObject(name, x, y, z), health(100.0f), speed(5.0f) {}
    
    void update(float deltaTime) override {
        // 更新玩家位置、状态等
        std::cout << "Updating player " << name << " (deltaTime: " << deltaTime << "s)" << std::endl;
        // 模拟移动
        x += speed * deltaTime;
    }
    
    void render() const override {
        float x, y, z;
        getPosition(x, y, z);
        std::cout << "Rendering player " << name << " at position (" 
                  << x << ", " << y << ", " << z << ") with health " << health << std::endl;
    }
    
    void takeDamage(float amount) {
        health -= amount;
        if (health < 0) health = 0;
        std::cout << name << " took " << amount << " damage. Health: " << health << std::endl;
    }
    
    void heal(float amount) {
        health += amount;
        if (health > 100) health = 100;
        std::cout << name << " healed " << amount << " points. Health: " << health << std::endl;
    }
};

// 敌人类
class Enemy : public GameObject {
private:
    float health;
    float damage;

public:
    Enemy(const std::string& name, float x = 0, float y = 0, float z = 0)
        : GameObject(name, x, y, z), health(50.0f), damage(10.0f) {}
    
    void update(float deltaTime) override {
        // 更新敌人AI、位置等
        std::cout << "Updating enemy " << name << " (deltaTime: " << deltaTime << "s)" << std::endl;
    }
    
    void render() const override {
        float x, y, z;
        getPosition(x, y, z);
        std::cout << "Rendering enemy " << name << " at position (" 
                  << x << ", " << y << ", " << z << ") with health " << health << std::endl;
    }
    
    float getDamage() const { return damage; }
    
    bool isAlive() const { return health > 0; }
    
    void takeDamage(float amount) {
        health -= amount;
        if (health < 0) health = 0;
        std::cout << name << " took " << amount << " damage. Health: " << health << std::endl;
    }
};

// 游戏世界类
class GameWorld {
private:
    std::vector<std::unique_ptr<GameObject>> gameObjects;

public:
    void addGameObject(std::unique_ptr<GameObject> object) {
        gameObjects.push_back(std::move(object));
    }
    
    void update(float deltaTime) {
        for (auto& object : gameObjects) {
            object->update(deltaTime);
        }
    }
    
    void render() const {
        for (const auto& object : gameObjects) {
            object->render();
        }
    }
};

// 游戏引擎类
class GameEngine {
private:
    GameWorld world;
    bool running;
    float deltaTime;

public:
    GameEngine() : running(false), deltaTime(0.016f) {} // 约60FPS
    
    void initialize() {
        std::cout << "Initializing game engine..." << std::endl;
        
        // 创建玩家
        auto player = std::make_unique<Player>("Hero", 0, 0, 0);
        world.addGameObject(std::move(player));
        
        // 创建敌人
        auto enemy1 = std::make_unique<Enemy>("Goblin", 10, 0, 0);
        auto enemy2 = std::make_unique<Enemy>("Orc", -10, 0, 0);
        world.addGameObject(std::move(enemy1));
        world.addGameObject(std::move(enemy2));
        
        running = true;
    }
    
    void run() {
        std::cout << "Starting game loop..." << std::endl;
        
        // 简单的游戏循环
        int frameCount = 0;
        while (running && frameCount < 5) { // 限制帧数，实际游戏会一直运行
            std::cout << "\n--- Frame " << frameCount << " ---" << std::endl;
            
            // 更新游戏世界
            world.update(deltaTime);
            
            // 渲染游戏世界
            world.render();
            
            frameCount++;
        }
    }
    
    void shutdown() {
        std::cout << "Shutting down game engine..." << std::endl;
        running = false;
    }
};

int main() {
    GameEngine engine;
    
    engine.initialize();
    engine.run();
    engine.shutdown();
    
    return 0;
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">数据结构和算法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 数据结构和算法示例
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <algorithm>
#include <chrono>
#include <random>

// 二叉搜索树节点
template<typename T>
struct TreeNode {
    T value;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(const T& val) : value(val), left(nullptr), right(nullptr) {}
};

// 二叉搜索树
template<typename T>
class BinarySearchTree {
private:
    TreeNode<T>* root;
    
    // 递归插入节点
    TreeNode<T>* insertRecursive(TreeNode<T>* node, const T& value) {
        if (node == nullptr) {
            return new TreeNode<T>(value);
        }
        
        if (value < node->value) {
            node->left = insertRecursive(node->left, value);
        } else if (value > node->value) {
            node->right = insertRecursive(node->right, value);
        }
        
        return node;
    }
    
    // 递归搜索节点
    TreeNode<T>* searchRecursive(TreeNode<T>* node, const T& value) const {
        if (node == nullptr || node->value == value) {
            return node;
        }
        
        if (value < node->value) {
            return searchRecursive(node->left, value);
        } else {
            return searchRecursive(node->right, value);
        }
    }
    
    // 中序遍历
    void inOrderTraversalRecursive(TreeNode<T>* node, std::vector<T>& result) const {
        if (node != nullptr) {
            inOrderTraversalRecursive(node->left, result);
            result.push_back(node->value);
            inOrderTraversalRecursive(node->right, result);
        }
    }
    
    // 递归删除节点
    TreeNode<T>* deleteRecursive(TreeNode<T>* node, const T& value) {
        if (node == nullptr) {
            return nullptr;
        }
        
        if (value < node->value) {
            node->left = deleteRecursive(node->left, value);
        } else if (value > node->value) {
            node->right = deleteRecursive(node->right, value);
        } else {
            // 找到要删除的节点
            
            // 情况1：叶节点
            if (node->left == nullptr && node->right == nullptr) {
                delete node;
                return nullptr;
            }
            // 情况2：只有一个子节点
            else if (node->left == nullptr) {
                TreeNode<T>* temp = node->right;
                delete node;
                return temp;
            }
            else if (node->right == nullptr) {
                TreeNode<T>* temp = node->left;
                delete node;
                return temp;
            }
            // 情况3：有两个子节点
            else {
                // 找到右子树的最小值（后继）
                TreeNode<T>* successor = node->right;
                while (successor->left != nullptr) {
                    successor = successor->left;
                }
                
                // 复制后继的值到当前节点
                node->value = successor->value;
                
                // 删除后继
                node->right = deleteRecursive(node->right, successor->value);
            }
        }
        
        return node;
    }
    
    // 递归清理树
    void clearRecursive(TreeNode<T>* node) {
        if (node != nullptr) {
            clearRecursive(node->left);
            clearRecursive(node->right);
            delete node;
        }
    }

public:
    BinarySearchTree() : root(nullptr) {}
    
    ~BinarySearchTree() {
        clear();
    }
    
    // 插入值
    void insert(const T& value) {
        root = insertRecursive(root, value);
    }
    
    // 搜索值
    bool search(const T& value) const {
        return searchRecursive(root, value) != nullptr;
    }
    
    // 中序遍历（返回排序后的值）
    std::vector<T> inOrderTraversal() const {
        std::vector<T> result;
        inOrderTraversalRecursive(root, result);
        return result;
    }
    
    // 删除值
    void remove(const T& value) {
        root = deleteRecursive(root, value);
    }
    
    // 清空树
    void clear() {
        clearRecursive(root);
        root = nullptr;
    }
};

// 图的邻接表表示
template<typename T>
class Graph {
private:
    std::unordered_map<T, std::vector<T>> adjacencyList;

public:
    // 添加顶点
    void addVertex(const T& vertex) {
        if (adjacencyList.find(vertex) == adjacencyList.end()) {
            adjacencyList[vertex] = std::vector<T>();
        }
    }
    
    // 添加边
    void addEdge(const T& source, const T& destination) {
        // 确保顶点存在
        addVertex(source);
        addVertex(destination);
        
        // 添加边
        adjacencyList[source].push_back(destination);
    }
    
    // 广度优先搜索
    std::vector<T> bfs(const T& startVertex) const {
        std::vector<T> result;
        std::unordered_map<T, bool> visited;
        std::queue<T> queue;
        
        // 标记起始顶点为已访问并入队
        visited[startVertex] = true;
        queue.push(startVertex);
        
        while (!queue.empty()) {
            // 出队并添加到结果
            T currentVertex = queue.front();
            queue.pop();
            result.push_back(currentVertex);
            
            // 访问所有邻接顶点
            auto it = adjacencyList.find(currentVertex);
            if (it != adjacencyList.end()) {
                for (const T& neighbor : it->second) {
                    if (visited.find(neighbor) == visited.end() || !visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            }
        }
        
        return result;
    }
    
    // 打印图
    void print() const {
        for (const auto& pair : adjacencyList) {
            std::cout << pair.first << " -> ";
            for (const T& vertex : pair.second) {
                std::cout << vertex << " ";
            }
            std::cout << std::endl;
        }
    }
};

// 排序算法比较
void sortingAlgorithmsComparison() {
    const int size = 10000;
    
    // 生成随机数
    std::vector<int> data(size);
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> dis(1, 10000);
    
    for (int i = 0; i < size; ++i) {
        data[i] = dis(gen);
    }
    
    // 复制数据用于不同的排序算法
    std::vector<int> dataBubble = data;
    std::vector<int> dataQuick = data;
    std::vector<int> dataStdSort = data;
    
    // 冒泡排序
    auto startBubble = std::chrono::high_resolution_clock::now();
    
    for (int i = 0; i < size - 1; ++i) {
        for (int j = 0; j < size - i - 1; ++j) {
            if (dataBubble[j] > dataBubble[j + 1]) {
                std::swap(dataBubble[j], dataBubble[j + 1]);
            }
        }
    }
    
    auto endBubble = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> durationBubble = endBubble - startBubble;
    
    // 快速排序（使用std::sort实现）
    auto startQuick = std::chrono::high_resolution_clock::now();
    
    std::sort(dataQuick.begin(), dataQuick.end());
    
    auto endQuick = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> durationQuick = endQuick - startQuick;
    
    // 输出结果
    std::cout << "Sorting " << size << " elements:" << std::endl;
    std::cout << "Bubble Sort: " << durationBubble.count() << " seconds" << std::endl;
    std::cout << "Quick Sort (std::sort): " << durationQuick.count() << " seconds" << std::endl;
}

int main() {
    std::cout << "Binary Search Tree Example:" << std::endl;
    BinarySearchTree<int> bst;
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);
    bst.insert(20);
    bst.insert(40);
    bst.insert(60);
    bst.insert(80);
    
    std::cout << "In-order traversal: ";
    for (int value : bst.inOrderTraversal()) {
        std::cout << value << " ";
    }
    std::cout << std::endl;
    
    std::cout << "Search for 40: " << (bst.search(40) ? "Found" : "Not found") << std::endl;
    std::cout << "Search for 90: " << (bst.search(90) ? "Found" : "Not found") << std::endl;
    
    bst.remove(30);
    std::cout << "After removing 30, in-order traversal: ";
    for (int value : bst.inOrderTraversal()) {
        std::cout << value << " ";
    }
    std::cout << std::endl;
    
    std::cout << "\nGraph Example:" << std::endl;
    Graph<char> graph;
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');
    
    std::cout << "Graph structure:" << std::endl;
    graph.print();
    
    std::cout << "BFS starting from 'A': ";
    for (char vertex : graph.bfs('A')) {
        std::cout << vertex << " ";
    }
    std::cout << std::endl;
    
    std::cout << "\nSorting Algorithms Comparison:" << std::endl;
    sortingAlgorithmsComparison();
    
    return 0;
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
            <Link href="/languages/c">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">C</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C++的性能和底层控制，但需要更简单的语言，C是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/rust">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Rust</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C++的性能，但想要更现代的语法和内存安全保证，Rust是一个不错的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C++的面向对象特性，但想要自动内存管理和更简单的语法，Java是一个值得考虑的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢C++的语法风格，但需要更现代的语言特性和更简单的内存管理，C#是一个不错的选择。</p>
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
                如果你对C++还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">C++适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">C++对于初学者来说是具有挑战性的，因为它有复杂的语法和概念，如指针、内存管理和模板等。如果你是编程新手，可能会发现学习曲线较陡。然而，如果你有耐心并愿意投入时间，学习C++可以帮助你建立坚实的编程基础，深入理解计算机如何工作。对于初学者，我建议先从更友好的语言如Python或JavaScript开始，掌握基本编程概念后再学习C++。或者，如果你决定直接学习C++，可以考虑先学习C语言基础，然后逐步过渡到C++的面向对象特性。</p>
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
