import Link from "next/link";


export const Footer = () => {
    return (
        <>
            <footer>
                <section>
                    <div className='w-screen h-240 lg:h-140'>
                        <div className='relative w-full h-full bg-gradient-to-t from-blue-shade-1 from-0% to-black border-t border-zinc-500'>
                            <div style={{backgroundImage: `url('/assets/images/sparkling-stars.gif')`}} className='bg-center bg-no-repeat w-full h-full bg-cover opacity-75'></div>
                            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-12 lg:px-5'>
                                <div className='lg:container w-full grid grid-cols-1 lg:grid-cols-8 gap-y-12' >
                                    <div className='flex flex-col gap-5 col-span-3 w-11/12'>
                                        <p style={{ fontFamily: "MarckScript" }} className="text-5xl cursor-pointer">coplay</p>
                                        <p className='text-gray-500'>Your hub for finding squads, creating lobbies, and gaming without limits.</p>
                                        <p className='font-bold capitalize'>Your Game. Your Squad. Your Victory.</p>
                                        <p className='text-gray-500'>© 2025 COPLAY. All rights reserved.</p>
                                    </div>
                                    <div className='flex flex-col gap-4 col-span-5'>
                                        <p className='font-bold text-xl uppercase'>QUICK LINKS</p>
                                        {[
                                            { href: "/about", label: "About" },
                                            { href: "/blog", label: "Blog" },
                                            { href: "/faqs", label: "FAQs" },
                                        ].map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-gray-400 transition-all duration-100 ease-in-out hover:text-white"
                                            >
                                                <span className="inline-block transform origin-center transition-transform duration-100 ease-in-out hover:underline hover:scale-120 active:scale-95">
                                                    {link.label}
                                                </span>                             
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='flex flex-col gap-4 col-span-3 w-11/12'>
                                        <p className='font-bold text-xl uppercase'>POLICIES</p>
                                        {[
                                            { href: "/home", label: "Terms of Services" },
                                            { href: "/home", label: "Privacy Policy" }
                                        ].map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-gray-400 transition-all duration-100 ease-in-out hover:text-white"
                                            >
                                                <span className="inline-block transform origin-center transition-transform duration-100 ease-in-out hover:underline hover:scale-120 active:scale-95">
                                                    {link.label}
                                                </span>                             
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='flex flex-col gap-4 col-span-5'>
                                        <p className='font-bold text-xl uppercase'>CONNECT</p>
                                        {[
                                            { href: "https://github.com/Danishbansal-cmd", label: "Github" },
                                            { href: "https://x.com/danishbansal01", label: "X (Twitter)" },
                                            { href: "https://www.linkedin.com/in/danishbansal-cmd/", label: "Linkedin" }
                                        ].map((link) => (   
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                target='_blank'
                                                className="capitalize text-gray-400 transition-all duration-100 ease-in-out hover:text-white"
                                            >
                                                <span className="inline-block transform origin-center transition-transform duration-100 ease-in-out hover:underline hover:scale-120 active:scale-95">
                                                    {link.label}
                                                </span>                             
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </footer>
        </>
    );
}