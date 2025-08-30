"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube,faLinkedinIn,faPinterest,faTwitter,faWhatsapp, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className=" text-white pt-12">

        <div className="bg-blue-600 py-3">
             {/* ===== Top CTA Section ===== */}
            <div className="container  mx-auto text-center px-4 space-y-6 md:space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold">Admission Is Going On</h1>
                <p className="text-lg md:text-xl font-medium">
                Enroll to any offline or online course now, take one step ahead towards a complete career.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                <button className="border border-white px-5 py-2 rounded-xl text-lg font-semibold hover:bg-pink-600 transition">
                    Join Free Seminar
                </button>
                <Link
                    href="/course"
                    className="border border-white px-5 py-2 rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
                >
                    Browse Course
                </Link>
                </div>
            </div>

            {/* ===== Four Column Info Section ===== */}
            <div className="container mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                {/* Column 1: Contact */}
                <div className="space-y-4">
                <h2 className="font-bold text-2xl mb-3">Contact</h2>
                <div className="flex items-start space-x-3">
                    <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                    <div>
                    <p className="font-semibold">Head Office</p>
                    <p className="text-lg">
                        Harun Market 1st Floor,<br />
                        Noyarhat Bazar,<br />
                        Oxygen-Quiesh Road,<br />
                        Bayezid, Chattogram
                    </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="https://wa.me/+8801814419521">01814-419521</a>
                    </div>
                    <div className="flex items-center mb-12 space-x-2">
                    <FontAwesomeIcon icon={faPhone} />
                    <a href="tel:01610233810">01610-233810</a>
                    </div>
                    <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:mitsolution21@gmail.com">mitsolution21@gmail.com</a>
                    </div>
                </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="space-y-2">
                <h2 className="font-bold text-2xl mb-3">Quick Links</h2>
                <ul className="space-y-1 text-lg">
                    <li>Free Seminar Schedule</li>
                    <li>Mentors</li>
                    <li>Success Story</li>
                    <li>Our Gallery</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>

                {/* Column 3: Popular Courses */}
                <div className="space-y-2">
                <h2 className="font-bold text-2xl mb-3">Popular Courses</h2>
                <ul className="space-y-1 text-lg">
                    <li>Computer Office Application (BTEB / TICTB)</li>
                    <li>Computer Office Management</li>
                    <li>Professional Graphic Design</li>
                    <li>Master of Web Development</li>
                    <li>Professional Digital Marketing</li>
                    <li>Freelancing Marketplace</li>
                    <li>Computer Hardware</li>
                    <li>Video Editing EDIUS</li>
                </ul>
                </div>

                {/* Column 4: Others */}
                <div className="space-y-2">
                <h2 className="font-bold text-2xl mb-3">Others</h2>
                <ul className="space-y-1 text-lg">
                    <li>About Us</li>
                    <li>Our Facility</li>
                    <li>Our Achievement</li>
                    <li>Career Placement</li>
                    <li>Freelancing</li>
                    <li>Students Feedback</li>
                    <li>Contact</li>
                </ul>
                </div>
            </div>
        </div>

      {/* ===== Payment Merchant Section ===== */}
      <div className="container text-black mx-auto mt-12 px-4">
        <h2 className="text-center text-4xl font-bold mb-6">Our Payment Merchant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white  shadow-xl rounded-xl flex flex-col items-center p-6 space-y-3">
            <img src="image/Bkash-Logo.png" alt="Bkash" className="h-20 w-auto" />
            <h3 className="text-xl font-bold">01814419521</h3>
          </div>
          <div className="bg-white  shadow-xl rounded-xl flex flex-col items-center p-6 space-y-3">
            <img src="image/nagad.png" alt="Nagad" className="h-20 w-auto" />
            <h3 className="text-xl font-bold">01814419521</h3>
          </div>
          <div className="bg-white  shadow-xl rounded-xl flex flex-col items-center p-6 space-y-3">
            <img src="image/rocket.png" alt="Rocket" className="h-20 w-auto" />
            <h3 className="text-xl font-bold">01814419521</h3>
          </div>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="mt-12 border border-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 space-y-4 md:space-y-0">
          <img src="image/website logo.png" alt="Logo" className="h-12 w-auto" />
          <p className="text-lg md:text-2xl font-bold text-red-500 text-center">
            &copy; 2021-2025 MIT Solution. All rights reserved.
          </p>
          <div className="flex text-black space-x-3 text-2xl md:text-3xl">
            <a href="https://www.facebook.com/mitsolutioncomputertraininginstitut/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.youtube.com/@mitsolution_cti_bd"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://www.instagram.com/mitsolution_cti_bd/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/mit-solution-computer-training-institute-b083b3284/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.pinterest.com/mitsolution21/"><FontAwesomeIcon icon={faPinterest} /></a>
            <a href="https://x.com/MdJakir53877"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
      </div>

      {/* ===== Developer Credit ===== */}
      <div className="text-center text-black mt-8 mb-4 text-xl md:text-2xl">
        This website developed by <a href="#" className="font-bold italic">Mohammad Hossain Tanvir</a>
      </div>
    </footer>
  );
}
