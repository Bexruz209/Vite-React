import {Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Mers from "./components/Mers/Mers"
import PageFound from "./components/404/404"
import Bmw from "./components/Bmw/Bmw"
import Audi from "./components/Audi/Audi"
import Home from "./components/Home/Home"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mers />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Bmw" element={<Bmw />} />
        <Route path="/Audi" element={<Audi />} />
        <Route path="*" element={<PageFound />} />
      </Routes>
    </>
  )
}