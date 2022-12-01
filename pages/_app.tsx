import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider
			enableSystem={true}
			attribute='class'>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</ThemeProvider>
	)
}

export default MyApp
