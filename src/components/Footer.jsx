import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { AiOutlinePinterest } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div>
        <footer id="footer" className="mt-5">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between py-10">
      <div className="w-full md:w-1/4 mb-8">
        <div>
          <div className="mb-4">
            <span>
            <div className="text-black font-bold text-3xl">ULTRAS.</div>
            {/* <div className="text-gray-600 normal-case ml-2">Casual Wear Store</div> */}
            </span>
          </div>
          <p className="text-gray-500 w-[300px]">
            Gravida massa volutpat aenean odio. Amet, turpis erat nullam
            fringilla elementum diam in. Nisi, purus vitae, ultrices nunc.
            Sit ac sit suscipit hendrerit.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-gray-500 ">
              <CiFacebook className='text-[35px]'/>
            </a>
            <a href="#" className="text-gray-500">
            <CiTwitter className='text-[35px]'/>
            </a>
            <a href="#" className="text-gray-500">
            <PiYoutubeLogoLight className='text-[35px]'/>
            </a>
            <a href="#" className="text-gray-500">
            <AiOutlinePinterest className='text-[35px]'/>
            </a>
            <a href="#" className="text-gray-500">
            <IoLogoInstagram className='text-[35px]'/>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 mb-8">
        <h5 className="uppercase font-semibold mb-4">Quick Links</h5>
        <ul className="space-y-2 text-sm uppercase text-gray-600">
          <li>
            <a href="index.html" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="index.html" className="hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="blog.html" className="hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 mb-8">
        <h5 className="uppercase font-semibold mb-4">Help & Info</h5>
        <ul className="space-y-2 text-sm uppercase text-gray-600">
          <li>
            <a href="#" className="hover:text-black">
              Track Your Order
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Returns + Exchanges
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Shipping + Delivery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Find us easy
            </a>
          </li>
          <li>
            <a href="index.html" className="hover:text-black">
              Faqs
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 mb-8">
        <h5 className="uppercase font-semibold mb-4">Contact Us</h5>
        <p className="text-gray-500">
          Do you have any questions or suggestions?{" "}
          <a href="mailto:contact@yourcompany.com" className=" font-bold hover:underline">
            contact@ultras.com
          </a>
        </p>
        <p className="text-gray-500 mt-4">
          Do you need support? Give us a call.{" "}
          <a href="tel:+43 720 11 52 78" className="font-bold hover:underline">
            +4372015278
          </a>
        </p>
      </div>
    </div>

    <div className="border-t pt-4">
      <div className="flex flex-wrap justify-center items-center">
        <div className="text-sm text-gray-500 text-right mt-4 mb-4 md:mt-0">
          <p>
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}
