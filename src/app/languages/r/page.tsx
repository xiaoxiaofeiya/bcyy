'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function RPage() {
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
                <span className="text-gray-700">R</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">R</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
              统计分析
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            R是专为统计分析和数据可视化设计的语言，在学术研究和数据分析领域广泛使用，拥有丰富的统计包和绘图功能。
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
              对于有统计背景的人来说较容易，但编程概念可能需要时间适应。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-400 h-2.5 rounded-full w-3/4"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">良好</span>
            </div>
            <p className="mt-4 text-gray-600">
              在数据分析、生物统计和学术研究领域有稳定需求。
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
              数据分析师和统计学家薪资普遍不错，尤其是在金融和医疗领域。
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
            <h2 className="text-2xl font-bold mb-4">R语言简介</h2>
            <p className="mb-4">
              R是一种专为统计计算和图形设计的编程语言和软件环境，由Ross Ihaka和Robert Gentleman于1993年开发。R是GNU项目的一部分，提供了广泛的统计和图形技术，包括线性和非线性建模、统计测试、时间序列分析、分类和聚类等。
            </p>
            <p className="mb-4">
              R语言是数据分析、统计研究和数据可视化的强大工具，被广泛应用于统计学、数据科学、生物信息学、金融分析等领域。它提供了丰富的包（packages）系统，使用户可以扩展其功能以满足特定需求。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">R的历史</h3>
            <p className="mb-4">
              R语言起源于贝尔实验室（现为AT&T实验室）开发的S语言。1991年，新西兰奥克兰大学的Ross Ihaka和Robert Gentleman开始合作开发R语言，作为S语言的一种替代实现。R语言的名称部分来源于两位作者名字的首字母，也反映了它与S语言的关系。
            </p>
            <p className="mb-4">
              1995年，R语言首次公开发布。1997年，R核心团队（R Core Team）成立，负责R语言的维护和开发。2000年，R 1.0.0版本发布，标志着R语言的稳定性和成熟度。如今，R已经发展成为统计计算和数据分析领域的标准工具之一。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">R的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>强大的统计分析能力</li>
              <li>出色的数据可视化功能</li>
              <li>丰富的包生态系统（CRAN存储库）</li>
              <li>跨平台兼容性（Windows、macOS、Linux）</li>
              <li>开源免费</li>
              <li>活跃的社区支持</li>
              <li>与其他语言和工具的良好集成</li>
              <li>适合交互式数据分析</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">R语言应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">统计分析</h3>
                </div>
                <p className="text-gray-600">
                  R语言最初就是为统计分析而设计的，提供了丰富的统计函数和方法，包括描述性统计、假设检验、回归分析、方差分析等，是统计学家和研究人员的首选工具。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">数据可视化</h3>
                </div>
                <p className="text-gray-600">
                  R提供了强大的数据可视化功能，包括基础绘图系统和高级包如ggplot2，可以创建高质量的统计图表，如散点图、箱线图、热图、地图等，帮助用户直观地理解数据。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">学术研究</h3>
                </div>
                <p className="text-gray-600">
                  R在学术界广泛使用，特别是在统计学、生物信息学、社会科学和经济学等领域。它提供了可重复研究所需的工具，如knitr和R Markdown，可以生成包含代码、结果和解释的研究报告。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">机器学习</h3>
                </div>
                <p className="text-gray-600">
                  R提供了多种机器学习算法和工具，如caret、randomForest、xgboost等包，可以用于分类、回归、聚类和降维等任务，支持从简单模型到复杂模型的各种机器学习应用。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">金融分析</h3>
                </div>
                <p className="text-gray-600">
                  R在金融领域有广泛应用，包括时间序列分析、风险管理、投资组合优化等。quantmod、TTR、PerformanceAnalytics等包提供了金融数据分析和建模的专业工具。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">生物信息学</h3>
                </div>
                <p className="text-gray-600">
                  R在生物信息学领域有丰富的应用，Bioconductor项目提供了大量用于基因组数据分析的包，支持基因表达分析、序列分析、蛋白质组学等研究。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">R语言优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的统计分析能力</h4>
                    <p className="text-gray-600">R提供了丰富的统计函数和方法，是统计分析的专业工具。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">出色的数据可视化</h4>
                    <p className="text-gray-600">R的绘图系统可以创建高质量的统计图表，特别是ggplot2包提供了灵活强大的可视化功能。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">丰富的包生态系统</h4>
                    <p className="text-gray-600">CRAN存储库提供了超过15,000个包，几乎涵盖了所有统计和数据分析需求。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">活跃的社区支持</h4>
                    <p className="text-gray-600">R拥有庞大的用户社区，提供了丰富的文档、教程和支持资源。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开源免费</h4>
                    <p className="text-gray-600">R是开源软件，可以免费使用、修改和分发，降低了使用门槛。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">可重复研究支持</h4>
                    <p className="text-gray-600">R Markdown和knitr等工具支持可重复研究，可以生成包含代码、结果和解释的报告。</p>
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
                    <h4 className="font-medium mb-1">性能问题</h4>
                    <p className="text-gray-600">R的执行速度相对较慢，特别是处理大型数据集时可能会遇到性能瓶颈。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存管理</h4>
                    <p className="text-gray-600">R将所有对象加载到内存中，处理大数据时可能会遇到内存限制。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">学习曲线陡峭</h4>
                    <p className="text-gray-600">对于没有编程经验的人来说，R的语法和概念可能较难掌握。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">不一致的语法</h4>
                    <p className="text-gray-600">不同的R包可能使用不同的语法和约定，增加了学习难度。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">不适合通用编程</h4>
                    <p className="text-gray-600">R主要设计用于统计分析，不适合开发通用应用程序或系统编程。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">文档质量参差不齐</h4>
                    <p className="text-gray-600">一些R包的文档可能不够详细或用户友好，增加了使用难度。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">R语言学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  在线教程和文档
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://cran.r-project.org/doc/manuals/r-release/R-intro.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">R官方介绍</h4>
                      <p className="text-sm text-gray-600">R语言的官方入门文档，介绍了R的基本概念和用法。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.r-project.org/other-docs.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">R文档列表</h4>
                      <p className="text-sm text-gray-600">R官方网站提供的各种文档和教程列表。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://r4ds.had.co.nz/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">R for Data Science</h4>
                      <p className="text-sm text-gray-600">Hadley Wickham的在线书籍，介绍了使用tidyverse进行数据科学的方法。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.statmethods.net/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Quick-R</h4>
                      <p className="text-sm text-gray-600">提供了R语言的快速参考和教程，适合初学者。</p>
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
                  <a href="https://www.datacamp.com/courses/free-introduction-to-r" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">DataCamp</h4>
                      <p className="text-sm text-gray-600">提供了R语言的交互式课程，从基础到高级。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.coursera.org/learn/r-programming" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Coursera - R Programming</h4>
                      <p className="text-sm text-gray-600">约翰霍普金斯大学提供的R编程课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.edx.org/learn/r-programming" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">edX - R课程</h4>
                      <p className="text-sm text-gray-600">哈佛大学和其他机构提供的R语言课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://swirlstats.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">swirl</h4>
                      <p className="text-sm text-gray-600">在R控制台中学习R的交互式平台。</p>
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
                    <h4 className="font-medium">《R语言实战》</h4>
                    <p className="text-sm text-gray-600">作者：Robert I. Kabacoff</p>
                    <p className="text-sm text-gray-600">全面介绍R语言的基础知识和应用，适合初学者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《ggplot2: 数据分析与图形艺术》</h4>
                    <p className="text-sm text-gray-600">作者：Hadley Wickham</p>
                    <p className="text-sm text-gray-600">详细介绍ggplot2包的使用，是数据可视化的权威指南。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《R数据科学》</h4>
                    <p className="text-sm text-gray-600">作者：Hadley Wickham, Garrett Grolemund</p>
                    <p className="text-sm text-gray-600">介绍使用tidyverse进行数据分析的方法，适合数据科学入门。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《高级R》</h4>
                    <p className="text-sm text-gray-600">作者：Hadley Wickham</p>
                    <p className="text-sm text-gray-600">深入探讨R语言的高级特性，适合有经验的R用户。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">R语言案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">R语言在实际项目中的应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">生物信息学分析截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">基因表达分析</h4>
                      <p className="text-sm text-gray-600">使用Bioconductor包分析基因表达数据，识别差异表达基因和生物学通路。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">金融分析截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">金融市场分析</h4>
                      <p className="text-sm text-gray-600">使用quantmod和PerformanceAnalytics包分析股票数据，进行技术分析和投资组合优化。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">社会科学研究截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">社会科学研究</h4>
                      <p className="text-sm text-gray-600">使用R进行调查数据分析，包括描述性统计、假设检验和多变量分析。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">R代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础数据分析</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 加载数据
