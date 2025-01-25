import './ResumePage.scss'
import { Link } from 'react-router-dom'


function ResumePage() {

    return (
        <>
            <div className="resume">
                <h1 className="resume__header">Resume</h1>

                <article className="resume__jobs">
                    <section className='resume__job'>
                        <h2 className='resume__title'>Teaching Assistant</h2>
                        <h3 className='resume__company'>BrainStation</h3>
                        <h4 className='resume__dates'>2024</h4>
                        <ul className='resume__list'>
                            <li className='resume__list--item'>Mentored 20+ students by troubleshooting project code, explaining programming concepts, and improving their coding skills.</li>
                            <li className='resume__list--item'>Reviewed students' weekly projects to assess code quality while providing actionable feedback to improve coding practices.</li>
                        </ul>
                    </section>

                    <section className='resume__job'>
                        <h2 className='resume__title'>Marketing Assistant</h2>
                        <h3 className='resume__company'>Global Payments</h3>
                        <h4 className='resume__dates'>2021-2024</h4>
                        <ul className='resume__list'>
                            <li className='resume__list--item'>Managed the creation of internal and external monthly newsletters, including drafting, cross-functional approvals, design, and deployment.</li>
                            <li className='resume__list--item'>Partnered with Product Managers to design collateral for 20+ product launches, enabling sales teams to leverage refreshed assets.</li>
                            <li className='resume__list--item'>Led a company-wide rebranding initiative by managing 75+ material updates, empowering the sales team with refreshed content.</li>
                        </ul>
                    </section>

                    <section className='resume__job'>
                        <h2 className='resume__title'>Social Media Coordinator</h2>
                        <h3 className='resume__company'>Tamil Civic Action</h3>
                        <h4 className='resume__dates'>2021</h4>
                        <ul className='resume__list'>
                            <li className='resume__list--item'>Produced 10+ COVID-19 informational videos, educating 1500+ social media followers on local pandemic support resources.</li>
                            <li className='resume__list--item'>Organized a COVID-19 vaccine town hall, recruited 3 Tamil-speaking medical professionals and drove social media promotion.</li>
                        </ul>
                    </section>
                </article>
            </div>
        </>
    )
}

export default ResumePage