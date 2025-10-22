


export const DivTag : React.FC<{value: String}> = ({value}) => {
    return (
        <>
            <div className='flex justify-center items-center gap-3 w-fit rounded-4xl bg-blue-shade-darker py-4 px-8'>
                <>
                <div className='h-2 w-2 bg-blue-shade-1 rounded-4xl'></div>
                <p className='text-blue-shade-1 font-bold'>{value}</p>
                </>
            </div>
        </>
    );
}