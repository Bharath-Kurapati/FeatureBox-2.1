import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "FeatureBox AI has completely transformed how we manage our sales funnel. Our lead response time is faster than ever, and we've seen a significant increase in conversions.",
    author: "Sarah L.",
    role: "Founder of GrowthHub",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "As a solopreneur, FeatureBox AI feels like having a full-time marketing team. It handles all my routine tasks while I focus on growing my business.",
    author: "Michael R.",
    role: "Digital Marketing Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The ease of setting up AI agents without any coding knowledge is incredible. Our team was up and running in minutes, not weeks.",
    author: "Emily C.",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by Businesses Worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
                <div>
                  <div className="flex gap-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm leading-6 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}