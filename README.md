# 🎨 CODECANVAS

## Real-Time Collaborative Whiteboard for Developers

> 🚧 **This project is actively under development.**  
> 🚀 **Live demo coming soon.**

A WebSocket-powered collaboration platform enabling **real-time drawing** and **live chat** with synchronized state across multiple users.

---

## 🚀 Overview

**CodeCanvas** allows multiple developers to collaborate on a shared canvas while chatting in real time.  
It is being built to demonstrate **bidirectional WebSocket communication**, **multi-client state synchronization**, and a **scalable full-stack architecture** using modern web technologies.

---

## ✨ Current Features

### 💬 Real-Time Chat
- **Instant messaging** via WebSockets
- **Auto-generated anonymous usernames**
- **Message timestamps**
- **Clear visual separation** of sent vs received messages
- **Live online user count**
- **Enter key to send messages**
- **Modern dark mode UI**

### 🎨 Canvas
- **HTML5 Canvas API integration**
- **Full-screen responsive layout**
- **Dark theme optimized workspace**

### 🧠 Architecture
- **Custom React hooks** for WebSocket management (`useSocket`)
- **Persistent WebSocket connections** with cleanup
- **Server acting as a real-time message broker**
- **Strict TypeScript type safety**
- **Component-based React architecture**

---

## 🛠 Tech Stack

### 🖥 Frontend
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Socket.io Client**
- **HTML Canvas API**

### 🧩 Backend
- **Node.js**
- **Express**
- **Socket.io**
- **TypeScript**

### ⚙ Development Tools
- **Vite**
- **ESLint**

---

## 📂 Project Structure

```bash
client/
 ├── components/
 ├── hooks/
 │   └── useSocket.ts
 ├── pages/
 ├── styles/
 └── main.tsx

server/
 ├── src/
 │   ├── index.ts
 │   ├── socket.ts
 │   └── types.ts
 └── tsconfig.json
