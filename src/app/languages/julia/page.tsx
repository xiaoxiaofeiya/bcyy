'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function JuliaPage() {
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
                <Link href="/categories/ai" className="text-gray-500 hover:text-gray-700">
                  AI与数据科学
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">Julia</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Julia</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              高性能计算
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Julia是一种高性能的科学计算语言，旨在结合Python的易用性和C的性能，适用于复杂数值计算和科学研究。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-red-500 h-2.5 rounded-full w-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">困难</span>
            </div>
            <p className="mt-4 text-gray-600">
              对于熟悉Python或MATLAB的人来说入门较快，但掌握其独特特性需要时间。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-300 h-2.5 rounded-full w-1/2"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">一般</span>
            </div>
            <p className="mt-4 text-gray-600">
              目前主要在科学计算和学术研究领域有需求，商业应用正在增长。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-400 h-2.5 rounded-full w-3/4"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">良好</span>
            </div>
            <p className="mt-4 text-gray-600">
              由于专业性强，掌握Julia的开发者通常能获得较高薪资。
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
            <h2 className="text-2xl font-bold mb-4">Julia简介</h2>
            <p className="mb-4">
              Julia是一种高级、高性能的动态编程语言，专为科学计算和数据科学而设计。它于2012年首次公开发布，由Jeff Bezanson、Stefan Karpinski、Viral Shah和Alan Edelman创建。Julia的设计目标是结合Python等高级语言的易用性和C等低级语言的性能，提供"像Python一样易用，像C一样快"的编程体验。
            </p>
            <p className="mb-4">
              Julia采用即时编译（JIT）技术，使用LLVM编译器基础设施，能够生成高效的机器码。它支持多重分派（multiple dispatch）这一强大的编程范式，允许根据函数参数的类型选择不同的方法实现，使代码更加灵活和可扩展。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Julia的历史</h3>
            <p className="mb-4">
              Julia的开发始于2009年，创始人们希望创建一种能够满足科学计算需求的新语言，既具有高性能，又易于使用。2012年2月，Julia的第一个公开版本发布，引起了科学计算社区的广泛关注。
            </p>
            <p className="mb-4">
              2018年8月，Julia 1.0版本发布，标志着语言的稳定性和成熟度。此后，Julia社区迅速发展，包生态系统不断扩大，在科学计算、机器学习、数值分析等领域获得了越来越多的应用。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Julia的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>高性能：性能接近C和Fortran等静态编译语言</li>
              <li>动态类型：提供灵活的编程体验</li>
              <li>多重分派：根据参数类型选择最适合的方法</li>
              <li>数学友好的语法：支持Unicode符号，使数学公式表达更直观</li>
              <li>并行计算：内置并行计算支持</li>
              <li>与其他语言的互操作性：可以调用C、Python、R等语言的函数</li>
              <li>元编程：强大的宏系统和代码生成能力</li>
              <li>类型系统：丰富而灵活的类型系统</li>
              <li>包管理器：内置的包管理系统，简化依赖管理</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Julia应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">科学计算</h3>
                </div>
                <p className="text-gray-600">
                  Julia在科学计算领域表现出色，特别适合需要高性能的复杂数值计算。它被用于解微分方程、线性代数、优化问题等，在物理学、天文学、气候建模等领域有广泛应用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">机器学习和数据科学</h3>
                </div>
                <p className="text-gray-600">
                  Julia拥有丰富的机器学习和数据科学库，如Flux.jl（深度学习）、MLJ.jl（通用机器学习）等。其高性能特性使其在处理大规模数据和复杂模型时具有优势。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">量化金融</h3>
                </div>
                <p className="text-gray-600">
                  Julia在金融建模、风险分析和算法交易等量化金融领域越来越受欢迎。其高性能计算能力使其能够快速处理大量金融数据和复杂的金融模型。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">计算生物学</h3>
                </div>
                <p className="text-gray-600">
                  Julia在生物信息学、系统生物学和计算生物学领域有广泛应用，用于基因组分析、蛋白质结构预测、药物设计等。BioJulia生态系统提供了丰富的生物学相关工具。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">并行和分布式计算</h3>
                </div>
                <p className="text-gray-600">
                  Julia内置了并行计算支持，并提供了分布式计算的工具，如Distributed.jl和DistributedArrays.jl。这使其能够有效地利用多核处理器和计算集群，适合大规模计算任务。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">仿真和建模</h3>
                </div>
                <p className="text-gray-600">
                  Julia适用于各种仿真和建模应用，如物理系统仿真、交通流量建模、流体动力学等。DifferentialEquations.jl是一个强大的微分方程求解器生态系统，支持各种类型的微分方程。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Julia优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">高性能</h4>
                    <p className="text-gray-600">Julia的性能接近C和Fortran等静态编译语言，远超Python和R等解释型语言。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">数学友好的语法</h4>
                    <p className="text-gray-600">Julia支持Unicode符号和数学表达式，使代码更接近数学公式，提高可读性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">多重分派</h4>
                    <p className="text-gray-600">Julia的多重分派系统使函数能够根据参数类型选择最适合的方法，提高代码灵活性和可扩展性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">并行计算支持</h4>
                    <p className="text-gray-600">Julia内置并行计算支持，简化了并行代码的编写，有效利用多核处理器。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">与其他语言的互操作性</h4>
                    <p className="text-gray-600">Julia可以直接调用C、Python、R等语言的函数，无需编写复杂的接口代码。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开源社区</h4>
                    <p className="text-gray-600">Julia拥有活跃的开源社区，不断开发新的包和工具，扩展语言的功能。</p>
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
                    <h4 className="font-medium mb-1">预编译延迟</h4>
                    <p className="text-gray-600">Julia的即时编译导致"首次运行"延迟，首次执行代码时需要编译，影响交互式使用体验。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">包生态系统不如Python成熟</h4>
                    <p className="text-gray-600">虽然Julia的包生态系统在快速发展，但在广度和成熟度上仍不如Python等更成熟的语言。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">学习曲线陡峭</h4>
                    <p className="text-gray-600">Julia的一些高级特性，如多重分派和类型系统，对初学者来说可能较难理解。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">工业应用相对较少</h4>
                    <p className="text-gray-600">相比Python和Java等语言，Julia在工业界的应用还相对较少，就业机会有限。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">版本兼容性问题</h4>
                    <p className="text-gray-600">Julia的一些包在不同版本之间可能存在兼容性问题，需要谨慎管理依赖。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存管理</h4>
                    <p className="text-gray-600">Julia的内存管理有时不如预期，可能导致内存使用效率不高或内存泄漏问题。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Julia学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  在线教程和文档
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://docs.julialang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Julia官方文档</h4>
                      <p className="text-sm text-gray-600">Julia的官方文档，包含语言参考、标准库和教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://julialang.org/learning/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Julia学习资源</h4>
                      <p className="text-sm text-gray-600">Julia官方网站提供的学习资源列表。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://juliaacademy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Julia Academy</h4>
                      <p className="text-sm text-gray-600">提供免费的Julia在线课程，涵盖基础到高级主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://juliabyexample.helpmanual.io/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Julia by Example</h4>
                      <p className="text-sm text-gray-600">通过示例学习Julia，提供常见任务的代码示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-500" />
                  交互式学习平台
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.coursera.org/learn/julia-programming" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - Julia科学编程</h4>
                      <p className="text-sm text-gray-600">Cape Town大学提供的Julia科学编程课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://exercism.io/tracks/julia" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Exercism - Julia Track</h4>
                      <p className="text-sm text-gray-600">通过解决编程挑战学习Julia，提供导师反馈。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://julialang.org/learning/notebooks/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Julia Notebooks</h4>
                      <p className="text-sm text-gray-600">交互式Jupyter笔记本，用于学习Julia。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.datacamp.com/courses/introduction-to-julia" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">DataCamp - Julia入门</h4>
                      <p className="text-sm text-gray-600">DataCamp提供的Julia入门课程。</p>
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
                    <h4 className="font-medium">《Julia 1.0 Programming》</h4>
                    <p className="text-sm text-gray-600">作者：Ivo Balbaert</p>
                    <p className="text-sm text-gray-600">全面介绍Julia 1.0的特性和用法，适合初学者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Julia High Performance》</h4>
                    <p className="text-sm text-gray-600">作者：Avik Sengupta</p>
                    <p className="text-sm text-gray-600">探讨Julia的高性能特性和优化技术，适合进阶学习。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Think Julia》</h4>
                    <p className="text-sm text-gray-600">作者：Ben Lauwens, Allen B. Downey</p>
                    <p className="text-sm text-gray-600">面向初学者的Julia入门书籍，通过实例学习编程概念。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Julia for Data Science》</h4>
                    <p className="text-sm text-gray-600">作者：Zacharias Voulgaris</p>
                    <p className="text-sm text-gray-600">介绍如何使用Julia进行数据科学和机器学习。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Julia案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Julia在实际项目中的应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">气候模型截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">气候建模</h4>
                      <p className="text-sm text-gray-600">CliMA项目使用Julia开发下一代气候模型，利用其高性能计算能力模拟复杂的气候系统。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">药物发现截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">药物发现</h4>
                      <p className="text-sm text-gray-600">制药公司使用Julia进行分子动力学模拟和药物筛选，加速新药研发过程。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">金融分析截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">量化金融</h4>
                      <p className="text-sm text-gray-600">金融机构使用Julia进行风险分析、投资组合优化和高频交易算法开发。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Julia代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 变量和基本类型
