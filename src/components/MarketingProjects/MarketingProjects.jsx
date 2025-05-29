import { Link, useNavigate } from 'react-router-dom'
import './MarketingProjects.scss'
import Carousel from '../Carousel/Carousel'

function MarketingProjects({ data, name, description }) {

    console.log("marketing carousel",data)

    return (
        <>
            <article className="project">
                {/* <video className="project__video" controls>
                    <source src={projectVideo} type="video/mp4" />
                </video> */}
                <Carousel data={data}></Carousel>
                <section className="project__text">
                   <h2 className="project__title">{name}</h2>

                    <p className="project__description">{description}</p>

                </section>
            </article>
        </>
    )
}

export default MarketingProjects