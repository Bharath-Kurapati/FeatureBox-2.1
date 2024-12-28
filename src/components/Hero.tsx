import React from 'react';
import { ArrowRight, Sparkles, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 pt-16 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-6 w-6 text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-600">
            No coding required
          </span>
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          SMBs to Solopreneurs
        </h1>
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-semibold tracking-tight text-indigo-600 sm:text-5xl lg:text-6xl mt-4">
          Automate Inventory, Operations & Sales with AI
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          FeatureBox AI is the ultimate AI-powered toolkit delivering
          enterprise-grade efficiency and scalability at less than 1% of the
          cost. Empower your business to work smarter, not harder.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6">
          <button className="group inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-700 hover:scale-105 transition-all">
            Get the AI Toolkit
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        {/* Retained Panel Section */}
        <div className="mt-20 flex justify-center">
          <div className="relative rounded-xl bg-white/80 backdrop-blur-sm shadow-xl ring-1 ring-gray-200 p-8 max-w-4xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Bot className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: 'Inventory AI Agent',
                  description:
                    'Automates inventory setup, tracking, and analytics. Enterprise efficiency at less than 1% of the cost.',
                },
                {
                  title: 'Chief of Staff AI Agent',
                  description:
                    'Manages taxes, payroll, compliance, and vendor relationships—saving time and reducing headaches.',
                },
                {
                  title: 'SDR AI Agent',
                  description:
                    'Converts leads into paying clients effortlessly, driving revenue growth and business success.',
                },
              ].map((agent) => (
                <div key={agent.title} className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-gray-600">{agent.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
