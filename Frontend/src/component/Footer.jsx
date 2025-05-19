import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black  text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul className="space-y-2 text-gray-500">
            <li><a href="/About" className="hover:underline">About</a></li>
            <li><a href="/Career" className="hover:underline">Career</a></li>
            <li><a href="/Terms" className="hover:underline">Terms Of Use</a></li>
            <li><a href="/Privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/FAQ" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        
        <div>
          <h1 className="text-lg font-semibold mb-4">View Website in</h1>
          <ul className="space-y-2 text-gray-500">
            <li><a href="/Hindi" className="hover:underline">Hindi</a></li>
            <li><a href="/Hollywood" className="hover:underline">English</a></li>
            <li><a href="/Tamil" className="hover:underline">Tamil</a></li>
            <li><a href="/Telagu" className="hover:underline">Telugu</a></li>
            <li><a href="/Malyalam" className="hover:underline">Malayalam</a></li>
          </ul>
        </div>

        
        <div>
          <h1 className="text-lg font-semibold mb-4">Need Help?</h1>
          <ul className="space-y-2 text-gray-500">
            <li><a href="/Help" className="hover:underline">Visit Help Center</a></li>
            <li><a href="/Feedback" className="hover:underline">Share Feedback</a></li>
          </ul>
        </div>

       
        <div>
          <h1 className="text-lg font-semibold mb-4">Connect with Us</h1>
          <div className="flex space-x-4 text-gray-500">
            <a href="#" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" aria-label="Twitch">
              <Twitter/>
            </a>
            </div>
            <div class="flex gap-4 mt-5">
                 <a href="#" target="_blank">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" class="h-12" />
                  </a>
                 <a href="#" target="_blank">
                  <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" class="h-12"  />
                 </a>
            
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShivSub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
