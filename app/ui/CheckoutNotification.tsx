'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CheckoutNotificationProps {
  show: boolean
  onClose: () => void
}

export default function CheckoutNotification({ show, onClose }: CheckoutNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white p-6 rounded-lg shadow-lg border border-gray-700 max-w-md w-full"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl text-white font-semibold mb-2">Checkout Unavailable</h3>
            <p className="text-center mb-4">
              We're currently not accepting new orders at this time. Please check back soon for updates.
            </p>
            <button
              onClick={() => {
                setIsVisible(false)
                onClose()
              }}
              className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
