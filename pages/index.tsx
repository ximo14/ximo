import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Experience from '../components/Experience/Experience';
import Technologies from '../components/Technologies/Technologies';
import PersonalProjects from '../components/PersonalProjects/PersonalProjects';
import { supabase } from '../utils/supabaseClient';
import ExperienceType from '../types/experience.type';
import ProjectType from '../types/project.type';

type props = {
	experiences: ExperienceType[],
	projects: ProjectType[]
}

const Home: NextPage<props> = ({experiences, projects}) => {
	return (
		<div>
			<Head>
				<title>Ximo Gil</title>
				<meta name='description' content='Software Developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='h-full w-full px-5 md:px-10 py-5 bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors ease-in-out delay-200'>
				<Nav />
				<div className='flex flex-col justify-center px-8'>
					<div className='flex flex-col justify-between w-full md:w-1/2 relative max-w-4xl mx-auto pt-8 pb-8 sm:pb-16 bg-opacity-60 space-y-20'>
						<Hero />
						<Experience experiences={experiences} />
						<Technologies />
						<PersonalProjects projects={projects} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	let { data: experiences } = await supabase
		.from('experiences')
		.select('*')
		.order('created_at', {
			ascending: false
		})

	let { data: projects } = await supabase
		.from('projects')
		.select('*')
		.order('created_at', {
			ascending: false
		})

	return {
		props: {
			experiences,
			projects
		},
	}
}

export default Home;