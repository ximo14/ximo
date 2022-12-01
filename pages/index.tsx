import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Experience from '../components/Experience/Experience'
import Technologies from '../components/Technologies/Technologies'
import PersonalProjects from '../components/PersonalProjects/PersonalProjects'
import Script from 'next/script'
import TinyBirdScript from '../components/TinyBirdScript/TinyBirdScript'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ximo Gil</title>
				<meta
					name='description'
					content='Software Developer'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<div className='space-y-24'>
				<Hero />
				<Experience />
				<Technologies />
				<PersonalProjects />
				<TinyBirdScript />
			</div>
		</div>
	)
}

export default Home
