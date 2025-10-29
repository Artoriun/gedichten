# Gedichten - Hungarian Poetry Website

A beautiful, responsive one-page website showcasing the works of Kovács, a Hungarian poet from the early 20th century. This project recreates the elegant design and functionality of christina.framer.media while adapting it to celebrate Hungarian literary heritage.

## 🎨 Project Overview

This website presents a curated collection of Hungarian poetry through an immersive, scroll-based experience. The design emphasizes minimalism and elegance, allowing the poetry and visual elements to create an atmospheric journey through early 20th century Hungarian literature.

## ✨ Features

### 📖 Poetry Collections
- **Hero Section**: Showcases four distinct poetry collections:
  - *Őszi Álmok* (Autumn Dreams Collection)
  - *Budapest Éjszaka* (Urban Verses)
  - *Szerelem Szavai* (Love Poetry Series)  
  - *Múlt Emlékei* (Historical Reflections)
- Interactive "Read Poem" buttons with hover animations
- Curated vintage imagery from Unsplash

### 🧭 Sticky Navigation
- **Top-right positioned navigation bar** inspired by christina.framer.media
- **Contact Icon**: Direct access to contact section via speech bubble icon
- **Dropdown Menu**: Smooth animated menu with sections:
  - Home, About, Testimonial, FAQ, Contact
- **Interactive Behavior**: Menu closes automatically when clicking outside
- **Smooth Scrolling**: Native scroll behavior to all sections
- **Responsive Design**: Adapts seamlessly to mobile and desktop screens

### 📝 Content Sections
1. **About**: Biography of the poet with Hungarian cultural context and image gallery
2. **Testimonial**: Authentic reader testimonial with atmospheric imagery
3. **FAQ**: Interactive expandable questions about poetry collections and care
4. **Contact**: Multilingual contact information with Hungarian poetry quote and image gallery
5. **Footer**: Dedicated footer component with copyright and heritage information

### 🎭 Animations & Interactions
- **Framer Motion**: Scroll-triggered animations throughout
- **Hover Effects**: Interactive poetry cards and buttons
- **Staggered Animations**: Sequential element reveals for engaging UX
- **Smooth Transitions**: Elegant animations across all components
- **Touch-Friendly**: Optimized interactions for mobile devices

## 🛠 Technical Stack

- **React 18+**: Modern component-based architecture
- **TypeScript**: Type-safe development with interfaces
- **Vite**: Lightning-fast development and optimized builds
- **Framer Motion**: Professional animations and transitions
- **CSS Grid & Flexbox**: Responsive layout system
- **ESLint**: Code quality and consistency

## 🎨 Design System

### Color Palette
- **Primary Green**: `#2d5a27` (Interactive elements, contact buttons)
- **Dark Green**: `#1e3f1a` (Hover states)
- **Background**: `#fafafa` (Light, warm background)
- **Text**: `#1a1a1a` (Primary text), `#666` (Secondary text)
- **Accent Black**: `#1a1a1a` (Secondary action buttons)

### Typography
- **Primary Font**: Georgia, Times New Roman (Serif for elegance)
- **Responsive Sizing**: Clamp functions for fluid typography
- **Letter Spacing**: Enhanced readability for literary content

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Artoriun/gedichten.git
cd gedichten
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

### Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle  
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx/css          # Poetry collections showcase
│   ├── About.tsx/css         # Poet biography section
│   ├── Testimonial.tsx/css   # Reader testimonial
│   ├── FAQ.tsx/css           # Interactive questions
│   ├── Contact.tsx/css       # Contact information and image gallery
│   ├── Footer.tsx/css        # Copyright and heritage information
│   └── Navigation.tsx/css    # Sticky navigation with dropdown menu
├── App.tsx                   # Main application component
├── App.css                   # Global styles and responsive layout
└── main.tsx                  # Application entry point
```

## 🌍 Cultural Context

This website celebrates Hungarian literary tradition, specifically focusing on:
- **Early 20th Century Poetry**: Historical period of cultural renaissance
- **Hungarian Language**: Original titles with English descriptions
- **Cultural Heritage**: Authentic representation of Magyar literary tradition
- **Visual Aesthetics**: Vintage books, manuscripts, and nature imagery

## 🔧 Customization

The website is designed to be easily customizable:

### Content Updates
- **Poetry Collections**: Edit the `artworks` array in `Hero.tsx`
- **Poet Information**: Modify content in `About.tsx`
- **Contact Details**: Update information in `Contact.tsx`

### Styling Changes
- **Colors**: Update CSS custom properties in component stylesheets
- **Images**: Replace Unsplash URLs with custom imagery
- **Typography**: Modify font families in CSS files

### Animation Tweaks
- **Timing**: Adjust Framer Motion transition durations
- **Effects**: Modify animation variants for different behaviors
- **Triggers**: Update viewport settings for scroll animations

### Component Architecture
- **Modular Design**: Each section is a separate, reusable component
- **Clean Separation**: Dedicated components for navigation, content, and footer
- **Responsive Layout**: Mobile-first design with flexible grid systems
- **Interactive Elements**: Enhanced UX with intuitive navigation patterns

## 🏆 Inspiration & Credits

- **Design Inspiration**: christina.framer.media for layout and navigation patterns
- **Cultural Content**: Hungarian literary heritage and early 20th century poetry
- **Images**: Unsplash contributors for vintage books and manuscript photography
- **Typography**: Classic serif fonts for literary elegance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

*"A szó örök, mint a lélek maga" - Words are eternal, like the soul itself*
