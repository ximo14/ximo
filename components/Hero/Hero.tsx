import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

const Hero = () => {
    return(
        <div className='flex justify-between'>
            <div>
                <h1 className='text-6xl font-bold mb-1'>Ximo Gil</h1>
                <h2 className='text-xl font-semibold mb-10'>
                    Software Developer at <a href='https://widitrade.com/' target='_blank' rel='noreferrer'
                        className='text-[#22a2a2] font-semibold underline transform hover:text-teal-700 transition-all'>Widitrade</a>
                </h2>
                <a href='ximo-resume.pdf' target='_blank' rel='noopener noreferrer'>
                    <button
                        className='mb-3 px-4 py-3 uppercase font-semibold text-sm rounded-lg text-white bg-gradient-to-r from-violet-600 to-indigo-700 transform hover:scale-[1.1] transition-all'>Download
                        resume</button>
                </a>
                <div className='flex space-x-5'>
                    <a href="mailto:ximo.gil14@gmail.com">
                        <Mail className='transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/joaquingilchanza/" target="_blank" rel="noreferrer">
                        <Linkedin className='text-[#0e76a8] transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href="https://github.com/ximo14" target="_blank" rel="noreferrer">
                        <GitHub className='text-gray-400 transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                    <a href="https://twitter.com/ximo_dev" target="_blank" rel="noreferrer">
                        <Twitter className='text-[#1DA1F2] transform hover:scale-[1.2] transition-all' size={28} />
                    </a>
                </div>
            </div>
            <div>
                {/* TODO: add image */}
            </div>
        </div>
    )
}

export default Hero;