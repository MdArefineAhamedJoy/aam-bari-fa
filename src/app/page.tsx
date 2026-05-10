"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Play, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const reviews = [
    {
      name: "রাফসান আহমেদ",
      role: "নিয়মিত গ্রাহক",
      comment: "আমবাড়ি থেকে আম নিয়ে আমি খুবই সন্তুষ্ট। বিশেষ করে আমগুলো একদম ফ্রেশ ছিল এবং প্যাকেজিং ছিল প্রিমিয়াম।",
      stars: 5,
    },
    {
      name: "জান্নাতুল ফেরদৌস",
      role: "গৃহিণী",
      comment: "বাচ্চাদের জন্য বিষমুক্ত আম খুঁজছিলাম, আমবাড়ির আমগুলো একদম প্রাকৃতিকভাবে পাকানো। স্বাদও ছিল দুর্দান্ত।",
      stars: 5,
    },
    {
      name: "তানভীর হাসান",
      role: "চাকরিজীবী",
      comment: "অর্ডার করার পরদিনই ডেলিভারি পেয়েছি। রাজশাহীর আসল স্বাদ ঘরে বসেই পেলাম। ধন্যবাদ আমবাড়ি!",
      stars: 5,
    },
  ];

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
                <span className="text-mango-400 underline decoration-mango-400 underline-offset-8 font-bengali">
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

        {/* Video Showcase Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-leaf-900 mb-6">আমাদের বাগান থেকে সরাসরি ভিডিও</h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                দেখুন কীভাবে আমরা যত্ন সহকারে সেরা আমগুলো আপনার জন্য সংগ্রহ করি।
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-fresh-mangoes-falling-in-water-40455-large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="w-20 h-20 bg-mango-500 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                  <Play size={32} className="fill-white ml-1" />
                </button>
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
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100 group hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">বিশুদ্ধ স্বাদ</h3>
                <p className="text-zinc-500">কোন কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো আমের আসল স্বাদ।</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100 group hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">দ্রুত সরবরাহ</h3>
                <p className="text-zinc-500">সারা বাংলাদেশে ২৪-৭২ ঘণ্টার মধ্যে নিরাপদ ডেলিভারি।</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-mango-100 group hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-leaf-900 mb-2">প্রিমিয়াম কোয়ালিটি</h3>
                <p className="text-zinc-500">সেরা বাগান থেকে বাছাইকৃত প্রতিটি আম হাতে চেক করা হয়।</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-leaf-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-mango-500/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-leaf-500/20 rounded-full blur-3xl -mr-32 -mb-32"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">গ্রাহকদের মতামত</h2>
              <div className="w-24 h-1.5 bg-mango-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative"
                >
                  <Quote className="absolute top-6 right-6 text-mango-500/20 w-12 h-12" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={18} className="text-mango-500 fill-mango-500" />
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg mb-8 leading-relaxed italic">
                    &quot;{review.comment}&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-mango-500 flex items-center justify-center text-white font-bold text-xl">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{review.name}</h4>
                      <p className="text-mango-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
