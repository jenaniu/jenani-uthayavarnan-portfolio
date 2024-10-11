import './HomePage.scss'
import headshot from '../../images/jenani-headshot.jpg'

function HomePage() {

    return (
        <>
            <section className='homepage'>
                <img src={headshot} className='homepage__img'></img>
                <h1 className='homepage__header'>Hi, I'm Jenani!</h1>
                <h2 className='homepage__subheader'>I am software engineer and marketing professional located in Toronto, Canada.</h2>
                <p className='homepage__text'>With over 3 years of marketing experience, I’ve honed my ability to quickly learn new tools, foster cross-functional collaboration, and execute successful campaigns. My software engineering education has expanded these skills, allowing me to approach problem-solving from a technical perspective while drawing on my creativity. <br></br>I’m excited to pursue roles where I can bring together my marketing experience and new technical skills. <br></br>
                    I aim to create innovative and visually appealing digital products and solutions that drive business results and enhance user experiences.</p>
            </section>
        </>
    )
}

export default HomePage