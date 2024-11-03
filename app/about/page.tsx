// about/page.tsx
import React from 'react';
import Breadcrumb from '@/components/breadcrumb';

const Page: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">About Us</h1>
        </div>
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              A Home of Premium Products &amp; Exemplary Customer Care!
            </h2>
            <p>
              At QnC, we&apos;re not just a brand; we&apos;re a beacon of excellence in a world that demands the best. We believe that quality isn&apos;t just a goal—it&apos;s our promise to you. Our shelves are stocked with only the finest products, ensuring that every purchase meets the high standards our customers have come to expect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p>
              To be the sanctuary for consumers seeking not only premium products but also convenience and exceptional service. We envision a world where every transaction is a step toward building a lifelong relationship of trust and satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p>
              Quality n&apos; Convenience is committed to excellence by providing a curated selection of top-tier products accompanied by outstanding customer service. We&apos;re dedicated to enhancing your lifestyle with goods of unparalleled quality, fostering a shopping experience that stands out in the realm of retail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong className="text-gray-900">Trust:</strong> We are devoted to earning your trust through unwavering integrity and consistent reliability in every product and service we offer.
              </li>
              <li>
                <strong className="text-gray-900">Excellence:</strong> Our pursuit of excellence is tireless. We aim to surpass expectations in the quality of our products and the standard of our customer service.
              </li>
              <li>
                <strong className="text-gray-900">Loyalty:</strong> Your loyalty is the heartbeat of our business. In turn, our loyalty to you is reflected through our dedication to providing quality in every aspect of our operation.
              </li>
              <li>
                <strong className="text-gray-900">Quality Service:</strong> Our commitment extends beyond transactions; we are passionate about delivering personalized service that caters to your unique needs and ensures your utmost satisfaction.
              </li>
            </ul>
          </section>

          <section>
            <p>
              Join us at QnC and step into a world where quality products and exceptional service are the norm, not the exception. Here, every product is a testament to our commitment to excellence, and every interaction is an opportunity to demonstrate our dedication to your care. Together, let&apos;s build a future enriched by quality, defined by care, and committed to the extraordinary.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
