import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeChanger from '../ThemeChanger/ThemeChanger'

const Nav = () => {
	const router = useRouter()
	return (
		<div className='flex flex-col justify-center'>
			<nav className='flex items-center justify-between w-full md:w-1/2 relative max-w-4xl border-gray-200 dark:border-gray-700 mx-auto pb-8 sm:pb-16 text-gray-900dark:bg-gray-900 dark:text-gray-100'>
				<div>
					<Link
						className={`hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all ${
							router.pathname == '/'
								? 'text-gray-900 dark:text-white font-semibold'
								: 'text-gray-600 dark:text-gray-400'
						}`}
						href='/'>
						<span className='capsize'>Home</span>
					</Link>
					<Link
						className={`hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all ${
							router.pathname == '/dashboard'
								? 'text-gray-900 dark:text-white font-semibold'
								: 'text-gray-600 dark:text-gray-400'
						}`}
						href='/dashboard'>
						<span className='capsize'>Dashboard</span>
					</Link>
				</div>
				<ThemeChanger />
			</nav>
		</div>
	)
}

export default Nav
