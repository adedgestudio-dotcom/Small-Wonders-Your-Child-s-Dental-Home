export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
    >
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-32 right-20 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 shadow-lg">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-purple-800">
                Bengaluru's Most Loved Pediatric Dental Clinic
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
                Where Little Smiles
                <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Shine Bright
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-2xl">🦷</span>
                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gentle, compassionate dental care that makes every child smile.
              <span className="font-semibold text-purple-700">
                {" "}
                Because happy kids deserve the best!
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>📅</span>
                  Book Appointment
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://wa.me/919606976655?text=Hi!%20I'd%20like%20to%20book%20an%20appointment%20at%20Small%20Wonders."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  5.0 Rating
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍⚕️</span>
                <span className="text-sm font-semibold text-gray-700">
                  10+ Years Experience
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                <span className="text-sm font-semibold text-gray-700">
                  1000+ Happy Kids
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual - Illustration Style */}
          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full shadow-2xl"></div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-white rounded-3xl shadow-xl p-4 animate-float flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-2">🎈</div>
                  <p className="text-xs font-bold text-gray-800">
                    Fun & Friendly
                  </p>
                </div>

                <div className="absolute -top-4 -right-4 w-28 h-28 bg-white rounded-3xl shadow-xl p-4 animate-float-delayed flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-2">⭐</div>
                  <p className="text-xs font-bold text-gray-800">5.0 Rating</p>
                </div>

                <div className="absolute -bottom-6 left-8 w-36 h-36 bg-white rounded-3xl shadow-xl p-4 animate-float flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-2">🏆</div>
                  <p className="text-xs font-bold text-gray-800">
                    10+ Years Trust
                  </p>
                </div>

                <div className="absolute bottom-8 -right-8 w-32 h-32 bg-white rounded-3xl shadow-xl p-4 animate-float-delayed flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-2">💙</div>
                  <p className="text-xs font-bold text-gray-800">100% Care</p>
                </div>

                {/* Center Character */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-9xl animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    😁
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              10+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">
              Years Experience
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              5.0 ★
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">
              Google Rating
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              86
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">
              Happy Reviews
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105">
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              100%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-gray-700">
              Practo Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
