import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Feature from "../Components/Feature";
import AuroraHero from "../Components/Heros";
// import JoinUs from "../Components/JoinUs"
import News from "../Components/News";

import ProjectSection from "../Components/ProjectSection";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import ScrollToTop from "../Hooks/scrollToUp";
const Home = () => {
  return (
    <ScrollToTop>
   
       
      <AuroraHero />
      <About />

      {/* <ProjectSection /> */}
      <Services />
      <Team/>
      <Testimonial />
      <FAQ />
      <News />

      <Contact />
    </ScrollToTop>
  );
};

export default Home;
