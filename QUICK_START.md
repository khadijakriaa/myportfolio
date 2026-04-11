# Quick Start Guide

## Local Development (2 minutes)

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## Build & Test Production

```bash
# Build the project
npm run build

# Test the production build locally
npm run start
```

## Deploy (2-3 minutes)

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Option B: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

---

## File Structure Reference

**Content to Edit:**

| File | Purpose | What to Change |
|------|---------|---|
| `components/sections/hero.tsx` | Hero section | `TAGLINES` array, description, CTA |
| `components/sections/about.tsx` | About section | Bio text, STATS, INTERESTS, PASSIONS |
| `components/sections/projects.tsx` | Projects | `PROJECTS` array with project details |
| `components/sections/skills.tsx` | Skills | `TECHNICAL_SKILLS`, `SOFT_SKILLS` |
| `components/sections/experience-education.tsx` | Timeline | `EXPERIENCE`, `EDUCATION` arrays |
| `components/sections/contact.tsx` | Contact | Email, LinkedIn, GitHub links |
| `app/layout.tsx` | Metadata | Title, description, fonts |
| `app/globals.css` | Styling | Colors, animations, fonts |

**Don't Touch:**

- `app/page.tsx` (imports all sections)
- `components/navbar.tsx` (fixed navigation)
- `components/theme-provider.tsx` (theme setup)
- `tailwind.config.ts`
- `tsconfig.json`

---

## Common Customizations

### Change Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: 221 83% 53%;  /* Change to your color in HSL */
  --accent: 217 91% 60%;
  --destructive: 0 84% 60%;
}
```

### Add/Edit Projects
Edit `PROJECTS` array in `components/sections/projects.tsx`:
```typescript
const PROJECTS = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Short description",
    longDesc: "Longer description",
    tags: ["Tech1", "Tech2"],
    // ... more fields
  },
  // Add more projects
];
```

### Update Skills
Edit arrays in `components/sections/skills.tsx`:
```typescript
const TECHNICAL_SKILLS = [
  { name: 'Python', level: 88, category: 'Languages' },
  // Add more skills
];
```

### Change Fonts
In `app/layout.tsx`, modify the Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet" />
```

---

## Useful Commands

```bash
# Type checking
npm run typecheck

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Clean cache
rm -rf .next
npm run build
```

---

## Browser Testing

```bash
# Chrome/Edge
# Open: http://localhost:3000

# Firefox
# Open: http://localhost:3000

# Mobile (test responsive)
# Open DevTools → Toggle device toolbar (Ctrl+Shift+M)
```

---

## Performance Tips

1. **Images**: Use `next/image` for optimization (if adding images)
2. **CSS**: Tailwind purges unused CSS automatically
3. **JS**: Next.js automatically code-splits components
4. **Animations**: Reduce duration on slow devices if needed

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build error | `rm -rf node_modules .next && npm install && npm run build` |
| Styles not showing | Hard refresh: `Ctrl+Shift+R` |
| Theme not saving | Clear browser cookies for localhost |

---

## Deployment Checklist

Before deploying:
- [ ] All links are correct (email, GitHub, LinkedIn)
- [ ] Tested on mobile
- [ ] Dark mode works
- [ ] All animations smooth
- [ ] Build passes: `npm run build`

Deploy with:
```bash
# Vercel
vercel --prod

# Netlify  
netlify deploy --prod --dir=.next
```

---

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev
- **Radix UI**: https://radix-ui.com

---

**You're all set! Start building! 🚀**
