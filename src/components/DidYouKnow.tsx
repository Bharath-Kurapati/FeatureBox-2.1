import React from 'react';

const DidYouKnow: React.FC = () => {
  const facts = [
    
    {
      title: "Manual Inventory Management is Inefficient",
      description:
        "Businesses using manual processes spend 30% more time on inventory management compared to automated systems.",
    },
    {
      title: "Overstock and Stockouts Impact Revenue",
      description:
        "An estimated $1.1 trillion is lost globally each year due to overstock and stockouts in retail businesses.",
    },
    {
      title: "Inventory Errors Cause Customer Dissatisfaction",
      description:
        "67% of customers report dissatisfaction when promised items are out of stock due to inventory errors.",
    },
    {
      title: "Drowning in Emails & Phonecalls",
      description:
        "The average business owner spends nearly 17 hours answering emails and talking to vendors & partners. That’s half their workweek lost to admin tasks!.",
    },
    {
      title: "Sales Leads to Conversion",
      description:
        "Managing the sales funnel is #1 priority for all businesses but 79% of leads never materialize as they are not properly followed-up",
    },
    {
      title: "Leads data capture",
      description:
        "Sales reps spend a whopping 17% of their time manually entering data into databases and CRM tools which is two entire workdays per month",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Did You Know?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border-t-4 border-indigo-500"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {fact.title}
            </h3>
            <p className="text-gray-600">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DidYouKnow;
