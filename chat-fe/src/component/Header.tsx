import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

const Header = () => {
  const { onlineUsers, connectionStatus } = useSocket();

  const [onlineCount, setOnlineCount] = useState<number>(0);
  const [activeView, setActiveView] = useState<"canvas" | "chat">("canvas");

  const roomName = "interview-room-42";

  useEffect(() => {
    onlineUsers((count) => {
      setOnlineCount(count);
    });
  }, []);

  const copyRoomLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
  };

  return (
    <header className="h-14 px-6 border-b border-gray-800 bg-[#0B1220]/80 backdrop-blur-md flex items-center justify-between">

      {/* Left: Product + Room */}
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-white font-semibold tracking-tight">
          CodeCanvas
        </span>

        <span className="text-gray-500">/</span>

        <button
          onClick={copyRoomLink}
          className="text-sm text-gray-400 hover:text-white truncate max-w-[180px]"
          title="Click to copy room link"
        >
          {roomName}
        </button>
      </div>

      {/* Center: View Switch */}
      <div className="flex bg-gray-900 rounded-lg p-1">
        <button
          onClick={() => setActiveView("canvas")}
          className={`px-3 py-1.5 text-sm rounded-md transition
            ${
              activeView === "canvas"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
        >
          Canvas
        </button>
        <button
          onClick={() => setActiveView("chat")}
          className={`px-3 py-1.5 text-sm rounded-md transition
            ${
              activeView === "chat"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
        >
          Chat
        </button>
      </div>

      {/* Right: Actions + Presence */}
      <div className="flex items-center gap-4 text-sm text-gray-300">

        {/* Online users */}
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          {onlineCount} online
        </div>

        {/* Share */}
        <button
          onClick={copyRoomLink}
          className="px-3 py-1.5 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition"
        >
          Share
        </button>
      </div>
    </header>
  );
};

export default Header;
