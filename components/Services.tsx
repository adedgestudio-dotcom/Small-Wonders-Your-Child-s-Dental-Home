import {
  Baby,
  Shield,
  Sparkles,
  Smile,
  Droplet,
  Scissors,
  Activity,
  AlertCircle,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Paedodontics",
    desc: "Comprehensive dental care tailored for infants, children, and adolescents.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Shield,
    title: "Preventive Dentistry",
    desc: "Proactive care to prevent cavities and maintain optimal oral health.",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    icon: Activity,
    title: "Oral Rehabilitation",
    desc: "Restoring function and aesthetics for dental trauma or developmental issues.",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Sparkles,
    title: "Dental Fillings",
    desc: "Safe, tooth-colored fillings to treat cavities and restore smiles.",
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Droplet,
    title: "Fluoride Treatment",
    desc: "Strengthens tooth enamel and helps prevent decay with professional application.",
    color: "from-pink-500 to-blue-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    icon: Shield,
    title: "Pit & Fissure Sealants",
    desc: "Protective coatings on molars to prevent cavities in hard-to-clean areas.",
    color: "from-blue-500 to-pink-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Scissors,
    title: "Habit Breaking Appliances",
    desc: "Gentle solutions to help children stop thumb-sucking and other oral habits.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    icon: Smile,
    title: "Early Orthodontic Treatment",
    desc: "Interceptive orthodontics to guide proper jaw and teeth development.",
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    icon: AlertCircle,
    title: "Dental Emergencies",
    desc: "Prompt, compassionate care for dental injuries, toothaches, and urgent situations.",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200 mb-6">
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-800">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Complete Pediatric{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Dental Care
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From preventive care to specialized treatments — we offer
            comprehensive dental services designed specifically for children
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border wrapper */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl`}
              ></div>

              {/* Card content */}
              <div className="relative bg-white rounded-3xl p-8 m-[2px] shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>

                {/* Hover effect */}
                <div
                  className={`absolute inset-0 ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Ready to Give Your Child a Healthy Smile?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the difference of
              specialized pediatric dental care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                📅 Schedule Appointment
              </a>
              <a
                href="https://wa.me/919606976655?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 inline-block mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
