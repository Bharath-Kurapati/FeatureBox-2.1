import React from 'react';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FeatureBox Blog</h2>
      <iframe
        src="https://your-substack-url.substack.com/"
        title="FeatureBox Blog"
        className="w-full h-[600px] border rounded-lg"
      />
    </div>
  );
}
