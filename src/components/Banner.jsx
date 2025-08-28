"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBook, faBookAtlas, faBookBookmark, faBookDead, faBookJournalWhills, faBookMedical, faBookOpen, faBookOpenReader, faBookQuran, faBookSkull, faEnvelope, faGreaterThan, faGroupArrowsRotate, faHome, faI, faIcicles, faInfoCircle, faLocationDot, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Banner() {
    return (
        <>
            <section className="bg-gray-200 mt-10 mb-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-5 gap-10">
                    
                    {/* ===== Left: Text Content ===== */}
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center space-x-2"><img src="/image/Check.png" alt="Check Icon" className="h-8 w-8"/><h2 className="text-xl md:text-2xl font-bold">Unleash Your Potential</h2>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">Become an IT Pro & <br className="hidden md:block"/> <span className="text-pink-700">Rule the Digital World</span>
                        </h1>

                        <p className="text-base md:text-lg font-medium text-gray-800">With a vision to turn manpower into assets, MIT Solution Computer Training Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.</p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4"><Link href="/course" className="bg-pink-700 text-white font-bold text-lg px-4 py-2 rounded-xl flex items-center justify-center hover:bg-pink-800 transition"><FontAwesomeIcon icon={faBookOpen} className="mr-2"/> Browse Course</Link><button className="bg-pink-700 text-white font-bold text-lg px-4 py-2 rounded-xl flex items-center justify-center hover:bg-pink-800 transition"><FontAwesomeIcon icon={faBookOpen} className="mr-2"/> Join Free Seminar</button>
                        </div>
                    </div>

                    {/* ===== Right: Image ===== */}
                    <div className="flex-1 w-full md:w-auto"><img src="/image/pngwing.com (2).png" alt="Hero Image" className="w-full h-auto object-contain"/>
                    </div>

                </div>
            </section>
    </>
    );
}