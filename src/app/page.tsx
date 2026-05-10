"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-banner.png"
              alt="Fresh Mangoes"
              fill
              className="object-cover brightness-75 scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <span className="inline-block px-4 py-1.5 bg-mango-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
                ১০০% বিষমুক্ত ও টাটকা
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                রাজশাহীর টাটকা ও মিষ্টি{" "}
                <span className="text-mango-400 underline decoration-mango-400 underline-offset-8">
                  সেরা আম
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-200 mb-10 leading-relaxed font-light">
                সরাসরি বাগান থেকে সংগৃহীত প্রিমিয়াম কোয়ালিটির আম পৌঁছে দিচ্ছি
                আপনার দোরগোড়ায়। সারা বাংলাদেশে হোম ডেলিভারি!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/varieties"
                  className="bg-mango-500 hover:bg-mango-600 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  এখনই কিনুন
                </Link>
                <Link
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold transition-all text-center"
                >
                  কেন আমাদের পছন্দ করবেন
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Short About Section Preview */}
        <section className="py-24 bg-[#fffdf5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-leaf-900 mb-8">
              রাজশাহীর ঐতিহ্যবাহী আম এখন আপনার হাতে
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-12">
              আমবাড়ি রাজশাহীর সেরা বাগান থেকে আম সংগ্রহ করে সরাসরি আপনাদের দোরগোড়ায় পৌঁছে দেয়। আমাদের প্রতিটি আম বিষমুক্ত এবং প্রাকৃতিকভাবে পাকানো।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">বিশুদ্ধ স্বাদ</h3>
                <p className="text-zinc-500">কোন কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো আমের আসল স্বাদ।</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">দ্রুত সরবরাহ</h3>
                <p className="text-zinc-500">সারা বাংলাদেশে ২৪-৭২ ঘণ্টার মধ্যে নিরাপদ ডেলিভারি।</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">প্রিমিয়াম কোয়ালিটি</h3>
                <p className="text-zinc-500">সেরা বাগান থেকে বাছাইকৃত প্রতিটি আম হাতে চেক করা হয়।</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block mt-12 text-leaf-800 font-bold border-b-2 border-leaf-800 hover:text-mango-600 hover:border-mango-600 transition-all"
            >
              বিস্তারিত জানুন
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
