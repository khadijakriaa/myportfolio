# Deployment Guide

Your portfolio is **production-ready** and can be deployed in minutes using any of these platforms.

## Quick Deploy Options

### 1. Vercel (Recommended - 2 minutes)

**Easiest option:** Vercel is made by the Next.js team and provides instant deployment.

```bash
npm install -g vercel
vercel
```

Follow the interactive prompts. Your site will be live immediately at a `*.vercel.app` domain.

**Custom Domain:**
```bash
vercel --prod
```
Then add your custom domain in Vercel dashboard.

---

### 2. Netlify (2-3 minutes)

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

Or connect your GitHub repo in Netlify dashboard for automatic deployments.

---

### 3. GitHub Pages (5 minutes)

1. Create a GitHub repository
2. Push your code
3. Add this to `next.config.js`:
   ```javascript
   module.exports = {
     basePath: '/repo-name',
   }
   ```
4. Enable GitHub Pages in repository settings → Deploy from `gh-pages` branch

---

### 4. Self-Hosted / VPS

**Build the project:**
```bash
npm run build
npm run start
```

Server runs on `http://localhost:3000`

**Using PM2 for production:**
```bash
npm install -g pm2
pm2 start "npm run start" --name "portfolio"
pm2 save
pm2 startup
```

**Using Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Pre-Deployment Checklist

Before deploying, verify:

- ✅ All personal links are correct
  - Email: kriaakhadija784@gmail.com
  - LinkedIn: https://www.linkedin.com/in/khadija-kriaa-579608334/
  - GitHub: https://github.com/khadijakriaa

- ✅ Project descriptions are accurate
- ✅ All images/assets load correctly locally
- ✅ Dark mode toggle works
- ✅ Mobile responsive (test on phone)
- ✅ All animations perform smoothly

---

## Post-Deployment

### Add Analytics (Optional)

**Google Analytics:**

1. Sign up at https://analytics.google.com
2. Create a property and get your Measurement ID
3. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout(...) {
  return (
    <html>
      {/* ... */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

**Vercel Analytics:**

```bash
npm install @vercel/analytics
```

Then in `app/page.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      {/* ... */}
      <Analytics />
    </>
  )
}
```

---

### Set Up Custom Domain

**Vercel:**
1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records as shown

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

**Recommended domain registrars:**
- Namecheap
- GoDaddy
- Google Domains
- Route 53 (AWS)

---

### Monitor Performance

**Vercel Analytics Dashboard:**
- Real User Monitoring (RUM)
- Core Web Vitals
- Edge Network Performance

**Lighthouse:**
```bash
npm install -g lighthouse
lighthouse https://yoursite.com --view
```

---

## Troubleshooting

### Build fails locally

```bash
rm -rf node_modules .next
npm install
npm run build
```

### Port 3000 already in use

```bash
npm run start -- -p 3001
```

### Theme not persisting

Clear browser cache or check if `next-themes` is properly initialized in `layout.tsx`

### Animations laggy on mobile

- Reduce animation duration in `app/globals.css`
- Enable hardware acceleration: add `will-change: transform` to animated elements
- Test on real device, not just emulator

---

## Environment Variables (if added later)

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your_secret
```

In Vercel/Netlify, add these in project settings → Environment Variables

---

## Monitoring & Maintenance

### Check builds regularly
- Monitor build logs on Vercel/Netlify
- Set up email notifications for failed deploys

### Keep dependencies updated
```bash
npm outdated
npm update
npm audit fix
```

### Backup your code
- Commit to GitHub regularly
- Tag releases: `git tag v1.0.0`

---

## Support

If you encounter issues during deployment:

1. Check the specific platform's documentation
2. Review build logs for error messages
3. Ensure `next.config.js` is valid
4. Verify all dependencies are installed

---

**Your portfolio is now live and ready to impress!**
