import './App.css'
import Canvas from './component/Canvas'
import ChatRoom from './component/ChatRoom'
import Header from './component/Header'

function App() {
  return (
    <div className='flex flex-col h-screen w-screen bg-gray-900'>
      <Header /> 
      
      <div className='flex flex-1 overflow-hidden'>
       <div className='flex-1 flex items-center justify-center p-4 bg-gray-900'>
        <Canvas />
      </div>
        
        <div className='w-96'>
          <ChatRoom />
        </div>
      </div>
    </div>
  )
}

export default App