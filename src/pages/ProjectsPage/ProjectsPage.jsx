import Projects from '../../components/Projects/Projects'
import './ProjectsPage.scss'
import { Link } from 'react-router-dom'
import projectsText from '../../assets/project-data.json'


function ProjectPage() {

    return (
        <>


            <section className="projects">
                <h1 className="projects__heading">Projects</h1>
                {projectsText.map((project, i) => (
                    <Projects key={i} projectName={project.name} tools={project.tools} description={project.description} projectVideo={project.video} />
                ))
                }
            </section>
        </>
    )
}

export default ProjectPage