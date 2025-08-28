"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope,faLocationDot,faBars,faTimes,faBookOpen,} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-200 shadow-md">
      {/* ===== Top Info Bar (Desktop Only) ===== */}
      <div className="hidden md:flex justify-between items-center bg-blue-600 text-white text-sm px-4 py-2">
        <div className="space-x-6 flex">
          <a href="https://wa.me/+8801814419521" className="hover:underline">
            <FontAwesomeIcon icon={faWhatsapp} /> 01814-419521
          </a>
          <a href="mailto:mitsolution21@gmail.com" className="hover:underline">
            <FontAwesomeIcon icon={faEnvelope} /> mitsolution21@gmail.com
          </a>
        </div>
        <div>
          <a href="#" className="hover:underline">
            <FontAwesomeIcon icon={faLocationDot} /> Harun Market 1st Floor,
            Noyarhat Bazar, Oxygen-Quiesh Road, Bayezid, Chattogram
          </a>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Mobile Menu Button (Left) */}
        <button
          className="md:hidden absolute left-4 text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>

        {/* Desktop Layout: Logo + Menu + Button */}
        <div className="flex-1 hidden md:flex items-center justify-between gap-x-12">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/image/website logo.png"
              alt="Website Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Menu Items */}
          <ul className="flex items-center font-semibold text-lg space-x-8">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/success">Success Story</Link></li>
            <li><Link href="/freelanching">Freelancing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Browse Button */}
          <Link
            href="/course"
            className="bg-pink-700 text-lg font-bold text-white px-4 py-2 rounded-xl hover:bg-pink-800 transition"
          >
            <FontAwesomeIcon icon={faBookOpen} /> Browse Course
          </Link>
        </div>

        {/* Mobile Logo (Center by default) */}
        <div className="flex-1 flex justify-center md:hidden">
          <Link href="/">
            <img
              src="/image/website logo.png"
              alt="Website Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </div>

      {/* ===== Mobile Menu Open (Logo + Menu Items) ===== */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white w-full py-6 space-y-6">
          {/* Logo on top */}
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="/image/Leaflat-4-color-003.png"
              alt="Website Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Menu Items */}
          <ul className="flex flex-col items-center space-y-4 text-lg font-semibold">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/success" onClick={() => setIsOpen(false)}>Success Story</Link></li>
            <li><Link href="/freelanching" onClick={() => setIsOpen(false)}>Freelancing</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <Link
                href="/course"
                className="bg-pink-700 text-white px-4 py-2 rounded-xl hover:bg-pink-800 transition"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faBookOpen} /> Browse Course
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
