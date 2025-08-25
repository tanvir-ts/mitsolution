"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faInfoCircle, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-blue-700 text-white p-4 text-center">
            <div>
                <div className="container mx-auto space-y-4 mb-25">
                    <h1 className="text-4xl font-bold">Admission Is Going On</h1>
                    <p className="text-xl font-medium mb-8">Enroll to any online or offline course now, take one step ahead towards a complete career.</p>
                    <div className="flex justify-center space-x-4">
                        <button className="border text-xl border-white text-white font-medium px-3 py-1.5 rounded-xl">Join Free Seminar</button>
                        <button><Link href="course" className="border text-xl border-white text-white font-medium px-3 py-1.5 rounded-xl">Browse Course</Link></button>
                    </div>
                </div>
                <div className="flex items-center justify-around font-lg font-bold text-2xl space-x-5 mb-4">
                    <div>Contact</div>
                    <div>Ouick Links</div>
                    <div>Popular Courses</div>
                    <div>Others</div>
                </div>
                <div className="flex text-left justify-around space-x-5">
                    <div className="">
                        <h1>Head Office</h1>
                        <p className="mb-5">Harun Market 1st Floor,<br /> Noyarhat Bazar,<br /> Oxygen-Quiesh Road,<br /> Bayezid, Chattogram</p>
                        <div className=" flex flex-col space-x-5 mb-8">
                            <a href="tel:01814419521"><FontAwesomeIcon icon={faPhone} /> 01814-419521</a>
                            <a href="tel:01610233810"><FontAwesomeIcon icon={faPhone} /> 01610-233810</a>
                        </div>
                        <a href="mail:mitsolution21@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> mitsolution21@gmail.com</a>
                    </div>
                    <div className="">
                        <p>Free Seminar Schedule</p>
                        <p>Mentors</p>
                        <p>Success Story</p>
                        <p>Our Gallary</p>
                        <p>FAQ</p>
                        <p>Blog</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div>
                        <p>Computer Office Application (BTEB / TICTB)</p>
                        <p>Computer Office Management</p>
                        <p>Professional Graphic Design</p>
                        <p>Master of Web Development</p>
                        <p>Professional Digital Marketing</p>
                        <p>Freelancing Marketplace</p>
                        <p>Computer Hardware</p>
                        <p>Video Editing EDIUS</p>
                    </div>
                    <div>
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
            <div className="text-white text-xl mt-8 font-lg font-bold text-center ">
                <h1>This website Develop by Mohammad Hossain Tanvir</h1>
            </div>
        </footer>
    );
}