// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       // colors: {
//       //   'dark-bg': '#1f2937',  // couleur pour le mode sombre
//       //   'dark-text': '#ffffff',
//       //   'light-bg': '#ffffff',
//       //   'light-text': '#000000',
//       // },
//     },
//           animation: {
//             'spin-slow': 'spin 6s linear infinite', // Rotation lente en 6 secondes
//           },
//   },
//   plugins: [],
// }

module.exports = {
  darkMode: 'class', // Active le mode sombre en fonction de la classe
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Indique à Tailwind où chercher les classes
  theme: {
    extend: {
      // ajouter des extensions ici si nécessaire
    },
  },
  plugins: [],
};
