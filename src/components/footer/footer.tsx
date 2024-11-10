import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-800 text-white inset-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Salwa&apos;s Portfolio</h3>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
