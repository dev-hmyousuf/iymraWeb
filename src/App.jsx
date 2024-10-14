import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Home/Home.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Feature from "./Components/Feature.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonial from "./Components/Testimonial.jsx";
import FAQ from "./Components/FAQ.jsx";
import Abouts from "./Components/Abouts.jsx";
import Loader from "./Components/Loader/Loader.jsx";
import AOS from "aos"; 
import "aos/dist/aos.css";
// dynamic team imports
import Team from './Components/Team.jsx'; 
import TeamMember from './Components/Team/TeamMember.jsx'; 
import NotFound from "./Components/NotFound.jsx";

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 1000,  
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abouts" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/feature" element={<Feature />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dev/test/loader" element={<Loader />} />

             {/* Team overview page */}
          <Route path="/team" element={<Team />} />

          <Route path="/team/:name" element={<TeamMember />} /> 
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
