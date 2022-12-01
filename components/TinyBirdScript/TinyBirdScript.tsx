import Script from 'next/script'

const TinyBirdScript = () => {
	let TINYBIRD_TOKEN = process.env.NEXT_PUBLIC_TINYBIRD_TOKEN
	return (
		<Script
			defer
			src='https://unpkg.com/@tinybirdco/flock.js'
			data-host='https://api.tinybird.co'
			data-token={TINYBIRD_TOKEN}
			strategy='afterInteractive'></Script>
	)
}

export default TinyBirdScript
