
import  hero from "../assets/hero_sec/hero.png"
const Hero = () => {
  return (
    <>

  <div className="relative outline-0  flex lg:justify-between items-center flex-col-reverse  md:flex-row mx-auto px-3 md:mt-5 md:py-8 md:px-7 lg:px-10 xl:px-20 2xl:px-20">
    <div className="hero__text 2xl:w-[800px] m-3">
      <p className="md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl text-violet-500">
        Web Development{" "}
      </p>
      <h1 className="text-[38px] lg:text-[44px] xl:text-[55px] 2xl:text-[80px] font-bold my-3">
        Work that we <span className="text-violet-600">produce</span> for our{" "}
        <span className="text-violet-500">clients</span>
      </h1>
      <h3 className=" 2xl:text-2xl 2xl:py-4">
        At Connect Agency, we specialize in graphic design, SEO, and web
        development to enhance your brands  digital presence. Our team is
        dedicated to crafting visually engaging designs, optimizing your online
        reach, and building responsive websites that drive results.
      </h3>
      <a href="#about">
        <button className="outline-0  text-white px-5 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 2xl:text-2xl mt-4 rounded-full bg-gradient-to-tr to-blue-400 from-violet-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-violet-500 duration-150">
          Get Started
        </button>
      </a>
    </div>
    <img
      src= {hero}
      className="w-[70%] md:w-[35%] xl:w-[45%] 2xl:w-[40%]"
    />
  </div>
  {/*  */}
  <div className="hidden relative isolate px-3 pt-8 lg:px-12">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl py-3 sm:py-4 lg:py-8">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Data to enrich your online business
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
      />
    </div>
  </div>
</>

  )
}

export default Hero