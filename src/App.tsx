import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Testimonials />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">FeatureBox AI</h3>
              <p className="text-gray-400 max-w-md">
                Empowering businesses with intelligent automation solutions.
                Build custom AI agents to streamline your sales and marketing
                workflows.
              </p>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-l-full px-6 py-3 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button className="rounded-r-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} FeatureBox AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
