import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import AuroraHero from "../Components/Heros";
// import JoinUs from "../Components/JoinUs"
import News from "../Components/News";

import Services from "../Components/Services";
import Team from "../Components/Team";
import ScrollToTop from "../Hooks/scrollToUp";
const Home = () => {
  return (
    <ScrollToTop>
   
       
      <AuroraHero />
      <About />

      {/* <ProjectSection /> */}
      <Services />
      <Team/>
      <FAQ />
      <News />

      <Contact />
    </ScrollToTop>
  );
};

export default Home;
