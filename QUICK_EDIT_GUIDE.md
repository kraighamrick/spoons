# 🚀 Quick Edit Guide

## How to Edit Your Portfolio Content Instantly

### 📝 **Step 1: Edit Content File**
Open `src/data/content.ts` and edit any of these values:

```typescript
export const siteContent = {
  // Hero Section
  hero: {
    name: "Kraig Hamrick",           // Your name
    subtitle: "creative portfolio",  // Subtitle under your name
    title: "UX/UI - Full Stack Server Admin", // Your job title
    location: "Florida/Nevada"       // Your location
  },

  // Contact Information
  contact: {
    email: "Kraighamrick@gmail.com", // Your email
    phone: "702-637-6227",          // Your phone
    location: "Florida/Nevada"       // Your location
  },

  // Social Links
  social: {
    instagram: "#",  // Your Instagram URL
    vimeo: "#",      // Your Vimeo URL
    twitter: "#"     // Your Twitter URL
  }
}
```

### 🔄 **Step 2: See Changes Instantly**
1. **Development**: Changes appear immediately in your browser
2. **Production**: Run `npm run build` to update the live site

### 📱 **Step 3: Deploy Changes**
```bash
git add .
git commit -m "Update portfolio content"
git push
```

## 🎯 **What You Can Edit:**

### ✅ **Easy to Edit:**
- ✅ Your name and title
- ✅ Contact information
- ✅ Social media links
- ✅ Bio text
- ✅ Footer content

### ⚠️ **Requires Developer:**
- ⚠️ Adding new sections
- ⚠️ Changing layout/design
- ⚠️ Adding new features
- ⚠️ Complex animations

## 🛠️ **Advanced Options:**

### **Option 1: CMS Integration**
- **Strapi** - Free headless CMS
- **Sanity** - Real-time collaboration
- **Contentful** - Enterprise-grade

### **Option 2: Markdown Files**
- Edit `.md` files for content
- Automatic builds on changes
- Version control friendly

### **Option 3: Admin Panel**
- Built-in admin interface
- Visual content editor
- No code required

## 📞 **Need Help?**
- **Simple edits**: Use the content file above
- **Complex changes**: Contact your developer
- **New features**: Consider CMS integration

---

**💡 Pro Tip**: Keep a backup of your content file before making major changes!
