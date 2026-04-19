# 🚀 Deployment Guide: Railway + Vercel

This repository is configured for a "Split Deployment" architecture. 

- **Frontend**: Hosted on [Vercel](https://vercel.com).
- **Backend**: Hosted on [Railway](https://railway.app).
- **Database**: Hosted on [Neon](https://neon.tech).

---

## 🚂 Backend Deployment (Railway)

1. **Root Directory**: The project uses a `railway.json` file to automatically set the root to the `backend/` folder.
2. **Environment Variables**:
   - `DB_URL`: Your Neon connection string.
   - `JWT_SECRET`: A secret string for authentication.
   - `FRONTEND_URL`: Your Vercel domain (e.g., `https://your-app.vercel.app`).

---

## 📐 Frontend Deployment (Vercel)

1. **Root Directory**: Set this to **`frontend`** in Vercel settings.
2. **Environment Variables**:
   - `VITE_API_URL`: Your Railway domain (e.g., `https://your-backend.up.railway.app`).
3. **Routing**: The `frontend/vercel.json` file handles React Router redirects.

---

## 🛠️ Local Development

Run the following command from the project root to start both servers:
```bash
npm run dev
```

---

## ✅ Deployment Checklist
- [ ] Push latest changes to GitHub.
- [ ] Verify Railway deployment is live.
- [ ] Update `VITE_API_URL` in Vercel.
- [ ] Redeploy Vercel.

**Happy tracking! 🥂🦾🏁**
