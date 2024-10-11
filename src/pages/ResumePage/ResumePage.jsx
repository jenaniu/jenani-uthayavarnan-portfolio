import './ResumePage.scss'
import { Link } from 'react-router-dom'


function ResumePage() {

    return (
        <>
            <h1>Resume</h1>
            <section>
                <h2>Marketing Assistant</h2>
                <h3>Global Payments</h3>
                <h3>2021-2024</h3>
                <ul>
                    <li>Managed end-to-end creation of 5+ internal and external monthly newsletters, including drafting, cross-functional approvals, design, and deployment, increasing customer and partner engagement by 10%.</li>
                    <li>Partnered with 5 Product Managers to design collateral for 20+ product launches using Adobe Creative Suite, enabling sales teams to leverage refreshed assets and boost customer engagement.</li>
                    <li>Led a company-wide rebranding initiative by managing 75+ material updates and coordinating cross-functional content review; accelerating timelines by 2 months and empowering sales team with refreshed content.</li>
                </ul>
            </section>

            <section>
                <h2>Social Media Coordinator</h2>
                <h3>Tamil Civic Action</h3>
                <h3>2021</h3>
                <ul>
                    <li>Produced 10+ COVID-19 informational videos in Tamil and English by writing video scripts and editing videos using Adobe Creative Suite, educating 1500+ social media followers on local pandemic support resources.</li>
                    <li>Organized a COVID-19 vaccine town hall, recruited 3 Tamil-speaking medical professionals and drove social media promotion, enabling 100+ community members to have their questions answered.</li>
                </ul>
            </section>
        </>
    )
}

export default ResumePage