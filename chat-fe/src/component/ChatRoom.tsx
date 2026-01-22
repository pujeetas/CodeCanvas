import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

function ChatRoom() {
  const [sendMsg, setSendMsg] = useState<string>("");
  const [messageReceived, setMessageReceived] = useState<{
    username: string;
    text: string;
    time: string;
  }[]>([]);


  const { sendMessage, onMessage } = useSocket();

  const [username] = useState(() => `User${Math.floor(Math.random() * 1000)}`);


  function handleSend(msg: string) {
    if (!msg.trim()) return;
    sendMessage(msg);
    setSendMsg("");
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(sendMsg);
    }
  };

  useEffect(() => {
    onMessage((data) => {
      setMessageReceived((prev) => [...prev, data]);
    });
  }, []);

  

 return (
  <div className="h-full w-full flex flex-col bg-gray-900">
    {/* Header */}
   <div className="bg-gray-800 p-3 border-b border-gray-700">
  <h3 className="text-sm font-semibold text-white">Messages</h3>
</div>

    {/* Messages Area */}
    <div className="flex-1 overflow-y-auto bg-gray-800 p-4 space-y-3">
      {/* Welcome Message */}
      <div className="flex justify-center">
        <div className="bg-gray-700/50 px-3 py-1 rounded-full">
          <p className="text-gray-300 text-xs">Start chatting! 🚀</p>
        </div>
      </div>

      {/* Messages */}
      {messageReceived.map((msg, index) => {
        const isMyMessage = msg.username === username;

        return (
          <div
            key={index}
            className={`flex ${isMyMessage ? "justify-end" : "justify-start"}`}
          >
            <div className={`flex flex-col ${isMyMessage ? "items-end" : "items-start"}`}>
              <span className="text-xs text-gray-400 mb-1 px-2">
                {isMyMessage ? "You" : msg.username}
              </span>
              <div
                className={`px-3 py-2 rounded-xl text-xs ${
                  isMyMessage
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {msg.text}
              </div>
              <span className="text-xs text-gray-500 mt-1 px-2">
                {msg.time}
              </span>
            </div>
          </div>
        );
      })}
    </div>

    {/* Input Area */}
    <div className="bg-gray-900 border-t border-gray-700 p-3">
      <div className="flex gap-2">
        <input
          onChange={(e) => setSendMsg(e.target.value)}
          onKeyPress={handleKeyPress}
          value={sendMsg}
          type="text"
          placeholder="Type message..."
          className="flex-1 px-3 py-2 text-sm bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
        />
        <button
          onClick={() => handleSend(sendMsg)}
          disabled={!sendMsg.trim()}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  </div>
);
}

export default ChatRoom;