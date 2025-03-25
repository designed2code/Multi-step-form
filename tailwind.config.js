/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // <== all components in src
    // If using shadcn/ui or special paths, include them:
    "./node_modules/tw-animate-css/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // If needed, add other plugins or "tw-animate-css" here
    // require('tw-animate-css')
  ],
};
