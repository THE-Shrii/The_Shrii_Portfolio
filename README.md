# Braxton React Portfolio

This project is a React + Vite conversion of the original single-page Braxton portfolio template. The goal was to preserve the original visual structure and content while moving the implementation into a modern React application.

## Project Overview

- Framework: React 19
- Build tool: Vite
- Styling: original CSS files from the template
- Content: portfolio, about, resume, and contact sections
- Interactivity: theme toggle, smooth anchor navigation, and contact form state handling

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── Header.jsx
│   ├── Loader.jsx
│   ├── Sidebar.jsx
│   ├── PortfolioSection.jsx
│   ├── AboutSection.jsx
│   ├── ResumeSection.jsx
│   └── ContactSection.jsx
└── styles/
```

## Main Files

### Root files
- package.json: project scripts and dependencies
- vite.config.js: Vite configuration and dev server settings
- index.html: app mount point and global HTML shell

### Source files
- src/main.jsx: React entry point
- src/App.jsx: main app component and shared state
- src/components/Header.jsx: top navigation header
- src/components/Loader.jsx: initial loading overlay
- src/components/Sidebar.jsx: left profile/sidebar panel
- src/components/PortfolioSection.jsx: portfolio gallery section
- src/components/AboutSection.jsx: about and services section
- src/components/ResumeSection.jsx: resume, tools, and testimonials
- src/components/ContactSection.jsx: contact form and footer details

## How It Works

1. Vite starts the development server.
2. src/main.jsx mounts the React app into the root element in index.html.
3. src/App.jsx renders the main layout and holds shared state for:
   - theme selection
   - contact form values
   - success message state
4. Each section is split into its own React component for clarity and maintainability.
5. The original CSS remains the main visual engine, so the design stays consistent with the original template.

## Features Included

- Single-page portfolio layout
- Responsive design from the original template
- Header navigation with anchor links
- Sidebar profile card
- Portfolio gallery section
- About section with achievements and service cards
- Resume section with education, experience, tools, and testimonials
- Contact form with React state handling
- Light/dark theme toggle using localStorage

## Installation

Install dependencies:

```bash
npm install
```

## Run Locally

Start the dev server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

## Build for Production

Create a production build:

```bash
npm run build
```

The build output will be generated in the dist folder.

## Notes

- The project uses the original template CSS files and keeps the same structure as much as possible.
- Images and icons were moved into the React assets folders and imported directly in components.
- The app is still designed as a single-page experience.
