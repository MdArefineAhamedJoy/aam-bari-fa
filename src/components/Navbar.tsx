"use client";

import Link from "next/link";
import { Leaf, ShoppingBag, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "জাতসমূহ", href: "/varieties" },
    { name: "কেন আমাদের পছন্দ করবেন", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-mango-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-mango-500 rounded-full flex items-center justify-center shadow-lg shadow-mango-200">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-leaf-800 tracking-tight">
              আমবাড়ি
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-leaf-900 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-mango-600 ${
                  pathname === link.href ? "text-mango-600 font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex bg-mango-500 hover:bg-mango-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg items-center gap-2">
              <ShoppingBag size={18} />
              অর্ডার করুন
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-leaf-900 hover:text-mango-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-mango-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-mango-50 text-mango-600"
                      : "text-leaf-900 hover:bg-mango-50 hover:text-mango-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <button className="w-full bg-mango-500 hover:bg-mango-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all">
                  <ShoppingBag size={20} />
                  অর্ডার করুন
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
