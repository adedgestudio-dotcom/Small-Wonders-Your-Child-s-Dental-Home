import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-black text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Small Wonders
              </h3>
              <p className="text-sm text-purple-400 font-semibold">
                Your Child's Dental Home
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="#home"
              className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Small Wonders
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            All rights reserved. Made with{" "}
            <Heart className="inline w-4 h-4 text-pink-500 fill-current" /> for
            little smiles
          </p>

          {/* Crafted by Zorivo */}
          <a
            href="https://portfolio-zorivo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 transition-all"
          >
            <Sparkles
              size={16}
              className="text-purple-400 group-hover:rotate-12 transition-transform"
            />
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Crafted by{" "}
              <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zorivo
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
