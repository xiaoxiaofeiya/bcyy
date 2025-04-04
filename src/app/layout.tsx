import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SidebarAd from '@/components/ads/SidebarAd'
import PopupAd from '@/components/ads/PopupAd'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const roboto = Roboto({
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: '编程语言指南 - 初学者的编程语言导航',
  description: '为编程新手提供清晰的语言选择指南，帮助你根据自己的兴趣、目标和应用场景选择最合适的编程语言'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <SidebarAd />
        <PopupAd />
      </body>
    </html>
  )
}
