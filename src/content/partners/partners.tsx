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
      name: "Zach Kelling",
      title: "Co-CEO",
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
      name: "Antje Worring",
      title: "Co-CEO",
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
  ],
} as PartnersBlock;
