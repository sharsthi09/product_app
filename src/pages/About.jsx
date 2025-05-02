import React from 'react'
import img1 from "../images/hero-image.jpg";
import img2 from "../images/collection-item1.jpg";
import img3 from "../images/logo1.png";
import img4 from "../images/logo2.png";
import img5 from "../images/logo3.png";
import img6 from "../images/logo4.png";
import img7 from "../images/logo5.png";
import { FaTruckFast } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function About() {
    const brands = [
        img3,
        img4,
        img5,
        img6,
        img7
    ];
    return (
        <div>
            <section id="about" className="">
                {/* hero section starts */}
                <div className='w-full h-[450px] bg-cover bg-center bg-fixed relative flex items-center justify-center'
                    style={{ backgroundImage: `url(${img1})` }}>
                    <h1 className='absolute text-8xl font-bold'>About Us</h1>
                </div>
                {/* hero section ends */}

                {/* offer section starts */}
                <section
                    id="company-services"
                    className="py-16 bg-fixed bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/your-bg-image.jpg')` }}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Service Item */}
                            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                <div className="p-3 border rounded-full bg-gray-100">
                                    <FaTruckFast className='w-8 h-8 text-gray-700' />
                                </div>
                                <div className="pl-4">
                                    <h3 className="uppercase text-lg text-gray-800 font-semibold">Quick delivery</h3>
                                </div>
                            </div>

                            {/* Service Item */}
                            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                <div className="p-3 border rounded-full bg-gray-100">
                                    <FaShoppingCart className="w-8 h-8 text-gray-700" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="uppercase text-lg text-gray-800 font-semibold">Pick up in store</h3>
                                </div>
                            </div>

                            {/* Service Item */}
                            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                <div className="p-3 border rounded-full bg-gray-100">
                                    <FaGift className="w-8 h-8 text-gray-700" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="uppercase text-lg text-gray-800 font-semibold">Special Packaging</h3>
                                </div>
                            </div>

                            {/* Service Item */}
                            <div className="flex items-center p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
                                <div className="p-3 border rounded-full bg-gray-100">
                                    <IoReload className="w-8 h-8 text-gray-700" />
                                </div>
                                <div className="pl-4">
                                    <h3 className="uppercase text-lg text-gray-800 font-semibold">Return & refund policy</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* offer section ends */}

                {/* about us starts */}
                <section id="about-us" className="pt-16 pb-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                            {/* Image Holder with Animation */}
                            <motion.div
                                className="lg:w-1/2"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <div className="overflow-hidden rounded-lg hover:scale-95 duration-700" >
                                    <img
                                        src={img2}
                                        alt="single"
                                        className="w-full h-auto object-cover bg-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Text Content with Animation */}
                            <motion.div
                                className="lg:w-1/2"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h2 className="text-4xl md:text-5xl uppercase text-gray-900 pb-4 font-bold">How was Ultras Store started?</h2>
                                        <p className="pb-4 text-gray-700 leading-relaxed">
                                            Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at.
                                            Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Facilisi ut vulputate volutpat a aliquet. Facilisis sed quis pretium amet hac. Justo tristique sagittis
                                            sodales viverra venenatis integer fringilla.
                                        </p>

                                        {/* Button with hover animation */}
                                        <motion.a
                                            href="about-us.html"
                                            className="group inline-flex items-center gap-2 border border-gray-800 text-gray-900 uppercase tracking-wide px-5 py-3 mt-5 text-sm font-medium relative hover:bg-gray-900 hover:text-white transition-all duration-300 overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            About Us
                                            <FaLongArrowAltRight className="w-5 h-5 fill-current group-hover:translate-x-16 duration-700 overflow-hidden" />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </section>
                {/* about us ends */}

                {/* brands starts */}
                <section
                    id="brand-collection"
                    className="py-8 border-t border-b overflow-hidden my-16 mb-0"
                >
                    <div className="container mx-auto px-11 ">
                        <div className="flex justify-between items-center gap-24">
                            {brands.map((logo, index) => (
                                <motion.a
                                    href="#"
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="block"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img
                                        src={logo}
                                        alt="brand"
                                        className="h-12 object-contain transition-all duration-300 hover:invert hover:brightness-200"/>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>
                {/* brands ends */}
            </section>
        </div>
    )
}
