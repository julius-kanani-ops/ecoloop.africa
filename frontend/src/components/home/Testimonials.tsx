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
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Hear from the people turning waste into wealth — individuals,
          recyclers, and entrepreneurs building a greener future through
          EcoLoop Africa.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-eco-green"
              />
              <p className="text-slate-700 italic mb-4">“{testimonial.quote}”</p>
              <h4 className="font-semibold text-slate-900">
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
