"use client";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="">
            <div>
                <div className="px-5">
                    <h2>Unleash Your Potential</h2>
                    <h1 className="font-medium font-bold text-4xl ">Become an IT Pro & Rule the </h1>
                    <h1 className="font-medium font-bold text-4xl ">Digital World</h1>
                    <h3>With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.</h3>
                    <div className="flex space-x-4">
                        <button><Link href="/course" className="bg-pink-700 text-xl text-center font-medium text-white px-3 py-2 rounded-xl">Browse Course</Link></button>
                        <button className="bg-pink-700 text-xl text-center font-medium text-white px-3 py-2 rounded-xl">Join Free Seminar</button>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
}