data(mtcars)
head(mtcars)

# 基本统计描述
summary(mtcars)

# 相关性分析
cor(mtcars)

# 线性回归
model <- lm(mpg ~ wt + hp, data = mtcars)
summary(model)

# 预测
newdata <- data.frame(wt = 3, hp = 120)
predict(model, newdata)

# 绘制散点图
plot(mtcars$wt, mtcars$mpg, 
     main = "Car Weight vs. MPG",
     xlab = "Weight (1000 lbs)",
     ylab = "Miles Per Gallon",
     pch = 19, col = "blue")

# 添加回归线
abline(lm(mpg ~ wt, data = mtcars), col = "red")`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">数据可视化</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 加载ggplot2包
library(ggplot2)

# 创建基本散点图
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point(aes(color = factor(cyl))) +
  labs(title = "Car Weight vs. MPG",
       x = "Weight (1000 lbs)",
       y = "Miles Per Gallon",
       color = "Cylinders") +
  theme_minimal()

# 创建箱线图
ggplot(mtcars, aes(x = factor(cyl), y = mpg)) +
  geom_boxplot(fill = "lightblue") +
  labs(title = "MPG by Number of Cylinders",
       x = "Number of Cylinders",
       y = "Miles Per Gallon") +
  theme_minimal()

# 创建直方图
ggplot(mtcars, aes(x = mpg)) +
  geom_histogram(binwidth = 2, fill = "skyblue", color = "black") +
  labs(title = "Distribution of MPG",
       x = "Miles Per Gallon",
       y = "Count") +
  theme_minimal()

# 创建密度图
ggplot(mtcars, aes(x = mpg, fill = factor(cyl))) +
  geom_density(alpha = 0.5) +
  labs(title = "Density of MPG by Cylinders",
       x = "Miles Per Gallon",
       fill = "Cylinders") +
  theme_minimal()`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">R包示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">dplyr</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`library(dplyr)

# 数据筛选
mtcars %>%
  filter(mpg > 20) %>%
  select(model = rownames(mtcars), mpg, cyl, wt) %>%
  arrange(desc(mpg)) %>%
  mutate(efficiency = mpg / wt) %>%
  group_by(cyl) %>%
  summarise(
    count = n(),
    avg_mpg = mean(mpg),
    avg_wt = mean(wt)
  )`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">dplyr是一个用于数据操作的包，提供了一套一致的函数，使数据处理更加简洁和高效。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">tidyr</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`library(tidyr)

# 创建示例数据
data <- data.frame(
  id = 1:3,
  name = c("John", "Mary", "Bob"),
  math = c(90, 80, 70),
  english = c(85, 95, 75)
)

# 长格式转换
data_long <- data %>%
  pivot_longer(
    cols = c(math, english),
    names_to = "subject",
    values_to = "score"
  )

# 宽格式转换
data_wide <- data_long %>%
  pivot_wider(
    names_from = subject,
    values_from = score
  )`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">tidyr是一个用于整理数据的包，提供了将数据转换为"整洁"格式的工具，便于分析和可视化。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">shiny</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`library(shiny)

# 定义UI
ui <- fluidPage(
  titlePanel("MPG Explorer"),
  sidebarLayout(
    sidebarPanel(
      selectInput("variable", "Variable:",
                  c("Cylinders" = "cyl",
                    "Transmission" = "am",
                    "Gears" = "gear")),
      sliderInput("weight", "Weight Range:",
                  min = min(mtcars$wt),
                  max = max(mtcars$wt),
                  value = c(min(mtcars$wt), max(mtcars$wt)))
    ),
    mainPanel(
      plotOutput("mpgPlot")
    )
  )
)

# 定义服务器逻辑
server <- function(input, output) {
  output$mpgPlot <- renderPlot({
    filtered_data <- mtcars %>%
      filter(wt >= input$weight[1] & wt <= input$weight[2])
    
    ggplot(filtered_data, 
           aes_string(x = input$variable, y = "mpg", 
                     fill = input$variable)) +
      geom_boxplot() +
      theme_minimal() +
      labs(title = "MPG by Selected Variable",
           y = "Miles Per Gallon")
  })
}

# 运行应用
shinyApp(ui = ui, server = server)`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">shiny是一个用于创建交互式Web应用的包，可以将R分析转化为交互式应用，无需Web开发知识。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢R的数据分析能力，但需要更通用的编程语言，Python是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/julia">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Julia</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要R的统计能力但希望获得更高的性能，Julia是一个很好的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你需要更强大的数值计算和工程分析能力，MATLAB是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/scala">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Scala</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要处理大规模数据集，Scala结合Apache Spark是一个很好的选择。</p>
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
                如果你对R语言还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">R语言适合没有编程经验的人学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">R语言对于有统计背景但没有编程经验的人来说是一个不错的选择。它的语法设计专注于统计分析，许多统计学家和研究人员发现它比其他编程语言更直观。不过，如果你完全没有编程经验，可能需要一些时间来适应编程概念。建议从基础教程开始，逐步学习。</p>
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
