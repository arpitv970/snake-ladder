import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/common/Navbar'
import ProvidersSetup from '@/providers/ProvidersSetup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Snake Ladder game',
  description: 'This is a simple snake ladder game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersSetup>
          <main>
            <Navbar />
            {children}
          </main>
        </ProvidersSetup>
      </body>
    </html>
  )
}
