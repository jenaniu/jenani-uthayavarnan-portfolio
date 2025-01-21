import Projects from '../../components/Projects/Projects'
import './ProjectsPage.scss'
import { Link } from 'react-router-dom'
import projectsText from '../../assets/project-data.json'


function ProjectPage() {

    return (
        <>
            <h1>Projects</h1>
            <Link to='https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo'>
                <h2>That's Our Lingo</h2>
            </Link>

            <section className="projects">
            {projectsText.map((project, i) => (
                <Projects key={i} projectName={project.name} tools={project.tools} description={project.description} projectVideo={project.video}/>
            ))
            }
            </section>
        </>
    )
}

export default ProjectPage