# Static Site Generation (SSG) Deployment Guide

This guide covers deploying your Next.js portfolio as a static site.

## ⚠️ Important Note About Contact Form

Your contact form uses an API route (`/api/contact`), which requires a server. For true static export, you have two options:

**Option A: Use Vercel (Recommended)** - Supports API routes + SSG automatically
**Option B: True Static Export** - Requires modifying contact form to use a third-party service

---

## Option A: Deploy to Vercel (Recommended - Easiest)

Vercel supports Next.js API routes and static generation together. This is the easiest option.

### Step 1: Prepare Your Code

```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel

#### Method 1: Via Vercel Website (Easiest)

1. **Sign up/Login:**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up or login with your GitHub account

2. **Import Project:**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   - In project settings → Environment Variables
   - Add: `RESEND_API_KEY` = `your_resend_api_key`
   - Select all environments (Production, Preview, Development)

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at `your-project.vercel.app`

#### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project or create new
# - Add RESEND_API_KEY when prompted
# - Deploy!

# For production deployment:
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update Resend `from` address to use your domain

### ✅ Advantages:
- ✅ API routes work automatically
- ✅ Automatic HTTPS
- ✅ Free SSL certificates
- ✅ Automatic deployments on Git push
- ✅ Preview deployments for PRs
- ✅ Built-in CDN
- ✅ Generous free tier

---

## Option B: True Static Export (For Netlify, GitHub Pages, etc.)

If you want to deploy to a platform that only supports static files, you need to modify the contact form.

### Step 1: Update Next.js Config for Static Export

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove API routes from build
  trailingSlash: true,
}

module.exports = nextConfig
```

### Step 2: Update Contact Form to Use Third-Party Service

Since API routes won't work, you have two options:

#### Option 2A: Use Formspree (Easiest)

1. **Sign up at Formspree:**
   - Go to [https://formspree.io](https://formspree.io)
   - Create a free account (50 submissions/month free)
   - Create a new form
   - Copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

2. **Update ContactModal.tsx:**
   Replace the fetch call in `handleSubmit`:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }),
});
```

#### Option 2B: Use EmailJS (Client-side only)

1. **Sign up at EmailJS:**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Create a free account
   - Set up email service
   - Get your service ID, template ID, and public key

2. **Install EmailJS:**
```bash
npm install @emailjs/browser
```

3. **Update ContactModal.tsx** to use EmailJS

### Step 3: Build Static Site

```bash
# Build static site
npm run build

# This creates an 'out' folder with all static files
```

### Step 4: Deploy Static Files

#### Deploy to Netlify:

1. **Via Netlify Dashboard:**
   - Go to [https://netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `out` folder
   - Your site is live!

2. **Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --dir=out --prod
```

#### Deploy to GitHub Pages:

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json scripts:**
```json
{
  "scripts": {
    "export": "next build",
    "deploy": "npm run export && gh-pages -d out"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

#### Deploy to Other Static Hosts:

Upload the contents of the `out` folder to:
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Any static file hosting service

---

## Pre-Deployment Checklist

### For Vercel (Option A):
- [ ] Code pushed to GitHub
- [ ] `RESEND_API_KEY` added to Vercel environment variables
- [ ] Domain configured (optional)
- [ ] Test contact form after deployment

### For Static Export (Option B):
- [ ] Updated `next.config.js` with `output: 'export'`
- [ ] Contact form updated to use Formspree/EmailJS
- [ ] Built static site (`npm run build`)
- [ ] Tested locally (`npx serve out`)
- [ ] Deployed `out` folder contents

---

## Testing Your Deployment

1. **Test all sections:**
   - [ ] Home section loads
   - [ ] Experience timeline scrolls
   - [ ] Projects display correctly
   - [ ] Skills section shows
   - [ ] Achievements display
   - [ ] Navigation works
   - [ ] Theme toggle works

2. **Test contact form:**
   - [ ] Form validation works
   - [ ] Success message appears
   - [ ] Email received (check spam folder)

3. **Test responsiveness:**
   - [ ] Mobile view works
   - [ ] Tablet view works
   - [ ] Desktop view works

4. **Test performance:**
   - [ ] Run Lighthouse audit
   - [ ] Check page load speed
   - [ ] Verify images are optimized

---

## Recommended: Vercel Deployment

For your portfolio with a contact form, **Vercel is the best choice** because:
- ✅ Zero configuration needed
- ✅ API routes work automatically
- ✅ Best Next.js integration
- ✅ Free tier is generous
- ✅ Automatic deployments
- ✅ Built-in analytics (optional)

---

## Troubleshooting

### Build Errors:
- Check Node.js version (should be 18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Contact Form Not Working:
- Verify API key is set correctly
- Check browser console for errors
- Verify Resend account is active
- Check email spam folder

### Images Not Loading:
- For static export, ensure `images.unoptimized: true` in config
- Check image paths are correct
- Verify images are in `public` folder

---

## Post-Deployment

1. **Set up custom domain** (if desired)
2. **Configure DNS** records
3. **Update Resend domain** for production emails
4. **Test everything** thoroughly
5. **Monitor analytics** (optional)

---

## Quick Start Commands

### Vercel (Recommended):
```bash
npm i -g vercel
vercel
# Follow prompts, add RESEND_API_KEY
vercel --prod
```

### Static Export:
```bash
# Update next.config.js first
npm run build
# Deploy the 'out' folder to your hosting service
```

---

**Need help?** Check the error messages and refer to the platform-specific documentation.

