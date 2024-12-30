import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
      <p>Email: <a href="mailto:bharath_kurapati@berkeley.edu">bharath_kurapati@berkeley.edu</a></p>
      <p>Email: <a href="mailto:abhi.bagchi@berkeley.edu">abhi.bagchi@berkeley.edu</a></p>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/bharathkurapati/" target="_blank" rel="noreferrer">
          Bharath Kurapati
        </a>
        ,
        <a href="https://www.linkedin.com/in/abhi-bagchi/" target="_blank" rel="noreferrer">
          Abhi Bagchi
        </a>
      </p>
    </div>
  );
}
