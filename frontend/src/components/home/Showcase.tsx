import React from 'react';
import materialsImage from '../../assets/images/recyclable-materials.png';
import communityImage from '../../assets/images/community-recycling.png';

const Showcase: React.FC = () => {
  const showcaseItems = [
    {
      image: materialsImage,
      title: 'Turn Recyclables into Cash',
      description:
        'Collect plastic, glass, or metal waste and sell it directly to verified buyers through EcoLoop Africa. Simple, fast, and rewarding.',
    },
    {
      image: communityImage,
      title: 'Join a Growing Recycling Network',
      description:
        'Be part of communities across Africa working together to keep cities clean while earning from waste. Every small effort counts.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Explore What You Can Do
        </h2>

        {/* Article Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
