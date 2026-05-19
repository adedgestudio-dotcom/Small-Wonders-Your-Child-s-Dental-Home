import {
  Award,
  GraduationCap,
  Heart,
  Star,
  Sparkles,
  Shield,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-800">
              About Our Clinic
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Meet{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Dr. Shivani Daga
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your child's smile is in expert hands — compassionate care backed by
            years of specialized training
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Doctor Info Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 rounded-3xl shadow-2xl">
              <div className="bg-white rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900">
                      Dr. Shivani Daga
                    </h3>
                    <p className="text-purple-600 font-bold">
                      Pediatric Dentist
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Qualifications</p>
                      <p className="text-gray-600">
                        BDS, MDS — Paedodontics & Preventive Dentistry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="w-5 h-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Experience</p>
                      <p className="text-gray-600">
                        10+ Years of Specialized Pediatric Care
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Specialization</p>
                      <p className="text-gray-600">
                        Preventive Dentistry & Child Oral Health
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Daga's gentle, patient-centered approach ensures every
                    child feels safe and comfortable. Her mission is to create
                    positive dental experiences that last a lifetime.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-purple-200 animate-float flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-xs font-bold text-gray-800">5.0 Rating</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border-2 border-pink-200 animate-float-delayed flex flex-col items-center justify-center text-center">
              <div className="text-3xl mb-1">🏆</div>
              <p className="text-xs font-bold text-gray-800">10+ Years</p>
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Child-Friendly Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle, compassionate approach that makes every visit
                comfortable and stress-free for kids. We turn dental anxiety
                into excitement!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-5 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Trusted by Parents
              </h3>
              <p className="text-gray-600 leading-relaxed">
                86 five-star Google reviews and 100% Practo rating. Parents
                across Bengaluru trust us with their children's smiles.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-5 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                Modern & Safe
              </h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art equipment designed specifically for children,
                with the highest standards of safety and hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
              5.0★
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              Google Rating
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              86
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              Happy Reviews
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm sm:text-base text-gray-600 font-semibold">
              Practo Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
