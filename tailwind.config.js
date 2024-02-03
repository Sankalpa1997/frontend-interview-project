/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
      },
      colors: {
        xblue: '#255886',
        xyellow: "#FFD813"
      },
    }
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./src/**/*.{html,js,vue}"],
  },
}

