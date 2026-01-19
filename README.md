# PDF Parser Service

A lightweight Node.js microservice for fast and reliable PDF text extraction using **pdf-parse-new**.  
This service is designed to be used as a **separate backend service** to avoid build and runtime issues in Next.js / Turbopack environments.

---

## 🚀 Why This Service Exists

Parsing PDFs directly inside Next.js (especially with Turbopack) often causes:

- Build-time failures
- Worker / child-process issues
- Slow or unstable deployments

This service isolates PDF parsing into its own process, making your main app:
- Faster
- More stable
- Build-error free

---

## 🛠 Tech Stack

- Node.js
- Express
- pdf-parse-new
- express-fileupload
- TypeScript

---

## 📦 Installation

```bash
npm install
