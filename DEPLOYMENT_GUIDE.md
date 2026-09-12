# 🚀 Deployment Guide: Render + Vercel

This repository is configured for a "Split Deployment" architecture.

- **Frontend**: Hosted on [Vercel](https://vercel.com).
- **Backend**: Hosted on [Render](https://render.com).
- **Database**: Hosted on [Neon](https://neon.tech).

---

## 🎨 Backend Deployment (Render)

1. **Blueprint**: The repo root `render.yaml` defines the backend as a Node web service rooted at `backend/`. In Render, use "New +" → "Blueprint" and point it at this repo, or create the web service manually with:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
2. **Environment Variables** (set in the Render dashboard — not stored in git):
   - `DB_URL`: Your Neon connection string.
   - `JWT_SECRET`: A secret string for authentication.
3. Render assigns a URL like `https://expensico-backend.onrender.com` — this is what `VITE_API_URL` (frontend) points to.

---

## 📐 Frontend Deployment (Vercel)

1. **Root Directory**: Set this to **`frontend`** in Vercel settings.
2. **Environment Variables**:
   - `VITE_API_URL`: Your Render backend URL (e.g., `https://expensico-backend.onrender.com`).
3. **Routing**: The `frontend/vercel.json` file handles React Router redirects.

---

## 📱 Android App (Capacitor)

The native Android app build is separate from the website build and needs its own backend URL, since the app has no same-origin server to call:

1. Set `VITE_API_URL` in `frontend/.env.mobile` to the same Render backend URL used above.
2. Build + sync: `npm run cap:sync` (runs the mobile web build, then copies it into the native project).
3. Build the APK: `cd frontend/android && ./gradlew assembleDebug` (output at `frontend/android/app/build/outputs/apk/debug/app-debug.apk`).

---

## 🛠️ Local Development

Run the following command from the project root to start both servers:
```bash
npm run dev
```

---

## ✅ Deployment Checklist
- [ ] Push latest changes to GitHub.
- [ ] Verify Render deployment is live.
- [ ] Update `VITE_API_URL` in Vercel.
- [ ] Redeploy Vercel.

**Happy tracking! 🥂🦾🏁**
