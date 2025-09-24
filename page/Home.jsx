'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Bannerone from "@/asset/banner.png";
import Flight from "@/asset/1.svg";
import Aboutus from "@/asset/about.png";
import s1 from "@/asset/s1.jpg";
import s2 from "@/asset/s2.jpg";
import s3 from "@/asset/s3.jpg";
import b1 from "@/asset/b1.svg";
import b2 from "@/asset/t2.svg";
import c1 from "@/asset/country/1.svg";
import c2 from "@/asset/country/2.svg";
import c3 from "@/asset/country/3.svg";
import c4 from "@/asset/country/4.svg";
import c5 from "@/asset/country/5.svg";
import c6 from "@/asset/country/6.svg";
import c7 from "@/asset/country/7.svg";
import c8 from "@/asset/country/8.svg";
import c9 from "@/asset/country/9.svg";
import c10 from "@/asset/country/10.svg";
import c11 from "@/asset/country/11.svg";
import c12 from "@/asset/country/12.svg";
import { BadgeCheck, BookOpen, BrainCircuit, CheckCircle, Globe2, Plane, User2 } from 'lucide-react';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQSection from '@/components/FAQSection';
import Branches from '@/components/Branchs';
import BlogSection from '@/components/Blogsection';

const features = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-blue-600" />,
        title: "Comprehensive Solutions",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
    {
        icon: <BadgeCheck className="h-8 w-8 text-yellow-600" />,
        title: "Transparent Processes",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
    {
        icon: <User2 className="h-8 w-8 text-purple-600" />,
        title: "Expert Guidance",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.",
    },
];

