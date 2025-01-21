import { useNavigate } from 'react-router-dom'
import './Projects.scss'
import thatsOurLingo from '/src/assets/Thats-our-lingo-video.mp4'

function Projects( {projectName, description, tools, projectVideo}) {

    return (
        <>
            <article className="project">
                <video className="project__video" controls>
                    <source src={projectVideo} type="video/mp4" />
                </video>
                <section className="project__text">
                    <h2 className="project__title">{projectName}</h2>
                    <p className="project__description">{description}</p>
                    <h3 className="project__video-subheader">Programming tools: </h3>
                    <p className="project__tools">{tools}</p>
                </section>
            </article>
        </>
    )
}

export default Projects