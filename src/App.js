import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./components/Footer";
import About from "./About";
import Careers from "./Careers";
import Blogs from "./Blogs";
import Pricing from "./Pricing";
import Contact from "./Contact";
import ProductManager from "./ProductManager";
import SingleBlog from "./SingleBlog";
import Features from "./Features";
import Signup from "./Signup";
import Signin from "./Signin";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers/jobs" element={<ProductManager />} />
        <Route path="/Blogs/blog" element={<SingleBlog />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App