import { DivTag } from "../common/divTag";



export const HowItWorks = () => {

    const StepBoxes : React.FC<{heading: String, step: number, body: String, imageAsset: String}> = 
    ({heading, step, body, imageAsset}) => {
        return (
            <>
                <div className='bg-black-shade-1 w-full rounded-md p-4 text-xl overflow-hidden'>
                    <div className='flex justify-between items-center font-bold'>
                        <p className='text-xl'>{heading}</p>
                        <p>{step}</p>
                    </div>

                    {/* space */}
                    <div className='h-6'></div>

                    <p className='text-xs lg:text-base text-gray-500'>
                        {body}
                    </p>

                    {/* space */}
                    <div className='h-8'></div>

                    <div style={{backgroundImage: `url(${imageAsset})`}} className='h-80 lg:h-60 w-full bg-no-repeat bg-center bg-contain rounded-xl'></div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='w-screen flex flex-col items-center justify-center px-5'>
                <div className='lg:container w-full flex flex-col items-center justify-center'>
                    <DivTag value={"How it works"} />
                    
                    {/* spacing */}
                    <div className='h-16'></div>

                    <div className='text-center w-100 md:w-180 flex flex-col gap-1'>
                        <p className='md:text-4xl text-2xl font-bold'>Form Your Squad in Three Simple Steps</p>
                        <p className='text-xs lg:text-base px-8 text-gray-500'>Creating or joining a gaming lobby is effortless — just choose your game, connect with teammates, and start dominating together.</p>
                    </div>

                    {/* spacing */}
                    <div className='h-12'></div>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        {/* 1 */}
                        <StepBoxes 
                            heading={"Create or Join a Lobby"} 
                            step={1} 
                            body={"Choose your favorite game and start or join a public/private lobby."}
                            imageAsset={"/assets/images/create-join-lobby-1.avif"}/>

                        {/* 2 */}
                        <StepBoxes 
                            heading={"Meet Your Squad"} 
                            step={2} 
                            body={"Chat with players who match your playstyle, skill, or region."}
                            imageAsset={"/assets/images/meet-squad-2.avif"}/>

                        {/* 3 */}
                        <StepBoxes 
                            heading={"Jump Into The Game"} 
                            step={3} 
                            body={"Choose your favorite game and start or join a public/private lobby."}
                            imageAsset={"/assets/images/jump-into-game-3.avif"}/>
                    </div>
                </div>
            </div>
        </>
    );
}