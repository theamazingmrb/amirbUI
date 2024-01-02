import type { Metadata } from 'next'
import './globals.css'
import { inter } from './ui/fonts'
import Navbar from './ui/landing/Navbar'
import Footer from './ui/landing/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col justify-between h-screen`}>
        <div>
          <Navbar />
          <hr className="border-t-[0.5px] border-gray-600 my-4" />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
