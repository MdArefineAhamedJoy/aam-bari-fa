"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Facebook, Instagram } from "@/components/Icons";

export default function ContactPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-leaf-900 mb-4">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            আপনার যেকোনো প্রশ্ন বা অর্ডারের জন্য আমাদের সাথে নিচের মাধ্যমে যোগাযোগ করতে পারেন।
          </p>
          <div className="w-24 h-1.5 bg-mango-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-mango-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="text-mango-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-leaf-900 mb-2">ঠিকানা</h3>
                  <p className="text-zinc-600 text-lg">রাজশাহী, বাংলাদেশ। সরাসরি বাগান থেকে সরবরাহ।</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-leaf-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="text-leaf-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-leaf-900 mb-2">ফোন</h3>
                  <p className="text-zinc-600 text-lg">+৮৮০ ১৭০০০০০০০</p>
                  <p className="text-zinc-600 text-lg">+৮৮০ ১৮০০০০০০০</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-ripe-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="text-ripe-600 w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-leaf-900 mb-2">ইমেইল</h3>
                  <p className="text-zinc-600 text-lg">info@aambari.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-xl font-bold text-leaf-900 mb-6">আমাদের সোশ্যাল মিডিয়া</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center hover:bg-mango-500 transition-all hover:scale-110"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center hover:bg-mango-500 transition-all hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#fffdf5] p-10 rounded-[2.5rem] border border-mango-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-leaf-900 font-semibold ml-1">আপনার নাম</label>
                  <input
                    type="text"
                    placeholder="নাম লিখুন"
                    className="w-full px-6 py-4 rounded-2xl border border-mango-200 focus:outline-none focus:ring-2 focus:ring-mango-500 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-leaf-900 font-semibold ml-1">ফোন নম্বর</label>
                  <input
                    type="text"
                    placeholder="ফোন নম্বর লিখুন"
                    className="w-full px-6 py-4 rounded-2xl border border-mango-200 focus:outline-none focus:ring-2 focus:ring-mango-500 bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-leaf-900 font-semibold ml-1">বার্তাই (Message)</label>
                <textarea
                  rows={4}
                  placeholder="আপনার বার্তা এখানে লিখুন..."
                  className="w-full px-6 py-4 rounded-2xl border border-mango-200 focus:outline-none focus:ring-2 focus:ring-mango-500 bg-white"
                ></textarea>
              </div>
              <button className="w-full bg-mango-500 hover:bg-mango-600 text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-mango-200 flex items-center justify-center gap-3">
                <Send size={20} />
                বার্তা পাঠান
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
