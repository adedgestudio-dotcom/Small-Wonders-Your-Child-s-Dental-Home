"use client";

import { MessageCircle, X, Send, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919606976655";

  const quickMessages = [
    "Book an appointment for my child 📅",
    "What are your consultation fees? 💰",
    "Do you handle dental emergencies? 🚨",
    "Location & timings 📍",
  ];

  const handleQuickMessage = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const handleCustomMessage = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in border-2 border-purple-200">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-6">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg">
                    Small Wonders
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="text-purple-100 text-xs font-semibold">
                      Online • Replies quickly
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl p-2 transition-all"
                aria-label="Close chat"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 min-h-[320px] max-h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {/* Incoming Message */}
              <div className="flex gap-3 animate-slide-in">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-lg max-w-[75%] border-2 border-purple-100">
                  <p className="text-sm text-gray-800 leading-relaxed font-medium">
                    Hello! 👋 Welcome to{" "}
                    <span className="font-bold text-purple-700">
                      Small Wonders
                    </span>{" "}
                    — Your Child's Dental Home. How can we help you today?
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-[10px] text-gray-400 font-medium">
                      Just now
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Reply Buttons */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-purple-700 font-bold px-2">
                  Quick replies:
                </p>
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-4 shadow-md transition-all hover:shadow-xl hover:scale-[1.02] group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 group-hover:text-purple-700 font-semibold">
                        {message}
                      </span>
                      <Send
                        size={16}
                        className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white p-5 border-t-2 border-purple-100">
            <button
              onClick={handleCustomMessage}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Open WhatsApp Chat</span>
            </button>
            <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1 font-medium">
              <Clock size={12} />
              Mon–Sat • 10:30 AM - 7:30 PM
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group overflow-hidden"
        aria-label="WhatsApp Chat"
      >
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></div>

        {isOpen ? (
          <X
            size={30}
            className="relative z-10 group-hover:rotate-90 transition-transform duration-300"
          />
        ) : (
          <MessageCircle
            size={30}
            className="relative z-10 group-hover:scale-110 transition-transform"
          />
        )}

        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
            <span className="text-[10px] font-black">1</span>
          </div>
        )}
      </button>
    </div>
  );
}
