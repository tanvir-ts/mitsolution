/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.4s ease-out",
          slideUp: "slideUp 0.4s ease-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
        },
      }
      
                                           
    },
    plugins: [],
  };
  