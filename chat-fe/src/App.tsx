import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './component/Header'

function App() {
  return (
    <div className='flex flex-col h-screen w-screen bg-gray-900'>
      <Header /> 
      
      <Outlet/>
    </div>    
  )
}

export default App