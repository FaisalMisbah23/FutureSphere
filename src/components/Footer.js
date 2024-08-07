import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-indigo-600">
    <div className="py-8">
    </div>
    <div className="border-t border-gray-200">
          <div className="container px-5 py-6 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <Link to="/#top" className="flex title-font font-medium items-center text-white">
                        <img src="/home/Logo.png" alt="logo" className="w-10 h-10 text-white p-2 rounded-full" />
                        <span className="ml-1 text-xl">FutureSphere </span>
                    </Link>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-start md:w-auto">
              <Link to="/about#top" className="text-white">About
              </Link>
              <Link to="/careers#top" className="ml-3 text-white">Careers
              </Link>
              <Link to="/blogs#top" className="ml-3 text-white">Blogs

              </Link>
              <Link to="/pricing#top" className="ml-3 text-white">Pricing

              </Link>
              <Link to="/contact#top" className="ml-3 text-white sm:block hidden">Contact Us

              </Link>
            </span>
          </div>
        </div>
    <div className="border-t border-gray-200 bg-indigo-600">
      <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-left">© 2023 FutureSphere. All rights reserved.
        </p>
        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-start md:w-auto">
          <a className="text-white">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a className="ml-3 text-white">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx={4} cy={4} r={2} stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
