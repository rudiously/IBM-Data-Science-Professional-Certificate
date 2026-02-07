# Hosting Guide for Nivant Trekkers Website

## ✅ SECURITY SETUP COMPLETE!

Your admin panel is now secured:
- **Admin File:** `manage-trek-panel-2024.html` (hidden from users)
- **Password:** `NivantTrek@2024!` (CHANGE THIS!)
- **Old admin.html:** Deleted for security

## How to Access Admin Panel

After hosting, access your admin at:
- `yourwebsite.com/manage-trek-panel-2024.html`
- Enter password: `NivantTrek@2024!`

**IMPORTANT:** Change the password in `manage-trek-panel-2024.html` (line 186) before hosting!

## Hosting Options

### 1. GitHub Pages (Free & Easy)
**Pros:** Free, easy to use, automatic HTTPS
**Cons:** Public repository (code visible), static only

**Steps:**
1. Create a GitHub account
2. Create a new repository named `nivanttrekkers`
3. Upload all your files
4. Go to Settings > Pages
5. Select main branch and save
6. Your site will be at: `https://yourusername.github.io/nivanttrekkers`

**Security:** Rename admin.html to something obscure before uploading

### 2. Netlify (Free & Recommended)
**Pros:** Free, drag-and-drop, custom domain, HTTPS, password protection available
**Cons:** None for your use case

**Steps:**
1. Go to netlify.com
2. Sign up for free
3. Drag and drop your folder
4. Done! You get a URL like `nivanttrekkers.netlify.app`

**Security:** 
- Rename admin.html OR
- Use Netlify's password protection feature for specific pages

### 3. Vercel (Free)
**Pros:** Similar to Netlify, fast, free
**Cons:** Requires GitHub/GitLab account

**Steps:**
1. Go to vercel.com
2. Sign up and connect GitHub
3. Import your repository
4. Deploy

### 4. Traditional Web Hosting (Paid but Full Control)
**Examples:** Hostinger, Bluehost, SiteGround
**Cost:** ₹100-500/month
**Pros:** Full control, can use .htaccess, custom domain included

## Recommended Setup

### ✅ Your Setup is Ready!

**What's Done:**
1. ✅ Admin renamed to `manage-trek-panel-2024.html`
2. ✅ Password changed to `NivantTrek@2024!`
3. ✅ Old admin.html deleted
4. ✅ No admin links on website

**Next Steps:**
1. **Change the password** (optional but recommended):
   - Open `manage-trek-panel-2024.html`
   - Find line 186: `const correctPassword = 'NivantTrek@2024!';`
   - Change to your own password

2. **Upload to Netlify:**
   - Go to netlify.com and sign up
   - Drag and drop your entire folder
   - Get instant hosting!

### Access Admin:
- Users visit: `yoursite.netlify.app`
- You visit: `yoursite.netlify.app/manage-trek-panel-2024.html`
- Enter password: `NivantTrek@2024!`

## Custom Domain Setup (Optional)

If you buy a domain (nivanttrekkers.com):

1. **Buy domain from:** GoDaddy, Namecheap, or Google Domains (₹500-1000/year)
2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "Add custom domain"
   - Follow DNS setup instructions
3. **Done!** Your site will be at nivanttrekkers.com

## Important Security Notes

1. **Change the admin password** in admin.html (line 186):
   ```javascript
   const correctPassword = 'nivant2024'; // Change this!
   ```

2. **Rename admin.html** to something like:
   - `manage-xyz-2024.html`
   - `secret-admin-panel.html`
   - `backend-control.html`
   - Or anything you'll remember but others won't guess

3. **Don't share the admin URL** publicly

4. **Use strong password** - mix of letters, numbers, symbols

## Quick Start (5 Minutes)

1. ✅ **Admin file renamed** - Done!
2. ✅ **Password changed** - Done! (Current: `NivantTrek@2024!`)
3. **Go to netlify.com** and sign up
4. **Drag and drop** your entire folder
5. **Done!** You're live!

Your admin will be at: `yoursite.netlify.app/manage-trek-panel-2024.html`

## Need Help?

- Netlify Docs: https://docs.netlify.com
- GitHub Pages: https://pages.github.com
- Contact me if you need assistance with setup

---

**Recommended:** Netlify + Renamed Admin File + Strong Password = Secure & Free!
