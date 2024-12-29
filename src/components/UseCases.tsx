import React from 'react';
import { User, Building2, CheckCircle } from 'lucide-react';

export default function UseCases() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Designed for Your Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're a solopreneur or running a growing business, FeatureBox AI adapts to your needs
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-x-3">
              <User className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">For Solopreneurs</h3>
            </div>
            <p className="mt-4 text-gray-600 flex-grow">
              Automate customer engagement and lead generation so you can focus on scaling your business. Your AI assistant works 24/7 so you don't have to.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Automated email follow-ups",
                "Social media management",
                "Lead qualification",
                "Customer support automation"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
            <div className="flex items-center gap-x-3">
              <Building2 className="h-6 w-6 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">For SMBs</h3>
            </div>
            <p className="mt-4 text-gray-600 flex-grow">
              Scale your operations without scaling your team. Our AI agents integrate seamlessly with your existing workflows and tools.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Sales pipeline automation",
                "Marketing campaign management",
                "Team collaboration tools",
                "Advanced analytics & reporting"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}