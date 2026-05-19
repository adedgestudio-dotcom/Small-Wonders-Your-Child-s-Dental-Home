import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 mb-6">
            <MapPin className="w-5 h-5 text-purple-300" />
            <span className="text-sm font-bold text-white">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Visit Us{" "}
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-xl text-purple-100">
            Located in the heart of Indiranagar — easy to reach, easy to park
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Location Card */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border-2 border-white/20 hover:bg-white/15 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-white mb-3">
                  Small Wonders — Your Child's Dental Home
                </h3>
                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  Ground Floor, 627, 11th Main Rd, 7th Cross,
                  <br />
                  HAL 2nd Stage, Indiranagar,
                  <br />
                  Bengaluru, Karnataka 560038
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+919606976655"
                    className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-300">Call Us</p>
                      <p className="font-bold">+91 96069 76655</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@smallwondersclinic.com"
                    className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-purple-300">Email Us</p>
                      <p className="font-bold">info@smallwondersclinic.com</p>
                      <p className="text-xs text-purple-300">
                        (Update with actual email)
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-6">
                  <a
                    href="https://maps.google.com/?q=Ground+Floor+627+11th+Main+Rd+7th+Cross+HAL+2nd+Stage+Indiranagar+Bengaluru+560038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Navigation className="w-5 h-5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                Working Hours
              </h3>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-purple-100 text-sm mb-1">
                    Monday – Saturday
                  </p>
                  <p className="text-2xl font-black text-white">
                    10:30 AM – 7:30 PM
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <p className="text-purple-100 text-sm mb-1">Sunday</p>
                  <p className="text-xl font-black text-white">Closed</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-white text-sm flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Walk-ins welcome! Appointments recommended for shorter wait
                  times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border-2 border-white/20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-3">
                Ready to Give Your Child a Healthy Smile?
              </h3>
              <p className="text-xl text-purple-100">
                Book an appointment today — we're here to help! 🦷✨
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="tel:+919606976655"
                className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919606976655?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Small%20Wonders."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
