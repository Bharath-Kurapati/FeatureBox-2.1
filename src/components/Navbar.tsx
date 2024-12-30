import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'Vision', href: '/vision' },
    {
      name: 'AI Agents',
      dropdown: [
        { name: 'Inventory AI Agent', href: '/ai-agents/inventory' },
        { name: 'Chief of Staff AI Agent', href: '/ai-agents/chief-of-staff' },
        { name: 'Sales and Marketing AI Agent', href: '/ai-agents/sales-marketing' },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Bot className="h-8 w-8 text-indigo-600" />
            <span className="font-semibold text-xl">FeatureBox AI</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                  {item.name}
                </button>
                <div className="absolute left-0 hidden mt-2 bg-white shadow-lg group-hover:block rounded-lg border border-gray-200">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-indigo-600 rounded"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contact"
            className="text-sm font-semibold leading-6 text-white bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Subscribe
          </a>
        </div>
      </nav>
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Bot className="h-8 w-8 text-indigo-600" />
              <span className="font-semibold text-xl">FeatureBox AI</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="space-y-1">
                      <span className="block px-4 py-2 font-semibold">{item.name}</span>
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-indigo-600 text-center hover:bg-indigo-700"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
