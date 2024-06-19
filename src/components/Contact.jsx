import {useState} from 'react'

const Contact = (props) => {
    return (
        <>
            <div className='text-4xl'>
                Let's get in touch!
            </div>
            <form className='text-base flex flex-col w-5/12'>
                <label>Your Name:</label>
                <input className="input"
                    type="text"
                    placeholder='John Doe'/>
                <label>Email:</label>
                <input className='input'
                type="email" 
                placeholder='johndoe@email.com'/>
                <label>Message:</label>
                <textarea className='input' rows="4" placeholder='Share your thoughts...'></textarea>
                <input className='button bg-accent-600 text-xl text-text-50 border-accent-600' type="button" value="Submit" />
            </form>
        </>
)}

export default Contact;