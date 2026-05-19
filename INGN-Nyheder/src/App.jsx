import './App.css'
import Hovedesite from './Components/Pages/Hovedesite/Hovedesite'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Artikel from "./Components/Pages/Artikelsite/Artikel"

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hovedesite/>}/>
      <Route path="/artikel/:id" element={<Artikel/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App