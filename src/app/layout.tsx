import React, { type PropsWithChildren } from 'react'
import type { Viewport } from 'next'

import { AppProvider } from '@luxfi/ui/provider'

import _metadata from '../metadata'

import './globals.css'

export const metadata = { ..._metadata }

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='hanzo-ui-dark-theme'
      style={{ backgroundColor: '#000' }}
    >
      <body
        suppressHydrationWarning
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
