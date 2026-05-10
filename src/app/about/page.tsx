"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck, ShoppingBag } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-mango-600" />,
      title: "১০০% বিষমুক্ত",
      desc: "কোন প্রকার কেমিক্যাল ছাড়াই প্রাকৃতিকভাবে পাকানো। আমরা স্বাস্থ্যকর আম সরবরাহে অঙ্গীকারবদ্ধ।",
    },
    {
      icon: <Leaf className="w-12 h-12 text-leaf-600" />,
      title: "বাগান থেকে সরাসরি",
      desc: "রাজশাহীর সেরা বাগান থেকে সরাসরি সংগ্রহ করা হয়। কোনো মধ্যস্বত্বভোগী নেই, তাই আপনি পাচ্ছেন সেরা মানের আম।",
    },
    {
      icon: <Truck className="w-12 h-12 text-ripe-600" />,
      title: "দ্রুত ডেলিভারি",
      desc: "সারা বাংলাদেশে ৭২ ঘণ্টার মধ্যে হোম ডেলিভারি। আমরা নিশ্চিত করি যেন আমগুলো তাজা অবস্থায় আপনার কাছে পৌঁছায়।",
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-leaf-800" />,
      title: "সুন্দর প্যাকেজিং",
      desc: "নষ্ট না হওয়ার নিশ্চয়তা সহ প্রিমিয়াম প্যাকেজিং। আমগুলো সুরক্ষিত রাখতে আমরা বিশেষ ক্যারেট বা বক্স ব্যবহার করি।",
    },
  ];

  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-leaf-900 mb-6">কেন আমবাড়ি থেকে আম কিনবেন?</h1>
          <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            আমরা বিশ্বাস করি যে ভালো খাবারই সুস্থ জীবনের চাবিকাঠি। তাই আমরা রাজশাহীর সেরা বাগানগুলো থেকে বিষমুক্ত ও প্রাকৃতিকভাবে পাকানো আম সরাসরি আপনাদের কাছে পৌঁছে দিই।
          </p>
          <div className="w-24 h-1.5 bg-mango-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] bg-[#fffdf5] border border-mango-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-start"
            >
              <div className="mb-8 p-4 bg-white rounded-2xl shadow-sm">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-leaf-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-20 sm:mt-32 bg-leaf-900 rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-mango-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-mango-400">আমাদের লক্ষ্য</h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                আমাদের লক্ষ্য হলো কেমিক্যালমুক্ত ও প্রাকৃতিক খাবারের সংস্কৃতি পুনরায় ফিরিয়ে আনা এবং রাজশাহীর আমের বিশ্বস্ত একটি নাম হিসেবে নিজেদের গড়ে তোলা।
              </p>
              <ul className="space-y-4">
                {["১০০% গ্রাহক সন্তুষ্টি", "বিষমুক্ত ফল সরবরাহ", "কৃষকের নায্য মূল্য নিশ্চিতকরণ"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-mango-500 rounded-full"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 backdrop-blur-sm">
              <p className="text-xl sm:text-2xl font-light italic text-zinc-200">
                &quot;আমরা শুধু আম বিক্রি করি না, আমরা আপনাদের দোরগোড়ায় রাজশাহীর ঐতিহ্য ও বিশুদ্ধ স্বাদ পৌঁছে দিই।&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
