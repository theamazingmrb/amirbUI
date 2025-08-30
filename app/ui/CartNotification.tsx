'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface CartNotificationProps {
  isVisible: boolean
  onClose: () => void
  productName: string
  productImage?: string
}

export default function CartNotification({ isVisible, onClose, productName, productImage }: CartNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-5 right-5 z-50 bg-white shadow-lg rounded-lg overflow-hidden w-80"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-green-50 p-4 border-l-4 border-green-500">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-green-800">
                  Added to cart!
                </p>
                <div className="mt-2 flex items-center">
                  {productImage && (
                    <img 
                      src={productImage} 
                      alt={productName} 
                      className="h-12 w-12 object-cover rounded mr-3" 
                    />
                  )}
                  <p className="text-sm text-green-700 truncate">
                    {productName}
                  </p>
                </div>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-white flex justify-between">
            <Link 
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link 
              href="/cart"
              className="flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1 h-4 w-4" />
              Go to Cart
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
