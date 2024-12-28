import React, { useState } from 'react';

interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
  isLoading: boolean;
}

export default function NewsletterForm({ onSubmit, isLoading }: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email);
    setEmail('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
    >
      <div className="relative">
        <input
          type="email"
          id="newsletter-email"
          name="newsletter-email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="rounded-l-full px-6 py-3 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          id="newsletter-submit"
          name="newsletter-submit"
          disabled={isLoading}
          className={`rounded-r-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 hover:bg-gray-100 transition-all ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
    </form>
  );
}