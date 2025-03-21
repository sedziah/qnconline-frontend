import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

interface MobilePhoneCardProps {
  product: {
    id: string;
    product_slug: string;
    full_name: string;
    name: string;
    price: string;
    discounted_price?: string;
    inventory_quantity?: number;
    condition: string;
    variation_specifications?: { specification_name: string; value: string }[];
    images?: { image: string; alt_text?: string; image_type?: string }[];
    reviews?: { rating: number }[];
    discount?: number;
    free_delivery?: boolean;
    deals?: { id: string; description: string }[]; // ✅ Optional now
  };
}

const MobilePhoneCard: React.FC<MobilePhoneCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  // Determine Colour and Condition
  const colourSpec = product.variation_specifications?.find(
    (spec) => spec.specification_name === "Color"
  )?.value;

  const condition = product.condition ?? "N/A";

  // Determine Display Price
  const displayPrice =
    product.discounted_price && parseFloat(product.discounted_price) > 0
      ? product.discounted_price
      : product.price;

  // Calculate the average rating if reviews exist
  const rating =
    product.reviews && product.reviews.length > 0
      ? product.reviews.reduce((sum, review) => sum + review.rating, 0) /
        product.reviews.length
      : 0;

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        full_name: product.full_name,
        price: product.price,
        discounted_price: product.discounted_price,
        image: product.images?.[0]?.image || "/placeholder-image.png",
        quantity: 1,
      })
    );
  };

  return (
    <div className="rounded-lg hover:shadow-xl transition-opacity bg-white p-4 shadow-lg">
      <a href={`/products/${product.id}`}>
        <div className="h-40 w-full flex justify-center items-center">
          <Image
            width={150}
            height={150}
            className="object-contain h-full"
            src={product.images?.[0]?.image || "/placeholder-image.png"}
            alt={product.images?.[0]?.alt_text || "Product Image"}
          />
        </div>
      </a>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          {/* Discount Section */}
          <span
            className={`me-2 rounded py-0.5 text-xs font-medium ${
              product.discount && product.discount > 0
                ? "bg-primary-100 text-primary-800"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {product.discount && product.discount > 0
              ? `${product.discount}% off`
              : "No discount"}
          </span>

          {/* Free Delivery Section */}
          {product.free_delivery && (
            <span className="flex items-center gap-2 text-xs font-medium text-green-600">
              <svg
                className="h-4 w-4 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9.75A2.25 2.25 0 015.25 7.5h13.5A2.25 2.25 0 0121 9.75v4.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 14.25v-4.5zm3 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zm12 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
              Free Delivery
            </span>
          )}
        </div>
      </div>

      {/* Product Title */}
      <a href={`/products/${product.id}`}>
        <span
          className="text-sm font-semibold leading-tight text-gray-900 hover:underline flex items-center"
          style={{
            height: "1rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.full_name}
        </span>
      </a>

      {/* ✅ Condition & Colour Side-by-Side */}
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
        <span className="bg-gray-100 px-2 py-1 rounded">
          Condition: {condition}
        </span>
        {colourSpec && (
          <span className="bg-gray-100 px-2 py-1 rounded">
            Colour: {colourSpec}
          </span>
        )}
      </div>

      {/* Star Ratings */}
      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-900">
          {rating > 0 ? rating.toFixed(1) : "No reviews yet"}
        </p>
      </div>

      {/* Price Section */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-lg font-extrabold leading-tight text-gray-900">
          {`₵ ${displayPrice}`}
        </p>

        {/* Add to Cart Button */}
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-primary px-3 py-2.5 text-xs font-medium text-white hover:bg-primary-dark"
          onClick={handleAddToCart}
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MobilePhoneCard;
