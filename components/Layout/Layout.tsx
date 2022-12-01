import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Layout = ({ children }: any) => {
	return (
		<>
			<div className='w-full min-h-screen px-5 md:px-10 py-5 bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors ease-in-out delay-200'>
				<Nav />
				<div className='flex flex-col justify-center px-8'>
					<div className='flex flex-col justify-between w-full md:w-1/2 relative max-w-4xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60 space-y-20'>
						<main>{children}</main>
					</div>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout
