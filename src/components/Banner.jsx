"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBookAtlas, faBookBookmark, faBookDead, faBookJournalWhills, faBookMedical, faBookOpen, faBookOpenReader, faBookQuran, faBookSkull, faEnvelope, faHome, faInfoCircle, faLocationDot, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Banner() {
    return (
        <section className="">
            <div className="container flex justify-between mx-auto">
                <div className="px-5 space-y-4">
                    <div className="flex items-center space-x-2">
                        <img src="image/Check.png" alt="" />
                        <h2 className="font-medium font-bold text-xl">Unleash Your Potential</h2>
                    </div>
                    <h1 className="font-xl font-bold text-5xl ">Become an IT Pro & <br /> Rule the </h1>
                    <h1 className="font-xl font-bold text-5xl text-pink-700 ">Digital World</h1>
                    <h3>With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.</h3>
                    <div className="flex space-x-4">
                        <button><Link href="/course" className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Browse Course</Link></button>
                        <button className="bg-pink-700 text-xl text-center font-xl font-bold text-white px-3 py-2 rounded-xl"><FontAwesomeIcon icon={faBookOpen} /> Join Free Seminar</button>
                    </div>
                </div>
                <div>
                    <img src="image/pngwing.com (2).png" alt="" />
                </div>
            </div>
        </section>
    );
}