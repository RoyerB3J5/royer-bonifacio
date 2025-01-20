import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          ligth:"#78DDC7",
          dark:"#5CAF9F"
        },
        secondary:"#78DDC7",
        white: "#ffffff",
        gris: "#444452"
      },
      fontSize: {
        h1 : ['2.5rem','1,5px']
      },
      boxShadow:{
        "email":"0 -3px 0 #78DDC7 inset",
        "email-hover":"0 -33px 0 #78DDC7 inset",
        "email-dark":"0 -3px 0 #5CAF9F inset",
        "email-hover-dark":"0 -33px 0 #5CAF9F inset",
        "proyectos": "0 4px 6px -1px #444452"
      },
      keyframes:{
        wave: {
          '0%, 100%': { transform: 'none' },
          '15%': { transform: 'translate3d(-20%,0,0) rotate3d(0,0,1,-10deg)' },
          '30%': { transform: 'translate3d(10%,0,0) rotate3d(0,0,1,7deg)' },
          '45%': { transform: 'translate3d(-15%,0,0) rotate3d(0,0,1,-10deg)' },
          '60%': { transform: 'translate3d(10%,0,0) rotate3d(0,0,1,5deg)' },
          '75%': { transform: 'translate3d(-5%,0,0) rotate3d(0,0,1,-2deg)' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out ',
      },
     

    },
  },
  plugins: [nextui({
    themes:{
      light:{
        colors:{
          background: "#ffffff",
          foreground: "#444452",
          
        }
      },
      dark:{
        colors:{
          background: "#282C33",
          foreground: "#ABB2BF",
        }
      }
    }
  })],
} satisfies Config;

