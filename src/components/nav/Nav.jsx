import React from 'react'
import { Link } from 'react-router-dom'
import logoMenu from '../images/logoEdw.png'
import Modal from './ExampleModal'


const Nav = () => {

    return (

        <div className="navBar">
            <img className='logo'
                id='logoMenu'
                src={logoMenu}
                alt='logo' />

            <a href="#suggestionWrapper" className='tags' id='tag1'>Suggestions</a>
            <a href="#form-wrapper" className='tags' id='tag2'>Mailing List</a>
            <Link to="/" className='tags'>Home</Link>

            {/* Example Modal */}
            {/* <Modal /> */}
        </div>
    )
}

export default Nav
