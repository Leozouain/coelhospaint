import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Services from "./Pages/Servic"
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Notfound from "./Pages/Notfound"
import Contact from "./Pages/Contact"
import Portifolio from "./Pages/Portifolio"
import Gallery from "./Pages/Gallery"


export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                   
            </Routes>
            <Routes>

                <Route path='/gallery' element={<Gallery />} />
                <Route path='/about' element={<About />} />
                <Route path="/portifolio" element={<Portifolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path='services' element={<Services />} />                    
                <Route path='/' element={<Hero />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path='*' element={<Notfound/>}>

                </Route>
            </Routes>
            <Footer/>
        </Router>
    )
}