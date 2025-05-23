// pages/scripts/lite.js

import React, { useState } from 'react';

export default function Lite() {
  const [tab, setTab] = useState('paypal');

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <img
        src="/images/lite.png"
        alt="VantaLite Banner"
        className="w-full rounded-lg shadow-lg"
      />

      {/* Title & Tagline */}
      <h1 className="text-3xl font-bold">VantaLite</h1>
      <p className="text-lg">Essential Rust scripting made effortless.</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {['Undetected','Best Value','Maximum Stealth','Complete Security','Ultra Performance'].map(badge => (
          <span key={badge} className="px-2 py-1 bg-gray-700 rounded-full neon-glow text-xs">
            {badge}
          </span>
        ))}
      </div>

      {/* Features & Requirements (omitted for brevity) */}

      {/* Place Your Order */}
      <div className="p-4 bg-gray-800 rounded-lg">
        {/* Plan Selector */}
        <div className="mb-4">
          <span className="px-4 py-2 border rounded-full bg-gray-700">
            7 days – $7.99
          </span>
        </div>

        {/* Payment Tabs */}
        <div className="flex space-x-4">
          <button
            onClick={() => setTab('paypal')}
            className={`flex-1 py-2 rounded ${
              tab === 'paypal' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            PayPal
          </button>
          <button
            onClick={() => setTab('stripe')}
            className={`flex-1 py-2 rounded ${
              tab === 'stripe' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            Stripe
          </button>
        </div>

        {/* PayPal Modal Text */}
        {tab === 'paypal' && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg text-center">
            <p>To pay via PayPal:</p>
            <ol className="list-decimal list-inside text-left">
              <li>
                Join our Discord →{' '}
                <a
                  href="https://discord.gg/GB4uFdzrzP"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here
                </a>
              </li>
              <li>Create a ticket in #payment-support</li>
            </ol>
          </div>
        )}

        {/* Stripe Link */}
        {tab === 'stripe' && (
          <div className="mt-4 text-center">
            <a
              href="https://buy.stripe.com/fZu28rczU2Kr80m1l69bO03"
              className="px-6 py-3 bg-blue-500 rounded-lg inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checkout with Stripe
            </a>
          </div>
        )}

        {/* Terms Checkbox */}
        <div className="mt-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              I’ve read and agree to the{' '}
              <a href="/terms" className="underline">
                Terms of Service
              </a>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
