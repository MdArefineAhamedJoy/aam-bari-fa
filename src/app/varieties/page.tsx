"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VarietiesPage() {
  const varieties = [
    {
      name: "আমপালি (Amrapali)",
      image: "/amrapali.png",
      badge: "বেস্ট সেলার",
      badgeColor: "bg-leaf-600",
      desc: "অত্যন্ত মিষ্টি এবং সুন্দর সুঘ্রাণযুক্ত আম। আকারে ছোট হলেও স্বাদে অতুলনীয়। কোনো প্রকার আঁশ নেই বললেই চলে।",
      price: "১০০",
    },
    {
      name: "ফজলি (Fazli)",
      image: "/fazli.png",
      badge: "সিজনাল স্পেশাল",
      badgeColor: "bg-ripe-600",
      desc: "আকারে বিশাল এবং অত্যন্ত রসালো এই আম আমের রাজা হিসেবে পরিচিত। হালকা টক-মিষ্টি স্বাদের জন্য এটি খুবই জনপ্রিয়।",
      price: "১২০",
    },
    {
      name: "হিমসাগর (Himsagar)",
      image: "/himsagar.png",
      badge: "জনপ্রিয়",
      badgeColor: "bg-mango-600",
      desc: "রাজশাহীর সবচেয়ে জনপ্রিয় আম। এর শাঁস অত্যন্ত নরম এবং সুস্বাদু।",
      price: "১৩০",
    },
    {
      name: "ল্যাংড়া (Langra)",
      image: "/langra.png",
      badge: "প্রিমিয়াম",
      badgeColor: "bg-leaf-800",
      desc: "পাতলা খোসা এবং অত্যন্ত মিষ্টি স্বাদের জন্য ল্যাংড়া আম বিশ্ববিখ্যাত।",
      price: "১৪০",
    },
  ];

  return (
    <div className="py-24 bg-mango-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-leaf-900 mb-4">আমাদের আমের জাতসমূহ</h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto px-4">
            আমরা আপনাদের জন্য নিয়ে এসেছি রাজশাহীর সেরা ও বাছাইকৃত প্রিমিয়াম আমের ভ্যারাইটি।
          </p>
          <div className="w-24 h-1.5 bg-mango-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {varieties.map((variety, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 left-4 ${variety.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                  {variety.badge}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-leaf-900 mb-4">
                  {variety.name}
                </h3>
                <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
                  {variety.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-mango-600">
                    ৳ {variety.price} / কেজি
                  </span>
                  <button className="bg-leaf-800 text-white px-6 py-2 rounded-xl font-semibold hover:bg-leaf-900 transition-colors">
                    কার্টে যোগ করুন
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
