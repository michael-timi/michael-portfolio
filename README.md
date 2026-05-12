Michael's Portfolio
===================

A modern, responsive personal portfolio site for Michael, built with Next.js and React.  
It showcases projects, experience, and skills, and includes a polished contact flow for getting in touch.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Animations**: Framer Motion
- **Services**: Firebase

## Features

- **Home / hero section** highlighting Michael and key links.
- **Projects showcase** with space for case studies and live/demo links.
- **About / skills** sections to summarize experience and strengths.
- **Contact section** with a form and validation for reaching out quickly.
- **Responsive design** that works well on desktop and mobile.
- **Smooth animations** for an engaging, modern feel.

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm (comes with Node.js)

### Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Production build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Available Scripts

This project defines the following npm scripts:

- `npm run dev` – Start the Next.js development server.
- `npm run build` – Create an optimized production build.
- `npm start` – Start the Next.js production server.
- `npm run lint` – Run ESLint checks.

## Environment Variables

Environment variables are loaded from `.env*` files.  
By default, any secrets should be stored in a local `.env.local` file that is **not committed** to git.

This repo includes `.env.local.example` as a template; copy it to `.env.local` and fill in any required values:

```bash
cp .env.local.example .env.local
```

## Deployment

The app is well-suited for deployment on platforms like Firebase Hosting, Vercel, Netlify, or any environment that can run a Node.js server.

### Firebase Hosting (recommended for this setup)

This project is preconfigured for Firebase Hosting using the Firebase web frameworks integration.

1. **Create a Firebase project**
   - Go to the Firebase console and create a new project.
   - Note your **project ID** (e.g. `my-portfolio-site`).

2. **Configure Firebase CLI**
   - Install the CLI if you don’t have it:
     ```bash
     npm install -g firebase-tools
     ```
   - Log in:
     ```bash
     firebase login
     ```

3. **Set the default project ID**
   - Edit `.firebaserc` and replace the placeholder with your real project ID:
     ```json
     {
       "projects": {
         "default": "your-firebase-project-id"
       }
     }
     ```

4. **Configure Firebase web app + environment variables**
   - In the Firebase console, add a **Web app** to your project.
   - Copy the Firebase config values into your local `.env.local` (based on `.env.local.example`):
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
     - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
     - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `NEXT_PUBLIC_FIREBASE_APP_ID`

5. **Build and deploy**
   - Build the Next.js app:
     ```bash
     npm run build
     ```
   - Deploy to Firebase Hosting:
     ```bash
     npm run deploy:firebase
     ```

Firebase Hosting will handle running the Next.js build and serving both static and dynamic pages.

### Vercel

On Vercel, you can:

1. Create a new project and connect this GitHub repository.
2. Configure any required environment variables in the Vercel dashboard.
3. Trigger a deployment, which will run `npm install`, `npm run build`, and then host the app.

Once configured, every push to the default branch will automatically trigger a new deployment.
