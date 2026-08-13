import type * as C from "@hanzo/ui/blocks";

import type PartnersBlock from "@/blocks/def/partners-block";
import type PartnerCardBlock from "@/blocks/def/partner-card-block";

export default {
  blockType: "partners",
  title: {
    blockType: "heading",
    heading: "Leadership",
    level: 3,
    byline:
      "We are finance and technology pioneers dedicated to building sound financial products that serve the enviroment, society and people.",
    bylineLevel: 0,
  } as C.HeadingBlock,
  partners: [
    {
      blockType: "partner-card",
      name: "Antje Worring",
      title: "Chief Executive Officer",
      description:
        "Metaverse architect and multidisciplinary designer with over 10 years of experience in art, branding, design, engineering, fashion and marketing as well UI/UX, video production and 3D modeling. She is also an advocate for animal and ocean conservation and has worked in the sustainability sector for over a decade. Antje's career began at award-winning Karma Bikinis, where she has served as CEO & lead designer since 2014, producing over 300 products and hundreds of photo shoots. Since March 2020, she has also worked as designer, software engineer and delivers multidisciplinary activations, engagements and partnerships, while never losing focus on growth.",
      url: "https://www.linkedin.com/in/antje-worring",
      image: {
        blockType: "image",
        src: "/assets/images/antje-worring.jpg",
        alt: "Antje Worring",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Zach Kelling",
      title: "Founding CTO",
      description:
        "A visionary leader in adtech and fintech, Zach leverages quantum encryption for positive environmental and social outcomes. He is prolific as both an engineer and entrepreneur, with over 15 years in high growth startups. He founded Hanzo, a Techstars funded AI marketing platform that launched some of the most successful crowdsales in history, and co-Founded the first SEC approved digital securities platform with Arca, as well as DAOs BrightMoments and DEVxDAO. As CEO of LUX, Zach has pioneered one of the first quantum financial systems. He also actively contributes to influential DAOs and drives societal change, serving on the executive board of the CROP Organization.",
      url: "https://linkedin.com/in/zeekay",
      image: {
        blockType: "image",
        src: "/assets/images/zach-kelling.png",
        alt: "Zach Kelling",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Woo Bin",
      title: "Chief Technology Officer",
      description:
        "Woo Bin is a seasoned software developer with seven years of experience specializing in full-stack web app, dApp development, and AI chat app. He currently holds the position of Lead Engineer at Lux Network, where he brings a distinguished understanding of various programming languages and infrastructures. His extensive experience lies in creating high-performing, scalable software products, and applications tailored for unique business needs. Undeniably, Woo Bin is a savvy problem solver and tech enthusiast always at the forefront of technological innovations. His work influencers efficient workflow and fosters cutting-edge technological advancements in the software industry.",
      url: "https://lux.partners",
      image: {
        blockType: "image",
        src: "/assets/images/woo-bin.png",
        alt: "Woo Bin",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Cyrus Pahlavi",
      title: "Executive President",
      description: `An accomplished artist, inventor, human rights advocate, and expert in global finance and commodities, Cyrus brings a wealth of experience and a unique perspective to his role as Executive President of LUX. His diverse career, highlighted by significant achievements in art, activism, philanthropy, film production, and diplomacy, is underpinned by a robust global network cultivated through prestigious education at Le Rosey in Switzerland and Parsons College. This network, enriched by his lineage as a descendant of the "Peacock Dynasty" and his advocacy for women's rights, aligns with the legacy of Cyrus the Great and his pioneering human rights efforts.`,
      url: "https://www.cyruspahlavi.com/about",
      image: {
        blockType: "image",
        src: "/assets/images/cyrus-pahlavi.png",
        alt: "Cyrus Pahlavi",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Vincent Butta",
      title: "Chief Operations Officer",
      description: "Vincent is a seasoned business leader with 30 years of experience in entertainment, social media, and licensing. He has built and sold early-stage startups, leading them to become multimillion-dollar enterprises. Vincent has an impressive track record, including creating one of the largest marketing companies in the US and launching over 400 consumer products for major brands like P&G, J&J, and Walmart. In the entertainment industry, he has managed film releases for Disney, Fox, and Paramount, and has produced notable films that received critical acclaim and awards. Vincent has also been involved in turnaround and business acceleration for various companies on behalf of investors.",
      url: "https://www.linkedin.com/in/vincent-butta-8562791",
      image: {
        blockType: 'image',
        src: '/assets/images/vincent-butta.png',
        alt: 'Vincent Butta',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ole Brereton",
      title: "Executive VP",
      description:
        "Lord Ole Loftus Brereton is an accomplished Executive with a strong background in Finance, International Trade, Production, Music Videos, Advertising, and Design. As Executive Vice President at LUX since May 2021, he spearheads private asset management and wealth solutions, fostering success in an ever-evolving world. Based in the Isle of Man and London, Ole's visionary leadership has been instrumental in shaping Lux's growth, driving innovation in asset management and regulated technology over two fruitful years.",
      url: "https://www.linkedin.com/in/lord-ole-loftus-l-brereton-911a1a11",
      image: {
        blockType: "image",
        src: "/assets/images/ole-brereton.png",
        alt: "Ole Brereton",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
  ],
} as PartnersBlock;
