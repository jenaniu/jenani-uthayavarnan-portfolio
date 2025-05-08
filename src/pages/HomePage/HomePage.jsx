import './HomePage.scss'
import headshot from '../../assets/images/jenani-headshot.jpg'
import CatAnimation from '../../components/CatAnimation/CatAnimation'

function HomePage() {

    return (
        <>
            <section className='homepage'>
                <figure className="homepage__top-section">
                    <img src={headshot} className='homepage__img'></img>
                    <div className="homepage__top-text">
                        <h1 className='homepage__header'>Hi, I'm Jenani!</h1>
                        <h2 className='homepage__subheader'>I am a software engineer and marketing professional located in Toronto, Canada.</h2>
                <p className='homepage__text'>With over 3 years of marketing experience, I’ve honed my ability to quickly learn new tools, foster cross-functional collaboration, and execute successful campaigns. As a continuous learner who loves to code, I pursued BrainStation's Software Engineering Bootcamp and earned my diploma. Coding has allowed me to approach problem solving from a technical perspective while drawing on my creativity. I’m excited to pursue roles where I can bring together my marketing experience and technical skills to problem solve and innovate. I aim to create innovative and visually appealing digital products and solutions that drive business results and enhance user experiences. </p>
                    </div>
                </figure>
            </section>
        </>
    )
}

export default HomePage