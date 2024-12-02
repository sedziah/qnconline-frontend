"use client"
import { COMPANY_NAME, HIDDENROUTES } from '@/constants'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Footer = () => {
  const path = usePathname()
  const absolutePath = /^\/trade-in\/.*/.test(path)
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (HIDDENROUTES?.includes(path) || absolutePath) {
    return null
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscriptionStatus('loading')
    // Add your newsletter subscription logic here
    setTimeout(() => setSubscriptionStatus('success'), 1000)
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Newsletter Section with Animation */}
      <div className="relative border-t border-gray-200">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-gradient-to-r from-black to-black/90 rounded-2xl shadow-xl">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="max-w-md text-white">
                <h2 className="text-2xl font-bold">Join Our Community</h2>
                <p className="mt-3 text-blue-100">
                  Subscribe to our newsletter and get exclusive deals, early access to new products, and special offers.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-sm border-2 border-transparent bg-white/10 text-white placeholder-blue-100 rounded-l-lg focus:outline-none focus:border-white transition-colors"
                  />
                  {subscriptionStatus === 'success' && (
                    <span className="absolute -top-6 left-0 text-sm text-green-300">
                      Successfully subscribed!
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={subscriptionStatus === 'loading'}
                  className="px-6 py-3 text-sm font-semibold text-primary bg-white rounded-r-lg hover:bg-blue-50 transition-colors disabled:opacity-70"
                >
                  {subscriptionStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <a href='/' className="inline-block group">
              <Image
                width={150}
                height={60}
                src="/assets/logo-small-removebg-preview.png" 
                className='h-12 object-contain transition-transform group-hover:scale-105' 
                alt='logo' 
              />
            </a>
            <p className="max-w-xs text-gray-600 leading-relaxed">
              Welcome to Q&C Online – where quality meets convenience. Discover the latest in tech, accessories, and more with unbeatable deals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+233 123 456 789</span>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@qandc.com</span>
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-5">
              <a 
                href="https://www.instagram.com/quality_n_cheap?igsh=MWFnamN3azJnMWZrNA==" 
                target="_blank" 
                rel="noreferrer"
                className="group"
              >
                <div className="p-2 text-gray-500 transition-all rounded-lg hover:bg-blue-100 hover:text-primary">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/quality-and-convenience-035a16309" 
                target="_blank" 
                rel="noreferrer"
                className="group"
              >
                <div className="p-2 text-gray-500 transition-all rounded-lg hover:bg-blue-100 hover:text-primary">
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm13.25 9.75h-2.5v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-2.5v-8.5h2.5v1.25c.586-.586 1.354-1.25 2.5-1.25 1.933 0 3.5 1.567 3.5 3.5v5.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Meet the Team', 'Our Story', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="/about" className="text-base text-gray-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Services</h3>
              <ul className="space-y-3">
                {[
                  {
                  label: "Trade-In",
                  href: "/trade-in"
                  },
                  {
                    label: "Contact Us",
                    href: "/contact"
                  },
                  {
                    label: "FAQ",
                    href: "/faq"
                  },

                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-base text-gray-600 hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">Legal</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Returns Policy', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="/about" className="text-base text-gray-600 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <a className="hover:text-primary transition-colors" href="/about">Privacy</a>
              <span className="text-gray-300">|</span>
              <a className="hover:text-primary transition-colors" href="/about">Terms</a>
              <span className="text-gray-300">|</span>
              <a className="hover:text-primary transition-colors" href="/about">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer