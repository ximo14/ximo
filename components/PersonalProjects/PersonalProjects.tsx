import { FiGithub } from "react-icons/fi";
import ProjectType from "../../types/project.type";

const personalProjects: ProjectType[] = [
  {
    name: "Random password generator",
    description:
      "App built with Next.js trying to build a random password generator, new features will be added soon!",
    previewUrl: "https://password-generator-pi-six.vercel.app/",
    githubUrl: "https://github.com/ximo14/password-generator",
  },
  {
    name: "Rick & Morty Characters",
    description:
      "Little app to learn some of the principal concepts of Vue and Vuex.",
    previewUrl: "https://rick-and-morty-vue2.vercel.app/",
    githubUrl: "https://github.com/ximo14/rick-and-morty.vue2",
  },
];

const PersonalProjects = () => {
  return (
    <div>
      <h2 className="text-3xl mb-2 font-semibold">Projects</h2>
      <h4 className="text-md mb-10 text-base font-normal text-gray-500 dark:text-gray-400">
        Some projects I do for learn and try new technologies.
      </h4>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-10">
        {personalProjects.map((project) => {
          return (
            <div
              className="p-6 max-w-xl md:max-w-sm bg-gray-100 rounded-lg border border-gray-400 shadow-3xl dark:bg-neutral-800 dark:border-stone-700 transform hover:scale-[1.02] transition-all"
              key={project.name}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-violet-600 to-indigo-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  See project
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FiGithub className="text-gray-400" size={28} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProjects;
