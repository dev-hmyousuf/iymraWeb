import { AnimatePresence, motion } from "framer-motion";
import {
  Code,
  Rocket,
  Search,
  Smartphone,
  TrendingUp,
  Megaphone,
  Package,
  Terminal,
  Image,
  VideoIcon
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Link } from "react-router-dom";

const services = [

  {
    icon: Terminal,
    title: "Web Development",
    description:
      "Crafting responsive and user-friendly websites tailored to your needs.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Crafting responsive and user-friendly websites tailored to your needs.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Building innovative mobile applications for iOS and Android platforms.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Optimizing your online presence to improve search engine rankings and visibility.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Creating comprehensive strategies to boost your brand's online reach and engagement.",
  },
 
  {
    icon: Code,
    title: "Graphics Design",
    description:
      "Crafting unique designs tailored to your brand's identity.",
  },
  {
    icon: Smartphone,
    title: "Content Creation",
    description:
      "Producing engaging content that resonates with your audience.",
  },
  {
    icon: VideoIcon,
    title: "Content Creation",
    description:
      "Producing engaging content that resonates with your audience.",
  },
];

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};


const FloatingIcons = () => {
  return (
    <>
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-white opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <IconComponent size={48} />
          </motion.div>
        );
      })}
    </>
  );
};

export default function Heros() {
  const [activeTab, setActiveTab] = useState("development");

 
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
     
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')]" />
      </div>

     
      <div className="absolute inset-0">
        <FloatingIcons />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8">
            <motion.h1
              className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Empowering Brands with Exceptional Digital Solutions
            </motion.h1>
            <motion.p
              className="max-w-2xl text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Connect Agency, we specialize in web and app development, SEO,
              and digital marketing. Let us help you take your business to new
              heights.
            </motion.p>
            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="default"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100"
                onClick={scrollToAbout}
              >
                Get Started
              </Button>
              <Link to='/services'>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600   hover:bg-white text-blue-600"
              >
                View Our Services
              </Button>
              </Link>

            </motion.div>
          </div>
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <Tabs
              defaultValue="development"
              className="w-full max-w-md"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 bg-blue-900/20">
                <TabsTrigger className='text-gray-300' value="development">Web & App</TabsTrigger>
                <TabsTrigger className='text-gray-300' value="marketing">Marketing</TabsTrigger>
                <TabsTrigger className='text-gray-300' value="others">Others</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                
                  <div className={`overflow-y-auto max-h-96 `}>
                    {activeTab === "development" && (
                      <>
                        <TabsContent value="development" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Package className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Web Development (Mern Stack)
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Cutting-edge solutions for your digital presence
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="development" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Smartphone className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  App Development (Android & Ios)
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Cutting-edge solutions for your digital presence
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="development" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Terminal className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Web Development (Php & Laravel)
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Cutting-edge solutions for your digital presence
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="development" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                            <svg className="w-10 h-10 fill-blue-600 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z"/></svg>
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Web Development (Wordpress)
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Cutting-edge solutions for your digital presence
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </>
                    )}
                    {activeTab === "marketing" && (
                      <>
                        <TabsContent value="marketing" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <TrendingUp className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  SEO
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Optimize your website to rank higher in search results.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="marketing" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Megaphone className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Ads Run
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Optimize your website to rank higher in search results.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="marketing" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Rocket className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Social Media Marketing
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Increase your brand's visibility on social platforms.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </>
                    )}
                    {activeTab === "others" && (
                      <>
                        <TabsContent value="others" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <VideoIcon className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Content Creation
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Engaging content to attract and retain customers.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                        <TabsContent value="others" className="mt-4">
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <Image className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">
                                  Graphics Design
                                </h3>
                                <p className="text-sm text-gray-500">
                                  Stunning designs to represent your brand.
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </>
                    )}
                  </div>
                  
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
