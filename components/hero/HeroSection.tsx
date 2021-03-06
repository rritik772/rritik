const HeroSection = () => {
    return (
        <section className='p-10 bg-sky-500 flex flex-col gap-10 justify-center items-center select-none h-[30rem] hover:shadow-lg duration-500 border-0 hover:border-8 border-gray-900 hover:rounded-3xl'>
            <span className='text-8xl dm-regular'>My name is <span className='px-3 border rounded-lg border-white shadow-md shadow-white'>Ritik Ranjan</span></span>
            <span className="mont-semibold text-2xl uppercase tracking-wider">I love to develop, get inspired, solve</span>
        </section>
    )
}

export default HeroSection;
