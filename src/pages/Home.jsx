import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight, Clock } from "lucide-react";
import { Navigation } from 'swiper/modules';
import { CiCalendar } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../images/left-banner-image.jpg";
import img2 from "../images/baner-right-image-01.jpg";
import img3 from "../images/baner-right-image-02.jpg";
import img4 from "../images/baner-right-image-03.jpg";
import img5 from "../images/baner-right-image-04.jpg";
import img6 from "../images/product-item-1.jpg";
import img7 from "../images/product-item-2.jpg";
import img8 from "../images/product-item-3.jpg";
import img9 from "../images/product-item-4.jpg";
import img10 from "../images/product-item-5.jpg";
import img11 from "../images/banner-image-1.jpg";
import img12 from "../images/banner-image-2.jpg";
import img13 from "../images/banner-image-3.jpg";
import img14 from "../images/banner-image-4.jpg";
import img15 from "../images/banner-image-5.jpg";
import img16 from "../images/post-image1.jpg";
import img17 from "../images/post-image2.jpg";
import img18 from "../images/post-image3.jpg";
import img19 from "../images/video-image.jpg";
import img20 from "../images/post-image5.jpg";
import img21 from "../images/product-item-6.jpg";
import img22 from "../images/product-item-7.jpg";
import img23 from "../images/product-item-8.jpg";
import img24 from "../images/product-item-9.jpg";
import img25 from "../images/product-item-10.jpg";
import img26 from "../images/insta-item1.jpg";
import img27 from "../images/insta-item2.jpg";
import img28 from "../images/insta-item3.jpg";
import img29 from "../images/insta-item4.jpg";
import img30 from "../images/insta-item5.jpg";
import img31 from "../images/insta-item6.jpg";




