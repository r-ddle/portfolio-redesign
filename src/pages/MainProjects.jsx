// TODO: MAKE SURE TO PUT "" IN THE `cards.site, cards.github, cards.preview` YOU IDOIT
import ProjectCards from "../components/project-cards"

const MainProjects = () => {
    const projects = [
        {
            title: 'First Portfolio',
            desc: 'This is my first ever project when i got introduced to web development',
            github: 'https://github.com/r-ddle/r-ddle.netlify.app',
            site: 'https://r-ddle.netlify.app',
            preview: 'https://i.imgur.com/ItCwtc4.png'
        },
        {
            title: 'Management App',
            desc: 'A full stack management app made for a masjid for their students & employees',
            github: 'https://github.com/r-ddle/masjid-management-webapp',
            site: 'https://r-ddle.github.io/masjid-management-webapp',
            preview: 'https://i.imgur.com/mMhfjcT.png'
        },
        {
            title: 'FlyxDevs Site',
            desc: 'The Flyx Devs company website made for my company to reach new clients',
            github: 'https://github.com/r-ddle/flyxdevs-portfolio',
            site: 'https://flyxdevs.live',
            preview: 'https://i.imgur.com/91qe6hy.png'
        },
        {
            title: 'Old Portfolio',
            desc: 'This is the site you were meant to see but I had to redesign it',
            github: 'https://github.com/r-ddle/riddlesportfolio',
            site: 'https://r-ddle.github.io/riddlesportfolio',
            preview: 'https://i.imgur.com/acKnFTH.png'
        }
    ]

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="ml-[7%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-96">
                {projects.map((project) => {
                    return (
                        <ProjectCards
                            key={project.title}
                            title={project.title}
                            desc={project.desc}
                            github={project.github}
                            site={project.site}
                            preview={project.preview}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainProjects
