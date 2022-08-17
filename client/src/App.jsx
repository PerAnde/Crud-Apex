import { MenuLateral } from "./components/MenuLateral";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { Contact } from './pages/Contact'

import { Routes, Route } from 'react-router-dom'

export const App = () => {
    return (
        <div className="container">
            <MenuLateral />
            <section className="sectionApp">
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </section>
        </div>
    )
}