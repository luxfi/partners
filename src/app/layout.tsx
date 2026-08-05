import React, { type PropsWithChildren } from 'react'
import type { Viewport } from 'next'

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
        className='bg-background text-foreground font-sans flex flex-col min-h-full'
      >
        {children}
      </body>
    </html>
  )
}
