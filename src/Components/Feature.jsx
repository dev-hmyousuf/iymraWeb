import React from 'react';
import { 
  Share2, Mail, BarChart, Search, UserPlus, 
  Lock, Monitor, Bell, RefreshCcw, Database, 
  BellRing, Download, MapPin, ShoppingCart, Layout, 
  Loader
} from 'lucide-react';
import ScrollToTop from '../Hooks/scrollToUp';
import { Helmet } from 'react-helmet';

const features = {
  marketing: [
    {
      id: 1,
      icon: <Share2 />,
      title: 'Social Media Integration',
      description: 'Users can share their content across various social media platforms.',
    },
    {
      id: 2,
      icon: <Mail />,
      title: 'Email Campaign Management',
      description: 'Create and manage email marketing campaigns efficiently.',
    },
    {
      id: 3,
      icon: <BarChart />,
      title: 'Analytics and Reporting',
      description: 'Detailed reports to analyze the effectiveness of various marketing campaigns.',
    },
    {
      id: 4,
      icon: <Search />,
      title: 'SEO Tools',
      description: 'Tools for optimizing the website for search engines.',
    },
    {
      id: 5,
      icon: <UserPlus />,
      title: 'Lead Generation',
      description: 'Forms and landing pages to attract potential customers.',
    },
  ],
  webApp: [
    {
      id: 1,
      icon: <Lock />,
      title: 'User Authentication',
      description: 'Features for login and registration to enhance security.',
    },
    {
      id: 2,
      icon: <Monitor />,
      title: 'Responsive Design',
      description: 'Works perfectly across all devices with responsive design.',
    },
    {
      id: 3,
      icon: <Bell />,
      title: 'Real-time Notifications',
      description: 'Real-time notification system for users.',
    },
    {
      id: 4,
      icon: <RefreshCcw />,
      title: 'Dynamic Content Updates',
      description: 'Automatic updates of content for users.',
    },
    {
      id: 5,
      icon: <Database />,
      title: 'Data Management',
      description: 'User-friendly interface for managing data.',
    },
    {
      id: 5,
      icon: <Loader />,
      title: 'Faster Performance',
      description: 'User-friendly interface for managing data.',
    },
  ],
  mobileApp: [
    {
      id: 1,
      icon: <BellRing />,
      title: 'Push Notifications',
      description: 'Push notifications to update users from the site.',
    },
    {
      id: 2,
      icon: <Download />,
      title: 'Offline Access',
      description: 'Users can access the app even without an internet connection.',
    },
    {
      id: 3,
      icon: <MapPin />,
      title: 'Location Services',
      description: 'Location services to determine the user’s position.',
    },
    {
      id: 4,
      icon: <ShoppingCart />,
      title: 'In-App Purchases',
      description: 'Users can shop within the app.',
    },
    {
      id: 5,
      icon: <Layout />,
      title: 'User-Friendly Interface',
      description: 'An easy-to-use interface for users.',
    },
  ],
};

const currentPage = 'features'; 
const AppFeatures = () => (
  <ScrollToTop>
     {currentPage == 'features' && (
      <Helmet>
      <title>Features - Connect Agency</title>
      <meta
        name="description"
        content="Explore the unique features of Connect Agency that set us apart in web development, graphic design, and SEO."
      />
      <meta
        name="keywords"
        content="features, web development, graphic design, SEO, Connect Agency"
      />
      <meta property="og:title" content="Features - Connect Agency" />
      <meta
        property="og:description"
        content="Discover the exceptional features that make Connect Agency your go-to partner for digital solutions."
      />
      <meta property="og:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://connectagency.vercel.app/features" />
      <meta property="og:site_name" content="Connect Agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Features - Connect Agency" />
      <meta
        name="twitter:description"
        content="Uncover the standout features of Connect Agency that can elevate your brand."
      />
      <meta name="twitter:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <link rel="canonical" href="https://connectagency.vercel.app/features" />
    </Helmet>
    )}

    <div className="p-8 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Features</h2>
    
   

    {/* Web App Features */}
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Web App Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.webApp.map((feature) => (
          <div key={feature.id} className="border p-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            <div className="flex items-center mb-4 text-indigo-500">
              {feature.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile App Features */}
    <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Mobile App Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.mobileApp.map((feature) => (
          <div key={feature.id} className="border p-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            <div className="flex items-center mb-4 text-indigo-500">
              {feature.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

     {/* Marketing Features */}
     <div className="mb-16">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Marketing Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.marketing.map((feature) => (
          <div key={feature.id} className="border p-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
            <div className="flex items-center mb-4 text-indigo-500">
              {feature.icon}
              <h3 className="ml-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  </ScrollToTop>
);

export default AppFeatures;
