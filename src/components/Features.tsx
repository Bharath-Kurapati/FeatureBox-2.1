import React from 'react';
import { MapPin, TrendingUp, List, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <List className="h-6 w-6 text-indigo-600" />,
    title: "Seamless Setup",
    description: "Automates SKU initialization and creates templates tailored to your needs.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-indigo-600" />,
    title: "Real-Time Tracking",
    description: "Updates inventory levels automatically after sales or orders.",
  },
  {
    icon: <MapPin className="h-6 w-6 text-indigo-600" />,
    title: "Location Mapping",
    description: "Tracks inventory movements for precise visibility across multiple locations.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    title: "Daily Insights",
    description: "Delivers insights on inflow, outflow, and stock alerts to optimize operations.",
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">We Heard You</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Introducing the Inventory AI Agent
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Managing inventory doesn’t have to be tedious. Our AI-powered solution integrates seamlessly into Google Sheets or your favorite tools to streamline your inventory tasks and bring expert-level management to your fingertips.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.icon}
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
