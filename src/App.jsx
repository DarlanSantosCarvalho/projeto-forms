import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UTIB from "./Components/Pages/UTIB/utib"
import UTIA from "./Components/Pages/UTIA/utia"
import Home from "./Components/Pages/Home/home"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/UTIA" element={<UTIA/>}/>
        <Route path="/UTIB" element={<UTIB/>}/>
      </Routes>
    </Router>
  )
}

export default App
