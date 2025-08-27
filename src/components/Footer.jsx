"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faInfoCircle, faLocationDot, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedinIn, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer >
            <div className="bg-blue-700 text-white p-4 text-center">
                <div className="container mx-auto space-y-4 mb-25">
                    <h1 className="text-4xl font-xl font-bold">Admission Is Going On</h1>
                    <p className="text-xl font-medium mb-8">Enroll to any offline or online course now, take one step ahead towards a complete career.</p>
                    <div className="flex justify-center space-x-4">
                        <button className="border hover:bg-pink-600 text-xl border-white text-white font-xl font-bold px-3 py-1.5 rounded-xl">Join Free Seminar</button>
                        <button><Link href="/course" className="border hover:bg-pink-600 text-xl border-white text-white font-xl font-bold px-3 py-1.5 rounded-xl">Browse Course</Link></button>
                    </div>
                </div>
                <div className="flex items-center justify-around font-lg font-bold text-2xl space-x-5 mb-4">
                    <div>Contact</div>
                    <div>Ouick Links</div>
                    <div>Popular Courses</div>
                    <div>Others</div>
                </div>
                <div className="flex text-left justify-around space-x-5">
                <div className="flex flex-col space-y-13">
                    {/* Head Office with location icon */}
                    <div className="flex items-start space-x-3">
                        <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                        <div>
                        <a href="/contact" className="font-semibold">Head Office</a>
                        <p>
                            Harun Market 1st Floor,<br />
                            Noyarhat Bazar,<br />
                            Oxygen-Quiesh Road,<br />
                            Bayezid, Chattogram
                        </p>
                        </div>
                    </div>

                    {/* First number with WhatsApp */}
                    <div>
                        <div className="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faWhatsapp} className="mt-1" />
                            <a href="tel:01814419521">01814-419521</a>
                        </div>

                        {/* Second number with phone */}
                        <div className="flex items-center space-x-3">
                            <FontAwesomeIcon icon={faPhone} className="mt-1" />
                            <a href="tel:01610233810">01610-233810</a>
                        </div>
                    </div>

                    {/* Email with envelope */}
                    <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faEnvelope} className="mt-1" />
                        <a href="mailto:mitsolution21@gmail.com">mitsolution21@gmail.com</a>
                    </div>
                    </div>
                    <div className="space-y-3">
                        <p>Free Seminar Schedule</p>
                        <p>Mentors</p>
                        <p>Success Story</p>
                        <p>Our Gallary</p>
                        <p>FAQ</p>
                        <p>Blog</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="space-y-3">
                        <p>Computer Office Application (BTEB / TICTB)</p>
                        <p>Computer Office Management</p>
                        <p>Professional Graphic Design</p>
                        <p>Master of Web Development</p>
                        <p>Professional Digital Marketing</p>
                        <p>Freelancing Marketplace</p>
                        <p>Computer Hardware</p>
                        <p>Video Editing EDIUS</p>
                    </div>
                    <div className="space-y-4.5">
                        <p>About Us</p>
                        <p>Our Facility</p>
                        <p>Our Achievement</p>
                        <p>Career Placement</p>
                        <p>Freelancing</p>
                        <p>Students Feedback</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
            <div className="mb-32">
                <div>
                    <h1 className="text-4xl text-center font-bold font-medium m-15">Our Payment Merchant</h1>
                </div>
                <div className="flex space-x-4 items-center justify-around">
                    <div className="shadow-2xl space-y-4 text-center p-8 rounded-xl">
                        <img src="image/Bkash-Logo.png" alt="" className="w-50 h-20" />
                        <h1 className="text-3xl font-bold font-medium">01814419521</h1>
                    </div>
                    <div className="shadow-2xl space-y-4 text-center p-8 rounded-xl">
                        <img src="image/nagad.png" alt="" className="w-55 h-20" />
                        <h1 className="text-3xl font-bold font-medium">01814419521</h1>
                    </div>
                    <div className="shadow-2xl space-y-4 text-center p-8 rounded-xl">
                        <img src="image/rocket.png" alt="" className="w-48 h-20" />
                        <h1 className="text-3xl font-bold font-medium">01814419521</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-around text-center items-center">
                <img src="image/website logo.png" alt="" />
                <p>Copyright Copy& 2025 All right MIT Solution </p>
                <div className="space-x-3 text-2xl">
                    <a href="" className=""><FontAwesomeIcon  icon={faFacebook} /></a>
                    <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
            </div>
            <div className="text-black text-xl mt-8 font-lg font-bold text-center ">
                <h1>This website Develop by <a href=""><strong><i>Mohammad Hossain Tanvir</i></strong></a></h1>
            </div>
        </footer>
    );
}