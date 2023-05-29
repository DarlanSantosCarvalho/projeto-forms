import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UTIC from "./Components/Pages/UTIC/utic"
import UTIB from "./Components/Pages/UTIB/utib"
import UTIA from "./Components/Pages/UTIA/utia"
import UTINEO from "./Components/Pages/UTINEO/utineo"
import CTC from "./Components/Pages/CTC/ctc"
import Home from "./Components/Pages/Home/home"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/UTIA" element={<UTIA/>}/>
        <Route path="/UTIB" element={<UTIB/>}/>
        <Route path="/UTIC" element={<UTIC/>}/>
        <Route path="/UTINEO" element={<UTINEO/>}/>
        <Route path="/Centro" element={<CTC/>}/>
      </Routes>
    </Router>
  )
}

export default App
