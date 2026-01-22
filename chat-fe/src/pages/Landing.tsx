const Landing = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Canvas</span>
          </h1>
          <p className="text-xl text-gray-400">
            Real-time collaborative whiteboard for developers
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter your name
            </label>
            <input
              type="text"
              placeholder="e.g., Alice"
              className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition shadow-lg hover:shadow-purple-500/50">
              Create New Room
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter room code (e.g., abc-123)"
                className="flex-1 px-4 py-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition">
                Join
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-xs text-gray-400">No signup required</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-xs text-gray-400">Draw together</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-xs text-gray-400">Integrated chat</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript & Socket.io
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;