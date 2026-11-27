/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        logo: {
          start: '#463ADD',
          end: '#FF00FB',
        },
        sidebar: '#EEF1FF',
        content: '#FAFBFF',
        header: {
          DEFAULT: '#FAFBFF',
          border: '#E4E4E7',
        },
        title: '#1F2937',
        muted: '#71717A',
        details: '#1E1F24',
        description: '#81828C',
        card: {
          DEFAULT: '#FFFFFF',
          border: '#E4E4E7',
        },
        'tag-border': '#D4D4D8',
        primary: {
          DEFAULT: '#463ADD',
          hover: '#3A2FC2',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'public-sans': ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