name = "Julia"
version = 1.8
is_fast = true

# 数组操作
numbers = [1, 2, 3, 4, 5]
push!(numbers, 6)  # 添加元素
println(numbers)  # [1, 2, 3, 4, 5, 6]

# 字典
lang_info = Dict(
    "name" => "Julia",
    "version" => 1.8,
    "year" => 2012
)
println(lang_info["name"])  # Julia

# 条件语句
if version >= 1.0
    println("Julia is stable!")
else
    println("Using development version.")
end

# 循环
for num in numbers
    println(num^2)
end

# 函数定义
function greet(name; greeting="Hello")
    return "$greeting, $name!"
end

println(greet("Julia"))  # Hello, Julia!

# 匿名函数
square = x -> x^2
println(square(5))  # 25`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">科学计算示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`using LinearAlgebra
using Plots
using DifferentialEquations

# 线性代数
A = [1 2; 3 4]
b = [5, 6]
x = A \\ b  # 求解线性方程组 Ax = b
println("Solution: $x")

# 特征值和特征向量
eigenvals, eigenvecs = eigen(A)
println("Eigenvalues: $eigenvals")

# 微分方程求解
function lorenz!(du, u, p, t)
    σ, ρ, β = p
    du[1] = σ * (u[2] - u[1])
    du[2] = u[1] * (ρ - u[3]) - u[2]
    du[3] = u[1] * u[2] - β * u[3]
