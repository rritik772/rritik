import Image from 'next/image'
import { useState } from 'react'
import backer from './../../Assets/images/projects/backer.jpg'
import projectData from './../../Assets/JSON/Projects.json'

const ProjectCard = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);
    return (
        <>
            <div className='w-[25rem] cursor-pointer bg-white p-5 rounded shadow hover:shadow-xl duration-500' onClick={() => setIsToggled(true)}>
                <Image
                    src={backer}
                    alt='backer-decker project'
                />
                <span className='text-xl mont-semibold'>Backer Decker</span>
            </div>
            {
                isToggled &&
                <div className='fixed top-0 h-full w-full bg-gray-500/30 duration-500'>
                    <div className='backdrop-blur absolute p-5 bg-white border-4 border-black rounded-xl w-full h-fit md:w-[70%] lg:w-[50%] top-0 bottom-0 left-0 right-0 mx-auto my-auto'>
                        <div className='flex justify-between'>
                            <span className='mont-semibold text-xl mb-3'>Backer Dacker</span>
                            <span className='font-bold mont-bold cursor-pointer hover:text-red-500' onClick={() => setIsToggled(false)}>X</span>
                        </div>
                        <div className='aspect-ratio'>
                            <Image
                                src={backer}
                                alt='backer-decker project'
                            />
                        </div>
                        <div className='border-b border-gray-200 my-2' />
                        <section className='flex flex-col justify-center items-center gap-2 mb-5'>
                            <span className='text-xl mont-bold uppercase'>About Project</span>
                            <span className='mont-regular'>This is a food blogging website where users can post about their food reciepe and other uses can like and comment about the food.</span>
                        </section>
                        <div className='border-b border-gray-200 my-2' />
                        <section className='flex flex-col justify-center items-center gap-3'>
                            <span className='text-xl mont-bold uppercase'>Programming Languages/Framework</span>
                            <div className='flex flex-wrap gap-2'>
                                <span className='px-3 py-1 mont-semibold rounded-full border border-gray-400 hover:border-black hover:bg-blue-500 hover:text-white duration-500'>React</span>
                                <span className='px-3 py-1 mont-semibold rounded-full border border-gray-400 hover:border-black hover:bg-blue-500 hover:text-white duration-500'>JavaScript</span>
                                <span className='px-3 py-1 mont-semibold rounded-full border border-gray-400 hover:border-black hover:bg-blue-500 hover:text-white duration-500'>SQL</span>
                                <span className='px-3 py-1 mont-semibold rounded-full border border-gray-400 hover:border-black hover:bg-blue-500 hover:text-white duration-500'>Node.js</span>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </>
    )
}

const ProjectSection = () => {
    return (
        <section className="p-10 bg-yellow-500 flex flex-col gap-10 justify-center items-center select-none min:h-[30rem] hover:shadow-lg duration-500 border-0 hover:border-8 border-gray-900 hover:rounded-3xl">
            <span className='text-8xl dm-regular'>I Made <span className='px-3 rounded-lg bg-gray-200 shadow-md'>These</span></span>
            {
                projectData.map((item, key) => {
                    <ProjectCard 
                        name={item.name}
                        desc={item.desc}
                        lang={item.languages}
                        extra={item.extra_features}
                    />
                })
            }
        </section>
    )
}

export default ProjectSection;
