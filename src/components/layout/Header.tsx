'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, Code, Database, Smartphone, Brain, Cpu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                编程语言指南
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/categories/frontend" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
                <Code className="h-4 w-4 mr-1" />
                前端开发
              </Link>
              <Link href="/categories/backend" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
                <Database className="h-4 w-4 mr-1" />
                后端开发
              </Link>
              <Link href="/categories/mobile" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
                <Smartphone className="h-4 w-4 mr-1" />
                移动应用
              </Link>
              <Link href="/categories/ai" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
                <Brain className="h-4 w-4 mr-1" />
                AI与数据科学
              </Link>
              <Link href="/categories/system" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-blue-500">
                <Cpu className="h-4 w-4 mr-1" />
                系统编程
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex-shrink-0">
              <Link href="/chat">
                <Button className="ml-4 px-4 py-2 rounded-md">
                  AI对话
                </Button>
              </Link>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">搜索</span>
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">打开菜单</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/categories/frontend" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              <div className="flex items-center">
                <Code className="h-5 w-5 mr-2" />
                前端开发
              </div>
            </Link>
            <Link href="/categories/backend" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                后端开发
              </div>
            </Link>
            <Link href="/categories/mobile" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              <div className="flex items-center">
                <Smartphone className="h-5 w-5 mr-2" />
                移动应用
              </div>
            </Link>
            <Link href="/categories/ai" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              <div className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI与数据科学
              </div>
            </Link>
            <Link href="/categories/system" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              <div className="flex items-center">
                <Cpu className="h-5 w-5 mr-2" />
                系统编程
              </div>
            </Link>
            <Link href="/chat" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900">
              AI对话
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className="sr-only">搜索</span>
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
