# Khadija Kriaa — Portfolio Website

A modern, responsive, and interactive portfolio website built with **Next.js 13**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, dark/light theme toggle, and a comprehensive showcase of projects, skills, and experience.

## Features

✨ **Modern Design**
- Blue/indigo/cyan tech color palette with gradient effects
- Glassmorphism cards and frosted glass effects
- Smooth animations and scroll-triggered reveals
- Responsive design (mobile, tablet, desktop)

🎨 **Interactive Elements**
- Dark/Light mode toggle with persistent theme
- Scroll-triggered reveal animations
- Animated skill bars and circular progress indicators
- Interactive project showcase with tilt effects
- Live sentiment analysis demo
- Floating tech icons universe
- Typing animation in hero section

📱 **Responsive Layout**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Adaptive typography and spacing

🚀 **Performance**
- Next.js static generation
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page load times

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Radix UI (optional, shadcn/ui available)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Intersection Observer API
- **Theme Management**: next-themes

## Project Structure

```
components/
├── navbar.tsx                           # Fixed navigation with active section tracking
├── theme-provider.tsx                   # Theme context provider
└── sections/
    ├── hero.tsx                         # Hero with typing animation
    ├── about.tsx                        # Bio, stats, interests, passions
    ├── projects.tsx                     # Detailed project cards
    ├── skills.tsx                       # Technical & soft skills visualization
    ├── experience-education.tsx         # Timeline layout
    ├── contact.tsx                      # Contact cards & CTA
    └── creative-showcase.tsx            # 3D cards, floating icons, demo

app/
├── page.tsx                             # Main page orchestrator
├── layout.tsx                           # Root layout with fonts & metadata
└── globals.css                          # Global styles, animations, utilities

lib/
└── utils.ts                             # Utility functions

public/
└── (images & assets)
```

## Sections

### 1. **Hero**
- Animated typewriter effect
- Floating particles & glowing orbs
- Rotating ring decorations
- CTA buttons
- Tech stack pills

### 2. **About**
- Morphing avatar with AI/code icons
- Professional bio
- Interest badges (guitar, books, sci-fi, AI)
- Stats grid (projects, tech, years, LOC)
- Core focus areas (AI, Data, Software, NLP)

### 3. **Projects**
Three featured projects with:
- **Web App for File Upload & Data Extraction** (Internship)
  - Angular, Spring Boot, PostgreSQL, Tesseract OCR, Cohere API, JWT
  - Key features, technologies, GitHub/demo links

- **Tunisian Dialect Classification** (NLP/ML)
  - MARBERT, Hugging Face, Sentiment Analysis
  - Demo, GitHub, Model links

- **Hybrid Agent for Driving Assistance** (ML/NLP)
  - Road detection, NLP alerts, TTS, multi-agent system
  - GitHub link

### 4. **Skills**
- **Technical Skills**: Filterable by category
  - Languages (Python, SQL, JavaScript, Java)
  - AI/ML (ML, Hugging Face, scikit-learn)
  - Frameworks (Angular, Spring Boot)
  - Tools (Git, Tesseract, REST APIs)
  - Animated progress bars

- **Soft Skills**: Circular progress indicators
  - Problem Solving, Analytical Thinking, Creativity, Collaboration, Time Management

- **Familiar With**: Tech cloud (Docker, Linux, Jupyter, etc.)

### 5. **Experience**
- **Data Engineering Intern at Coconsult Nearshore** (July 2025)
  - Timeline layout with achievements
  - Tech tags

### 6. **Education**
- **ENET'Com — Data & Decisional Systems Engineering** (2nd Year)
  - Course list (ML, NLP, Databases, Software Engineering, etc.)

### 7. **Contact**
- Email, LinkedIn, GitHub cards with glow effects
- Quick-send CTA button
- Availability indicator
- Professional tone

### 8. **Creative Showcase**
- **3D Floating Project Cards**: Hover-to-tilt effect
- **Floating Tech Icons Universe**: Reveal labels on hover
- **Live Sentiment Demo**: Input text → predict sentiment with confidence

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Basic knowledge of Next.js and React

### Installation

1. **Clone the repository** (or download the project)
   ```bash
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

## Customization

### Changing Content

1. **Hero Section** (`components/sections/hero.tsx`)
   - Modify `TAGLINES` array for rotating taglines
   - Update description text
   - Change CTA button actions

2. **Projects** (`components/sections/projects.tsx`)
   - Edit `PROJECTS` array to add/remove projects
   - Update project details, links, tags

3. **Skills** (`components/sections/skills.tsx`)
   - Modify `TECHNICAL_SKILLS` and `SOFT_SKILLS` arrays
   - Update skill names and levels
   - Add/remove skill categories

4. **Experience & Education** (`components/sections/experience-education.tsx`)
   - Edit `EXPERIENCE` and `EDUCATION` arrays
   - Update achievements, courses, dates

5. **Contact** (`components/sections/contact.tsx`)
   - Update email, LinkedIn, GitHub links
   - Modify contact cards

### Styling

1. **Colors**: Edit CSS variables in `app/globals.css`
   - Primary colors: Blue, Indigo, Cyan
   - Adjust in `:root` and `.dark` sections

2. **Animations**: Modify keyframes and animation utilities in `app/globals.css`
   - Tweak durations, delays, easing functions
   - Add new animations as needed

3. **Fonts**: Change in `app/layout.tsx`
   - Currently uses Inter and Poppins from Google Fonts

4. **Tailwind Config**: `tailwind.config.ts`
   - Customize colors, spacing, breakpoints

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow prompts to deploy. Your site will be live in minutes.

### Netlify

```bash
npm i -D @netlify/cli
netlify deploy --prod --dir=.next
```

### Static Hosting

The project generates static HTML by default. Deploy the `.next` directory to any static host (GitHub Pages, Cloudflare Pages, etc.).

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Images are optimized with Next.js Image component
2. CSS is minified and purged of unused styles
3. JavaScript is code-split and lazy-loaded
4. Intersection Observer for scroll-triggered animations
5. Static generation for fast initial loads

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG AA
- Reduced motion support (respects `prefers-reduced-motion`)

## License

This portfolio is open source. Feel free to fork, modify, and use as inspiration for your own!

## Contact

- **Email**: kriaakhadija784@gmail.com
- **LinkedIn**: [Khadija Kriaa](https://www.linkedin.com/in/khadija-kriaa-579608334/)
- **GitHub**: [@khadijakriaa](https://github.com/khadijakriaa)

---

**Built with ❤️ by Khadija Kriaa**
