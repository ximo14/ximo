import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'

const Dashboard: NextPage = () => {
	const [data, setData] = useState(null)
	const STATS_URL = process.env.NEXT_PUBLIC_TINYBIRD_STATS_URL ?? ''
	const STATS_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_STATS_TOKEN

	useEffect(() => {
		const fetchData = async () => {
			await fetch(STATS_URL, {
				headers: {
					Authorization: `Bearer ${STATS_TOKEN}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setData(data.data[0].total_visits)
				})
		}
		fetchData()
	}, [])

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

			<div className='mb-16'>
				<h2 className='text-4xl mb-5 font-bold'>Dashboard</h2>
				<p className='text-light'>
					This is my personal dashboard with some of my statistics
					about this page.
				</p>
			</div>
			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full'>
				<div className='metric-card bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-4 max-w-72 w-full'>
					<p>All time views</p>
					<p className='mt-2 text-3xl font-bold spacing-sm text-black dark:text-white'>
						{data}
					</p>
				</div>
				<div className='metric-card bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-4 max-w-72 w-full'>
					<p>
						Web updates{' '}
						<span className='px-2 py-1 bg-gradient-to-r from-violet-600 to-indigo-700 text-white text-xs rounded-full'>
							SOON
						</span>
					</p>
					<div className='mt-2 text-3xl font-bold spacing-sm text-black dark:text-white'>
						<div
							role='status'
							className='max-w-sm animate-pulse'>
							<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
