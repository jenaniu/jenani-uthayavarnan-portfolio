import './ProjectsPage.scss'
import { Link } from 'react-router-dom'


function ProjectPage() {

    return (
        <>
            <h1>Projects</h1>
            <Link to='https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo'>
                <h2>That's Our Lingo</h2>
            </Link>
            <p>A full-stack gamified language learning app that enables the user to memorize key vocabulary terms while <br></br>
                gaining a deeper understanding of their target language.
            </p>
        </>
    )
}

export default ProjectPage