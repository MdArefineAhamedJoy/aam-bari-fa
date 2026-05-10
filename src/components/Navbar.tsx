"use client";

import Link from "next/link";
import { Leaf, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
          <button className="bg-mango-500 hover:bg-mango-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <ShoppingBag size={18} />
            অর্ডার করুন
          </button>
        </div>
      </div>
    </nav>
  );
}
