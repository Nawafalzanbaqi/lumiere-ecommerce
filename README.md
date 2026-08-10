<div align="center">
  <h1 align="center">LUMIÈRE | Premium Bilingual E-Commerce</h1>
  <p align="center">
    A high-quality, government-standard, bilingual e-commerce web application built for the modern web.
  </p>
</div>

## 🌟 Visual Excellence & Core Features

- **Full Bilingual Support**: Seamlessly toggles between English (LTR) and Arabic (RTL) using Next.js 15 routing parameters, instantly updating layout direction and content without a reload.
- **Premium Aesthetics**: Built with Vanilla CSS utilizing dynamic micro-animations, glassmorphism UI elements, deep HSL tailored color palettes, and Google Fonts (`Inter` for EN, `Cairo` for AR).
- **SEO Optimized Architecture**: Follows Technical SEO best practices automatically. Next.js App Router powers server-side rendering, delivering static markup immediately to crawlers and maximizing Lighthouse scores.
- **E-Commerce Ready Backend**: Employs a robust SQLite database governed by Prisma ORM. Models for Users, Categories, Products, and Orders are cleanly set up, allowing seamless transitioning to MySQL/PostgreSQL for production.
- **Robust REST API**: Complete Node.js backend endpoints for CRUD operations (`/api/products`, `/api/orders`, `/api/categories`). Tested and secure.
- **Scalable Codebase**: Pure TypeScript guarantees a bug-free, easily maintainable structure perfect for a marketing/design team or future mobile app development via Flutter/React Native.

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript (Strict typing for security)
- **Database ORM**: Prisma (currently paired with portable SQLite)
- **Styling**: Vanilla CSS (Global tokens and Scoped CSS Modules)

## 🚀 Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Initialize Database**

   ```bash
   npx prisma db push
   npx prisma generate
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Production Build**
   ```bash
   npm run build
   npm start
   ```

## 🔒 Security & Enterprise Standards

- Ensures safe and sanitized inputs for the API.
- Implements strict file architectures compatible with VPS Host environments.
- Ready for Saudi Payment Integrations (e.g., Mada, STC Pay, Moyasar).

---

> Developed by a Senior Full-Stack Engineer to over-deliver on quality and aesthetics.
