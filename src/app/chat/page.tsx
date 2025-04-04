'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Send, User, Bot } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '你好！我是编程语言助手。我可以帮你选择适合的编程语言，或者回答你关于各种编程语言的问题。请告诉我你的兴趣和目标。'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (input.trim() === '') return

    // 添加用户消息
    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // 模拟AI响应
    setTimeout(() => {
      let response = ''
      
      // 简单的规则匹配来模拟AI响应
      if (input.toLowerCase().includes('前端') || input.toLowerCase().includes('网页') || input.toLowerCase().includes('网站')) {
        response = '对于前端开发，我推荐你学习HTML/CSS和JavaScript作为基础，然后可以学习React、Vue或Angular等框架。JavaScript是前端开发的核心语言，而TypeScript可以帮助你编写更可靠的代码。'
      } else if (input.toLowerCase().includes('后端') || input.toLowerCase().includes('服务器')) {
        response = '对于后端开发，有多种选择：Python简单易学且应用广泛；Java适合企业级应用；Node.js让你可以用JavaScript进行后端开发；Go语言性能优秀且并发处理能力强。选择哪种语言取决于你的项目需求和个人偏好。'
      } else if (input.toLowerCase().includes('移动') || input.toLowerCase().includes('app') || input.toLowerCase().includes('应用')) {
        response = '对于移动应用开发，如果只针对iOS，可以学习Swift；如果只针对Android，可以学习Kotlin；如果想同时开发两个平台，可以考虑React Native或Flutter。Flutter使用Dart语言，近年来越来越受欢迎。'
      } else if (input.toLowerCase().includes('ai') || input.toLowerCase().includes('人工智能') || input.toLowerCase().includes('机器学习') || input.toLowerCase().includes('数据')) {
        response = '对于AI和数据科学，Python是最佳选择，因为它有TensorFlow、PyTorch、scikit-learn等强大的库。R语言在统计分析和数据可视化方面也很出色。如果你关注性能，可以考虑Julia语言。'
      } else if (input.toLowerCase().includes('系统') || input.toLowerCase().includes('底层') || input.toLowerCase().includes('性能')) {
        response = '对于系统编程和性能关键型应用，C和C++是传统选择，它们提供对硬件的直接控制。Rust是一个现代化的替代品，它提供了内存安全保证而不牺牲性能。'
      } else if (input.toLowerCase().includes('初学者') || input.toLowerCase().includes('新手') || input.toLowerCase().includes('入门')) {
        response = '对于编程初学者，我推荐Python作为第一门语言，因为它语法简单，易于学习，且应用广泛。JavaScript也是不错的选择，特别是如果你对网页开发感兴趣。'
      } else {
        response = '你对哪个领域的编程更感兴趣？前端开发、后端开发、移动应用、AI与数据科学，还是系统编程？了解你的兴趣和目标后，我可以给你更具体的语言推荐。'
      }
      
      const assistantMessage: Message = { role: 'assistant', content: response }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">与AI对话，获取编程语言建议</h1>
      
      <Card className="mb-8">
        <div className="p-4">
          <p className="text-gray-600 mb-4">
            不确定从哪里开始？我们的AI助手可以根据你的兴趣、目标和背景，为你推荐最合适的编程语言。
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={() => setInput('我是编程新手，应该学习什么语言？')}>
              我是编程新手，应该学习什么语言？
            </Button>
            <Button variant="outline" size="sm" onClick={() => setInput('哪种语言适合Web开发？')}>
              哪种语言适合Web开发？
            </Button>
            <Button variant="outline" size="sm" onClick={() => setInput('我想开发移动应用，应该学什么？')}>
              我想开发移动应用，应该学什么？
            </Button>
            <Button variant="outline" size="sm" onClick={() => setInput('哪种语言在AI领域最常用？')}>
              哪种语言在AI领域最常用？
            </Button>
          </div>
        </div>
      </Card>
      
      <Card className="mb-4">
        <div className="h-[500px] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${message.role === 'user' ? 'bg-blue-500 ml-2' : 'bg-gray-300 mr-2'}`}>
                  {message.role === 'user' ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-gray-700" />}
                </div>
                <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex mb-4 justify-start">
              <div className="flex max-w-[80%]">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-gray-700" />
                </div>
                <div className="p-3 rounded-lg bg-gray-100 text-gray-800">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t">
          <div className="flex">
            <Input
              placeholder="输入你的问题..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 mr-2"
            />
            <Button onClick={handleSend} disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
      
      <div className="text-center text-gray-500 text-sm">
        注意：这是一个演示版本，回答基于预设规则。实际部署时可以接入更强大的AI模型。
      </div>
    </div>
  )
}
