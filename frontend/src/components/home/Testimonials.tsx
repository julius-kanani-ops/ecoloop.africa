import React from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amina K.",
    role: "Community Recycler, Nairobi",
    quote:
      "Before EcoLoop, I used to throw away most of my plastic waste. Now I sell it and earn weekly. It’s helped me pay my kids’ school fees and keep my area clean.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Peter M.",
    role: "Buyer, Mombasa Recycling Co.",
    quote:
      "EcoLoop has made sourcing materials much easier. I can find verified sellers quickly and keep my production running smoothly.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Grace N.",
    role: "Student Entrepreneur, Kisumu",
    quote:
      "I started collecting cans and plastics in my hostel. Within months, I turned waste into a small business thanks to EcoLoop.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-100 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-eco-green-light/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-eco-blue/20 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container relative mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-14">
          Real stories from people transforming waste into wealth — from
          recyclers to entrepreneurs making a cleaner Africa possible.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white/90 backdrop-blur-sm shadow-md rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 left-6 text-eco-green text-4xl opacity-20 font-serif">
                “
              </div>

              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-eco-green mb-6 shadow-md"
              />

              {/* Quote */}
              <p className="text-slate-700 italic leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Name and Role */}
              <h4 className="font-semibold text-lg text-slate-900">
                {testimonial.name}
              </h4>
              <span className="text-sm text-slate-600">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
