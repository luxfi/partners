import React from "react"

import Main from "@luxfi/ui/components/main"

//import Ecosystem from "@/blocks/components/ecosystem"
import Intro from "@/blocks/components/intro"
import Outro from "@/blocks/components/outro"
import PartnersBlockComponent from "@/blocks/components/partners/partners-block"
import PartnersLogosBlockComponent from "@/blocks/components/partners/partners-logos-block"
import Press from "@/blocks/components/press"
import Products from "@/blocks/components/products"
import SiteFooter from "@/blocks/components/site-footer"
import advisors from "@/content/partners/advisors"
import logos from "@/content/partners/logos"
import partners from "@/content/partners/partners"

const LandingPage = () => {
  return (
    <>
      <Main className='max-w-[1224px]'>
        <Intro />
        <Products />
        <PartnersBlockComponent block={partners} />
        <PartnersBlockComponent block={advisors} />
        <PartnersLogosBlockComponent block={logos} />
        <Press />
        <Outro />
      </Main>
      <SiteFooter className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
    </>
  )
}

export default LandingPage
