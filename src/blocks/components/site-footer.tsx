'use client'

import React from 'react'

import Footer from '@luxfi/ui/components/footer'

import siteDef from '@/site-def'

/*
  @luxfi/ui's <Footer> passes an `itemClx` *function* down to <NavItems>, which is a
  Client Component. Rendering <Footer> from a Server Component therefore trips
  "Functions cannot be passed directly to Client Components" and fails `output: 'export'`.
  Rendering it inside this client boundary keeps that function on the client, where it's legal.
*/
const SiteFooter: React.FC<{ className?: string }> = ({ className }) => (
  <Footer siteDef={siteDef} className={className} />
)

export default SiteFooter
