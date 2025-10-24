"use client";

import { useEffect } from 'react';
import Header from '../UiComponents/header'
import Link from 'next/link';
import { FrequentlyAskedQuestions } from '../UiComponents/frequentlyAskedQuestions';
import { GamerProfile } from '../UiComponents/gamerProfile';
import { TrendingGames } from '../UiComponents/trendingGames';
import { FeaturesBenefits } from '../UiComponents/featuresBenefits';
import { Footer } from '../UiComponents/footer';
import { HowItWorks } from '../UiComponents/howItWorks';
import { Button } from '@/components/ui/button';

export default function HomePage() {

    useEffect(() => {
        const setScreenHeight = () => {
            document.documentElement.style.setProperty(
                "--screen-height",
                `${window.screen.availHeight}px`
            );
        }
        setScreenHeight();
        window.addEventListener("resize", setScreenHeight);
        return () => { window.removeEventListener('resize', setScreenHeight); }
    }, []);
    
    return (
        <>
            <Header />

            {/* main body section */}
            <section className='flex flex-col justify-center items-center'>

                {/* first screen under header */}
                <div className='w-full h-[100vh]' style={{ height: `var(--screen-height)` }}>
                    <div style={{ backgroundImage: `url('/assets/images/coplay-main-background.avif')` }} className='bg-center bg-no-repeat w-full h-full bg-cover'>
                        <div className='w-full h-full px-5 flex flex-col items-center'>
                            <div className='lg:container w-full h-full relative'>
                                <div className='absolute bottom-58 left-1/2 -translate-x-1/2 flex justify-center items-center gap-8'>
                                    <Button asChild className='bg-blue-shade-1 font-bold hover:bg-blue-shade-1 hover:scale-115'>
                                        <Link href="/createLobby">Create Lobby</Link>
                                    </Button>
                                    <Button asChild className='bg-blue-shade-1 font-bold hover:bg-blue-shade-1 hover:scale-115 px-8'>
                                        <Link href="/lobbies">Join Chat</Link>
                                    </Button>
                                </div>
                                <div className='absolute bottom-12 left-1/2 -translate-x-1/2 py-6 bg-[#ffffff09] backdrop-blur-md text-center px-6'>
                                    <p style={{ fontFamily: 'HennyPenny' }} className='lg:text-4xl sm:text-3xl tex-xl text-nowrap'>
                                        Find Players. Create Lobbies. Play Together.
                                    </p>
                                    <div className='md:h-1'></div>
                                    <p className='lg:text-base text-xs px-8'>
                                        Connect with gamers who play your favorite titles. Create a lobby, invite others, and jump right into the action.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* space */}
                <div className='h-40'></div>

                {/* how it works section */}
                <HowItWorks />

                {/* space */}
                <div className='h-40'></div>

                {/* this is the FeaturesBenefits div */}
                <FeaturesBenefits />

                {/* space */}
                <div className='h-40'></div>

                {/* this is the TrendingGames div */}
                <TrendingGames />

                {/* space */}
                <div className='h-40'></div>

                {/* this is the GamerProfile div */}
                <GamerProfile />

                {/* space */}
                <div className='h-40'></div>

                {/* this is the FAQs div */}
                <FrequentlyAskedQuestions />

                {/* space */}
                <div className='h-40'></div>

                {/* squad up */}
                <div className='w-screen flex flex-col items-center justify-center px-5 py-20 bg-gradient-to-t from-zinc-800 to-[#0d0d0f]'>
                    <div className='lg:container w-full flex flex-col items-start justify-center gap-16'>
                        <div className='text-left flex flex-col items-start gap-6'>
                            <p className='text-6xl sm:text-8xl font-bold text-left'>Ready to Squad Up?</p>
                            <p className='text-base'>Jump into your favorite game with teammates who actually play to win.</p>
                        </div>
                        <div className='flex md:flex-row flex-col gap-2 md:gap-16 justify-center'>
                            {[
                                { href: "/createLobby", label: "Create Lobby" },
                                { href: "/lobbies", label: "Join Chat" }
                            ].map((link) => (
                                <Link 
                                key={link.href}
                                href={link.href} 
                                className='font-bold hover:underline'>
                                    <div className='bg-blue-shade-1 py-4 px-8 rounded-4xl flex justify-between items-center gap-5 cursor-pointer
                                                active:scale-90 duration-100'>
                                        {link.label}
                                        <div className='rounded-4xl w-8 h-8 bg-gradient-to-b from-zinc-200 to-80% to-blue-shade-1'></div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* the footer goes here */}
            <Footer />
        </>
    );
}