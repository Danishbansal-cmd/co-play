import Link from "next/link";
import { DivTag } from "../common/divTag";


export const GamerProfile = () => {
    return (
        <>
            <div className='w-screen flex flex-col items-center justify-center px-5'>
                <div className='lg:container w-full flex flex-col items-center justify-center px-16'>
                    <DivTag value={"Gamer Profile"} />

                    {/* spacing */}
                    <div className='h-16'></div>

                    <div className='text-center w-100 md:w-180 flex flex-col gap-1'>
                        <p className='md:text-4xl text-2xl font-bold'>Show Off Your Gamer Identity</p>
                        <p className='text-xs text-gray-500 lg:text-base px-8'>Create your gamer profile, link your game accounts, and get matched with players who complement your skills.</p>
                    </div>

                    {/* spacing */}
                    <div className='h-12'></div>

                    <div className="grid grid-cols-9 w-full gap-y-16">
                        <div className="col-span-12 md:col-span-4 flex flex-col justify-center items-center md:items-start gap-4
                        order-2 md:order-1 text-center md:text-left">
                            <p className="md:text-4xl text-2xl font-bold">Stand out with your unique identity.</p>
                            <p className="text-xs text-gray-500 lg:text-base">Stuff your profile with more games and friends. Find players who match your skill and vibe.</p>
                            <div className='bg-blue-shade-1 py-2 px-6 rounded-md flex items-center gap-5'>
                                <Link href="/home" className='font-bold hover:underline'>Get Started Now</Link>
                            </div>
                            <p className="text-gray-500 text-xs lg:text-base">Earn badges and grow your presence across games.</p>
                        </div>
                        <div style={{
                            backgroundImage: `url(/assets/images/gamer-identity-profile.avif)`,
                            backgroundPosition: "0px 0px"
                        }} className="rounded-md col-span-12 md:col-span-5 bg-no-repeat bg-cover h-96 w-full
                        order-1 md:order-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

