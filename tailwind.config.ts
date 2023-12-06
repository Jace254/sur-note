import {radixThemePreset} from 'radix-themes-tw'
import type { Config } from 'tailwindcss';
import Typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [radixThemePreset],
  plugins: [
    Typography({
     className: '',
     target: 'modern' 
    }),
  ],
}

export default config;