import './ResumePage.scss'
import { Link } from 'react-router-dom'


function ResumePage() {

    return (
        <>
        <div className="resume">
            <h1 className="resume__header">Resume</h1>
            <section className='resume__job'>
                <h2 className='resume__title'>Marketing Assistant</h2>
                <h3 className='resume__company'>Global Payments</h3>
                <h4 className='resume__dates'>2021-2024</h4>
                <ul className='resume__list'>
                    <li className='resume__list--item'>Managed end-to-end creation of 5+ internal and external monthly newsletters, including drafting, cross-functional approvals, design, and deployment, increasing customer and partner engagement by 10%.</li>
                    <li className='resume__list--item'>Partnered with 5 Product Managers to design collateral for 20+ product launches using Adobe Creative Suite, enabling sales teams to leverage refreshed assets and boost customer engagement.</li>
                    <li className='resume__list--item'>Led a company-wide rebranding initiative by managing 75+ material updates and coordinating cross-functional content review; accelerating timelines by 2 months and empowering sales team with refreshed content.</li>
                </ul>
            </section>

            <section className='resume__job'>
                <h2 className='resume__title'>Social Media Coordinator</h2>
                <h3 className='resume__company'>Tamil Civic Action</h3>
                <h4 className='resume__dates'>2021</h4>
                <ul className='resume__list'>
                    <li className='resume__list--item'>Produced 10+ COVID-19 informational videos in Tamil and English by writing video scripts and editing videos using Adobe Creative Suite, educating 1500+ social media followers on local pandemic support resources.</li>
                    <li className='resume__list--item'>Organized a COVID-19 vaccine town hall, recruited 3 Tamil-speaking medical professionals and drove social media promotion, enabling 100+ community members to have their questions answered.</li>
                </ul>
            </section>
            </div>
        </>
    )
}

export default ResumePage