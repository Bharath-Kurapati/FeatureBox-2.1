import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    console.log('Subscribe button clicked'); // Debug log

    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        'https://api.airtable.com/v0/apprJLKTYxMleoBqQ/Subscriptions', // Replace 'appXXXXXXXXXX' with your Airtable Base ID
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer patYGP4QmlhL0rX0D.034c683fe1837e4c8a4b62a43a517495739df3887a1844ea5525f0f773e033f3', // Replace with your Airtable Personal Access Token
          },
          body: JSON.stringify({
            fields: {
              Timestamp: new Date().toISOString(), // Automatically add the current timestamp
              Email: email,
            },
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert('Successfully subscribed!');
        setEmail(''); // Clear input
      } else {
        alert(
          result.error?.message || 'Failed to subscribe. Please try again.'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative z-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-indigo-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="rounded-l-full px-6 py-3 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                onClick={handleSubscribe}
                className={`rounded-r-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 hover:bg-gray-100 transition-all ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
