import React from "react";
import { Mail, Globe, Share2, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand/About */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white text-2xl font-bold mb-4">DueDiligence</h2>
          <p className="text-sm leading-relaxed">
            Providing enterprise-grade verification and asset management tools
            for modern professionals.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/services" className="hover:text-white transition">
                How it Works
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Security
              </a>
            </li>
            <li>
              <a href="/buy" className="hover:text-white transition">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social/Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              title="LinkedIn"
              className="hover:text-white transition"
            >
              <Share2 size={20} />{" "}
            </a>
            <a href="#" title="Info" className="hover:text-white transition">
              <Info size={20} />{" "}
            </a>
            <a
              href="#"
              title="Twitter/X"
              className="hover:text-white transition"
            >
              {" "}
              <Globe size={20} />
            </a>
            <a href="#" title="Contact" className="hover:text-white transition">
              {" "}
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-center text-xs">
        <p>
          {" "}
          © {new Date().getFullYear()} DueDiligence Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
