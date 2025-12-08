# Design Guidelines: Dra. Raquel Saraiva Landing Page

## Design Approach
**Reference-Based Approach** inspired by premium healthcare and beauty brands with a sophisticated, feminine aesthetic. Drawing inspiration from high-end medical spa websites and Brazilian beauty industry standards, prioritizing trust, elegance, and naturalness.

## Core Design Principles
- **Sophisticated Femininity**: Modern, elegant, and approachable—never clinical or cold
- **Natural Beauty Focus**: Design reflects the brand promise of natural-looking results
- **Trust & Credibility**: Professional polish that emphasizes 25+ years of expertise
- **Bilingual Excellence**: All content in Portuguese (Brazil) with culturally appropriate tone

## Typography
**Primary Font Family**: Poppins or Montserrat (Google Fonts)
- **H1 (Hero)**: 48px-64px, weight 600-700
- **H2 (Section Titles)**: 36px-48px, weight 600
- **H3 (Card Titles)**: 24px-28px, weight 500
- **Body Text**: 16px-18px, weight 400
- **Small Text**: 14px, weight 400
- **Accent Script** (minimal use): For small decorative elements like "Quem sou eu?"

## Color Palette (Orallis-Inspired)
- **Verde Orallis** (Pantone 2463 C equivalent: #7BA691 or similar): Accent highlights, borders
- **Caramelo/Dourado** (Pantone 2470 C equivalent: #C49A6C or similar): Primary CTAs, hover states
- **Marrom Escuro** (#4A4A4A): Secondary text
- **Bege Claro/Off-White** (#F8F6F3): Section backgrounds (alternating)
- **Rosa Blush** (#FFF5F5): Subtle feminine accents, card backgrounds
- **Branco Puro** (#FFFFFF): Primary background

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: `py-20 lg:py-32`
- Card padding: `p-6 lg:p-8`
- Element gaps: `gap-8 lg:gap-12`
- Container: `max-w-7xl mx-auto px-6`

## Component Library

### Header (Fixed)
- White background with subtle shadow on scroll
- Logo: "Dra. Raquel Saraiva" text-based (left)
- Navigation: Horizontal menu (desktop), hamburger (mobile)
- Primary CTA button: "Agendar Avaliação" (caramelo background)

### Hero Section
- **Layout**: Two-column (60/40) on desktop, stacked mobile
- **Left**: Headline, subheadline, bullet points, dual CTAs
- **Right**: Professional photo of Dra. Raquel (provided image)
- **Background**: White with subtle verde Orallis geometric pattern or gradient
- **CTAs**: Primary (WhatsApp - caramelo), Secondary (outline verde)

### Treatment Cards
- **Primary Treatments** (3): Larger cards with icons, 2-column grid (desktop)
- **Secondary Services** (6): Smaller cards, 3-column grid (desktop)
- Hover effect: Subtle lift (transform translateY(-4px))
- Icons: Healthcare/beauty themed from Heroicons

### Section Patterns
- **Alternating Backgrounds**: White → Bege Claro → Rosa Blush
- **Consistent Structure**: Title (centered), subtitle, content grid
- **Visual Anchors**: Decorative verde Orallis lines or shapes

### Process Timeline
Step-by-step visualization with numbered circles (caramelo) connected by verde lines

### Carousels (Results/Testimonials)
- Cards with subtle shadows
- Navigation dots (verde Orallis active state)
- Auto-play with manual controls

### Contact Section
- **Two-column**: Form (left), Info + Map (right)
- **Form**: Rounded inputs, caramelo submit button
- **Map**: Embedded Google Maps (Orallis Unique location)
- **WhatsApp Button**: Floating/prominent with icon

### Footer
- **Three sections**: Logo + tagline, Navigation links, Social icons
- Background: Marrom escuro with white text
- Copyright mentions both Dra. Raquel and Orallis Unique

## Images

### Hero Image
Large professional photo of Dra. Raquel Saraiva (provided URL). Should convey warmth, professionalism, and approachability. Position: Right side of hero, subtle rounded corners or soft edge treatment.

### Orallis Unique Space
Multiple photos showing the clinic's premium environment (placeholders until provided). Display in 2-3 column grid with slight overlap or masonry effect.

### Before/After Gallery
Carousel with comparison sliders. Use placeholder images with clear labeling "Resultado Real - Em breve" until actual photos provided.

### Background Textures
Subtle, abstract geometric patterns in verde Orallis at very low opacity (5-10%) for visual interest without distraction.

## Interactions & Animations
**Minimal & Purposeful**:
- Smooth scroll navigation
- Fade-in on scroll (sections appear as user scrolls)
- Hover states on cards (lift effect)
- Button hover: Darken 10%
- No excessive parallax or complex animations

## Responsiveness
- **Desktop** (1024px+): Multi-column layouts, full navigation
- **Tablet** (768-1023px): 2-column max, condensed spacing
- **Mobile** (<768px): Single column, hamburger menu, touch-optimized CTAs

## Accessibility
- ARIA labels in Portuguese
- Keyboard navigation support
- Minimum contrast ratio 4.5:1
- Focus states visible (verde Orallis outline)

## SEO Elements
- **Meta Title**: "Dra. Raquel Saraiva | Estética Oral e Facial em Brasília"
- **Meta Description**: As specified
- Semantic HTML5 structure
- Alt texts in Portuguese for all images