/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#030407',
        carbon: '#080706',
        graphite: '#12100E',
        steel: '#2A211D',
        platinum: '#F3F0E8',
        mist: '#C6BDB2',
        ash: '#8B8177',
        ember: '#EF4423',
        violet: '#B7A5FF'
      },
      fontFamily: {
        display: ['"Snaga Uni Display"', '"Space Grotesk"', 'Poppins', 'sans-serif'],
        sans: ['Manrope', 'Inter', 'Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
      },
      boxShadow: {
        premium: '0 28px 90px rgba(0, 0, 0, 0.5)',
        line: 'inset 0 0 0 1px rgba(243, 240, 232, 0.09)'
      },
      backgroundImage: {
        noise:
          'radial-gradient(circle at 20% 10%, rgba(239,68,35,0.14), transparent 24%), radial-gradient(circle at 85% 15%, rgba(234,88,12,0.14), transparent 26%), linear-gradient(135deg, #030407, #080706 48%, #12100E)',
        mesh:
          'linear-gradient(rgba(243,240,232,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(243,240,232,0.035) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
