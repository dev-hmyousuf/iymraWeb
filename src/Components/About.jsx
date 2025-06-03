import ScrollToTop from "../Hooks/scrollToUp";
import about from "../assets/aboutsec/Rectangle 25.png";

const About = () => {
  return (
    <ScrollToTop>
      <section className="py-0" id="about">
        <div className="container px-0 mx-auto">
          <div className="flex items-center flex-wrap mb-32 mt-14">
            <div className="w-full lg:w-1/2 p-8">
              <img
                className="rounded-xl md:rounded-xl lg:rounded-2xl xl:rounded-2xl 2xl:rounded-3xl w-full h-full"
                src={about}
                alt="About us"
              />
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
                <span className="text-orange-500 text-sm font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-6xl lg:text-6xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">
                On a mission to make EcoSystem.
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Iymra Labs is building a decentralized ecosystem where users
                control their data, identity, and digital lives — no tech
                giants, no data theft. From secure Web3-powered chats, wallets,
                and dynamic feeds, to immersive games and mini apps, we unify
                everything in one seamless super app. Our mission: create
                transparent, privacy-first digital solutions that empower
                communities worldwide. Join us to experience the future where
                you own your digital world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollToTop>
  );
};

export default About;
