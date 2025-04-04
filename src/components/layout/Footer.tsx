import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-300 hover:text-white">
              首页
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/categories/frontend" className="text-base text-gray-300 hover:text-white">
              前端开发
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/categories/backend" className="text-base text-gray-300 hover:text-white">
              后端开发
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/categories/mobile" className="text-base text-gray-300 hover:text-white">
              移动应用
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/categories/ai" className="text-base text-gray-300 hover:text-white">
              AI与数据科学
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/categories/system" className="text-base text-gray-300 hover:text-white">
              系统编程
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/chat" className="text-base text-gray-300 hover:text-white">
              AI对话
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/about" className="text-base text-gray-300 hover:text-white">
              关于我们
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 编程语言指南. 保留所有权利.
        </p>
      </div>
    </footer>
  )
}
