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
// import advisors from "@/content/partners/advisors" // hidden with the section below
import logos from "@/content/partners/logos"
// import partners from "@/content/partners/partners" // hidden with the section below

const LandingPage = () => {
  return (
    <>
      <Main className='max-w-[1224px]'>
        <Intro />
        <Products />
        {/* Leadership and Advisors — both hidden, neither deleted. The rosters
            live in @/content/partners/{partners,advisors}; restore a section by
            uncommenting its line and its import. */}
        {/* <PartnersBlockComponent block={partners} /> */}
        {/* <PartnersBlockComponent block={advisors} /> */}
        <PartnersLogosBlockComponent block={logos} />
        <Press />
        <Outro />
      </Main>
      <SiteFooter className='max-w-screen-2xl w-full pt-16 lg:mx-auto' />
    </>
  )
}

export default LandingPage
