# Configuration Guide

## 🔍 Missing Information to Update

Before launching the website, you need to find and update the following information:

### 1. Phone Number

**Where to find:** Google Maps listing for "Small Wonders" at the Indiranagar address

**Files to update:**

- `components/Hero.tsx` (line with `wa.me/919876543210`)
- `components/Contact.tsx` (phone number display and tel: link)
- `components/WhatsAppChat.tsx` (phoneNumber variable)

**Search for:** `919876543210` or `+919876543210`

### 2. Email Address

**Where to find:** Practo profile or Justdial listing

**Files to update:**

- `components/Contact.tsx` (email display and mailto: link)

**Search for:** `info@smallwondersclinic.com`

### 3. Verify Address

**Current address in website:**

```
Ground Floor, 627, 11th Main Rd, 7th Cross,
HAL 2nd Stage, Indiranagar,
Bengaluru, Karnataka 560038
```

**Verify this matches:** Google Maps listing

## 🔧 How to Update

### Method 1: Search and Replace

1. Open VS Code
2. Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)
3. Search for the placeholder (e.g., `919876543210`)
4. Replace all instances with the actual number

### Method 2: Manual Update

Open each file listed above and update the values manually.

## 📞 Contact Information Checklist

- [ ] Phone number updated in Hero component
- [ ] Phone number updated in Contact component
- [ ] Phone number updated in WhatsApp Chat component
- [ ] Email address updated in Contact component
- [ ] Address verified and corrected if needed
- [ ] Google Maps link tested and working
- [ ] WhatsApp link tested and working

## 🌐 Domain Configuration

**Current domain:** smallwondersclinic.com (suspended)

**To configure:**

1. Renew or register the domain
2. Point DNS to your hosting provider (e.g., Vercel)
3. Update any hardcoded domain references if needed

## 🚀 Pre-Launch Checklist

- [ ] All contact information updated
- [ ] Test all phone/email/WhatsApp links
- [ ] Test Google Maps directions link
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Verify SEO metadata
- [ ] Test form submissions (if any)
- [ ] Check accessibility compliance

## 📊 Analytics Setup (Optional)

Consider adding:

- Google Analytics
- Facebook Pixel
- Google Search Console
- Hotjar or similar heatmap tool

## 🔒 Security

- [ ] Enable HTTPS
- [ ] Set up security headers
- [ ] Configure CSP (Content Security Policy)
- [ ] Add rate limiting for forms

---

**Need help?** Contact [Zorivo](https://portfolio-zorivo.vercel.app)
