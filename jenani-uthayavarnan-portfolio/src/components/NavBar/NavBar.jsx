import './NavBar.scss'
import { useNavigate, Link } from 'react-router-dom'


function NavBar() {


    return (
        <>
            <section className='nav-bar'>
                <Link to='/' className='nav-bar__link'>
                    <h4 className='nav-bar__text'>About</h4>
                </Link>

                <Link to='/projects' className='nav-bar__link'>
                    <h4 className='nav-bar__text'>Projects</h4>
                </Link>
            </section>
        </>
    )
}

export default NavBar