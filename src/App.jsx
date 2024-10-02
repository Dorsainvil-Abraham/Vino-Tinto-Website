import Header from "./Components/Header"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Blog from "./Pages/Blog/Blog";
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Footer from "./Components/Footer";

function App() {
 

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="products" element={<Products />}></Route>
        <Route path="blog" element={<Blog />} />
        
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
