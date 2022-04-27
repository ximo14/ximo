import ThemeChanger from '../ThemeChanger/ThemeChanger';

const Nav = () => {
	return(
		<nav className='flex justify-end invisible sm:visible'>
			<ThemeChanger />
		</nav>
	)
}

export default Nav;