end

u0 = [1.0, 0.0, 0.0]
tspan = (0.0, 100.0)
p = (10.0, 28.0, 8/3)
prob = ODEProblem(lorenz!, u0, tspan, p)
sol = solve(prob)

# 绘制结果
plot(sol, vars=(1, 2, 3), title="Lorenz Attractor",
     xlabel="X", ylabel="Y", zlabel="Z",
     legend=false)`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Julia包示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Flux.jl</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`using Flux
using Flux.Data: DataLoader
using Flux: onehotbatch, onecold, crossentropy, throttle
using Base.Iterators: repeated

# 创建简单的神经网络
model = Chain(
    Dense(784, 128, relu),
    Dense(128, 64, relu),
    Dense(64, 10),
    softmax
)

# 准备数据
x_train, y_train = MNIST.traindata()
x_test, y_test = MNIST.testdata()

x_train = reshape(Float32.(x_train), 28*28, :)
x_test = reshape(Float32.(x_test), 28*28, :)

y_train = onehotbatch(y_train, 0:9)
y_test = onehotbatch(y_test, 0:9)

# 定义损失函数
loss(x, y) = crossentropy(model(x), y)

# 训练模型
opt = ADAM(0.001)
dataset = DataLoader((x_train, y_train), batchsize=128)
Flux.train!(loss, params(model), dataset, opt)`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Flux.jl是Julia的深度学习框架，提供了灵活的神经网络构建和训练工具。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">DataFrames.jl</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`using DataFrames
using CSV
using Statistics

# 创建数据框
df = DataFrame(
    Name = ["Alice", "Bob", "Charlie", "David"],
    Age = [25, 30, 35, 40],
    Salary = [50000, 60000, 70000, 80000]
)

# 数据操作
df.Bonus = df.Salary .* 0.1
select!(df, [:Name, :Age, :Salary, :Bonus])
filter!(row -> row.Age > 30, df)

# 分组统计
gdf = groupby(df, :Age)
combine(gdf, :Salary => mean, :Bonus => sum)

# 读写CSV
CSV.write("employees.csv", df)
df2 = CSV.read("employees.csv", DataFrame)`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">DataFrames.jl是Julia的数据处理包，提供了类似于R的data.frame或Python的pandas的功能。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Plots.jl</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`using Plots

# 基本绘图
x = range(0, 10, length=100)
y1 = sin.(x)
y2 = cos.(x)

p1 = plot(x, y1, label="sin(x)", 
     title="Trigonometric Functions",
     xlabel="x", ylabel="y",
     linewidth=2, color=:blue)
     
plot!(p1, x, y2, label="cos(x)", 
     linewidth=2, color=:red)

# 多子图
p2 = plot(x, x.^2, title="Quadratic")
p3 = plot(x, x.^3, title="Cubic")
p4 = plot(x, log.(x), title="Logarithmic")

plot(p1, p2, p3, p4, layout=(2,2), 
     size=(800, 600), legend=false)`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Plots.jl是Julia的绘图包，提供了统一的接口，支持多种后端（GR、PyPlot、Plotly等）。</p>
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
            <Link href="/languages/python-ai">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Python</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Julia的科学计算能力，但需要更成熟的生态系统，Python是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/r">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">R</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你主要关注统计分析和数据可视化，R提供了丰富的统计工具和图形功能。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/matlab">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">MATLAB</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要商业支持和更成熟的工程计算工具，MATLAB是一个可靠的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要极致的性能和更低级别的控制，C++是科学计算和高性能应用的传统选择。</p>
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
                如果你对Julia还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Julia适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Julia对于完全没有编程经验的初学者可能有些挑战，因为它包含一些高级概念如多重分派和类型系统。不过，如果你已经有Python或MATLAB等语言的经验，特别是在科学计算领域，那么学习Julia会相对容易。如果你对数学和科学计算有浓厚兴趣，Julia的语法设计非常接近数学表达式，这可能会让学习过程更加直观。</p>
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
