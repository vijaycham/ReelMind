import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black/90 text-gray-500 py-12 px-6 md:px-24 mt-0 border-t border-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <p className="mb-6 hover:underline cursor-pointer">
          Questions? Call 000-800-919-1694
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Speed Test</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Account</li>
            <li className="hover:underline cursor-pointer">Ways to Watch</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
            <li className="hover:underline cursor-pointer">Only on ReelMind</li>
          </ul>

          <ul className="space-y-3">
            <li className="hover:underline cursor-pointer">Media Centre</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="mt-8">
          <button className="border border-gray-600 px-4 py-2 text-sm rounded bg-transparent hover:bg-white/10 transition-colors">
            English
          </button>
        </div>

        <p className="mt-8 text-xs md:text-sm">ReelMind India</p>
      </div>
    </footer>
  );
};

export default Footer;
