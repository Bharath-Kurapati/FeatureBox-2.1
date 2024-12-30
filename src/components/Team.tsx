import React from 'react';

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Team Composition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Abhi Bagchi"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Abhi Bagchi (Co-Founder)</h3>
          <p>Senior Product Management professional with 12+ years at Cisco.</p>
          <p>
            <a href="https://www.linkedin.com/in/abhi-bagchi/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Bharath Kurapati"
            className="rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Bharath Kurapati (Co-Founder)</h3>
          <p>Product Manager at Microsoft with expertise in scaling operations.</p>
          <p>
            <a href="https://www.linkedin.com/in/bharathkurapati/" target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
