# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio to production.

## Pre-Deployment Checklist

Before deploying, ensure you have completed the following:

### 1. Update Personal Information (REQUIRED)

**File: `src/components/Contact.tsx`**
- Line 85: Replace `your.email@example.com` with your actual email
- Line 95: Replace `https://github.com/yourusername` with your GitHub URL
- Line 105: Replace `https://linkedin.com/in/yourusername` with your LinkedIn URL

**File: `src/components/Footer.tsx`**
- Line 62: Replace `https://github.com/yourusername` with your GitHub URL
- Line 70: Replace `https://linkedin.com/in/yourusername` with your LinkedIn URL
- Line 78: Replace `your.email@example.com` with your actual email

**File: `src/data/projects.ts`**
- Replace all 3 placeholder projects with your actual work
- Add real GitHub repository URLs
- Add live demo URLs where available
- Add project images (optional)

### 2. Test Production Build Locally

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to verify the production build works correctly.

### 3. Verify No Localhost URLs

Check that there are no localhost URLs in the code:
- Open Graph URLs in `index.html` should be empty (will be updated after deployment)
- No development-only configurations

### 4. Optimize Images (Recommended)

Current sizes:
- logo-z.jpg: ~1.8MB
- ziad.png: ~248KB

Recommended tools:
- [TinyPNG](https://tinypng.com/) - Free image compression
- [ImageOptim](https://imageoptim.com/) - Mac optimization tool
- [Squoosh](https://squoosh.app/) - Google's web-based optimizer

Target sizes:
- Logo: < 100KB
- Profile: < 150KB

## Deployment Methods

### Method 1: Vercel (Recommended)

Vercel provides the easiest deployment experience with automatic HTTPS, CDN, and previews.

#### Step 1: Prepare Git Repository

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Create main branch
git branch -M main

# Add remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and use the `vercel.json` configuration
6. Click "Deploy"

#### Step 3: Configure Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., `ziad.dev`)
3. Follow the DNS instructions provided by Vercel

#### Step 4: Update Meta Tags

After deployment, update the Open Graph URLs in `index.html`:
- Line 14: Replace empty `og:url` with your Vercel domain
- Line 21: Replace empty `twitter:url` with your Vercel domain

Example:
```html
<meta property="og:url" content="https://your-portfolio.vercel.app/" />
<meta property="twitter:url" content="https://your-portfolio.vercel.app/" />
```

Commit and push the changes.

### Method 2: Netlify

Netlify is another excellent option with similar features.

#### Step 1: Prepare Git Repository

Same as Vercel Step 1 above.

#### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Click "Add new site" → "Import from Git"
4. Select your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

#### Step 3: Configure SPA Routing

1. In Netlify site settings, go to "Build & deploy" → "Redirects"
2. Add this redirect rule:
   ```
   /*    /index.html   200
   ```
3. Save changes

#### Step 4: Update Meta Tags

Same as Vercel Step 4 above, using your Netlify domain.

### Method 3: GitHub Pages

Free hosting directly from GitHub, but with fewer features.

#### Step 1: Install gh-pages

```bash
npm install -D gh-pages
```

#### Step 2: Add Deploy Script

Add to `package.json` scripts:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

#### Step 3: Build and Deploy

```bash
npm run build
npm run deploy
```

Your site will be available at: `https://yourusername.github.io/portfolio-profissional/`

#### Step 4: Update Meta Tags

Same as Vercel Step 4, using your GitHub Pages URL.

## Post-Deployment Verification

After deployment, verify the following:

### 1. Basic Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Mobile menu opens and closes
- [ ] Contact form validation works

### 2. Visual Quality
- [ ] Images load correctly
- [ ] Animations play smoothly
- [ ] Responsive on mobile
- [ ] Responsive on tablet
- [ ] Responsive on desktop

### 3. Performance
- [ ] Page loads quickly
- [ ] No console errors
- [ ] Lighthouse score (optional but recommended)

### 4. SEO
- [ ] Title appears correctly in browser tab
- [ ] Meta description is present
- [ ] Open Graph tags work (test with Facebook sharing debugger)
- [ ] Twitter Card tags work (test with Twitter Card Validator)

### 5. Security
- [ ] HTTPS is enabled
- [ ] No mixed content warnings
- [ ] Security headers are present

## Environment Variables

Currently, this portfolio does not require any environment variables. If you add features that need them:

1. Copy `.env.example` to `.env.local`
2. Add your variables:
   ```
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_FORM_ENDPOINT=https://api.example.com/contact
   ```
3. Update deployment platform settings to include these variables

## Continuous Deployment

### Vercel Automatic Deployments

Vercel automatically deploys when you push to the main branch. To enable:

1. In Vercel project settings, go to "Git"
2. Ensure "Deploy Hooks" is enabled
3. Push changes to GitHub
4. Vercel will automatically build and deploy

### Netlify Automatic Deployments

Netlify also supports automatic deployments:

1. In Netlify site settings, go to "Build & deploy" → "Continuous Deployment"
2. Ensure "Build status" is enabled
3. Push changes to GitHub
4. Netlify will automatically build and deploy

## Troubleshooting

### Build Fails

**Error: "Module not found"**
- Run `npm install` to ensure all dependencies are installed
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Error: TypeScript compilation fails**
- Check TypeScript errors in terminal
- Fix type errors in components
- Ensure `vite-env.d.ts` exists

### Deployment Fails

**Vercel: Build fails**
- Check Vercel deployment logs
- Ensure `package.json` has correct build scripts
- Verify `vercel.json` is in the root directory

**Netlify: Build fails**
- Check Netlify deployment logs
- Verify build command is `npm run build`
- Verify publish directory is `dist`

**GitHub Pages: Deploy fails**
- Ensure `gh-pages` is installed
- Check that you have push permissions to the repository
- Verify the repository name matches the folder name

### Images Don't Load

- Check image paths in components
- Ensure images are in `src/assets/`
- Verify images are committed to Git
- Check browser console for 404 errors

### Contact Form Not Working

- The current form is client-side only (logs to console)
- To make it functional, you need to:
  1. Set up a backend API endpoint
  2. Update the form submission in `Contact.tsx`
  3. Add the API URL to environment variables

## Performance Optimization

### Current Build Sizes

- HTML: ~2.5 kB (gzip: 0.86 kB)
- CSS: ~25 kB (gzip: 5.1 kB)
- JavaScript: ~900 kB total (gzip: ~220 kB)
- Images: ~2 MB (can be optimized)

### Further Optimization Options

1. **Image Optimization**
   - Compress images using TinyPNG
   - Convert to WebP format
   - Use responsive images with `srcset`

2. **Font Optimization**
   - Subset the Inter font to only needed characters
   - Use `font-display: swap` for faster rendering

3. **Code Splitting**
   - Already implemented with lazy loading
   - Can further split if needed

4. **CDN**
   - Vercel and Netlify provide CDN automatically
   - Consider Cloudflare for custom domains

## Maintenance

### Regular Updates

- Keep dependencies updated: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update projects and contact information as needed

### Monitoring

- Set up uptime monitoring (UptimeRobot, Pingdom)
- Monitor performance (Lighthouse CI, WebPageTest)
- Check for broken links regularly

## Support

If you encounter issues:

1. Check the [README.md](README.md) for general information
2. Review Vite documentation: https://vitejs.dev/
3. Review React documentation: https://react.dev/
4. Check deployment platform documentation

## Next Steps

After successful deployment:

1. Share your portfolio link on social media
2. Add to your LinkedIn profile
3. Include in your GitHub README
4. Update your resume with the link
5. Regularly update with new projects

---

**Congratulations on deploying your professional portfolio!** 🎉
