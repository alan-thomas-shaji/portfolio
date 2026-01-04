# The Scavenger's Path - Star Wars Portfolio

A unique Star Wars-themed portfolio website combining the gritty "Scavenger's Workshop" aesthetic with a "Jedi Evolution" narrative. Built with Astro and Tailwind CSS.

## 🎨 Concept

**"The Scavenger's Path"** - You are a technician in a dusty Outer Rim workshop, but hidden under the scrap metal is the soul of a Jedi. The portfolio tells your professional journey as an evolution from Padawan to Master.

### Design Philosophy

- **Hero Section (The Workbench):** Top-down view of a workbench with scrap metal panels
- **Experience Section (The Holopad):** Transitions from gritty workshop to clean, glowing blue interface
- **Visual Elements:** Rusted iron, brushed aluminum, flickering orange lights, and holographic blue interfaces
- **Progress Indicator:** Kyber Crystal that glows brighter as you progress through the timeline

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) - Blazing fast static site generator
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with custom Star Wars color palette
- **Icons:** Custom SVG components with `currentColor` theming
- **Animations:** CSS animations with scroll-triggered effects

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Custom Color Palette

The project uses a custom Star Wars-inspired color palette defined in `tailwind.config.mjs`:

- **Imperial Red:** `#8B0000` - For accents and warnings
- **Jedi Blue:** `#4A9EFF` - Primary color for experience section
- **Scrap Grey:** `#3A3A3A` - Workshop background colors
- **Workshop Orange:** `#FF6B35` - Primary accent for hero section
- **Kyber Crystal:** `#00FFFF` - Progress indicators and glows
- **Holo Blue:** `#00D9FF` - Holographic interface elements
- **Beskar Silver:** `#C0C0C0` - Metallic accents

## 📁 Project Structure

```
src/
├── components/
│   ├── icons/              # Star Wars themed SVG icons
│   │   ├── MandoHelmetIcon.astro
│   │   ├── SaberHiltIcon.astro
│   │   ├── HydroSpannerIcon.astro
│   │   ├── DatacardIcon.astro
│   │   ├── ImperialCogIcon.astro
│   │   └── RebelStarbirdIcon.astro
│   ├── Navigation.astro    # Top navigation with toggle switches
│   ├── HeroSection.astro  # Workbench view hero section
│   ├── ExperienceSection.astro  # Jedi Evolution timeline
│   └── KyberCrystal.astro # Progress indicator component
├── layouts/
│   └── Layout.astro       # Base layout with global styles
└── pages/
    └── index.astro        # Main portfolio page
```

## 🎯 Components

### Navigation
Toggle switch-style navigation with active state indicators. Automatically highlights the current section on scroll.

### Hero Section
- Scrap metal panel with "etched" About Me content
- Workshop tools/stats display
- Scroll indicator animation

### Experience Section
- Timeline view with Jedi evolution stages (Padawan → Guardian → Master)
- Scroll-triggered card animations
- Holographic blue interface aesthetic
- Skills tags for each experience

### Kyber Crystal
Animated progress indicator that glows based on scroll progress. Can be customized with a `progress` prop (0-100).

## 🎨 Customization

### Updating Experience Data

Edit the `experiences` array in `src/components/ExperienceSection.astro`:

```astro
const experiences: Experience[] = [
  {
    stage: 'Padawan',
    title: 'Your Title',
    company: 'Company Name',
    period: '2019 - 2021',
    description: 'Your description...',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    jediVisual: 'padawan',
  },
  // Add more experiences...
];
```

### Customizing Colors

Edit `tailwind.config.mjs` to modify the color palette:

```js
colors: {
  'your-color': '#HEXCODE',
  // ...
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `src/pages/index.astro`
3. Add navigation link in `src/components/Navigation.astro`

## 🎬 Animations

The portfolio includes several custom animations:

- **Glow Pulse:** Pulsing glow effect for interactive elements
- **Float:** Subtle floating animation
- **Flicker:** Flickering light effect
- **Saber Ignite:** Lightsaber ignition animation
- **Scroll-triggered:** Cards fade in as you scroll

## 📱 Responsive Design

The portfolio is fully responsive with mobile-optimized layouts:

- Navigation collapses on mobile
- Timeline adjusts for smaller screens
- Cards stack vertically on mobile
- Touch-friendly interactive elements

## 🔮 Future Enhancements

Potential additions based on the original concept:

- [ ] Projects section with "Force-Pull" gallery
- [ ] Aurebesh translator toggle
- [ ] Audio integration (workshop sounds → lightsaber hum)
- [ ] Interactive 3D elements
- [ ] Contact form styled as a datapad
- [ ] Resume download as a datacard

## 📝 License

This project is open source and available for personal use.

## 🙏 Credits

- Design concept inspired by Star Wars universe
- Icons designed with a "Scavenger's Workshop" aesthetic
- Built with modern web technologies for optimal performance

---

**May the Force be with you!** ⚔️