export default function Home() {

  useEffect(() => {
    // Initialize AOS with duration and trigger every time
    AOS.init({
      duration:800,   // Animation duration (in ms)
      once: false,     // Set to false to trigger the animation every time the element is in view
      offset: 100,     // Optional: Distance from the bottom of the viewport before triggering
    });

    // AOS refresh for dynamic content
    window.addEventListener('load', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };
  }, []);

  

  const products = [
    {
      id: 1,
      title: 'Dark florish onepiece',
      price: '$95.00',
      image: img6
    },
    {
      id: 2,
      title: 'Baggy Shirt',
      price: '$55.00',
      image: img7
    },
    {
      id: 3,
      title: 'Cotton off-white shirt',
      price: '$65.00',
      image: img8
    },
    {
      id: 4,
      title: 'Handmade crop sweater',
      price: '$50.00',
      image: img9
    },
    {
      id: 5,
      title: 'Handmade crop sweater',
      price: '$70.00',
      image: img10
    },
  ];

  const products1 = [
    {
      id: 1,
      title: 'Dark florish onepiece',
      price: '$95.00',
      image: img11
    },
    {
      id: 2,
      title: 'Baggy Shirt',
      price: '$55.00',
      image: img12
    },
    {
      id: 3,
      title: 'Cotton off-white shirt',
      price: '$65.00',
      image: img13
    },
    {
      id: 4,
      title: 'Handmade crop sweater',
      price: '$50.00',
      image: img14
    },
    {
      id: 5,
      title: 'Handmade crop sweater',
      price: '$70.00',
      image: img15
    },
  ];

  const blogPosts = [
    {
      image: img16,
      category: "Fashion ",
      title: "How to look outstanding in pastel",
      date: "22 Feb, 2024",
    },
    {
      image: img17,
      category: "Fashion ",
      title: "Top 10 fashion trend for summer",
      date: "22 Feb, 2024",
    },
    {
      image: img18,
      category: "Fashion ",
      title: "Crazy fashion with unique moment",
      date: "22 Feb, 2024",
    },
    {
      image: img19,
      category: "Fashion ",
      title: "Crazy fashion with unique moment",
      date: "22 Feb, 2024",
      wide: true,
    },
    {
      image: img20,
      category: "Rooms",
      title: "How to look outstanding",
      date: "22 Feb, 2024",
    },
  ];

  const products2 = [
    {
      id: 1,
      title: 'Dark florish onepiece',
      price: '$95.00',
      image: img21
    },
    {
      id: 2,
      title: 'Baggy Shirt',
      price: '$55.00',
      image: img22
    },
    {
      id: 3,
      title: 'Cotton off-white shirt',
      price: '$65.00',
      image: img23
    },
    {
      id: 4,
      title: 'Handmade crop sweater',
      price: '$50.00',
      image: img24
    },
    {
      id: 5,
      title: 'Handmade crop sweater',
      price: '$70.00',
      image: img25
    },
  ];


  return (
    <div className='mt-[20px]'>
      {/* main banner starts */}
      <div className="main-banner" id="top">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="left-content">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center p-6 text-white">
                      <h4 className="text-[60px] font-bold mb-2 text-white">We Are ULTRAS.</h4>
                      <div className="inline-block border border-white-800 hover:bg-white mt-3 hover:text-gray-800 transition-all duration-300">
                        <a href="#" className="px-6 py-2 inline-block">Purchase Now!</a>
                      </div>
                    </div>
                  </div>
                  <img src={img1} alt="" className="w-full" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <div className="right-content">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="right-first-image">
                      <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold mb-1">Women</h4>
                            <span>Best Clothes For Women</span>
                          </div>
                        </div>
                        <div className="w-[90%] h-[90%] m-4 ml-5 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center text-white p-4">
                            <h4 className="text-xl font-bold mb-2">Women</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="inline-block border border-white hover:bg-white hover:text-black transition-all duration-300">
                              <a href="#" className="px-4 py-2 inline-block">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={img2} className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="right-first-image">
                      <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold mb-1">Men</h4>
                            <span>Best Clothes For Men</span>
                          </div>
                        </div>
                        <div className="w-[90%] h-[90%] m-4 ml-5 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center text-white p-4">
                            <h4 className="text-xl font-bold mb-2">Men</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="inline-block border border-white hover:bg-white hover:text-black transition-all duration-300">
                              <a href="#" className="px-4 py-2 inline-block">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={img3} className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="right-first-image">
                      <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold mb-1">Kids</h4>
                            <span>Best Clothes For Kids</span>
                          </div>
                        </div>
                        <div className="w-[90%] h-[90%] m-4 ml-5 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center text-white p-4">
                            <h4 className="text-xl font-bold mb-2">Kids</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="inline-block border border-white hover:bg-white hover:text-black transition-all duration-300">
                              <a href="#" className="px-4 py-2 inline-block">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={img4} className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-2">
                    <div className="right-first-image">
                      <div className="relative overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="text-center text-white">
                            <h4 className="text-xl font-bold mb-1">Accessories</h4>
                            <span>Best Trend Accessories</span>
                          </div>
                        </div>
                        <div className="w-[90%] h-[90%] m-4 ml-5 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="text-center text-white p-4">
                            <h4 className="text-xl font-bold mb-2">Accessories</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                            <div className="inline-block border border-white hover:bg-white hover:text-black transition-all duration-300">
                              <a href="#" className="px-4 py-2 inline-block">Discover More</a>
                            </div>
                          </div>
                        </div>
                        <img src={img5} className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main banner ends */}

      {/* new arrivals starts */}
      <section id="related-products" className="py-10 overflow-hidden relative ">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-wrap justify-between items-center mt-10 mb-2 ml-16 mr-16">
            <h4 className="uppercase text-3xl font-semibold">Our New Arrivals</h4>
            <span className="text-black-600 text-2xl underline-offset-1 hover:underline p-6">View All Products</span>
          </div>

          <div data-aos="zoom-out" className='px-10'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={2}
              // pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >

              {products.map((product) => (
                <SwiperSlide key={product.id} className=''>
                  <div className="group mx-5 overflow-hidden rounded-lg p-2">
                    <div className="relative overflow-hidden scale-100 transition-transform duration-700 hover:scale-95">
                      <span>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full transition-transform duration-300"
                        />
                      </span>
                      <a
                        href="/"
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 invisible group-hover:visible"
                      >
                        <FaRegHeart />
                      </a>
                    </div>

                    <div className="pt-4">
                      <h5 className="uppercase text-lg font-medium">
                        <a href="/" className="hover:underline">{product.title}</a>
                      </h5>
                      <div className="mt-2 group relative h-6">
                        <span className=" absolute left-0 top-0 text-2xl group-hover:opacity-0 transition-opacity duration-300">{product.price}</span>
                        <span className="font-semibold absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Add to cart</span>
                      </div>
                    </div>


                  </div>
                </SwiperSlide>
              ))}

              {/* <div className="swiper-pagination mt-4"></div> */}
            </Swiper>

            {/* Custom navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 swiper-button-prev cursor-pointer text-white">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-[#000]'>
                <use className='text-gray-700' xlinkHref="#arrow-left" fill='currentColor' />
              </svg>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 swiper-button-next cursor-pointer">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-gray-600'>
                <use xlinkHref="#arrow-right" fill='currentColor' />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* new arrivals ends */}

      {/* dicount section starts*/}
      <section className="py-8 md:py-16">
        <div className="mx-auto px-4 max-w-7xl">
          <div className="relative bg-gray-100 p-12 rounded overflow-hidden">
            <div className="absolute top-9 left-[53%] text-9xl font-bold text-gray-300 opacity-40 leading-none">
              10% OFF
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-7/12 mb-4 md:mb-0">
                <div>
                  <h2 className="text-4xl font-bold mb-2">10% OFF Discount Coupons</h2>
                  <p className="m-0 text-[18px] text-gray-500">Subscribe us to get 10% OFF on all the purchases</p>
                </div>
              </div>
              <div className="w-full md:w-3/12">
                <div className='group'>
                  <a
                    href="#"
                    className="inline-block z-50 absolute bg-black overflow-hidden duration-500 text-white text-xl top-14 font-medium uppercase px-20 py-6 rounded transition-all"
                  >
                    <span className='absolute top-2 left-8 z-50'>Email me</span>
                    <a
                      href="#"
                      className="inline-block z- absolute bg-red-500 top-0 px-24 py-7 rounded translate-x-[-142%] group-hover:translate-x-[-50%] transition-all"
                    >
                    </a>


                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* dicount section ends */}

      {/* Featured starts */}
      <section id="related-products" className="py-10 overflow-hidden relative my-0">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-wrap justify-between items-center mb-2 ml-16 mr-16">
            <h4 className="uppercase text-3xl font-semibold">Featured Products</h4>
            <span className="text-black-600 text-2xl underline-offset-1 hover:underline p-6">View All Products</span>
          </div>

          <div data-aos="zoom-out" className='px-10'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={2}
              // pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >

              {products1.map((product) => (
                <SwiperSlide key={product.id} className=''>
                  <div className="group mx-5 overflow-hidden rounded-lg p-2">
                    <div className="relative overflow-hidden scale-100 transition-transform duration-700 hover:scale-95">
                      <span>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full transition-transform duration-300"
                        />
                      </span>
                      <a
                        href="/"
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 invisible group-hover:visible"
                      >
                        <FaRegHeart />
                      </a>
                    </div>

                    <div className="pt-4">
                      <h5 className="uppercase text-lg font-medium">
                        <a href="/" className="hover:underline">{product.title}</a>
                      </h5>
                      <div className="mt-2 group relative h-6">
                        <span className=" absolute left-0 top-0 text-2xl group-hover:opacity-0 transition-opacity duration-300">{product.price}</span>
                        <span className="font-semibold absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Add to cart</span>
                      </div>
                    </div>


                  </div>
                </SwiperSlide>
              ))}

              {/* <div className="swiper-pagination mt-4"></div> */}
            </Swiper>

            {/* Custom navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 swiper-button-prev cursor-pointer text-white">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-[#000]'>
                <use className='text-gray-700' xlinkHref="#arrow-left" fill='currentColor' />
              </svg>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 swiper-button-next cursor-pointer">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-gray-600'>
                <use xlinkHref="#arrow-right" fill='currentColor' />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Featured ends */}


      {/* blog section starts */}
       <section id="blog" className="py-12 pt-0 mx-16 mt-16">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="uppercase text-3xl font-bold text-center w-full md:w-auto">
            Our Blogs & Events
          </h3>
          <a
            href="index.html"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg mt-4 md:mt-0 hover:bg-primary/90 transition"
          >
            <span>More Blog</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex flex-wrap mt-10 -mx-2">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`px-2 mb-4 ${
                post.wide ? "w-full lg:w-8/12" : "w-full md:w-6/12 lg:w-4/12"
              }`}
              data-aos="fade-up"
            >
              <div className="relative overflow-hidden rounded-2xl group pb-7">
                <img
                  src={post.image}
                  alt="img"
                  className="w-full h-auto rounded-2xl object-cover opacity-100 group-hover:opacity-80 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white w-full transition-all duration-500">
                  <a href="#">
                    <span className="bg-secondary text-black px-2 mb-9  pb-1 py-0 text-xl rounded-md bg-slate-50 bg-opacity-55 ">
                      {post.category}
                    </span>
                  </a>
                  <h4 className="text-3xl font-semibold mt-4 leading-tight hover:text-orange-200 duration-700">
                    <a href="index.html">{post.title}</a>
                  </h4>
                  <p className="flex items-center gap-2 mt-4 text-sm">
                    <Clock size={18} /> {post.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* blog section ends */}

      {/* you may ike starts */}
      <section id="related-products" className="py-10 overflow-hidden relative">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="flex flex-wrap justify-between items-center mb-2 ml-16 mr-16">
            <h4 className="uppercase text-3xl font-semibold">Related Products</h4>
            <span className="text-black-600 text-2xl underline-offset-1 hover:underline p-6">View All Products</span>
          </div>

          <div data-aos="zoom-out" className='px-10'>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={2}
              // pagination={{ clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >

              {products2.map((product) => (
                <SwiperSlide key={product.id} className=''>
                  <div className="group mx-5 overflow-hidden rounded-lg p-2">
                    <div className="relative overflow-hidden scale-100 transition-transform duration-700 hover:scale-95">
                      <span>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full transition-transform duration-300"
                        />
                      </span>
                      <a
                        href="/"
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 invisible group-hover:visible"
                      >
                        <FaRegHeart />
                      </a>
                    </div>

                    <div className="pt-4">
                      <h5 className="uppercase text-lg font-medium">
                        <a href="/" className="hover:underline">{product.title}</a>
                      </h5>
                      <div className="mt-2 group relative h-6">
                        <span className=" absolute left-0 top-0 text-2xl group-hover:opacity-0 transition-opacity duration-300">{product.price}</span>
                        <span className="font-semibold absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Add to cart</span>
                      </div>
                    </div>


                  </div>
                </SwiperSlide>
              ))}

              {/* <div className="swiper-pagination mt-4"></div> */}
            </Swiper>

            {/* Custom navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 swiper-button-prev cursor-pointer text-white">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-[#000]'>
                <use className='text-gray-700' xlinkHref="#arrow-left" fill='currentColor' />
              </svg>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 swiper-button-next cursor-pointer">
              <svg width="50" height="50" viewBox="0 0 24 24" className='text-gray-600'>
                <use xlinkHref="#arrow-right" fill='currentColor' />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* you may ike ends */}

      {/* features starts */}
      <section className="features py-20 mx-16 mt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div
            className="flex flex-col justify-center items-center text-center py-5"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div>
            <CiCalendar className='font-bold text-6xl '/>
            </div>
            <h4 className="text-3xl font-semibold capitalize my-3">
              Book An Appointment
            </h4>
            <p className="text-xl">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center text-center py-5"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <div>
            <BsHandbag className='font-bold text-6xl '/>
            </div>
            <h4 className="text-3xl font-semibold capitalize my-3">
              Pick up in store
            </h4>
            <p className="text-xl">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center text-center py-5"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            <div>
            <CiGift className='font-bold text-6xl '/>
            </div>
            <h4 className="text-3xl font-semibold capitalize my-3">
              Special packaging
            </h4>
            <p className="text-xl">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>

          <div
            className="flex flex-col justify-center items-center text-center py-5"
            data-aos="fade-in"
            data-aos-delay="900"
          >
            <div>
            <BsGlobeAmericas className='font-bold text-6xl '/>
            </div>
            <h4 className="text-3xl font-semibold capitalize my-3">
              Free global returns
            </h4>
            <p className="text-xl">
              At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* features ends */}

      {/* instagram starts */}
      <div className="instagram">
      <div className="container-fluid">
        <div className="flex flex-wrap">
          {/* Instagram Item 1 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img26})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
               }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Item 2 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up" data-aos-delay="100">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img27})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Item 3 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up" data-aos-delay="200">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img28})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Item 4 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up" data-aos-delay="300">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img29})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',  }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3 ">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Item 5 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up" data-aos-delay="400">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img30})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center', }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Item 6 */}
          <div className="lg:w-1/6 md:w-1/3 sm:w-1/3 p-0" data-aos="fade-up" data-aos-delay="500">
            <div
              className="group instagram__item bg-cover bg-center h-[350px]"
              style={{ backgroundImage: `url(${img31})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',  }}
            >
              <div className="instagram__text absolute flex flex-col justify-center items-center bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full h-full invisible group-hover:visible duration-300 transition-transform">
              <FaInstagram className="text-2xl"/>
                <a href="#" className="text-2xl mt-3 ">
                  @ULTRAS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* instagram ends */}

    </div>
  )
}
