import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Header from '../pages/Header'
import Learn from '../pages/Learn'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Layout = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/learn" element={<Learn />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Layout;