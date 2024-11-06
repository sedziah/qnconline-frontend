"use client"
import { COLORS, HIDDENROUTES } from '@/constants';
import { HambergerMenu, Heart, Logout, SearchNormal, Shop, ShoppingCart, Trade, User } from 'iconsax-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiService } from '@/library/services/apiService';
import { ProductCategory } from '@/library/types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import MobileDrawer from './MobileDrawer';
import { usePathname } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const absolutePath = /^\/trade-in\/.*/.test(path);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await apiService.getProductCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true); // Start loading state
      setTimeout(() => {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setIsSearching(false); // Reset loading state after navigation
      }, 1500); // Optional delay for loading effect
    }
  };

  if (HIDDENROUTES?.includes(path) || absolutePath) return null;

  return (
    <>
      {isSearching ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
          <div className="animate-spin text-gray-600 mb-4">
            <FaSearch size={50} />
          </div>
          <p className="text-xl font-semibold text-gray-700 fade-in">
            Searching for your &ldquo;{searchQuery}&rdquo;...
          </p>
        </div>
      ) : (
        <>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            zIndex={9999}
            size={300}
          >
            <MobileDrawer categories={categories} setIsOpen={setIsOpen} />
          </Drawer>

          <div
            style={{
              zIndex: 8888,
              transitionTimingFunction: "linear",
              transition: "transform 0.7s ease-out, opacity 0.7s ease-out"
            }}
            className={`w-full transition shadow z-50 bg-white ${scrollPosition > 275 ? "fixed top-0" : "relative"}`}
          >
            {/* Mobile Nav */}
            <div className="lg:hidden px-4 py-2">
              <div className="flex-row flex justify-between items-center">
                <button onClick={toggleDrawer}>
                  <HambergerMenu size="20" color="#000" />
                </button>
                <a href="/">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/logo-small.png"
                    className="h-10 object-contain"
                    alt="logo"
                  />
                </a>
                <div className="flex flex-row items-center justify-center gap-x-3">
                  <a href="/signin">
                    <User size="20" color="#000" />
                  </a>
                  <a href="/cart">
                    <ShoppingCart size="20" color="#000" />
                  </a>
                </div>
              </div>

              <form onSubmit={handleSearchSubmit} className="flex-1 relative h-12">
                <input
                  className="border border-lightGray w-full bg-white h-10 px-5 pr-12 rounded-lg text-sm focus:outline-none"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <SearchNormal size="20" color={COLORS.lightGray} />
                </button>
              </form>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-row gap-x-12 justify-between items-center max-w-[87rem] mx-auto py-2">
              <a href="/">
                <Image
                  width={100}
                  height={100}
                  src="/assets/logo-small.png"
                  className="h-10 object-contain"
                  alt="logo"
                />
              </a>
              <div className="flex flex-row items-center justify-center gap-x-5">
                <a href="/trade-in" className="flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all">
                  <Trade size="20" color="#000" />
                  <span>Trade In</span>
                </a>
                <a href="/about" className="flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all">
                  <span>About us</span>
                </a>
                <a href="/help" className="flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all">
                  <span>Help</span>
                </a>
              </div>

              <form onSubmit={handleSearchSubmit} className="flex-1 relative h-12">
                <input
                  className="border border-lightGray w-full bg-white h-10 px-5 pr-12 rounded-lg text-sm focus:outline-none"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <SearchNormal size="20" color={COLORS.lightGray} />
                </button>
              </form>
          <div className='flex-1 relative h-12'>
            <div className="pt-2 relative mx-auto text-black text-sm">
              <input className="border border-lightGray w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Type here to start your search…">
              </input>
            </div>
            <button className='absolute right-2 top-1/3'>
              <SearchNormal size="20" color={COLORS.lightGray} />
            </button>
          </div>

              <div className="flex flex-row items-center justify-center gap-x-3">
                <a href="/signin">
                  <User size="20" color="#000" />
                </a>
                <a href="/cart">
                  <ShoppingCart size="20" color="#000" />
                </a>
              </div>
            </div>

            {/* Category List */}
            <div className="hidden md:hidden sm:hidden lg:block bg-bglight overflow-hidden pl-7">
              <div className="w-full flex flex-row">
                <button onClick={toggleDrawer} className="flex w-[120px] flex-row gap-x-2 py-2.5">
                  <HambergerMenu size="20" color="#000" />
                  <p className="text-sm capitalize font-normal">All Items</p>
                </button>
                <div className="overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 w-full flex flex-row items-center overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  <div className="flex flex-row gap-x-6">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <a
                          key={category.name}
                          href={`/products?s=${category.slug}&name=${category.name}`}
                          className="py-2.5 hover:underline whitespace-nowrap text-black text-[13px] capitalize font-normal"
                        >
                          {category.name}
                        </a>
                      ))
                    ) : (
                      <div className="flex flex-row gap-3">
                        {Array(15)
                          .fill('')
                          .map((_, index) => (
                            <div
                              key={index}
                              className="h-6 w-20 bg-gray-200 rounded animate-pulse"
                            ></div>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
