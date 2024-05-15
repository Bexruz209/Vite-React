import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Mers from "./components/Mers/Mers"
import PageFound from "./components/404/404"
import Home from "./components/Home/Home"
// Mers
import Gclass from "./components/Mers/G-class/G-class"
import Ww from "./components/Mers/Brabus/Brabus"
import Www from "./components/Mers/Maybach/Maybach"
// Audi
import Audi from "./components/Audi/Audi"
import Q from "./components/Audi/Q8/Q8"
import R from "./components/Audi/R8/R8"
import RS from "./components/Audi/RS6/RS6"
// Bmw
import Bmw from "./components/Bmw/Bmw"
import M from "./components/Bmw/M3/M3"
import X from "./components/Bmw/X/X"
import M5f90 from "./components/Bmw/M5 f90/M5f90"
// Cherolet
import Chevrolet from "./components/Chevrolet/Chevrolet"
import Spark from "./components/Chevrolet/Spark/Spark"
import Malibu from "./components/Chevrolet/Malibu/Malibu"
import Cobolt from "./components/Chevrolet/Cobolt/Cobolt"



export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        /* Mers */
        <Route path="/Mers" element={<Mers />} />
        <Route path="/Mers/Gclass" element={<Gclass />} />
        <Route path="/Mers/Brabus" element={<Ww />} />
        <Route path="/Mers/Maybach" element={<Www />} />
        {/* Bmw */}
        <Route path="/Bmw" element={<Bmw />} />
        <Route path="/Bmw/M3" element={<M />} />
        <Route path="/Bmw/M5F90" element={<M5f90 />} />
        <Route path="/Bmw/X" element={<X />} />
        {/* Audi */}
        <Route path="/Audi" element={<Audi />} />
        <Route path="/Audi/Q8" element={<Q />} />
        <Route path="/Audi/R8" element={<R />} />
        <Route path="/Audi/RS6" element={<RS />} />
        {/* Chevrolet */}
        <Route path="/Chevrolet" element={<Chevrolet />} />
        <Route path="/Chevrolet/Spark" element={<Spark />} />
        <Route path="/Chevrolet/Malibu" element={<Malibu />} />
        <Route path="/Chevrolet/Cobolt" element={<Cobolt />} />
        {/* 404 */}
        <Route path="*" element={<PageFound />} />
      </Routes>
    </>
  )
}