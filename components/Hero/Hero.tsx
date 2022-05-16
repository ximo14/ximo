import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import Image from 'next/image'

const Hero = () => {
    return(
        <div className='flex flex-col-reverse  sm:flex-row items-start'>
            <div className='flex flex-col px-0'>
                <h1 className='text-6xl font-bold mb-1'>Ximo Gil</h1>
                <h2 className='text-lg lg:text-xl font-semibold'>
                    Software Developer at <a href='https://widitrade.com/' target='_blank' rel='noreferrer' className='text-[#22a2a2] font-semibold underline transform hover:text-teal-700 transition-all'>Widitrade</a>
                </h2>
                <h2 className='text-md font-normal mb-5'>
                    Currently based in <span className='font-semibold'>València, Spain</span>📍
                </h2>
                <a href='ximo-resume.pdf' target='_blank' rel='noopener noreferrer' className='hidden'>
                    <button
                        className='mb-3 px-4 py-3 uppercase font-semibold text-sm rounded-lg text-white bg-gradient-to-r from-violet-600 to-indigo-700 transform hover:scale-[1.1] transition-all'>Download
                        resume</button>
                </a>
                <div className='flex space-x-5'>
                    <a href='mailto:ximo.gil14@gmail.com'>
                        <FiMail className='transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href='https://www.linkedin.com/in/joaquingilchanza/' target='_blank' rel='noreferrer'>
                        <FiLinkedin className='text-[#0e76a8] transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href='https://github.com/ximo14' target='_blank' rel='noreferrer'>
                        <FiGithub className='text-gray-400 transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href='https://twitter.com/ximo_dev' target='_blank' rel='noreferrer'>
                        <FiTwitter className='text-[#1DA1F2] transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                </div>
            </div>
            <div id='image' className='w-1/2'>
                <Image src="/memoji1.png" alt="me" width="220" height="220"/>
            </div>
        </div>
    )
}

export default Hero;