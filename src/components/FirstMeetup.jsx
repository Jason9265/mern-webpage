import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const FirstMeetup = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      id: 'home',
      content: (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <h1 className="text-6xl font-bold text-white mb-8">MERN DEV</h1>
          <h2 className="text-4xl font-bold text-white mb-8">Adelaide</h2>
          <div className="flex gap-8 mt-8">
            <div className="w-12 h-12 relative">
              <Image src="/background.svg" alt="MongoDB" fill className="object-contain" />
            </div>
            <div className="w-12 h-12 relative">
              <Image src="/background.svg" alt="Express" fill className="object-contain" />
            </div>
            <div className="w-12 h-12 relative">
              <Image src="/background.svg" alt="React" fill className="object-contain" />
            </div>
            <div className="w-12 h-12 relative">
              <Image src="/background.svg" alt="Node.js" fill className="object-contain" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'definition',
      content: (
        <div className="min-h-screen p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">MERN Stack Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">MongoDB</h3>
              <ul className="space-y-2">
                <li>• NoSQL document database</li>
                <li>• Flexible schema design</li>
                <li>• Scalable and high-performance</li>
                <li>• Native JSON support</li>
                <li>• Rich query language</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">Express.js</h3>
              <ul className="space-y-2">
                <li>• Minimal and flexible Node.js framework</li>
                <li>• Robust routing system</li>
                <li>• Middleware support</li>
                <li>• Easy API creation</li>
                <li>• Large ecosystem of plugins</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">React</h3>
              <ul className="space-y-2">
                <li>• Component-based architecture</li>
                <li>• Virtual DOM for performance</li>
                <li>• Rich ecosystem and community</li>
                <li>• Reusable UI components</li>
                <li>• Efficient state management</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-500">Node.js</h3>
              <ul className="space-y-2">
                <li>• JavaScript runtime environment</li>
                <li>• Event-driven architecture</li>
                <li>• Non-blocking I/O</li>
                <li>• Large package ecosystem (npm)</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'capabilities',
      content: (
        <div className="min-h-screen p-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">What Can We Build?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Full-stack Applications</h3>
              <p className="mb-4">Complete web applications with robust backend and interactive frontend.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>E-commerce platforms (like Shopify)</li>
                <li>Social media applications</li>
                <li>Project management tools</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Content Management Systems</h3>
              <p className="mb-4">Custom CMS solutions for content creation and management.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Blog platforms</li>
                <li>Document management systems</li>
                <li>Digital asset management</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Single Page Applications</h3>
              <p className="mb-4">Fast, dynamic web applications with smooth navigation.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Web-based email clients</li>
                <li>Dashboard applications</li>
                <li>Online portfolios</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">API Integration</h3>
              <p className="mb-4">Connect and integrate with various third-party services.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Payment gateway integration</li>
                <li>Social media integration</li>
                <li>Weather applications</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Data Visualization</h3>
              <p className="mb-4">Interactive charts and graphs for data representation.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Analytics dashboards</li>
                <li>Real-time data monitoring</li>
                <li>Scientific data visualization</li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Real-time Applications</h3>
              <p className="mb-4">Applications with real-time data updates and interactions.</p>
              <p className="text-sm text-gray-600">Examples:</p>
              <ul className="list-disc ml-4 text-sm text-gray-600">
                <li>Chat applications</li>
                <li>Collaborative tools</li>
                <li>Live tracking systems</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'survey',
      content: (
        <div className="min-h-screen p-8">
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">Help Shape Our Next Meetup!</h2>
            <p className="text-lg mb-8 text-center">Scan the QR code below to tell us what topics you would like to see in our upcoming meetups.</p>
            <div className="flex justify-center mb-8">
              <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                <Image src="/qrcode.svg" alt="Survey QR Code" fill className="object-contain" />
              </div>
            </div>
            <p className="text-center text-gray-600">Your input helps us create more valuable and engaging content!</p>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative">
      {pages[currentPage].content}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-4 rounded-full ${
            currentPage === 0 ? 'bg-gray-300' : 'bg-white shadow-lg hover:bg-gray-100'
          }`}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className={`p-4 rounded-full ${
            currentPage === pages.length - 1 ? 'bg-gray-300' : 'bg-white shadow-lg hover:bg-gray-100'
          }`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FirstMeetup;