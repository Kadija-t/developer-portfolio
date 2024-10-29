module.exports = {
  darkMode: 'class', // Active le mode sombre en fonction de la classe
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Indique à Tailwind où chercher les classes
  theme: {
    extend: {
      // ajouter des extensions ici si nécessaire
    },
  },
  plugins: [
    require('tailwindcss-responsive-embed'),
  ],
};
