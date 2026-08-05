import { preset } from '@luxfi/ui/tailwind'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      './node_modules/@luxfi/ui/**/*.{ts,tsx}',
      './node_modules/@hanzo/**/*.{ts,tsx}',
      /*
        @hanzo/ui ships its components compiled, so its class names live in dist/*.js.
        Scanning only .ts/.tsx meant those utilities were never generated and the classes
        silently did nothing on the page.
      */
      './node_modules/@hanzo/ui/dist/**/*.js'
    ]
  },
  theme: {
    extend: {
      colors: {
          white: "#ffffff",
          black: "#000000",
          gray: "#e5e7eb",
          /*
            @hanzo/ui's button is shadcn-derived and asks for `text-primary-foreground`,
            but its tailwind preset exposes that colour as `primary.fg`. The utility is
            therefore never generated, the class does nothing, and primary buttons render
            their label in the inherited body colour -- near-white on a white button
            (measured 1.07:1). Alias the name its own components use.
          */
          primary: { foreground: "var(--hz-ui-primary-fg)" },
      }
    },
  }
}