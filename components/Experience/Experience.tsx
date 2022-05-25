import ExperienceType from "../../types/experience.type";

const experiences: ExperienceType[] = [
    {
        'companyName': 'Widitrade',
        'date': 'November 2021 - Present',
        'position': 'Software Developer',
        'description': 'Widitrade is a platform that automates visibility and scalability with 100% original content.',
        'companyUrl': 'https://widitrade.com/',
        'moreInfoActive': false
    },
    {
        'companyName': 'Sopra Steria',
        'date': 'November 2020 - November 2021',
        'position': 'Software Developer',
        'description': 'Sopra Steria is a consulting, digital services, and software development company.',
        'companyUrl': 'https://www.soprasteria.com/',
        'moreInfoActive': false
    },
    {
        'companyName': 'Friendly Rentals',
        'date': 'March 2018 - November 2020',
        'position': 'Software Developer',
        'description': 'Friendly Rentals is the leading company in tourism apartments at Barcelona, which have multiple locations around the world.',
        'companyUrl': 'https://www.friendlyrentals.com/',
        'moreInfoActive': false
    },
    {
        'companyName': 'Linkener',
        'date': 'July 2017 - February 2018',
        'position': 'Intern Developer',
        'description': 'Linkener is an energetic efficiency start-up that provides software and hardware to improve your electrical consumption.',
        'companyUrl': 'https://www.linkener.com/',
        'moreInfoActive': false
    }
];

const Experience = () => {
    return (
        <div>
            <h2 className='text-3xl mb-5 font-semibold'>Experience</h2>
            <ol className='relative border-l border-gray-400 dark:border-gray-700'>
                {experiences.map((experience) => {
                    return (
                        <li className='mb-10 ml-4' key={experience.companyName}>
                            <div
                                className='absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'>
                            </div>
                            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{experience.date}</time>
                            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{experience.position} at <a href={experience.companyUrl} target='_blank' rel='noreferrer' className='underline hover:font-bold'>{experience.companyName}</a>
                            </h3>
                            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                                {experience.description}
                            </p>
                            {experience.moreInfoActive && 
                            <a href='#' className='inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'>
                                    Read more
                                    <svg className='ml-2 w-3 h-3' fill='currentColor' viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'>
                                        <path fillRule='evenodd'
                                            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                                            clipRule='evenodd'></path>
                                    </svg>
                            </a>
                            }
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Experience;