'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function PWATestInfo() {
  const [pwaChecks, setPwaChecks] = useState({
    manifest: false,
    serviceWorker: false,
    https: false,
    installable: false,
    displayMode: false
  })

  useEffect(() => {
    // Check PWA requirements
    const checks = {
      manifest: !!document.querySelector('link[rel="manifest"]'),
      serviceWorker: 'serviceWorker' in navigator,
      https: location.protocol === 'https:' || location.hostname === 'localhost',
      installable: false,
      displayMode: window.matchMedia('(display-mode: standalone)').matches
    }

    // Check if installable
    if (checks.manifest && checks.serviceWorker && checks.https) {
      checks.installable = true
    }

    setPwaChecks(checks)
  }, [])

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    )
  }

  const getStatusBadge = (status: boolean) => {
    return status ? (
      <Badge variant="default" className="bg-green-500">Pass</Badge>
    ) : (
      <Badge variant="destructive">Fail</Badge>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          PWA Installation Status
        </CardTitle>
        <CardDescription>
          Check if your app meets PWA installation requirements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(pwaChecks.manifest)}
              <div>
                <p className="font-medium">Web App Manifest</p>
                <p className="text-sm text-gray-600">App metadata and configuration</p>
              </div>
            </div>
            {getStatusBadge(pwaChecks.manifest)}
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(pwaChecks.serviceWorker)}
              <p className="font-medium">Service Worker</p>
            </div>
            {getStatusBadge(pwaChecks.serviceWorker)}
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(pwaChecks.https)}
              <div>
                <p className="font-medium">HTTPS/Localhost</p>
                <p className="text-sm text-gray-600">Secure connection required</p>
              </div>
            </div>
            {getStatusBadge(pwaChecks.https)}
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(pwaChecks.installable)}
              <div>
                <p className="font-medium">Installable</p>
                <p className="text-sm text-gray-600">Ready for installation</p>
              </div>
            </div>
            {getStatusBadge(pwaChecks.installable)}
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {getStatusIcon(pwaChecks.displayMode)}
              <div>
                <p className="font-medium">App Mode</p>
                <p className="text-sm text-gray-600">Running as installed app</p>
              </div>
            </div>
            {getStatusBadge(pwaChecks.displayMode)}
          </div>
        </div>

        {pwaChecks.installable && !pwaChecks.displayMode && (
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              🎉 Your app is ready to install!
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Look for the install prompt or use the "Add to Home Screen" option in your browser menu.
            </p>
          </div>
        )}

        {pwaChecks.displayMode && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
              ✅ App is installed and running!
            </h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              You're currently using the installed version of the app.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
