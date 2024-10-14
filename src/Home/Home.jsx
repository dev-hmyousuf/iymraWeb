import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
// import JoinUs from "../Components/JoinUs"
import News from "../Components/News";

import ProjectSection from "../Components/ProjectSection";
import Services from "../Components/Services";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";
import ScrollToTop from "../Hooks/scrollToUp";
import Helmet from 'react-helmet'
const Home = () => {
  const currentPage = 'home'; 
  return (
    <ScrollToTop>
      {currentPage == 'home' && (
       <Helmet>
        <meta name="title" content="Connect Agency - Connect the Beauties" />
       {/* Meta Description */}
       <meta name="description" content="Connect Agency offers exceptional digital services, specializing in graphic design, SEO, and web development to elevate your brand." />
       
       {/* Author Info */}
       <meta name="author" content="H.M. Yousuf, Belal Uddin" />
 
       {/* Open Graph Tags for Social Sharing */}
       <meta property="og:title" content="Connect Agency | Connect the Beauties" />
       <meta property="og:description" content="Explore our services in web development, graphic design, and SEO. Let's connect and enhance your online presence." />
       <meta property="og:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
       <meta property="og:url" content="https://connectagency.vercel.app" />
       <meta property="og:type" content="website" />
 
       {/* Twitter Card for Social Sharing */}
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:title" content="Connect Agency | Connect the Beauties" />
       <meta name="twitter:description" content="Join us at Connect Agency for exceptional digital services tailored to your needs." />
       <meta name="twitter:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
 
       {/* Additional SEO Features */}
       <link rel="canonical" href="https://connectagency.vercel.app" />
       <meta name="robots" content="index, follow" />
       <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
 
       {/* Schema.org Markup for Google+ */}
       <script type="application/ld+json">
         {`
           {
             "@context": "http://schema.org",
             "@type": "WebSite",
             "name": "Connect Agency | Connect the Beauties",
             "url": "https://connectagency.vercel.app",
             "description": "Your description of the website's services and purpose.",
             "author": {
               "@type": "Person",
               "name": "H.M. Yousuf",
             }
           }
         `}
       </script>
     </Helmet>
    )}
       
      <Hero />
      <About />

      <ProjectSection />
      <Services />
      <Feature />
      <Team/>
      <Testimonial />
      <FAQ />
      <News />

      <Contact />
    </ScrollToTop>
  );
};

export default Home;