const services = [
    {
        title: "Study Abroad",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        image: s1, // replace with your image
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
        title: "Holiday Packages",
        icon: <Plane className="w-6 h-6 text-white" />,
        image: s2,
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
        title: "Immigration",
        icon: <Globe2 className="w-6 h-6 text-white" />,
        image: s3,
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
];

const TABS = [
    { id: 1, label: 'Study Abroad' },
    { id: 2, label: 'Holiday Packages' },
    { id: 3, label: 'Immigration' },
];

const COUNTRIES = {
    1: [ // Study Abroad
        { name: 'Switzerland', flag: c1 },
        { name: 'Costa Rica', flag: c2 },
        { name: 'Panama', flag: c3 },
        { name: 'Sweden', flag: c4 },
        { name: 'Tunisia', flag: c5 },
        { name: 'Colombia', flag: c6 },
        { name: 'Brazil', flag: c7 },
        { name: 'Mexico', flag: c8 },
        { name: 'Germany', flag: c9 },
        { name: 'Belgium', flag: c10 },
        { name: 'Senegal', flag: c11 },
        { name: 'Poland', flag: c12 },
    ],
    2: [], // Holiday Packages (add as needed)
    3: [], // Immigration (add as needed)
};
function Home() {
    const tabs = ['Our Mission', 'Our Vision', 'Why Choose Us'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [selectedTab, setSelectedTab] = useState(1); // ✅ Changed from activeTab


    const tabContents = {
        'Our Mission': 'Our mission is to provide exceptional global education opportunities to every student.',
        'Our Vision': 'Our vision is to be the most trusted global education partner.',
        'Why Choose Us': 'We offer personalized support, financial assistance, and guaranteed graduation pathways.',
    };


    return (
        <div className='overflow-x-hidden'>
            <section className="bg-[#fff8f3] pt-12 md:pt-20 pb-16" id="home">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 gap-10">
                    {/* LEFT TEXT */}
                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Your Gateway to <br />
                            <span className="text-red-600">Study</span>,{' '}
                            <span className="text-red-600">Holiday</span>, and <br />
                            <span className="text-red-600">New Beginnings!</span>
                        </h1>

                        <p className="mt-4 text-gray-600 text-base md:text-lg">
                            Explore Education, Enjoy Vacations, Build a New Life – All Under One Roof
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="mt-6 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full text-sm font-semibold"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="md:w-1/2 relative flex justify-center"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src={Bannerone} // your image in public folder
                            alt="Student Travel Girl"
                            width={400}
                            height={400}
                            className="rounded-xl z-10 relative"
                        />

                        {/* Animated Plane Icon */}
                        <motion.div
                            className="absolute top-[-30px] right-[-20px]"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 10, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <Image src={Flight} alt="Plane" width={40} height={40} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>


            <section className="bg-white py-16 px-4 md:px-8" id='about-us'>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    {/* LEFT IMAGES */}
                    <motion.div
                        className="relative flex-1 grid grid-cols-1 gap-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src={Aboutus}
                            alt="Graduation"
                            width={500}
                            height={400}
                            className="object-cover w-full h-auto"
                        />
                    </motion.div>

                    {/* RIGHT TEXT CONTENT */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-red-600 uppercase text-sm font-semibold tracking-widest">About Us</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-2">
                            Your Gateway to Global Experiences: <span className="text-red-600">Unveiling Trivasia</span>
                        </h2>

                        {/* Tabs */}
                        <div className="flex flex-wrap gap-4 mt-6 mb-4 text-sm sm:text-base font-medium text-gray-600">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`border-b-2 pb-1 transition ${activeTab === tab ? 'border-red-600 text-red-600' : 'border-transparent hover:text-red-600'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                            {tabContents[activeTab]}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-800">
                                <CheckCircle className="w-5 h-5 text-red-600" />
                                <span>100% Graduation Assistance</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-800">
                                <CheckCircle className="w-5 h-5 text-red-600" />
                                <span>Financial Support</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>


            <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5 items-center">

                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-red-500 font-semibold uppercase tracking-wide">Why Choose Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Explore Your Global <br />
                            <span className="text-red-600">Horizons with Us!</span>
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-md">
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia Neque porro
                        </p>
                    </motion.div>

                    {/* Right Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-start"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-16 px-4 md:px-12 lg:px-20 bg-white text-gray-800" id="services">
                <div className="text-center md:text-start flex flex-wrap mb-12">
                    <div>
                        <p className="text-sm tracking-widest text-red-600 uppercase">Services</p>
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            What our <span className="text-red-600">Agency</span> <br /> Made for You
                        </h2>
                    </div>
                    <p className="text-sm mt-4 max-w-2xl mx-auto">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Neque porro quisquam  Neque porro quisquam est, qui dolorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-52 md:h-64">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 p-2 rounded-full shadow">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                                <a
                                    href="#"
                                    className="text-red-600 font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                                >
                                    Explore More <span>→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6 sm:gap-10 items-center">

                    {/* 1st Box */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-red-600">15+</h2>
                        <p className="text-sm mt-1">Countries to Study Abroad</p>
                    </div>

                    {/* Flight Image */}
                    <Image src={b1} alt="Flight Path" className="w-20 h-20 sm:rotate-0 rotate-90" />

                    {/* 2nd Box */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-red-600">50+</h2>
                        <p className="text-sm mt-1">Jobs for Immigration</p>
                    </div>

                    {/* Flight Image */}
                    <Image src={b2} alt="Flight Path" className="w-20 h-20 sm:rotate-0 rotate-90" />

                    {/* 3rd Box */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-red-600">200+</h2>
                        <p className="text-sm mt-1">Packages for Trip</p>
                    </div>

                    {/* Flight Image */}
                    <Image src={b1} alt="Flight Path" className="w-20 h-20 sm:rotate-0 rotate-90" />

                    {/* 4th Box */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-red-600">500+</h2>
                        <p className="text-sm mt-1">Happy Customers</p>
                    </div>
                </div>
            </section>



            <section id="testimonials">
                <div className="max-w-7xl mx-auto px-4 py-10 ">
                    {/* Tabs */}
                    <div className="flex items-center gap-4 mb-6 border border-gray-200 rounded-xl p-5 w-fit bg-gray-50">
                        {TABS.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-medium ${selectedTab === tab.id
                                        ? 'bg-white text-black shadow'
                                        : 'text-gray-500'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Country Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {COUNTRIES[selectedTab]?.map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 hover:shadow-sm"
                            >
                                <Image
                                    src={country.flag}
                                    alt={country.name}
                                    className="w-6 h-6 rounded-full object-cover"
                                />
                                <span className="text-sm">{country.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <TestimonialSlider />
            </section>

            <section>
                <FAQSection />
            </section>

            <section>
                <Branches />
            </section>

            <section id="blog">
                <BlogSection/>
            </section>


        </div>
    )
}

export default Home
