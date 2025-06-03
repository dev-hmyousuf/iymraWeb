import { AnimatePresence, motion } from "framer-motion";
import {
  Terminal,
  Smartphone,
  Search,
  TrendingUp,
  VideoIcon,
  Image,
  Rocket,
  Code,
  Package,
  Megaphone,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Link } from "react-router-dom";

const iymraServices = [
  // Chats & Apps
  {
    icon: Terminal,
    title: "Decentralized Chats",
    description: "Secure, private messaging powered by Web3 protocols.",
  },
  {
    icon: Smartphone,
    title: "Iymra Super App",
    description:
      "Chats, feeds, wallet, games, tournaments, and mini apps — all in one ecosystem.",
  },

  // Feeds & Growth
  {
    icon: TrendingUp,
    title: "Dynamic Feeds",
    description: "Community-driven content streams for fresh, real-time updates.",
  },
  {
    icon: Rocket,
    title: "Web3 Growth Tools",
    description: "Boost engagement & traction with decentralized marketing strategies.",
  },

  // Design & Content
  {
    icon: VideoIcon,
    title: "Entertainment & Games",
    description: "Web3 and Web2 games to keep the fun and rewards flowing.",
  },
  {
    icon: Package,
    title: "Mini Apps",
    description: "Small but powerful apps integrated inside the Iymra ecosystem.",
  },

  // Auth & Mail
  {
    icon: Code,
    title: "Iymra Auth",
    description:
      "Next-gen auth provider supporting Web3 & Web2 with user-first privacy.",
  },
  {
    icon: Megaphone,
    title: "Iymra Mail",
    description: "Privacy-focused email service, zero data theft guaranteed.",
  },
];

const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

const FloatingIcons = () => {
  return (
    <>
      {iymraServices.map((service, index) => {
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

export default function IymraHero() {
  const [activeTab, setActiveTab] = useState("ecosystem");

  return (
    <section className="relative py-10 min-h-screen overflow-hidden bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700">
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
              Welcome to Iymra
              <br />
              The Future of Decentralized Ecosystems.
            </motion.h1>
            <motion.p
              className="max-w-2xl text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From privacy-first chats to Web3 wallets, from decentralized
              feeds to mini apps and games — Iymra empowers users with true
              control over their digital life.
            </motion.p>
            <motion.div
              className="flex gap-3 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                variant="default"
                size="lg"
                className="bg-white w-60 text-blue-700 hover:bg-blue-100"
                onClick={scrollToAbout}
              >
                Explore Iymra
              </Button>
              <Link to="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-700 w-60 hover:bg-white text-blue-700"
                >
                  View Products
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="mx-auto flex lg:items-center lg:justify-center">
            <Tabs
              defaultValue="ecosystem"
              className="w-full max-w-md"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-3 bg-blue-900/30 rounded-lg">
                <TabsTrigger
                  className="text-gray-300"
                  value="ecosystem"
                >
                  Ecosystem
                </TabsTrigger>
                <TabsTrigger
                  className="text-gray-300"
                  value="growth"
                >
                  Growth & Feeds
                </TabsTrigger>
                <TabsTrigger
                  className="text-gray-300"
                  value="products"
                >
                  Products
                </TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-y-auto max-h-96">
                    {iymraServices
                      .filter((_, i) => {
                        if (activeTab === "ecosystem") return i < 2 || (i >= 4 && i < 6);
                        if (activeTab === "growth") return i >= 2 && i < 4;
                        if (activeTab === "products") return i >= 6;
                      })
                      .map((service, index) => (
                        <TabsContent value={activeTab} className="mt-4" key={index}>
                          <Card>
                            <CardContent className="flex items-center space-x-4 p-6">
                              <service.icon className="h-10 w-10 text-blue-500" />
                              <div>
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <p className="text-sm text-gray-400">{service.description}</p>
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      ))}
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
