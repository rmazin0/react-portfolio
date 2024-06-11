import {useState} from 'react'

const Nav = (props) => {
    return (
        <nav className='flex justify-around pt-5 items-center font-body'>
            <h1 className='text-2xl'>
                ralPh
            </h1>
            <ul className='flex justify-between gap-5 text-text-900 font-heading'>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
                <li>RESUME</li>
            </ul>
        </nav>
)}

export default Nav;