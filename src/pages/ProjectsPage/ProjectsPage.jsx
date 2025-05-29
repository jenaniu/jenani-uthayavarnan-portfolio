import Projects from '../../components/Projects/Projects'
import './ProjectsPage.scss'
import { Link } from 'react-router-dom'
import projectsText from '../../assets/project-data.json'


function ProjectPage() {

    return (
        <>


            <section className="projects">
                <h1 className="projects__heading">Developer Projects</h1>
                <article className="projects__list">
                {projectsText.map((project, i) => (
                    <Projects key={i} projectLink={project.link} projectName={project.name} tools={project.tools} description={project.description} projectVideo={project.video} />
                ))
                }
                </article>
            </section>
        </>
    )
}

export default ProjectPage