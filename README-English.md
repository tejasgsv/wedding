# 💕 Beautiful Wedding Invitation Website

A professional and attractive wedding invitation website ready to use!

## ✨ Features

- **Responsive Design** - Perfect on mobile, tablet, desktop
- **Countdown Timer** - Live countdown to wedding date
- **Background Music** - Romantic music with toggle control
- **Smooth Animations** - Beautiful scroll animations with AOS library
- **RSVP Form** - Guest confirmation system
- **Multiple Sections**:
  - Hero section with couple names
  - Events (Haldi, Mehndi, Sangeet, Wedding, Reception)
  - Photo Gallery
  - RSVP Form
  - Contact & Social Links

## 🛠️ Tech Stack

- **HTML5** - Structure
- **TailwindCSS** - Styling & responsive design
- **JavaScript** - Interactive features
- **AOS.js** - Scroll animations
- **Font Awesome** - Icons

## 🚀 Setup Instructions

### 1. Files Ready:
- `index-english.html` - Main English website
- `styles.css` - Custom styling
- `script.js` - JavaScript functionality
- `gallery.html` - Photo gallery page

### 2. Customize:

#### Change Names & Date:
```html
<!-- In index-english.html line 47-48 -->
<span class="text-pink-600">Priya</span> & <span class="text-orange-500">Rahul</span>

<!-- Change date line 52 -->
<p class="text-2xl font-bold text-pink-600">March 25, 2025</p>
```

#### Update Wedding Date in JavaScript:
```javascript
// In script.js line 8
const weddingDate = new Date('2025-03-25T19:00:00').getTime();
```

### 3. Add Photos:

To add photos to gallery:
1. Create `images` folder
2. Upload photos
3. Update HTML with image sources:

```html
<img src="images/photo1.jpg" alt="Wedding Photo" class="w-full h-full object-cover">
```

### 4. Background Music:

To add music:
1. Add `wedding-music.mp3` file
2. Or use YouTube link
3. Update audio tag in HTML

## 🌐 Hosting Options

### Free Hosting:
1. **Netlify** (Recommended):
   - Go to Netlify.com
   - Create account
   - Drag & drop all files
   - Instant live website!

2. **GitHub Pages**:
   - Create GitHub repository
   - Upload files
   - Enable Pages in Settings

3. **Vercel**:
   - Go to Vercel.com
   - Import project

## 📱 Mobile Responsive

Website is automatically mobile-friendly:
- Touch-friendly buttons
- Responsive images
- Mobile navigation
- Optimized fonts

## 🎨 Color Themes

Current theme: Pink + Orange + Gold

To change colors, update in `styles.css`:
```css
/* Pink theme */
.text-pink-600 { color: #your-color; }

/* Orange theme */  
.text-orange-500 { color: #your-color; }
```

## 🎉 Launch Checklist

- [ ] Update names
- [ ] Update dates  
- [ ] Add photos
- [ ] Add music file
- [ ] Test RSVP form
- [ ] Check on mobile
- [ ] Test all links
- [ ] Upload to hosting

## 💡 Pro Tips

1. **Performance**: Compress images (use TinyPNG)
2. **SEO**: Add meta tags
3. **Analytics**: Add Google Analytics
4. **Backup**: Keep file backups
5. **Testing**: Test on different devices

---

**Congratulations! 🎊 Your beautiful wedding website is ready!**

Share with everyone and enjoy! 💕