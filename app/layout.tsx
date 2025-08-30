import './globals.css'
import './ui/globals.css'
import { inter, playfair, montserrat, roboto_mono } from './ui/fonts'
import ClientLayout from './ClientLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} ${roboto_mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>AMIR BLAQ</title>
      </head>
      <body className="antialiased flex flex-col justify-between min-h-screen">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
