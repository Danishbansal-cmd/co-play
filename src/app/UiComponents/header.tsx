import { IoArrowDown } from "react-icons/io5";



function Header(){

    const headerItems = ["Home", "FAQs", "Lobbies"];

    const NavBarItem: React.FC<{text: String, icon?: React.ReactNode}> = ({icon, text = ""}) => {
        return (
            <div className="text-base flex flex-row hover:underline cursor-pointer">
                {text}
                {icon}
            </div>
        );
    }

    const NavBar = () => {
        return (
            <div>
                <div className="rounded-[200px] bg-black-shade-1 flex flex-row gap-8 py-2 px-8 text-white">
                    {
                        headerItems.map((headerItem, index) => (
                            <NavBarItem key={index + 1} text={headerItem} 
                            icon={
                                headerItem == 'Lobbies' 
                                ? <>
                                    <IoArrowDown className="rotate-[225deg] text-white ml-1 mt-1" />
                                </> 
                                : null
                            }/>
                        ))
                    }
                </div>
            </div>
        );
    }

    return (
        <header>
            <div className="flex w-screen items-center justify-center h-header-height px-5">
                <div className="lg:container flex items-center justify-between w-full">
                    <p style={{ fontFamily: "MarckScript" }} className="text-5xl cursor-pointer">coplay</p>
                    
                    {/* main div */}
                    <NavBar />

                    {/* get started button */}
                    <div className="rounded-4xl border-white border-[1] flex items-center justify-center text-white py-2 px-5 cursor-pointer">
                        Get Started
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;