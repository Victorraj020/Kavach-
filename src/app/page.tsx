"use client";

import RoleSelect from '@/components/RoleSelect'
import Splash from '@/components/Splash'
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
      {!showSplash && <RoleSelect />}
    </>
  )
}
