# Star Wars Themed Icon Components

A collection of custom SVG icons designed for a Star Wars-themed portfolio website with a "Scavenger's Workshop" aesthetic. All icons are built as Astro components and use `currentColor` for easy theming.

## Icons

### 1. MandoHelmetIcon
**Mandalorian Beskar Helmet** - Perfect for an "About Me" icon, or representing armor/defense skills.

### 2. SaberHiltIcon
**Lightsaber Hilt (Mechanical Style)** - Great for the "Experience" section or representing your core "weapon" (your main coding language).

### 3. HydroSpannerIcon
**The Hydro-Spanner (Workshop Tool)** - The ultimate Star Wars mechanic's tool. Perfect for a "Skills" or "Toolbox" section.

### 4. DatacardIcon
**The Datacard (Storage/Projects)** - Represents data, plans, or code. Great for a "Projects" or "Resume" download button.

### 5. ImperialCogIcon
**The Imperial Cog (Scrap Tech)** - Represents the industrial, structured side of tech. Good for "Architecture" or "Backend" skills.

### 6. RebelStarbirdIcon
**The Alliance Starbird (Scratched)** - The symbol of hope and the Jedi. Great for "Frontend" or creative skills.

## Usage

### Basic Usage

```astro
---
import MandoHelmetIcon from '../components/icons/MandoHelmetIcon.astro';
import SaberHiltIcon from '../components/icons/SaberHiltIcon.astro';
---

<MandoHelmetIcon class="w-6 h-6 text-gray-400" />
<SaberHiltIcon class="w-8 h-8 text-blue-400" />
```

### With Tailwind CSS Classes

All icons inherit color from the `currentColor` CSS variable, making them easy to style with Tailwind:

```astro
<!-- Gray icon -->
<HydroSpannerIcon class="w-6 h-6 text-gray-400" />

<!-- Yellow icon -->
<HydroSpannerIcon class="w-6 h-6 text-yellow-500" />

<!-- Custom size -->
<DatacardIcon class="w-12 h-12 text-cyan-400" />
```

### Adding Glow Effects

To create a holographic or glowing effect, use Tailwind's `drop-shadow` utility:

```astro
<SaberHiltIcon 
  class="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
/>
```

### Custom Sizing

Icons default to 24x24 viewBox. You can customize size using:

```astro
<!-- Using Tailwind classes -->
<ImperialCogIcon class="w-6 h-6" />

<!-- Using explicit width/height props -->
<RebelStarbirdIcon width={32} height={32} class="text-red-500" />
```

## Props

All icons accept the following props:

- `class` (string, optional): CSS classes to apply
- `width` (number | string, optional): Icon width (default: 24)
- `height` (number | string, optional): Icon height (default: 24)
- Any other standard SVG attributes (e.g., `aria-label`, `role`, etc.)

## Accessibility

Remember to add appropriate ARIA labels when using icons:

```astro
<MandoHelmetIcon 
  class="w-6 h-6 text-gray-400" 
  aria-label="About me"
  role="img"
/>
```

## Design Notes

- All icons use `currentColor` for fill/stroke, allowing easy theming
- Standard `viewBox="0 0 24 24"` for consistent scaling
- Designed with a mechanical, technical aesthetic
- Optimized for use in a "Scavenger's Workshop" themed portfolio

