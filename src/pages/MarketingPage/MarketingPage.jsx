import Projects from '../../components/Projects/Projects'
import './MarketingPage.scss'
import { Link } from 'react-router-dom'
import marketingText from '../../assets/carousel-marketing-data.json'
import Carousel from '../../components/Carousel/Carousel' 


function MarketingPage() {

    return (
        <>


            <section className="projects">
                <h1 className="projects__heading">Projects</h1>
                <article className="projects__list">
                <Carousel data={marketingText}></Carousel>
                {/* {marketingText.map((project, i) => (
                    <Projects key={i} projectLink={project.link} projectName={project.name} tools={project.tools} description={project.description} projectVideo={project.video} />
                ))
                } */}
                </article>
            </section>
        </>
    )
}

export default MarketingPage