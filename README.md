🎨 CodeCanvas
Real-time collaborative whiteboard with integrated chat, built for developers.

CodeCanvas is a WebSocket-powered collaboration platform that allows multiple users to draw on a shared canvas while communicating through real-time chat. The project is designed to demonstrate bidirectional real-time communication, state synchronization, and scalable WebSocket architecture using modern web technologies.

🚀 Live Demo
Coming soon

🎯 Overview
CodeCanvas enables developers to collaborate visually and verbally in real time. It combines a shared drawing canvas with a live chat system, making it suitable for brainstorming, system design discussions, and collaborative planning.

Key objectives of this project:

Demonstrate real-time WebSocket communication

Handle multi-user state synchronization

Build a scalable, modular full-stack architecture

Create a polished, developer-focused UI

✨ Current Features
💬 Real-Time Chat

Instant messaging using WebSockets

Auto-generated anonymous usernames

Message timestamps

Visual differentiation between sent and received messages

Live online user count

Press Enter to send messages

Clean, modern dark mode UI

🎨 Canvas

HTML5 Canvas API integration

Full-screen, responsive layout

Dark theme optimized workspace

🧠 Architecture

Custom React hooks for WebSocket management (useSocket)

Persistent WebSocket connections with proper cleanup

Server acting as a real-time message broker

Strong type safety with TypeScript

Modular, component-based architecture

🛠 Tech Stack
Frontend

React 19

TypeScript

Tailwind CSS

Socket.io Client

HTML Canvas API

Backend

Node.js

Express

Socket.io

TypeScript

Development & Tooling

Vite

ESLint

🔮 Roadmap & Future Scope
Phase 1: Drawing Functionality (1–2 Weeks)

Mouse-based drawing on canvas

Real-time drawing sync across clients

Drawing tools (pencil, eraser, shapes)

Color picker

Line width controls

Undo / Redo functionality

Phase 2: Enhanced Collaboration (2–3 Weeks)

Live cursor tracking for all users

User presence indicators on canvas

“User is drawing…” status

Typing indicators in chat

Join/leave notifications

Phase 3: Professional Features (1 Month)

Username customization

Persistent boards (MongoDB)

Export canvas as PNG / SVG

Room-based collaboration (private rooms)

Text tool for canvas

Sticky notes

Phase 4: Developer-Specific Tools (2 Months)

Code block tool with syntax highlighting

Pre-built templates (ER diagrams, system design, wireframes)

GitHub integration (create issues from canvas)

Screenshot & share functionality

Markdown support in chat

Phase 5: Production Ready (3 Months)

Authentication (Google / GitHub OAuth)

Private rooms with passwords

Role-based permissions (view-only vs edit)

Version history for boards

Mobile responsiveness

Cloud deployment (Vercel / Railway)

Phase 6: Advanced Features (Future)

Excalidraw integration

Voice chat

Screen sharing

AI-powered diagram suggestions

Team workspaces

Analytics dashboard
