# Deploy to Netlify - Quick Guide

## Your website is ready to deploy! ✅

### What's Working:
- ✅ Supabase database connected
- ✅ Admin panel saves to cloud
- ✅ Trek page loads from cloud
- ✅ Data syncs across all devices
- ✅ Admin panel is hidden (only accessible via direct URL)

---

## Deployment Steps:

### Option 1: Deploy via Drag & Drop (Easiest)

1. **Prepare files**:
   - Delete these test files (not needed for production):
     - `test-supabase.html`
     - `test-sheets.html`
     - `admin-debug.html`
     - `debug-admin.html`
     - `simple-test.html`
     - All `.md` files except `README.md`

2. **Go to Netlify**:
   - Visit: https://app.netlify.com/drop
   - Drag your entire project folder onto the page
   - Wait for deployment (takes ~30 seconds)
   - You'll get a URL like: `https://random-name-123.netlify.app`

3. **Test your live site**:
   - Visit: `https://your-site.netlify.app`
   - Admin: `https://your-site.netlify.app/manage-trek-panel-2024.html`
   - Password: `NivantTrek@2024!`

---

### Option 2: Deploy via GitHub (Recommended for updates)

1. **Create GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nivant-trekkers.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Future updates**:
   ```bash
   git add .
   git commit -m "Update trek details"
   git push
   ```
   Netlify will auto-deploy!

---

## After Deployment:

### Update Admin Panel Data:
1. Go to: `https://your-site.netlify.app/manage-trek-panel-2024.html`
2. Login with password: `NivantTrek@2024!`
3. Update trek details
4. Click Save
5. Changes appear instantly on: `https://your-site.netlify.app/trek.html`

### Share Your Site:
- Homepage: `https://your-site.netlify.app`
- Trek Details: `https://your-site.netlify.app/trek.html`
- Admin (keep secret!): `https://your-site.netlify.app/manage-trek-panel-2024.html`

---

## Custom Domain (Optional):

1. Buy domain from: Namecheap, GoDaddy, etc.
2. In Netlify: Domain settings → Add custom domain
3. Update DNS records as shown
4. Your site will be: `https://nivanttrekkers.com`

---

## Important Notes:

- ✅ Supabase is free forever (up to 500MB database)
- ✅ Netlify is free forever (100GB bandwidth/month)
- ✅ Admin panel password: `NivantTrek@2024!`
- ✅ Admin URL: Keep it secret, don't link from main site
- ✅ Data syncs across all devices automatically

---

## Need Help?

If deployment fails, check:
1. All files are in the root folder (not in subfolders)
2. `index.html` exists in root
3. No errors in browser console (F12)

Your website is production-ready! 🚀
