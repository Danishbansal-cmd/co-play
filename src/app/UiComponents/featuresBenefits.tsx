"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
    { title: "Instant Matchmaking", desc: "Find players for any game in seconds." },
    { title: "Private & Public Lobbies", desc: "Keep it closed for friends or open for discovery." },
    { title: "In-Lobby Chat", desc: "Text, voice, or video chat directly inside your lobby." },
    { title: "Verified Gamers", desc: "Connect with players who share your skill level and goals." },
];

const benefits = [
    { title: "Save Time", desc: "Skip searching — get matched instantly without any hassle." },
    { title: "Build Community", desc: "Grow with like-minded players." },
    { title: "Stay Organized", desc: "Manage your lobbies easily." },
    { title: "Play Fair", desc: "Match with players of similar skill levels in different games." },
];

const ConcentricDisc = ({ size = 200 }) => {
  // Define radii for three circles based on size
  const r1 = size / 2;         // Outer radius
  const r2 = size * 0.37;      // Middle radius
  const r3 = size * 0.12;      // Inner radius

  return (
    <svg width={size} height={size}>
      {/* White ring */}
      <circle cx={size / 2} cy={size / 2} r={r1 * 0.85} fill="#fff" />
      {/* Gray ring */}
      <circle cx={size / 2} cy={size / 2} r={r2} fill="#888" />
      {/* White center */}
      <circle cx={size / 2} cy={size / 2} r={r2 * 0.65} fill="#fff" />
      {/* Black dot */}
      <circle cx={size / 2} cy={size / 2} r={r3} fill="#fff00" />
    </svg>
  );
};

export const FeaturesBenefits = () => {
    const [activeTab, setActiveTab] = useState("features");

    const slides = activeTab === "features" ? features : benefits;

    // Circular gradient background component
    const CircledShadedBackground: React.FC<{ size: number; className?: string }> = ({
        size,
        className,
    }) => {
        return (
            <div
                className={`${className} rounded-full bg-gradient-to-b from-zinc-800 to-black`}
                style={{ height: `${size}px`, width: `${size}px` }}
            ></div>
        );
    };

    return (
        <>
            {/* MAIN SECTION */}
            <div className="relative w-screen h-170 md:h-140">
                <div className="relative w-full h-full overflow-hidden">
                    <CircledShadedBackground size={200} className="absolute from-20% bg-gradient-to-t -top-[80px] -left-[80px]" />
                    <CircledShadedBackground size={620} className="absolute from-20% to-140% right-8 -top-12" />
                    <CircledShadedBackground size={200} className="absolute from-20% bottom-0 right-4" />
                    <CircledShadedBackground size={140} className="absolute md:bg-gradient-to-b from-20% bg-gradient-to-t -bottom-8 left-24" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-5">
                    <div className="lg:container w-full grid grid-cols-12 gap-y-8 gap-x-4 items-center text-white py-20">
                        {/* LEFT SECTION - Buttons */}
                        <div className="col-span-12 md:col-span-5 flex justify-end order-2 md:order-1">
                            <div className="w-full md:w-[70%] flex flex-col gap-6">
                                <h2 className="text-5xl font-bold">Features</h2>

                                <div className="flex flex-col gap-2 w-full">
                                    <div
                                        onClick={() => setActiveTab("features")}
                                        className={`group py-4 px-7 text-white rounded-full text-xl flex justify-between items-center gap-5 cursor-pointer
                                            active:scale-90 duration-100
                                            ${activeTab === "features"
                                                ? "bg-blue-shade-1"
                                                : "border border-blue-shade-1"
                                            }`}>
                                        <Link href="/home" className='font-bold group-hover:underline text-nowrap'>Features</Link>
                                        <div className={`rounded-4xl w-8 h-8 bg-gradient-to-b  
                                            ${activeTab === "features"
                                                ? "from-zinc-200 to-blue-shade-1 to-80%"
                                                : "from-blue-shade-1 to-black to-100%"
                                            }`}></div>
                                    </div>
                                    <div
                                        onClick={() => setActiveTab("benefits")}
                                        className={`group py-4 px-7 text-white rounded-full text-xl flex justify-between items-center gap-5 cursor-pointer
                                            active:scale-90 duration-100
                                            ${activeTab === "benefits"
                                                ? "bg-blue-shade-1"
                                                : "border border-blue-shade-1"
                                            }`}>
                                        <Link href="/home" className='font-bold group-hover:underline text-nowrap'>Benefits</Link>
                                        <div className={`rounded-4xl w-8 h-8 bg-gradient-to-b  
                                            ${activeTab === "benefits"
                                                ? "from-zinc-200 to-blue-shade-1 to-80%"
                                                : "from-blue-shade-1 to-black to-100%"
                                            }`}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SECTION - Grid Content */}
                        <div className="col-span-12 md:col-span-7 relative flex flex-col justify-center items-center order-1 md:order-2">
                            <div className="grid grid-cols-2 grid-rows-2 w-full text-left">
                                <AnimatePresence mode="popLayout">
                                    {slides.map((slide, idx) => (
                                        <motion.div
                                            key={slide.title} // unique key per item
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                            className="p-4 flex flex-col justify-start items-start"
                                        >
                                            <ConcentricDisc size={30} />
                                            <h3 className="text-xl font-bold">{slide.title}</h3>
                                            <p className="text-gray-400 mt-2">{slide.desc}</p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* STATS SECTION */}
            <div className="w-screen flex flex-row justify-center px-5 mt-0 md:-mt-16 relative">
                <div
                    className="lg:container w-full h-full rounded-3xl bg-[linear-gradient(to_bottom,_#A05BBD_0%,_#ffffffb0_50%,_#F69A27_100%)] sm:bg-[linear-gradient(to_right,_#A05BBD_0%,_#ffffffb0_50%,_#F69A27_100%)]
                        flex flex-col sm:flex-row justify-center items-center sm:items-center sm:justify-between px-8 py-12 gap-y-12"
                >
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <p className="font-bold text-4xl leading-[0.6]">2000+</p>
                        <p className="text-base">Games Listed</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <p className="font-bold text-4xl leading-[0.6]">300+</p>
                        <p className="text-base">Active lobbies every minute</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <p className="font-bold text-4xl leading-[0.6] uppercase">50k+</p>
                        <p className="text-base">Gamers onboarded</p>
                    </div>
                </div>
            </div>
        </>
    );
};
