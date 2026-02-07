# How to Update Your Site on Netlify

## Method 1: Drag & Drop (Easiest - Recommended)

### Steps:
1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Log in to your account

2. **Find Your Site**
   - Click on your site name (e.g., "nivanttrekkers")

3. **Go to Deploys Tab**
   - Click on "Deploys" at the top

4. **Drag & Drop to Update**
   - Scroll down to find the drag & drop area
   - OR click "Deploy manually" button
   - Drag your ENTIRE project folder into the box
   - Wait for upload to complete (usually 10-30 seconds)

5. **Done!**
   - Your site will automatically update
   - Visit your site URL to see changes

---

## Method 2: Using Netlify CLI (For Advanced Users)

### One-time Setup:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login
```

### To Update:
```bash
# Navigate to your project folder
cd /path/to/your/project

# Deploy
netlify deploy --prod
```

---

## Method 3: Connect to GitHub (Automatic Updates)

### Setup (One Time):
1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload your files to GitHub
4. In Netlify, click "New site from Git"
5. Connect your GitHub repository

### To Update:
1. Make changes to your files
2. Upload to GitHub
3. Netlify automatically updates your site!

---

## Quick Update Checklist

Before updating, make sure you have:
- ✅ All your files in one folder
- ✅ index.html in the root
- ✅ style.css in the root
- ✅ script.js in the root
- ✅ admin.js in the root
- ✅ manage-trek-panel-2024.html in the root
- ✅ trek.html in the root
- ✅ image.png in the root
- ✅ Any other images you've added

---

## Common Issues & Solutions

### Issue: Site not updating?
**Solution:** 
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 1-2 minutes for Netlify to process
- Check the "Deploys" tab for any errors

### Issue: Admin panel not working?
**Solution:**
- Make sure `manage-trek-panel-2024.html` is in the root folder
- Access it at: `yoursite.com/manage-trek-panel-2024.html`

### Issue: Images not showing?
**Solution:**
- Make sure image files are in the root folder
- Check file names match exactly (case-sensitive)

---

## Pro Tips

1. **Always test locally first** - Open index.html in your browser before uploading

2. **Keep a backup** - Save a copy of your folder before making big changes

3. **Use the same folder** - Always upload the complete folder, not individual files

4. **Check the preview** - Netlify shows a preview URL before going live

5. **Bookmark your admin URL** - Save `yoursite.com/manage-trek-panel-2024.html`

---

## Need Help?

- Netlify Support: https://answers.netlify.com
- Netlify Docs: https://docs.netlify.com
- Your admin password: Check ADMIN_ACCESS.txt

---

**Remember:** Every time you drag & drop, it replaces the entire site with your new version!
