import ProjectCards from "../components/project-cards"

const MiniProjects = () => {
    const projects = [
        {
            title: 'Stylish Stone Store',
            desc: 'A site for styled stone manufactures built with solid.ninja',
            github: 'https://github.com/r-ddle/stoneadvertisingsite',
            site: 'https://r-ddle.github.io/stoneadvertisingsite',
            preview: 'https://i.imgur.com/64eRl0x.jpeg'
        },
        {
            title: 'Diaper Store LK Design',
            desc: 'Web design I made for Diaper Store LK',
            github: 'https://github.com/r-ddle/DiaperStoreLK-Design-Solution',
            site: 'https://r-ddle.github.io/DiaperStoreLK-Design-Solution',
            preview: 'https://i.imgur.com/objgfmF.png'
        },
        {
            title: 'Calculator App',
            desc: 'My first javascript web application. I made this app for my portfolio',
            github: 'https://github.com/r-ddle/calculator-app',
            site: 'https://r-ddle.github.io/calculator-app/',
            preview: 'https://i.imgur.com/8ZvmHks.png'
        },
        {
            title: 'Newsletter Page',
            desc: 'Newsletter sign up page for users to sign up for a daily newsletter',
            github: 'https://github.com/r-ddle/Newsletter-Signup-Page',
            site: 'https://r-ddle.github.io/Newsletter-Signup-Page/',
            preview: 'https://i.imgur.com/LN67dAC.png'
        },
        {
            title: 'QR Component',
            desc: 'Simple QR component I maden that when scanned takes you to a site',
            github: 'https://i.imgur.com/LN67dAC.png',
            site: 'https://qr-code-component-solution-mewayldj1-r-ddles-projects.vercel.app/',
            preview: 'https://i.imgur.com/wWgNEmS.png'
        },
        {
            title: 'Four Card Component',
            desc: 'Simple component to display cards using the power of grid',
            github: 'https://github.com/r-ddle/Four-Card-Feature-Solution',
            site: 'https://four-card-feature-solution-65k0aan6v-r-ddles-projects.vercel.app/',
            preview: 'https://i.imgur.com/clhPfSW.png'
        },
        {
            title: 'Results Component',
            desc: 'Results summary component with solid.ninja',
            github: 'https://github.com/r-ddle/Results-Summary',
            site: 'https://r-ddle.github.io/Results-Summary/',
            preview: 'https://i.imgur.com/0aE6uYJ.png'
        },
        {
            title: 'Blog Card',
            desc: 'Blog card component with solid.ninja',
            github: 'https://github.com/r-ddle/Blog-Card-Preview',
            site: 'https://r-ddle.github.io/Blog-Card-Preview/',
            preview: 'https://i.imgur.com/9hrhlF1.png'
        },
        {
            title: 'Social Profile Page',
            desc: 'Social profile page with solid.ninja',
            github: 'https://github.com/r-ddle/Social-Links-Profile-Page',
            site: 'https://r-ddle.github.io/Social-Links-Profile-Page/',
            preview: 'https://i.imgur.com/2uPI6GU.png'
        },
        {
            title: 'Recipe Page',
            desc: 'Recipe page with solid.ninja',
            github: 'https://github.com/r-ddle/Recipe-Page',
            site: 'https://r-ddle.github.io/Recipe-Page/',
            preview: 'https://i.imgur.com/4EMVNyh.png'
        },
        {
            title: 'FAQ Accordion',
            desc: 'FAQ accordion with solid.ninja',
            github: 'https://github.com/r-ddle/faq-accordion-page',
            site: 'https://r-ddle.github.io/faq-accordion-page/#',
            preview: 'https://i.imgur.com/lI6Ne9g.png'
        },
    ]

    return (
        <div className="p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <ProjectCards
                        key={index}
                        title={project.title}
                        desc={project.desc}
                        github={project.github}
                        site={project.site}
                        preview={project.preview}
                    />
                ))}
            </div>
        </div>
    )
}

export default MiniProjects
