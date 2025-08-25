"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faInfoCircle, faLocationPin, faPhone, faUser, faVoicemail } from "@fortawesome/free-solid-svg-icons";


export default function Navber() {
    return (
        <nav className="bg-white text-black">
            <div className="">
                <div className="flex justify-between items-center bg-blue-600 text-white text-lg mb-2 px-3.5 py-1.5">
                    <div className="space-x-12">
                        <a href="tel:01814419521"><FontAwesomeIcon icon={faPhone} /> 01814-419521</a>
                        <a href="mail:mitsolution21@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> mitsolution21@gmail.com</a>
                    </div>
                    <a href=""><FontAwesomeIcon icon={faLocationPin} />Harun Market 1st Floor, Noyarhat Bazar, Oxygen-Quiesh Road, Bayezid, Chattogram</a>
                </div>
                <div className="container mx-auto flex justify-around mb-2">
                    <a href="/"><img src="image/website logo.png" alt="websitelogo"/></a>
                    <ul className="flex items-center font-xl text-lg font-bold space-x-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/success">Success Story</Link></li>
                        <li><Link href="/freelanching">Freelanching</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <button><Link href="course" className="bg-pink-700 text-xl font-medium text-white px-3 py-1.5 rounded-xl">Browse Course</Link></button>
                </div>
            </div>
        </nav>
    );
}


