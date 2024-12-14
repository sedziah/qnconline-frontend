// about/page.tsx
import React from 'react';
import Breadcrumb from '@/components/breadcrumb';
import Image from 'next/image';

const Page: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];

  const stats = [
    { label: 'Years of Experience', value: '5+' },
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Products Available', value: '1000+' },
    { label: 'Countries Served', value: '10+' },
  ];

  const values = [
    {
      title: 'Trust',
      description: 'We are devoted to earning your trust through unwavering integrity and consistent reliability in every product and service we offer.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'Our pursuit of excellence is tireless. We aim to surpass expectations in the quality of our products and the standard of our customer service.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Loyalty',
      description: 'Your loyalty is the heartbeat of our business. In turn, our loyalty to you is reflected through our dedication to providing quality in every aspect of our operation.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Quality Service',
      description: 'Our commitment extends beyond transactions; we are passionate about delivering personalized service that caters to your unique needs and ensures your utmost satisfaction.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  About <span className="text-primary">Q&C Online</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  A Home of Premium Products & Exemplary Customer Care!
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-200"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the sanctuary for consumers seeking not only premium products but also convenience and exceptional service. We envision a world where every transaction is a step toward building a lifelong relationship of trust and satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Quality n` Convenience is committed to excellence by providing a curated selection of top-tier products accompanied by outstanding customer service. We`re dedicated to enhancing your lifestyle with goods of unparalleled quality, fostering a shopping experience that stands out in the realm of retail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us at QnC and step into a world where quality products and exceptional service are the norm, not the exception. Here, every product is a testament to our commitment to excellence, and every interaction is an opportunity to demonstrate our dedication to your care.
          </p>
          <button className="mt-8 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
