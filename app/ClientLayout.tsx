'use client'
import { ReactNode, Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { CartContext, useCartState } from './lib/hooks/useCart'

// Dynamically import components that might cause hydration issues
const Navbar = dynamic(() => import('./ui/landing/Navbar'), {
  ssr: false,
  loading: () => <div className="h-16" /> // Placeholder while loading
})

const Footer = dynamic(() => import('./ui/landing/Footer'), {
  ssr: false,
  loading: () => <div className="h-32" /> // Placeholder while loading
})

// Client-side only wrapper component
function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return null
  }
  
  return <>{children}</>
}

// Main client layout component
export default function ClientLayout({ children }: { children: ReactNode }) {
  const cart = useCartState()
  
  return (
    <ClientOnly>
      <CartContext.Provider value={cart}>
        <header>
          <Suspense fallback={<div className="h-16" />}>
            <Navbar />
          </Suspense>
          <hr className="border-t-[0.5px] border-gray-600 my-4" />
        </header>
        <main className="flex-grow">
          <Suspense fallback={<div>Loading...</div>}>
            {children}
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-32" />}>
          <Footer />
        </Suspense>
      </CartContext.Provider>
    </ClientOnly>
  )
}
