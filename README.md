# Pokémon Card Grid 🃏✨  

A designed Pokémon Card Grid application inspired by an antique aesthetic. Discover, search, and filter your favorite Pokémon in a responsive, visually enchanting grid display.

---

## Features 🌟  

- **Grid Display**
- **Search by Name**
- **Filter by Type**
- **Responsive Design**  

---

## Tech Stack 🛠️  

- **TypeScript**
- **Next.js**
- **Tailwind CSS**
- **Data Source**

---

## Tailwind CSS Integration 🎨  

Tailwind CSS is used for styling to provide a modern, utility-first approach.  

### Customization  

Tailwind's configuration is customized for an antique aesthetic using:  
- **Typography plugin**: Enhances text styles for headings and paragraphs.  

To explore or edit the configurations, check the `tailwind.config.js` file.  

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sepia: "#704214",
        antiqueGold: "#D4AF37",
        parchment: "#F5DEB3",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};



## Images







