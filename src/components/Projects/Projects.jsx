import { Link, useNavigate } from 'react-router-dom'
import './Projects.scss'

function Projects({ projectName, description, tools, projectVideo }) {

    return (
        <>
            <article className="project">
                <video className="project__video" controls>
                    <source src={projectVideo} type="video/mp4" />
                </video>
                <section className="project__text">
                    <Link className="project__link" to='https://github.com/jenaniu/jenani-uthayavarnan-thats-our-lingo'>

                        <h2 className="project__title">{projectName}</h2>
                    </Link>
                    <p className="project__description">{description}</p>
                    <h3 className="project__video-subheader">Programming tools: </h3>
                    <p className="project__tools">{tools}</p>
                </section>
            </article>
        </>
    )
}

export default Projects