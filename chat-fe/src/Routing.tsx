import { Route, Routes } from "react-router-dom"
import App from "./App"
import Landing from "./pages/Landing.tsx"
import Room from "./Room.tsx"

const Routing = () => {
  return (
    <Routes>
        <Route element={<App/>}>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/room/:roomId" element={<Room/>}/>

        </Route>
    </Routes>
  )
}

export default Routing