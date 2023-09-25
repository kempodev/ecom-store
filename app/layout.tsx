import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'
import getStore from '@/actions/getStore'

const font = Urbanist({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const store = await getStore()

  return {
    title: store.name,
    description: store.name,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
