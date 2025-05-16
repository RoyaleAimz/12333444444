/*
Project: VantaScripts Website
Stack: Next.js + Tailwind CSS

File Structure:

/components/
  Header.js
  Footer.js
  BackButton.js
  PaymentBar.js
  ScriptCard.js
/pages/
  _app.js
  index.js
  faq.js
  scripts/index.js
  scripts/lite.js
  scripts/elite.js
  terms.js  (Terms of Service + Privacy)
/styles/
  globals.css
  tailwind.css
/public/images/
  placeholder-dashboard.png
  lite.png
  elite.png
*/

// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentBar from '../components/PaymentBar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
      <PaymentBar />
    </div>
  );
}
export default MyApp;

/* components/Header.js */
import Link from 'next/link';
import BackButton from './BackButton';

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <BackButton />
        <Link href="/">
          <a className="font-bold text-xl">VantaScripts</a>
        </Link>
      </div>
      <nav className="space-x-6">
        <Link href="/"><a>Home</a></Link>
        <Link href="/scripts"><a>Scripts</a></Link>
        <Link href="/faq"><a>FAQ</a></Link>
        <a href="#payments">Payments</a>
      </nav>
      <a href="https://discord.gg/GB4uFdzrzP" target="_blank" rel="noopener noreferrer">
        <img src="/images/discord-icon.svg" alt="Discord" className="w-6 h-6" />
      </a>
    </header>
  );
}

// components/PaymentBar.js

export default function PaymentBar() {
  return (
    <div id="payments" className="fixed bottom-0 left-0 w-full bg-gray-800 py-2 flex justify-center space-x-4 z-50">
      {['mastercard','visa','amex','paypal','apple-pay','google-pay','crypto','cash-app'].map((name) => (
        <img
          key={name}
          src={`/images/${name}.svg`}
          alt={name}
          className="h-6" 
        />
      ))}
    </div>
  );
}
