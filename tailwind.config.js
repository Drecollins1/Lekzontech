/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contact-image': "url('/assets/images/contact-image.png')",
        'about-image': "url('/assets/images/aboutImg.png')",
        'mission-image': "url('/assets/images/group1.png')",
        'project-image': "url('/assets/images/project.png')",
        'ideas-image': "url('/assets/images/spot.png')",
        'home-image': "url('/assets/images/homeImg.png')",
        'services-image': "url('/assets/images/woman.jpg')",
        'impact': "url('/assets/images/services/impact.png')",
      },
      boxShadow: {
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}