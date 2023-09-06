import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSideBar from '../components/LeftSideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZK Rana',
  description: 'Together We Make Difference',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className bg-[#F0F0F6]`}>
        <div className='flex gap-[30px] justify-between h-screen fixed'>
          <LeftSideBar />
          {children}
        </div>
      </body>
    </html>
  )
}
