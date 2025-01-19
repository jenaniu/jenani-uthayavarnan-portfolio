import './NavBar.scss'
import { useNavigate, Link } from 'react-router-dom'


function NavBar() {


    return (
        <>
            <section className='nav-bar'>
                <Link to='/' className='nav-bar__link'>
                    <h6 className='nav-bar__text'>About</h6>
                </Link>

                <Link to='/projects' className='nav-bar__link'>
                    <h6 className='nav-bar__text'>Projects</h6>
                </Link>

                <Link to='/resume' className='nav-bar__link'>
                    <h6 className='nav-bar__text'>Resume</h6>
                </Link>

                {/* <Link to='/contact' className='nav-bar__link'>
                    <h4 className='nav-bar__text'>Contact me</h4>
                </Link> */}
            </section>
        </>
    )
}

export default NavBar