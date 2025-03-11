import React from 'react';

import Link from 'next/link';

import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="border-t pb-4 pt-8 md:pb-5 md:pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-3 md:gap-8">
          <div className="col-span-1">
            <Link
              href="/"
              className="mb-4 flex items-center justify-center transition-opacity hover:opacity-90 md:mb-6 md:justify-start"
            >
              <div className="flex items-center">
                <div className="flex items-center rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-2 shadow-sm transition-all hover:shadow-md">
                  <span className="text-lg font-light tracking-tight text-white">
                    <span className="font-medium">MCP</span>
                  </span>
                </div>
              </div>
            </Link>
            <p className="mb-4 text-center text-sm text-gray-600 md:mb-6 md:text-left md:text-base">
              The largest collection of MCP Servers, featuring Awesome MCP Servers and Claude MCP
              integration.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <Link href="#" className="text-gray-600 transition-colors hover:text-black">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-black">
                <FaGithub size={20} />
              </Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-black">
                <FaDiscord size={20} />
              </Link>
              <Link href="#" className="text-gray-600 transition-colors hover:text-black">
                <IoIosMail size={20} />
              </Link>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="mb-3 text-sm font-medium md:mb-4 md:text-base">Resources</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Model Context Protocol
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    MCP Starter Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Claude MCP Servers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-3 text-sm font-medium md:mb-4 md:text-base">Community</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-3 text-sm font-medium md:mb-4 md:text-base">Legal</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm text-gray-600 transition-colors hover:text-black md:text-base"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row md:justify-end">
          <div className="mb-2 md:mb-0">
            <p className="text-center text-sm text-gray-600 md:text-left">
              <span className="font-semibold">model-context-protocol</span> ©{' '}
              {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
