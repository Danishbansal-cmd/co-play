import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DivTag } from "../common/divTag";

export const FrequentlyAskedQuestions = () => {
    const questionAnswers = [
        {question: "What is this platform about?", answer: "It’s a social platform built for gamers to connect, collaborate, and play together. You can find players who enjoy the same games, create or join lobbies, chat, and jump right into the action — all in one place."},
        {question: "Do I need to create an account to use it?", answer: "You can explore public lobbies without signing up, but creating an account lets you chat, save favorites, and build your gamer profile."},
        {question: "Is it free to use?", answer: "Yes! Creating or joining lobbies, chatting, and connecting with other gamers is completely free."},
        {question: "Which platforms and games are supported?", answer: "We support thousands of games across PC, Console, and Mobile — from battle royales to co-op adventures."},
    ];


    return (
        <>
            <div className='w-screen flex flex-col items-center justify-center px-5'>
                <div className='lg:container w-full flex flex-col items-center justify-center'>
                    <DivTag value={"FAQs"} />

                    {/* spacing */}
                    <div className='h-16'></div>

                    <div className='text-center w-100 md:w-180 flex flex-col gap-1'>
                        <p className='md:text-4xl text-2xl font-bold'>Got Questions?</p>
                        <div className='flex items-center justify-center gap-4'>
                            <p className='md:text-4xl text-2xl font-bold'>We have got</p>
                            <p style={{ fontFamily: "MarckScript" }} className="text-6xl leading-[0.6] inline-block md:text-8xl cursor-pointer">answers</p>
                        </div>
                        <p className='text-xs text-gray-500 lg:text-base px-8'>Find quick answers about creating lobbies, finding players, and jumping into your next game.</p>
                    </div>

                    {/* spacing */}
                    <div className='h-12'></div>

                    <div className="max-w-180 w-full">
                        {
                        questionAnswers.map((qA, index) => (
                            <>
                                <Accordion type="single" collapsible className="bg-[#191919] my-4 rounded-lg px-6 w-full" defaultValue="item-1" key={index}>
                                    <AccordionItem value="item-1" className={""}>
                                        <div className="flex gap-4 items-center w-full">
                                            <div className="w-full">
                                                <AccordionTrigger className={"text-lg"}>{qA.question}</AccordionTrigger>
                                            </div>
                                        </div>
                                        <AccordionContent className={"border-none"}>
                                            <div className="py-4 text-gray-400">
                                                {qA.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </>
                        ))
                    }
                    </div>

                    

                </div>
            </div>
        </>
    );
}