import { SiPhp, SiVuedotjs, SiSymfony, SiLaravel, SiSass, SiBootstrap, SiTailwindcss, SiPostgresql, SiMongodb, SiRabbitmq, SiCsharp, SiDotnet, SiMysql, SiNextdotjs, SiReact, SiTypescript, SiJavascript } from "react-icons/si";


const Technologies = () => {
    return (
        <div>
            <h2 className='text-3xl mb-2 font-semibold'>Technologies</h2>
            <h4 className='text-md mb-2 text-base font-normal text-gray-500 dark:text-gray-400'>
                Throughout my career, I used a lot of different technologies but I love to learn new ones in my free time.
            </h4>
            <h4 className='text-md mb-3 text-base font-normal text-gray-500 dark:text-gray-400'>Current stack:</h4>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-6 mb-10'>
                <SiPhp className='transform hover:scale-[1.1] transition-all text-[#777BB4] text-4xl' />
                <SiSymfony className='text-4xl' />
                <SiLaravel className='text-[#FF2D20] text-4xl' />
                <SiVuedotjs className='text-[#4FC08D] text-4xl' />
                <SiSass className='text-[#CC6699] text-4xl' />
                <SiBootstrap className='text-[#7952B3] text-4xl' />
                <SiTailwindcss className='text-[#06B6D4] text-4xl' />
                <SiPostgresql className='text-[#4169E1] text-4xl' />
                <SiMongodb className='text-[#47A248] text-4xl' />
                <SiRabbitmq className='text-[#FF6600] text-4xl' />
            </div>
            <h4 className='text-md mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>Other technologies I worked with:</h4>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-6'>
                <SiCsharp className='text-[#9b4993] text-4xl' />
                <SiDotnet className='text-[#512BD4] text-4xl' />
                <SiMysql className='text-[#4479A1] text-4xl' />
                <SiJavascript className='text-[#F7DF1E] text-4xl' />
                <SiTypescript className='text-[#3178C6] text-4xl' />
                <SiReact className='text-[#61DAFB] text-4xl' />
                <SiNextdotjs className='text-4xl' />
            </div>
        </div>
    )
}

export default Technologies;