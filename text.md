# in frontend
- in terminal 
  -- npm create vite@latest .
  -- Package name: ... frontend
  -- Select a framework: » React
  -- Select a variant: » JavaScript
- npm install
- npm run dev
- now ctrl c
 -- npm install -D tailwindcss postcss autoprefixer
 -- npx tailwindcss init -p

 # in tailwind.config.js file
 - /** @type {import('tailwindcss').Config} */
 - export default {
 - content: [
 -  "./index.html",
 -   "./src/**/*.{js,ts,jsx,tsx}",
 - ],
 - theme: {
 -   extend: {},
 - },
 - plugins: [],
 - }

 # in index.css 
 - @tailwind base;
 - @tailwind components;
 - @tailwind utilities;

 - npm run dev
 - npm i -D daisyui@latest  for tailwind compponents
 

 # images,font 
 - take images from freepik website
 - font from google fonts

# install react slick
- go to frontend folder the pase this  React slick is a carousel component built with React. It is a react port of slick carousel
- npm install react-slick --save
- through this we use css in react in 2 ways inatall carousel or add css link
- after that run this in terminal npm install slick-carousel --save
- then place this inside freebook components
- import "slick-carousel/slick/slick.css";
- import "slick-carousel/slick/slick-theme.css";
- import Slider from "react-slick";
- then paste var setting function after const filterData from react-slick website

# to install router 
- npm i react-router-dom
- and in main.jsx remove strick mode and replace with 
- <BrowserRouter> <App /> </BrowserRouter>

# to use dark mode 
- include this in tailwind.config.js file after content 
- darkMode: "class",

# to apply restriction install react hook
- npm install react-hook-form