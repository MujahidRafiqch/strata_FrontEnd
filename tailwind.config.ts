/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'right': '10px 0px 10px rgba(0, 0, 0, 0.3)',
      },
      fontFamily:{
			
				Arimo:["Arimo",'sans-serif']
			}
    },
  },
  plugins: [],
}

