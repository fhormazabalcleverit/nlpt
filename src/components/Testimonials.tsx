import React from 'react';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  const testimonials = [
    {
      rating: 5,
      text: t.testimonials.testimonial1.text,
      name: t.testimonials.testimonial1.name,
      position: t.testimonials.testimonial1.position,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: t.testimonials.testimonial2.text,
      name: t.testimonials.testimonial2.name,
      position: t.testimonials.testimonial2.position,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    },
    {
      rating: 5,
      text: t.testimonials.testimonial3.text,
      name: t.testimonials.testimonial3.name,
      position: t.testimonials.testimonial3.position,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.testimonials.badge}
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t.testimonials.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up-delay ${testimonialsVisible ? 'animate' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300 hover:bg-gray-800/50"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold text-md">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;