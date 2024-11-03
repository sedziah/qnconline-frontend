"use client";
import { COLORS, HIDDENROUTES } from '@/constants';
import { HambergerMenu, Heart, SearchNormal, Shop, ShoppingCart, Trade, User } from 'iconsax-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { apiService } from '@/library/services/apiService';
import { ProductCategory } from '@/library/types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import MobileDrawer from './MobileDrawer';
import { usePathname, useRouter } from 'next/navigation';

const DropdownOptions = [
  {
    label: 'account',
    href: '/dashboard?tab=profile',
    icon: <User size="19" color="#000" />
  },
  {
    label: 'orders',
    href: '/dashboard?tab=orders',
    icon: <Shop size="19" color="#000" />
  },
  {
    label: 'favorites',
    href: '/dashboard?tab=favorites',
    icon: <Heart size="19" color="#000" />
  },
  {
    label: 'trade-ins',
    href: '/dashboard?tab=trade-ins',
    icon: <Trade size="19" color="#000" />
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const path = usePathname();
  const absolutePath = /^\/trade-in\/.*/.test(path);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/products?s=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Fetch categories on component mount
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

  if (HIDDENROUTES?.includes(path) || absolutePath) {
    return null;
  }

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        zIndex={9999}
        size={300}
      >
        <MobileDrawer
          categories={categories}
          setIsOpen={setIsOpen}
        />
      </Drawer>

      <div style={{
        zIndex: 8888,
        transitionTimingFunction: "linear",
        transition: "transform 0.7s ease-out, opacity 0.7s ease-out"
      }} className={`w-full transition shadow z-50 bg-white ${scrollPosition > 275 ? "fixed top-0" : "relative"}`}>
        
        {/* Mobile Nav */}
        <div className='lg:hidden px-4 py-2'>
          <div className='flex-row flex justify-between items-center'>
            <button onClick={toggleDrawer}>
              <HambergerMenu size="20" color="#000" />
            </button>
            <a href="/">
              <Image
                width={100}
                height={100}
                src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
            </a>
            <div className='flex flex-row items-center justify-center gap-x-3'>
              <a href='/signin'>
                <User size="20" color="#000" />
              </a>
              <a href='/cart'>
                <ShoppingCart size="20" color="#000" />
              </a>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className='flex-1 relative h-12 mt-2'>
            <div className="pt-2 relative mx-auto text-black text-sm">
              <input
                className="border border-lightGray w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search for products, brands, or categories"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button onClick={handleSearch} className='absolute right-2 top-1/3'>
              <SearchNormal size="20" color={COLORS.lightGray} />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex flex-row gap-x-12 justify-between items-center max-w-[87rem] mx-auto py-2'>
          <a href='/'>
            <Image
              width={100}
              height={100}
              src="/assets/logo-small.png" className='h-10 object-contain' alt='logo' />
          </a>

          <div className='flex flex-row items-center justify-center gap-x-5'>
            <a href='/trade-in' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <Trade size="20" color="#000" />
              <span>Trade In</span>
            </a>
            <a href='/about' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <span>About us</span>
            </a>
            <a href='/help' className='flex gap-x-1 flex-row items-center hover:underline text-sm font-medium transition-all'>
              <span>Help</span>
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className='flex-1 relative h-12 max-w-[400px]'>
            <div className="pt-2 relative mx-auto text-black text-sm">
              <input
                className="border border-lightGray w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search for products, brands, or categories"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button onClick={handleSearch} className='absolute right-2 top-1/3'>
              <SearchNormal size="20" color={COLORS.lightGray} />
            </button>
          </div>

          <div className='flex flex-row items-center justify-center gap-x-3'>
            <a href='/signin'>
              <User size="20" color="#000" />
            </a>
            <a href='/cart'>
              <ShoppingCart size="20" color="#000" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
