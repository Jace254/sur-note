import {radixThemePreset} from 'radix-themes-tw'
import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [radixThemePreset],
  plugins: [],
}

export default config;