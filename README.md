# Utkarsh Mishra — Portfolio Website

> **Engineering Dark Slate** portfolio website built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS**. Designed for **Utkarsh Mishra**, Computer Science undergraduate at **Jaypee Institute of Information Technology (JIIT)**, Batch of 2030 (1st Year).

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server Components)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom slate dark mode & ambient gradients
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Monograms
- **Typography**: Inter & JetBrains Mono (via `next/font/google`)
- **API**: Internal Next.js Route Handler (`/api/contact`) with instant mailto fallback

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🛠️ How to Customize Your Info

All personal information, projects, skills, education, and links are managed from a single file:
**`src/data/portfolioData.js`**

### Editing Your Bio or Links:
Open [`src/data/portfolioData.js`](src/data/portfolioData.js) and update the fields:
- `personal.email`
- `personal.linkedin`
- `personal.github`
- `personal.status`

### Adding / Editing Projects:
Add entries to the `projects` array in `portfolioData.js`:
```javascript
{
  id: "your-project-id",
  title: "Project Title",
  category: "AI Agents", // "AI Agents" | "Full Stack" | "Systems & Security"
  tagline: "Brief one-liner summary",
  description: "Detailed description of the project...",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  github: "https://github.com/LY-UtkarshMishra-09/your-repo",
  demo: "https://your-demo-link.com",
  featured: true,
  highlights: [
    "Key engineering achievement 1",
    "Key engineering achievement 2"
  ]
}
```

---

## 🌐 1-Click Deployment to Vercel

The easiest way to deploy this portfolio is with **Vercel**:
1. Push this repository to your GitHub account (`https://github.com/LY-UtkarshMishra-09`).
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"New Project"**, select this repository, and click **"Deploy"**.
4. Your portfolio will be live worldwide with automatic HTTPS and global edge CDN!

