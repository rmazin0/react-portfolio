import { useState } from 'react'

const Contact = (props) => {
    return (
        <>
            <div className='text-text-900 font-heading flex items-center justify-around bg-secondary-200 py-20'>
                <div className='text-4xl'>
                    Let's get in touch!
                </div>
                <form className='text-base flex flex-col w-5/12'>
                    <label>Your Name:</label>
                    <input className="input"
                        type="text"
                        placeholder='John Doe' />
                    <label>Email:</label>
                    <input className='input'
                        type="email"
                        placeholder='johndoe@email.com'/>
                    <label>Message:</label>
                    <textarea className='input' rows="4" placeholder='Share your thoughts...'></textarea>
                    <button className="button-600" >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;