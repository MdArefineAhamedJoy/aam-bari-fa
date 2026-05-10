import Link from "next/link";
import { Leaf, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-white py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-mango-500 rounded-full flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight">আমবাড়ি</span>
            </div>
            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              আমরা সরাসরি রাজশাহীর বাগান থেকে সংগৃহীত প্রিমিয়াম কোয়ালিটির আম সারা
              বাংলাদেশে পৌঁছে দিচ্ছি। আমাদের আম বিষমুক্ত এবং ১০০% প্রাকৃতিকভাবে
              পাকানো।
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mango-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li>
                <Link href="/" className="hover:text-mango-500 transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/varieties"
                  className="hover:text-mango-500 transition-colors"
                >
                  আমের জাত
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-mango-500 transition-colors"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-mango-500 transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-mango-500 shrink-0" size={20} />
                <span>রাজশাহী, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-mango-500 shrink-0" size={20} />
                <span>+৮৮০ ১৭০০০০০০০</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-zinc-500">
          <p>&copy; ২০২৪ আমবাড়ি - সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
