# 💒 Wedding RSVP System - Sofi & Agus

A beautiful, modern wedding website with integrated RSVP system that automatically saves responses to Google Sheets.

## ✨ Features

- 🎨 **Beautiful Wedding Theme** - Elegant stone/neutral color scheme with smooth animations
- 📝 **Dynamic RSVP Form** - Guests can add multiple attendees with validation
- 📊 **Google Sheets Integration** - Automatic data collection and storage
- 📱 **Mobile Responsive** - Perfect experience on all devices
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
│   ├── page.tsx              # Main wedding page
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
└── SETUP-GOOGLE-SHEETS.md   # Setup instructions
```

## 🎯 RSVP Form Features

### Main Attendee

- Name and last name (required)
- Email (optional)
- Form validation with Spanish error messages

### Additional Attendees

- Dynamic add/remove functionality
- Same validation as main attendee
- Visual counter showing total attendees

### Special Requests

- Optional textarea for dietary restrictions or special needs
- Character limit with validation

### Data Collection

All submissions are automatically saved to Google Sheets with:

- Timestamp (Argentina timezone)
- Main attendee information
- Total attendee count
- List of additional attendees
- Special requests

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
- **Icons**: Lucide React

## 📱 Responsive Design

The website is fully responsive with:

- Mobile-first design approach
- Touch-friendly form interactions
- Optimized layouts for all screen sizes
- Smooth animations and transitions

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

## 📊 Google Sheets Structure

The connected Google Sheet will have these columns:

- **Fecha y Hora**: Submission timestamp
- **Nombre**: Main attendee first name
- **Apellido**: Main attendee last name
- **Email**: Main attendee email (optional)
- **Total Asistentes**: Total number of attendees
- **Acompañantes**: List of additional attendees
- **Solicitudes Especiales**: Special requests or notes

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
- **Date**: August 30, 2025
- **Ceremony**: 6:00 PM at Nuestra Capilla del Señor
- **Reception**: Quinta Los Jazmines

¡Nos vemos en la boda! 🎉
