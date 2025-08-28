"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faBookAtlas, faBookBookmark, faBookDead, faBookJournalWhills, faBookMedical, faBookOpen, faBookOpenReader, faBookQuran, faBookSkull, faEnvelope, faGreaterThan, faGroupArrowsRotate, faHome, faI, faIcicles, faInfoCircle, faLocationDot, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Banner() {
    return (
        <section className="">
            <div className="container bg-gray-200 flex justify-between px-5 mt-10 mb-20 mx-auto">
                <div className="px-5 space-y-4">
                    <div className="flex items-center py-3 space-x-2">
                        <img src="image/Check.png" alt="" />
                        <h2 className="font-medium font-bold text-xl">Unleash Your Potential</h2>
                    </div>
                    <h1 className="font-xl font-bold text-5xl ">Become an IT Pro & <br /> Rule the </h1>
                    <h1 className="font-xl font-bold text-5xl text-pink-700 ">Digital World</h1>
                    <h3 className="font-bold font-xl text-lg">With a vision to turn manpower into assets, MIT Solution Computer Training Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.</h3>
                    <div className="flex py-3 space-x-4">
                        <button><Link href="/course" className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Browse Course</Link></button>
                        <button className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Join Free Seminar</button>
                    </div>
                </div>
                <div className="px-5 w-320">
                    <img src="image/pngwing.com (2).png" alt="" className="w-full"/>
                </div>
            </div>
            <div className="flex justify-around bg-gray-200 mb-15 px-25">
                <div className=" flex flex-col space-x-3 space-y-8 px-5">
                    <div className="py-3">
                        <h1 className="font-xl font-bold text-3xl">Practical Projects and Innovation are Our Teaching <br />Specialty</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex space-x-4 items-center border border-pink-700 p-5 rounded-xl h-30">
                            <img src="image/bag.png" alt="" className="w-13" />
                            <h1 className="text-lg font-semibold">
                            Every Class Comes With <br />Homework Sheets
                            </h1>
                        </div>

                        <div className="flex space-x-4 items-center border border-purple-700 p-5 rounded-xl h-30">
                            <img src="image/meet.png" alt="" className="w-13" />
                            <h1 className="text-lg font-semibold">
                            Daily Live <br />Support
                            </h1>
                        </div>

                        <div className="flex space-x-4 items-center border border-blue-700 p-5 rounded-xl h-30">
                            <img src="image/play.png" alt="" className="w-13" />
                            <h1 className="text-lg font-semibold">
                            Recorded Class <br />Videos
                            </h1>
                        </div>

                        <div className="flex space-x-4 items-center border border-green-700 p-5 rounded-xl h-30">
                            <img src="image/certificate01.png" alt="" className="w-13" />
                            <h1 className="text-lg font-semibold">
                            At the End of the Course <br />Certificate
                            </h1>
                        </div>
                    </div>

                    <div>
                        <button><Link href="/course" className="bg-blue-700 hover:bg-pink-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"> View Courses <FontAwesomeIcon icon={faArrowRight} /> </Link></button>
                    </div>
                </div>
                <div className="px-5 w-180">
                    <img src="image/pngwing.com (4).png" alt="" className="w-full" />
                </div>
            </div>
            <div className= "space-y-18 mb-28">
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
            <div className="flex justify-evenly px-15 ">
                <div className="w-full">
                    <img src="image/img14.png" alt="" className="w-full"/>
                </div>
                <div className="px-5 w-250 space-y-8 mb-20">
                    <h1 className="font-bold font-xl text-4xl">You can also be one of our</h1>
                    <h1 className="font-bold font-xl text-4xl">Community Member!!</h1>
                    <h1 className="font-bold font-medium text-xl">Ready to improve your skills? Join our courses and become a part of our community where you can learn and help each other. Don't miss the opportunity, start your journey today!</h1>
                    <div className="space-x-8">
                        <button><Link href="https://wa.me/01814419521" className="bg-green-700 hover:bg-green-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl">Send Message <FontAwesomeIcon icon={faWhatsapp} /> </Link></button>
                        <button><Link href="https://www.facebook.com/mitsolutioncomputertraininginstitut" className="bg-blue-700 hover:bg-blue-600 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl">Join Now <FontAwesomeIcon icon={faFacebook} /> </Link></button>
                    </div>
                </div>
            </div>
            <div className="flex justify-around bg-gray-200 mb-20">
                <div className="space-y-7 py-8">
                    <h1 className="font-bold font-lg text-xl text-red-500">15 Years of Excellence</h1>
                    <h1 className="font-bold font-2xl text-5xl">Shaping World-Class IT <br />Experts</h1>
                    <p className="font-bold font-lg text-md">MIT Solution has been working with a vision to create IT experts for the <br />past 15 years. In a fast pacing world, where every sector relies on <br />technology, you need to develop IT skills to secure a better future. With <br />the utmost dedication, we have been able to make more than 2500 IT <br /> experts who are currently working in different sectors. </p>
                    <div className="space-x-8">
                        <button><Link href="/course" className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Browse Course</Link></button>
                        <button className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Learn more</button>
                    </div>
                </div>
                <div className=" px-5 w-130">
                    <img src="image/pngwing.com (2).png" alt="" className="w-full" />
                </div>
            </div>
            <div className="flex justify-around bg-gray-200 px-5 mb-20">
                <div className="space-y-7 px-10 py-10">
                    <h1 className="font-bold font-2xl text-5xl">Join Our Free <br /> Seminars</h1>
                    <p className="font-bold font-lg text-lg" >Need guidelines to choose a suitable course? Join our free <br />seminars to consult with our experts, they will guide you <br /> to pick the course that matches your interest and discuss <br />the career prospects. </p>
                    <button><Link href="/course" className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} />Free Seminar Schedule</Link></button>
                </div>
                <div className="px-5 w-150">
                    <img src="image/pngwing.com (3).png" alt="" className="w-full" />
                </div>
            </div>
            <div className="bg-gray-200 p-8 space-y-10 mb-20 ">
                <h1 className="font-bold font-xl text-5xl text-center">FAQ</h1>
                <p className="font-bold font-xl text-2xl text-center">Have any questions? Ask us anything.</p>
                <div className="space-y-6">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        
                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        What courses are suitable for <br /> me?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Will you provide class <br /> videos?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Where is your location?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Can I take the course online?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        What is the duration of the <br /> courses?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Will you provide career <br /> guidance along with the <br /> course?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Will I have access to the lab <br /> at any time to practice?
                        </div>

                        <div className="shadow-xl border-2 rounded-xl p-6 flex items-center justify-center h-40">
                        Can I become self-employed <br /> after completing the <br /> courses?
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}