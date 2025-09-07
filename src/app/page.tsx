"use client";

import RoleSelect from '@/components/RoleSelect'
import Splash from '@/components/Splash'
import PWATestInfo from '@/components/PWATestInfo'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1700)
    return () => clearTimeout(t)
  }, [])
  return (
    <>
      {showSplash && <Splash />}
      {!showSplash && (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <PWATestInfo />
            <div className="mt-8">
              <RoleSelect />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
