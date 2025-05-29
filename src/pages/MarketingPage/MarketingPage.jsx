import Projects from '../../components/Projects/Projects'
import './MarketingPage.scss'
import { Link } from 'react-router-dom'
import marketingText from '../../assets/carousel-marketing-data.json'
import Carousel from '../../components/Carousel/Carousel' 
import MarketingProjects from '../../components/MarketingProjects/MarketingProjects'


function MarketingPage() {

    return (
        <>


            <section className="projects">
                <h1 className="projects__heading">Marketing Projects</h1>
                <article className="projects__list">
                {/* <Carousel data={marketingText}></Carousel> */}
                {marketingText.map((project, i) => (
                    <MarketingProjects key={i} data={project.carousel} name={project.name} description={project.description}></MarketingProjects>
                ))
                }
                </article>
            </section>
        </>
    )
}

export default MarketingPage