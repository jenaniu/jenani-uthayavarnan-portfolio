import './ContactPage.scss'
import { Link } from 'react-router-dom'


function ContactPage() {

    return (
        <>
            <section className='contact'> 
            <h1>Contact me!</h1>
            <Link to='https://www.linkedin.com/in/jenani-uthayavarnan/'>
                <h2>LinkedIn</h2>
            </Link>
            <Link to='https://github.com/jenaniu'>
                <h2>GitHub</h2>
            </Link>
            </section>
        </>
    )
}

export default ContactPage
