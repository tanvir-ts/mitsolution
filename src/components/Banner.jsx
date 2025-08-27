"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faBookAtlas, faBookBookmark, faBookDead, faBookJournalWhills, faBookMedical, faBookOpen, faBookOpenReader, faBookQuran, faBookSkull, faEnvelope, faGreaterThan, faGroupArrowsRotate, faHome, faInfoCircle, faLocationDot, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Banner() {
    return (
        <section className="">
            <div className="container bg-gray-100 flex justify-between mb-8 mx-auto">
                <div className="px-5 space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src="image/Check.png" alt="" />
                        <h2 className="font-medium font-bold text-xl">Unleash Your Potential</h2>
                    </div>
                    <h1 className="font-xl font-bold text-5xl ">Become an IT Pro & <br /> Rule the </h1>
                    <h1 className="font-xl font-bold text-5xl text-pink-700 ">Digital World</h1>
                    <h3>With a vision to turn manpower into assets, MIT Solution Computer Training Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.</h3>
                    <div className="flex space-x-4">
                        <button><Link href="/course" className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Browse Course</Link></button>
                        <button className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Join Free Seminar</button>
                    </div>
                </div>
                <div className="px-5">
                    <img src="image/pngwing.com (2).png" alt="" />
                </div>
            </div>
            <div className="flex justify-around bg-gray-200 mb-15 px-20">
                <div className=" flex flex-col space-x-3 space-y-1 px-5">
                    <div className="py-5">
                        <h1 className="font-xl font-bold text-4xl">Practical Projects and Innovation <br />are Our Teaching Specialty</h1>
                    </div>
                    <div className="grid grid-cols-2 space-x-3 space-y-5 ">
                        <div className="flex space-x-4 items-center border border-pink-700 w-50 py-1 rounded-xl border-6">
                            <img src="image/bag.png" alt="" className="w-20" />
                            <h1>Every Class Comes With <br />Homework Sheets</h1>
                        </div>
                        <div className="flex space-x-4 items-center border border-purple-700 p-5 w-50 py-1 rounded-xl border-6">
                            <img src="image/meet.png" alt="" className="w-20" />
                            <h1>Daily Live <br />Support</h1>
                        </div>
                        <div className="flex space-x-4 items-center border border-blue-700 p-8 w-50 py-1 rounded-xl border-6">
                            <img src="image/play.png" alt="" className="w-20" />
                            <h1 className="py-3">Recorded Class <br />Videos</h1>
                        </div>
                        <div className="flex space-x-4 items-center border border-green-700 p-3 w-50 rounded-xl border-6">
                            <img src="image/certificate01.png" alt="" className="w-14" />
                            <h1>At the End of the Course <br />Certificate</h1>
                        </div>
                    </div>
                    <div>
                        <button><Link href="/course" className="bg-blue-700 hover:bg-pink-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"> View Courses <FontAwesomeIcon icon={faArrowRight} /> </Link></button>
                    </div>
                </div>
                <div className="px-5 w-150">
                    <img src="image/pngwing.com (2).png" alt="" className="w-full" />
                </div>
            </div>
            <div className= "space-y-18 mb-8">
                <div className="">
                    <h1 className="font-xl font-bold text-5xl text-center">Students, Mentors & Success Rate</h1>
                </div>
                <div className="flex justify-evenly ">
                    <div className="shadow-2xl border border-pink-700 border-3 space-y-4 text-center p-8 rounded-xl">
                        <h1 className="text-4xl font-bold font-xl text-pink-700">2500+</h1>
                        <h1 className="text-lg font-bold font-medium"> Successfull Students</h1>
                    </div>
                    <div className="shadow-2xl border border-pink-700 border-3 space-y-4 text-center p-8 rounded-xl">
                        <h1 className="text-4xl font-bold font-xl text-pink-700">5+</h1>
                        <h1 className="text-lg font-bold font-medium">Expert Freelancers</h1>
                    </div>
                    <div className="shadow-2xl border border-pink-700 border-3 space-y-4 text-center p-8 rounded-xl">
                        <h1 className="text-4xl font-bold font-xl text-pink-700">250+</h1>
                        <h1 className="text-lg font-bold font-medium">Skilled Job Holders</h1>
                    </div>
                    <div className="shadow-2xl border border-pink-700 border-3 space-y-4 text-center p-8 rounded-xl">
                        <h1 className="text-4xl font-bold font-xl text-pink-700">50+</h1>
                        <h1 className="text-lg font-bold font-medium">Industry Expert</h1>
                    </div>
                    <div className="shadow-2xl border border-pink-700 border-3 space-y-4 text-center p-8 rounded-xl">
                        <h1 className="text-4xl font-bold font-xl text-pink-700">87%</h1>
                        <h1 className="text-lg font-bold font-medium">Success Ratio</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div>
                    <img src="image/img14.png" alt="" />
                </div>
                <div className="px-5 space-y-6">
                    <h1>You can also be one of our</h1>
                    <h1>Community Member!!</h1>
                    <h1>Ready to improve your skills? Join our courses and become a part of our community where you can learn and help each other. Don't miss the opportunity, start your journey today!</h1>
                    <div>
                        <button><Link href="" className="bg-green-700 hover:bg-green-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl">Send Message <FontAwesomeIcon icon={faWhatsapp} /> </Link></button>
                        <button><Link href="" className="bg-blue-700 hover:bg-blue-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl">Join Now <FontAwesomeIcon icon={faFacebook} /> </Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
}