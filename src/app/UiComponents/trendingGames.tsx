import { DivTag } from "../common/divTag";



export const TrendingGames = () => {
    const trendingGames = [
        {
            gameImage: "https://static.wikia.nocookie.net/leagueoflegends/images/8/8e/Riot_Games_logo.jpg",
            lobbyLink: "",
        },
        {
            gameImage: "",
            lobbyLink: "",
        },
        {
            gameImage: "",
            lobbyLink: "",
        }
    ];
    return (
        <>
            <div className='w-screen flex flex-col items-center justify-center px-5'>
                <div className='lg:container w-full flex flex-col items-center justify-center px-16'>
                    <DivTag value={"Trending Games"} />

                    {/* spacing */}
                    <div className='h-16'></div>

                    <div className='text-center w-100 md:w-180 flex flex-col gap-1'>
                        <p className='md:text-4xl text-2xl font-bold'>Join Lobbies for Top Games</p>
                        <p className='text-xs text-gray-500 lg:text-base px-8'>From battle royales to co-op adventures — find your perfect match.</p>
                    </div>

                    {/* spacing */}
                    <div className='h-12'></div>

                    <div className="flex justify-start items-center w-full gap-4">
                        <div className="rounded-full border border-white flex justify-center items-center gap-4 px-6 py-3">
                            <div className="bg-green-500 rounded-full h-4 w-4"></div>
                            <p className="font-bold text-xl">Battle Royale</p>
                        </div>
                    </div>

                    {/* spacing */}
                    <div className='h-4'></div>

                    <div className="grid grid-cols-3 w-full gap-4">
                        {
                            trendingGames.map((tg) => (
                                <div 
                                key={tg.gameImage}
                                className="w-full h-40 rounded-md bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${tg.gameImage})`}}>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}