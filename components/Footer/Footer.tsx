import ThemeChanger from '../ThemeChanger/ThemeChanger';

const Footer = () => {
    return(
        <footer className='px-5 py-5 border border-t border-gray-200 border-r-0 border-l-0 dark:border-0'>
            <div className='flex justify-around sm:justify-center items-center'>
                <div>
                    <span>
                        Made with ❤️ · <a href='https://github.com/ximo14/ximo' target='_blank' rel='noreferrer' className='font-mono underline cursor-pointer'>source</a>
                    </span>
                </div>
                <div className='visible sm:invisible'>
                    <ThemeChanger />
                </div>
            </div>
        </footer>
    )
}

export default Footer;