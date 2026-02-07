# Quick Reference - Nivant Trekkers

## 🚀 5-Minute Setup

1. **Supabase:** https://supabase.com → Create project
2. **SQL Editor:** Paste SQL from `SUPABASE_SQL_COMMANDS.sql` → Run
3. **Get Keys:** Settings → API → Copy URL & anon key
4. **Update:** Edit `supabase-config.js` with your keys
5. **Deploy:** Drag folder to Netlify

---

## 📁 File Structure

```
nivant-trekkers/
├── index.html                      # Home page (Marathi)
├── trek.html                       # Trek details page (English)
├── manage-trek-panel-2024.html     # Admin panel (English)
├── style.css                       # All styles
├── script.js                       # Frontend logic
├── admin.js                        # Admin panel logic
├── supabase-config.js              # ⚠️ ADD YOUR KEYS HERE
├── image.png                       # Background image
└── README.md                       # Documentation
```

---

## 🔑 Important URLs

| What | URL |
|------|-----|
| **Your Site** | `https://yoursite.netlify.app` |
| **Admin Panel** | `https://yoursite.netlify.app/manage-trek-panel-2024.html` |
| **Supabase Dashboard** | `https://app.supabase.com` |
| **Netlify Dashboard** | `https://app.netlify.com` |

---

## 🔐 Credentials

### Admin Panel
- **URL:** `/manage-trek-panel-2024.html`
- **Password:** `NivantTrek@2024!`
- **Change:** Line 186 in admin file

### Supabase
- **Project URL:** In `supabase-config.js`
- **Anon Key:** In `supabase-config.js`
- **Get from:** Supabase → Settings → API

---

## 📝 SQL Commands (Copy-Paste)

```sql
-- Create table
CREATE TABLE trek_data (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    data JSONB NOT NULL
);

-- Enable RLS
ALTER TABLE trek_data ENABLE ROW LEVEL SECURITY;

-- Allow public access
CREATE POLICY "public_read" ON trek_data FOR SELECT USING (true);
CREATE POLICY "public_insert" ON trek_data FOR INSERT WITH CHECK (true);
CREATE POLICY "public_update" ON trek_data FOR UPDATE USING (true);
```

---

## 🛠️ Common Tasks

### Update Trek Details
1. Go to admin panel
2. Login with password
3. Edit fields
4. Click "Save All Changes"

### Upload to Netlify
1. Go to netlify.com
2. Drag entire folder
3. Wait 30 seconds
4. Done!

### Check Database
1. Go to Supabase dashboard
2. Click "Table Editor"
3. Click "trek_data"
4. See your data

### Change Password
1. Open `manage-trek-panel-2024.html`
2. Find line 186
3. Change `'NivantTrek@2024!'` to your password
4. Save and re-upload

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **Admin not loading** | Check URL has `.html` at end |
| **Data not saving** | Check browser console (F12) for errors |
| **Wrong password** | Check line 186 in admin file |
| **Supabase error** | Verify keys in `supabase-config.js` |
| **Images not showing** | Check `image.png` is uploaded |
| **Site not updating** | Clear cache (Ctrl+Shift+R) |

---

## 📞 Contact Info

**Default contacts in code:**
- Email: nivanttrekkers@gmail.com
- Phone: 9075760770
- WhatsApp: https://chat.whatsapp.com/Cz991ddpp1yCvbHKctLlkR
- Instagram: @nivanttrekkers

**Update in admin panel or edit `script.js`**

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `SUPABASE_COMPLETE_SETUP.md` | Full setup guide with explanations |
| `SUPABASE_QUICK_START.md` | 10-minute quick start |
| `SUPABASE_SQL_COMMANDS.sql` | SQL commands to copy-paste |
| `SUPABASE_FLOW_DIAGRAM.md` | Visual architecture diagrams |
| `HOSTING_GUIDE.md` | Netlify hosting instructions |
| `NETLIFY_UPDATE_GUIDE.md` | How to update your site |
| `ADMIN_ACCESS.txt` | Admin credentials |
| `QUICK_REFERENCE.md` | This file! |

---

## ✅ Checklist

### Initial Setup
- [ ] Created Supabase account
- [ ] Created project
- [ ] Ran SQL commands
- [ ] Got API keys
- [ ] Updated `supabase-config.js`
- [ ] Tested locally
- [ ] Uploaded to Netlify
- [ ] Tested admin panel
- [ ] Tested trek page

### Before Going Live
- [ ] Changed admin password
- [ ] Added real trek details
- [ ] Uploaded trek images
- [ ] Added pickup points
- [ ] Added itinerary
- [ ] Tested on mobile
- [ ] Tested on different browsers
- [ ] Shared with friends for testing

### Regular Maintenance
- [ ] Update trek details monthly
- [ ] Check Supabase usage
- [ ] Monitor Netlify bandwidth
- [ ] Backup data occasionally
- [ ] Update contact info if changed

---

## 🎯 Key Features

✅ **Marathi homepage** - Cultural touch
✅ **English trek pages** - Wider audience
✅ **Admin panel** - Easy content management
✅ **Cloud database** - Never lose data
✅ **Mobile responsive** - Works on all devices
✅ **Password protected** - Secure admin
✅ **Free hosting** - Netlify + Supabase
✅ **Real-time updates** - Instant sync
✅ **Professional design** - Maroon & kesari theme
✅ **Contact integration** - WhatsApp, Instagram, Email

---

## 💡 Pro Tips

1. **Bookmark admin URL** - Easy access
2. **Use strong password** - Security first
3. **Test before sharing** - Avoid embarrassment
4. **Backup regularly** - Export from Supabase
5. **Monitor usage** - Check Supabase dashboard
6. **Compress images** - Faster loading
7. **Update regularly** - Keep content fresh
8. **Engage users** - Respond to inquiries
9. **Share on social** - Promote your treks
10. **Collect feedback** - Improve continuously

---

## 🆘 Emergency Contacts

**If something breaks:**
1. Check browser console (F12)
2. Check Supabase logs
3. Check Netlify deploy logs
4. Restore from backup
5. Re-run SQL setup if needed

**Lost admin password?**
- Edit `manage-trek-panel-2024.html` line 186
- Upload to Netlify again

**Lost Supabase keys?**
- Go to Supabase → Settings → API
- Copy keys again
- Update `supabase-config.js`

**Site completely broken?**
- Keep a backup of working folder
- Re-upload backup to Netlify
- Check all files are present

---

## 🎉 You're All Set!

Your website is:
- ✅ Live on the internet
- ✅ Connected to cloud database
- ✅ Easy to update
- ✅ Professional looking
- ✅ Mobile friendly
- ✅ Free to run

**Now go add some amazing treks and share with the world!** 🏔️

---

*Last updated: February 2024*
*For support: Check documentation files or browser console*
