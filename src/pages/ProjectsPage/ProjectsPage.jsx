import Projects from '../../components/Projects/Projects'
import './ProjectsPage.scss'
import { Link } from 'react-router-dom'


function ProjectPage() {

    return (
        <>
            <h1>Projects</h1>
            <Link to='https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo'>
                <h2>That's Our Lingo</h2>
            </Link>
            <Projects/>
        </>
    )
}

export default ProjectPage