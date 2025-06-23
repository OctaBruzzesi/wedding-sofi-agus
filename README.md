# 💒 Wedding RSVP System - Sofi & Agus

A beautiful, modern wedding website with integrated RSVP system that automatically saves responses to Google Sheets.

## ✨ Features

- 🎨 **Beautiful Wedding Theme** - Elegant stone/neutral color scheme with smooth animations
- 📝 **Dynamic RSVP Form** - Guests can add multiple attendees with validation
- 📊 **Google Sheets Integration** - Automatic data collection and storage
- 📱 **Mobile Responsive** - Perfect experience on all devices
- 🚌 **Transport Coordination** - Guests can request transport from CABA to venue
- 💳 **Gift Information** - Bank account details and cash gift instructions
- 👔 **Dress Code Guide** - Visual inspiration with modal galleries
- 📱 **Contact Collection** - Phone numbers instead of emails for better communication
- 🇦🇷 **Localized** - Spanish language with Argentina timezone
- ⚡ **Modern Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS
- 🎯 **Form Validation** - Zod schema validation with helpful error messages
- 🔔 **Toast Notifications** - User feedback for form submissions
- 🛡️ **Error Handling** - Robust error handling and fallbacks

## 🚀 Quick Start

1. **Clone and Install**

   ```bash
   git clone <repository-url>
   cd wedding-sofi-agus
   pnpm install
   ```

2. **Install Google Sheets Integration**

   ```bash
   pnpm add googleapis
   ```

3. **Set up Google Sheets** (see [SETUP-GOOGLE-SHEETS.md](./SETUP-GOOGLE-SHEETS.md))

4. **Run Development Server**

   ```bash
   pnpm dev
   ```

5. **Visit the site**
   - Main wedding page: [http://localhost:3000](http://localhost:3000)
   - Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📋 Project Structure

```
wedding-sofi-agus/
├── app/
│   ├── page.tsx              # Main wedding page with modals
│   ├── admin/page.tsx        # Admin panel
│   ├── api/
│   │   ├── rsvp/route.ts     # RSVP submission endpoint
│   │   └── test-sheets/route.ts # Google Sheets test endpoint
│   └── layout.tsx            # Root layout with Toaster
├── components/
│   ├── rsvp-form.tsx         # Main RSVP form component
│   ├── rsvp-dialog.tsx       # Modal wrapper for form
│   ├── admin-panel.tsx       # Admin testing interface
│   └── ui/                   # Shadcn/ui components
├── lib/
│   ├── schemas/
│   │   └── rsvp-schema.ts    # Zod validation schemas
│   ├── utils/
│   │   └── date-formatter.ts # Date utilities
│   └── google-sheets.ts      # Google Sheets integration
├── types/
│   └── rsvp.ts              # TypeScript interfaces
├── public/                   # Images and assets
│   ├── Fondo*.jpg/.webp      # Background images
│   ├── Pareja*.jpeg          # Couple photos
│   ├── Trafi*.jpeg           # Dress code inspiration
│   └── *.jpeg                # Other wedding images
└── SETUP-GOOGLE-SHEETS.md   # Setup instructions
```

## 🎯 RSVP Form Features

### Main Attendee

- Name and last name (required)
- Phone number (optional) - *Updated: Changed from email to phone for better communication*
- Transport needs from CABA
- Form validation with Spanish error messages

### Additional Attendees

- Dynamic add/remove functionality
- Same validation as main attendee
- Individual transport needs selection
- Visual counter showing total attendees

### Transport Information

- Transport from Plaza Italia, Palermo to venue
- Departure: 3:30 PM (arrive 15 min early)
- Return: 3:30 AM from venue
- Free service with detailed information display

### Special Requests

- Optional textarea for dietary restrictions or special needs
- Character limit with validation

### Data Collection

All submissions are automatically saved to Google Sheets with:

- Timestamp (Argentina timezone)
- Main attendee information
- Phone numbers instead of emails
- Transport requirements per person
- Total attendee count
- List of additional attendees
- Special requests

## 🎁 Gift & Payment Features

### Bank Transfer Information
- Uruguay USD account (Banco Itaú - Sofia Plager)
- Argentina USD account (Santander - Diego Serra) 
- Copy-to-clipboard functionality for account details
- Visual modal with clear banking information

### Cash Gift Instructions
- 📧 **New Feature**: Contact information for cash gifts
- Direct instructions to find Diego (Agus's father) for cash donations
- Elegant presentation with mail icon for visual appeal

## 👔 Dress Code System

### Visual Inspiration Modal
- Formal attire for ceremony start
- Comfortable clothes for dancing
- Visual examples with high-quality images
- Specific instructions for men (black t-shirt)
- Shoe change recommendations

## 🔧 Admin Panel

Access the admin panel at `/admin` to:

- Test Google Sheets connection
- View setup instructions
- Check system status
- Debug configuration issues

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS with custom wedding theme
- **UI Components**: Shadcn/ui
- **Form Handling**: React Hook Form + Zod validation
- **Backend Integration**: Google Sheets API
- **Notifications**: Sonner toast notifications
- **Icons**: Lucide React (Mail, Gift, Bus, Calendar, etc.)

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first design approach
- Touch-friendly form interactions
- Optimized layouts for all screen sizes
- Smooth animations and transitions
- Modal dialogs optimized for mobile viewing

## 🌍 Localization

- Spanish language throughout
- Argentina timezone for timestamps
- Local date formatting
- Cultural considerations for wedding traditions

## 🔒 Security & Privacy

- Environment variables for sensitive data
- Input validation and sanitization
- Error handling without exposing sensitive information
- Secure Google Sheets API integration
- Phone number validation with international format support

## 📊 Google Sheets Structure

The connected Google Sheet will have these columns:

- **Fecha y Hora**: Submission timestamp
- **Nombre**: Main attendee first name
- **Apellido**: Main attendee last name
- **Número de Celular**: Phone number (replaces email)
- **Solicitudes Especiales**: Special requests or notes
- **Necesita Transporte**: Yes/No for transport needs

Each attendee (main + additional) gets their own row with individual transport preferences.

## 🚌 Transport Management

The system tracks:
- Who needs transport from CABA
- Total transport count in real-time
- Individual preferences per attendee
- Detailed pickup/return information

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- Any platform supporting Node.js

Remember to set environment variables in your deployment platform:

- `GOOGLE_SERVICE_ACCOUNT_KEY`
- `GOOGLE_SHEET_ID`

## 📝 License

This project is created for Sofi & Agus's wedding. Feel free to use as inspiration for your own wedding website!

## 💝 Wedding Details

- **Couple**: Sofi & Agus
- **Date**: Saturday, August 30, 2025
- **Ceremony**: 5:00 PM
- **Reception**: 6:30 PM
- **Venue**: Espacio PK Campo, Capilla del Señor, Prov. de Buenos Aires
- **Transport**: Available from Plaza Italia, Palermo (CABA)

### Recent Updates

- ✅ **Phone Collection**: Changed email field to phone number for better guest communication
- ✅ **Cash Gift Instructions**: Added contact information for cash donations with mail icon
- ✅ **Transport Integration**: Full transport coordination system with detailed information
- ✅ **Visual Enhancements**: Added icons throughout the interface for better UX
- ✅ **Data Structure**: Updated Google Sheets integration for phone numbers

¡Nos vemos en la boda! 🎉
