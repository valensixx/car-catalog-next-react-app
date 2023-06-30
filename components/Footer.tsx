import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 pt-5 border-t border-gray-100">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={110} height={18} className="object-contain" />
          <p className="text-base text-gray-700">
            Car Catalog 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul className="text-grey-500">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;