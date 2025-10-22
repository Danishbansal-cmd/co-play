import { DivTag } from "../common/divTag";
import { Footer } from "../UiComponents/footer";
import Header from "../UiComponents/header";




const LobbiesPage = () => {
    return (
        <>
            <Header />

            {/* the body section goes here */}
            <section className='flex flex-col justify-center items-center'>

                {/* space */}
                <div className='h-20'></div>


                <div className='w-screen flex flex-col items-center justify-center px-5'>
                    <div className='lg:container w-full flex flex-col items-start justify-center gap-4'>
                        <DivTag value={"Lobbies"} />
                        <div className="w-full bg-black-shade-1 rounded-md flex flex-col items-start justify-center p-4">
                            <p className="text-4xl font-bold">Active Lobbies </p>
                            <div className="flex flex-row justify-between items-center">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default LobbiesPage;