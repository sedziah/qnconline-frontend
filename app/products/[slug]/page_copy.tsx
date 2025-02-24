// "use client";
// import React, { useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import ProductListingDetail from '@/components/pages/ProductListingDetail';

// const Page: React.FC = () => {
//   const params = useParams(); // Retrieve all route parameters
//   const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // Ensure `slug` is a string

//   useEffect(() => {
//     console.log('Product Slug:', slug); // Log the product slug to confirm it's being received
//   }, [slug]);

//   return (
//     <div>      
//       {/* Render the ProductListingDetail component and pass the slug as a prop */}
//       <ProductListingDetail slug={slug} />
//     </div>
//   );
// };

// export default Page;
