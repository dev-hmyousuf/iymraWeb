import email from "../assets/services/email_marketing.png";
import graphics from "../assets/services/graphics.png";
import seo from "../assets/services/seo.png";
import web from "../assets/services/web_pic.png";
import app from "../assets/services/app_pic.png";
import ads from "../assets/services/ads_run.png";
import ScrollToTop from "../Hooks/scrollToUp";
import EncryptButton from "./ui/EncryptButton";

const Services = () => {
  return (
    <ScrollToTop>
      <section className="py-12 md:py-32 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
            <h2 className="mb-16 font-semibold text-4xl sm:text-4xl xl:text-7xl font-heading">
              <span>
                Join <span className="text-violet-400">Iymra Labs</span>, and
              </span>{" "}
              <span className="bg-orange-200 rounded-lg px-4 mt-1 inline-block">
                change
              </span>{" "}
              <span>the future.</span>
            </h2>
            <p className="font-semibold text-4xl text-neutral-600 tracking-tight">
              Your journey to digital excellence starts here.
            </p>
          </div>

          <div className="mb-20">
            <div className="flex flex-wrap -m-2.5">
              {/* Iymra App */}
              <div className="w-full md:w-1/2 xl:w-8/12 p-2.5">
                <div className="h-full p-10 bg-white rounded-5xl">
                  <div className="mb-24">
                    <h4 className="mb-2 text-5xl font-medium tracking-tight font-heading">
                      Iymra App
                    </h4>
                    <p className="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">
                      Create, connect, verify, and search across all your
                      knowledge platforms in one centralized, secure place —
                      accelerating productivity like never before.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between items-end -m-8">
                    <div className="w-auto p-8">
                      <img
                        className="h-auto object-cover"
                        src={web}
                        alt="Iymra App preview"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Iymra Auth */}
              <div className="w-full md:w-1/2 xl:w-4/12 p-2.5">
                <div className="h-full p-10 bg-white rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                      Iymra Auth
                    </h4>
                    <p className="mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">
                      Secure and seamless authentication solutions designed for
                      next-gen decentralized apps.
                    </p>
                    <img
                      className="mx-auto mb-8 h-64 object-cover"
                      src={seo}
                      alt="Iymra Auth visual"
                    />
                  </div>
                </div>
              </div>

              {/* Iymra Mail */}
              <div className="w-full md:w-1/2 xl:w-8/12 p-2.5">
                <div className="h-full p-10 bg-white rounded-5xl">
                  <div className="mb-24">
                    <h4 className="mb-2 text-5xl font-medium tracking-tight font-heading">
                      Iymra Mail
                    </h4>
                    <p className="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">
                      Manage, verify, and search emails across platforms from
                      one secure hub — powering your communications
                      effortlessly.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between items-end -m-8">
                    <div className="w-auto p-8">
                      <img
                        className="h-auto object-cover"
                        src={app}
                        alt="Iymra Mail interface"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Iymra Wallet */}
              <div className="w-full md:w-1/2 xl:w-4/12 p-2.5">
                <div className="h-full p-10 bg-white rounded-5xl flex flex-col justify-between">
                  <div>
                    <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                      Iymra Wallet
                    </h4>
                    <p className="text-lg text-neutral-700">
                      Iymra Wallet delivers secure and seamless Web3
                      experiences, designed to{" "}
                      <span className="inline-block align-middle ml-1 font-semibold text-indigo-500">
                      <EncryptButton buttonText="Secure & Encrypt" />
                      </span>{" "}
                      your digital assets and empower decentralized control.
                    </p>

                    <img
                      className="mx-auto mb-8 h-64 object-cover"
                      src={seo}
                      alt="Iymra Auth visual"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollToTop>
  );
};

export default Services;
