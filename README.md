CodeCanvas
Real-time collaborative whiteboard with integrated chat, built for developers.

🎯 Overview
CodeCanvas is a WebSocket-powered collaboration tool that enables multiple users to draw on a shared canvas and communicate via real-time chat. Built with modern web technologies to demonstrate real-time bidirectional communication and state synchronization across clients.


✨ Current Features

Real-Time Chat
✅ Instant messaging with WebSocket
✅ Auto-generated anonymous usernames
✅ Message timestamps
✅ Visual differentiation between sent and received messages
✅ Live online user count
✅ Enter key to send
✅ Clean, modern dark mode UI

Canvas
✅ HTML5 Canvas API integration
✅ Full-screen responsive layout
✅ Dark theme optimized workspace

Architecture
✅ Custom React hooks for WebSocket management (useSocket)
✅ TypeScript for type safety
✅ Component-based architecture
✅ Server acting as message broker
✅ Persistent WebSocket connections with cleanup

🛠 Tech Stack

Frontend:
React 19
TypeScript
Tailwind CSS
Socket.io Client
HTML Canvas API

Backend:
Node.js
Express
Socket.io
TypeScript

Development:
Vite
ESLint


🔮 Future Scope
Phase 1: Drawing Functionality (Next 1-2 Weeks)

 Mouse drawing on canvas
 Real-time drawing sync across clients
 Drawing tools (pencil, eraser, shapes)
 Color picker
 Line width control
 Undo/Redo functionality

Phase 2: Enhanced Collaboration (2-3 Weeks)

 Show other users' cursors in real-time
 User presence indicators on canvas
 "User is drawing..." status
 Typing indicators in chat
 User join/leave notifications in chat

Phase 3: Professional Features (1 Month)

 Username customization
 Persistent boards (save/load from MongoDB)
 Export canvas as PNG/SVG
 Room system (private collaboration spaces)
 Text tool for canvas
 Sticky notes

Phase 4: Developer-Specific Tools (2 Months)

 Code block tool with syntax highlighting
 Pre-made templates (system diagrams, ER diagrams, wireframes)
 GitHub integration (create issues from canvas)
 Screenshot and share functionality
 Markdown support in chat

Phase 5: Production Ready (3 Months)

 User authentication (Google/GitHub OAuth)
 Private rooms with passwords
 Permissions system (view-only vs edit)
 Version history for boards
 Mobile responsive design
 Deployment to cloud (Vercel/Railway)

Phase 6: Advanced Features (Future)

 Integration with Excalidraw for professional diagrams
 Voice chat integration
 Screen sharing
 AI-powered diagram suggestions
 Team workspaces
 Analytics dashboard
