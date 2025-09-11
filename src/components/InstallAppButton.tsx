'use client'

import { useEffect, useState } from 'react'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export default function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [canInstall, setCanInstall] = useState(false)
  const apkUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_APK_URL : undefined

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setCanInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt()
      try {
        await deferredPrompt.userChoice
      } finally {
        setDeferredPrompt(null)
        setCanInstall(false)
      }
      return
    }

    if (apkUrl) {
      window.location.href = apkUrl
    }
  }

  if (!canInstall && !apkUrl) return null

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 50,
        padding: '10px 14px',
        borderRadius: 8,
        background: '#111827',
        color: 'white',
      }}
      aria-label="Install app"
    >
      Install app
    </button>
  )
}


