import React, { useState, useEffect } from "react";
import { apiService } from "@/library/services/apiService";

const MOST_WANTED_CATEGORIES = [
  {
    image: "https://compasia.com.ph/cdn/shop/files/iphone-14-pro-max-757354_600x.png?v=1717653209",
    slug: "mobile-phones",
    title: "Mobile Phones",
  },
  {
    image: "https://lib.arizona.edu/sites/default/files/styles/lendable_item_image/public/2022-08/macbook.png?itok=OYz7BkZC",
    slug: "laptops",
    title: "Laptops",
  },
  {
    image: "https://www.aptronixindia.com/media/catalog/product/i/p/ipad_10th_gen_1.png",
    slug: "tablets",
    title: "Tablets",
  },
  {
    image: "https://myxprs.com/cdn/shop/products/sony-playstation-5-slim-570862.png?v=1723625774&width=700",
    slug: "gaming-consoles",
    title: "Gaming Consoles",
  },
];

const RenderMostWantedCategory: React.FC = () => {
  const [products, setProducts] = useState<Record<string, any[]>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMostWantedProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts: Record<string, any[]> = {};

        for (const category of MOST_WANTED_CATEGORIES) {
          // Fetch products for each fixed category
          const categoryProducts = await apiService.getMostWantedCategoryProducts(category.slug);
          
          // Log fetched products for debugging
          console.log(`Products for category [${category.slug}]:`, categoryProducts);

          fetchedProducts[category.slug] = categoryProducts;
        }

        setProducts(fetchedProducts);

        // Log all fetched products for debugging
        console.log("All fetched products:", fetchedProducts);
      } catch (error) {
        console.error("Error fetching most wanted products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMostWantedProducts();
  }, []);

  return (
    <div className="my-16 px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-black">Shop our most wanted</h2>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOST_WANTED_CATEGORIES.map((category) => (
          <div key={category.slug} className="w-full">
            <a href={`/${category.slug}`}>
              <div className="w-full h-44 rounded-md overflow-hidden flex items-center justify-center bg-[#ffc971]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-36 h-36 object-contain"
                />
              </div>
            </a>

            <p className="text-base mt-1 font-bold text-black capitalize">{category.title}</p>

            {!loading && products[category.slug]?.length > 0 && (
              <ul className="mt-2 text-sm text-gray-600">
                {products[category.slug].slice(0, 3).map((product) => (
                  <li key={product.id} className="truncate">
                    {product.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderMostWantedCategory;
