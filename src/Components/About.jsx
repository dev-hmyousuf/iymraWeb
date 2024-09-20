 
import about from "../assets/aboutsec/Rectangle 25.png";

const About = () => {
  return (
    <section className="py-0" id="about">
      <div className="container px-0 mx-auto">
        <div className="flex items-center flex-wrap mb-32 mt-14">
          <div className="w-full lg:w-1/2 p-8">
            <img className="rounded-xl md:rounded-xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl w-full h-full" src={about} alt="About us" />
          </div>
          <div className="w-full lg:w-1/2 p-8">
            <div className="py-1 px-3 rounded-lg border border-orange-100 bg-orange-50 inline-flex items-center gap-2 mb-6 mt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={8}
                height={8}
                viewBox="0 0 8 8"
                fill="none"
              >
                <circle cx={4} cy={4} r={3} fill="#FF7100" />
              </svg>
              <span className="text-orange-500 text-sm font-medium">About Us</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">
              On a mission to make Beauty.
            </h1>
            <p className="text-gray-600 text-lg mb-12">
              At Connect Agency, we are your trusted partner for exceptional digital
              solutions, with a focus on web development, SEO, and graphic design.
              Our team of creative experts brings your brand to life with visually
              captivating designs, while our SEO specialists work to enhance your
              online visibility, ensuring your website reaches the right audience.
              We develop responsive, user-friendly websites that provide a seamless
              experience across all devices, helping your business shine in the
              digital landscape. At Connect Agency, your goals are our priority, and
              we collaborate closely with you to deliver customized solutions that
              drive real, measurable success. Let us help you elevate your brand and
              achieve your digital ambitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
