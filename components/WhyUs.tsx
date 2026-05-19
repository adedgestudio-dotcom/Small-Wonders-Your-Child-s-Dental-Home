import {
  CheckCircle2,
  Star,
  Heart,
  Award,
  Shield,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    text: "Specialized pediatric dentist with 10+ years experience",
  },
  {
    icon: Heart,
    text: "Child-friendly, gentle approach that reduces anxiety",
  },
  {
    icon: Star,
    text: "5.0 Google rating with 86 five-star reviews",
  },
  {
    icon: Shield,
    text: "100% Practo rating — trusted by parents",
  },
  {
    icon: Sparkles,
    text: "Comprehensive preventive and restorative care",
  },
  {
    icon: Shield,
    text: "Modern, safe equipment designed for children",
  },
  {
    icon: MapPin,
    text: "Convenient location in Indiranagar, HAL 2nd Stage",
  },
  {
    icon: Clock,
    text: "Flexible hours: Mon–Sat, 10:30 AM – 7:30 PM",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-3xl p-12 text-center">
                  <div
                    className="text-8xl mb-6 animate-bounce"
                    style={{ animationDuration: "2s" }}
                  >
                    😁
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
                    Where Little Smiles
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Shine Bright
                    </span>
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Trusted by families across Bengaluru
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
                      <span className="text-sm font-bold text-purple-800">
                        10+ Years
                      </span>
                    </div>
                    <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-100 to-blue-100 border-2 border-pink-200">
                      <span className="text-sm font-bold text-pink-800">
                        5.0 ★ Rated
                      </span>
                    </div>
                    <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-200">
                      <span className="text-sm font-bold text-blue-800">
                        100% Care
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-purple-200 animate-float">
                <span className="text-4xl">🎈</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center border-2 border-pink-200 animate-float-delayed">
                <span className="text-5xl">⭐</span>
              </div>
            </div>
          </div>

          {/* Right - Reasons */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 mb-6">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-800">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Why Parents{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Trust Us
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We've built our reputation by creating positive dental
                experiences for children. Here's what makes Small Wonders
                special.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-gray-700 leading-relaxed pt-2">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Book Your Visit Today</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
