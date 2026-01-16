# Licitação ARQ - Landing Page Project

This is a landing page project that was my first paying job. While it's no longer in active use, I decided to share it here so that people can see a beginner project that was already profitable. It's built with React.js and demonstrates a complete full-stack landing page with admin functionality.

🌐 **Live Demo:** [https://daliego.github.io/licitacao_landpage_project/](https://daliego.github.io/licitacao_landpage_project/)

## 📋 Project Overview

A professional landing page for an architecture/construction company with:
- Public-facing landing page with contact forms
- Admin panel for managing content and viewing client submissions
- Firebase integration for backend services
- Responsive design with modern UI/UX

## 🚀 Technologies Used

### Frontend
- **React 18.2.0** - UI library
- **TypeScript** - Type safety
- **Vite 5.0.8** - Build tool and dev server
- **React Router DOM 6.21.3** - Client-side routing (HashRouter for GitHub Pages)
- **Styled Components 6.1.8** - CSS-in-JS styling
- **React Hook Form 7.49.3** - Form management
- **Yup 1.3.3** - Schema validation
- **React Hot Toast 2.4.1** - Toast notifications
- **React Icons 5.0.1** - Icon library

### Backend & Services
- **Firebase 10.8.0** - Backend as a Service
  - Firestore - Database
  - Authentication - User management
  - Storage - File storage
- **Formspree** - Contact form handling

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Puppeteer** - Browser automation (testing)

## 📁 Project Structure

```
src/
├── assets/                    # Static assets
│   ├── colors/               # Color palette definitions
│   ├── fonts/                # Font configurations
│   ├── images/               # Image assets
│   └── staticSizes/          # Responsive size definitions
│
├── modules/                   # Feature modules
│   ├── adminPages/           # Admin panel pages
│   │   ├── changeCardsForm/  # Card management interface
│   │   ├── clientsTables/    # Client data viewing
│   │   └── components/       # Admin-specific components
│   │
│   ├── homePage/             # Main landing page
│   │   ├── components/       # Reusable page components
│   │   │   ├── button/
│   │   │   ├── card/
│   │   │   ├── cardWithImage/
│   │   │   ├── faq/
│   │   │   ├── footer/
│   │   │   ├── formInput/
│   │   │   └── howAmI/
│   │   ├── contactMe/        # Contact section
│   │   └── form/            # Contact form
│   │
│   └── loginPage/            # Authentication page
│
└── shared/                    # Shared utilities and components
    ├── components/           # Reusable UI components
    │   ├── button/
    │   ├── image/
    │   ├── input/
    │   ├── linkInPage/
    │   ├── linkToExternalPage/
    │   └── textArea/
    │
    ├── config/               # Configuration files
    │   ├── firebaseConfig.ts # Firebase setup
    │   └── confirmConfig.ts
    │
    ├── contexts/             # React contexts
    │   └── auth_context.ts  # Authentication context
    │
    ├── hooks/                # Custom React hooks
    │   └── useAuth.ts
    │
    ├── layouts/             # Layout components
    │   └── whattsapp/       # WhatsApp integration layout
    │
    ├── models/               # TypeScript interfaces/types
    │   ├── card.ts
    │   ├── client.ts
    │   ├── user.ts
    │   └── genericModels/
    │
    ├── providers/            # Context providers
    │   └── authProvider.tsx
    │
    ├── routes/               # Routing configuration
    │   └── app_routes.tsx
    │
    ├── schemas/              # Validation schemas
    │   └── contactSchema.ts
    │
    ├── services/             # API/service layer
    │   ├── auth_service.ts
    │   ├── card_service.ts
    │   └── client_service.ts
    │
    ├── styles/               # Global styles
    │   ├── globalStyles.ts
    │   └── theme.tsx
    │
    ├── toasts/               # Toast configurations
    │   └── toasts.ts
    │
    └── utils/                # Utility functions
        ├── saveDataInStorage.ts
        ├── sleepFunction.ts
        └── textFormat.ts
```

## 🔥 Firebase Integration

This project uses Firebase for:
- **Firestore Database** - Stores cards (product/service information) and client submissions
- **Authentication** - Admin login system
- **Storage** - Image storage for cards

### Firebase Configuration

The Firebase configuration is located in `src/shared/config/firebaseConfig.ts` and uses environment variables:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_PRIVATE_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMANIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 20+ 
- npm or yarn
- Firebase project with Firestore, Authentication, and Storage enabled

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Daliego/licitacao_landpage_project.git
   cd licitacao_landpage_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_PRIVATE_KEY=your_firebase_api_key
   VITE_AUTH_DOMANIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   VITE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Add GitHub Secrets**
   - Go to Settings → Secrets and variables → Actions
   - Add all Firebase environment variables as secrets (with `VITE_` prefix)

3. **Push to master branch**
   - The workflow automatically builds and deploys on push to `master`

The workflow file is located at `.github/workflows/deploy.yml`

## 📱 Features

### Public Features
- ✅ Responsive landing page
- ✅ Contact form with validation
- ✅ FAQ section
- ✅ Product/service cards display
- ✅ WhatsApp integration
- ✅ Social media links

### Admin Features
- ✅ Protected admin routes
- ✅ Login authentication
- ✅ Card management (CRUD operations)
- ✅ Client submissions viewer
- ✅ Image upload for cards

## 🛣️ Routes

- `/` - Home page (landing page)
- `/#/login` - Admin login page
- `/#/products` - Admin card management (protected)
- `/#/clients` - Admin client viewer (protected)

Note: Uses HashRouter for GitHub Pages compatibility.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses **Styled Components** for styling with:
- Theme provider for consistent theming
- Global styles configuration
- Component-level styled components
- Responsive design patterns

## 📄 License

This project is private and was created for a client. It's shared here for educational purposes.

## 👤 Author

**Diego Araujo**
- Portfolio: [https://daliego.github.io/portfolio-case-studies/](https://daliego.github.io/portfolio-case-studies/)
- GitHub: [@Daliego](https://github.com/Daliego)

---

**Note:** This was my first paid project as a developer. While the code may not follow all advanced best practices, it demonstrates a working, profitable application built with React and modern web technologies.
