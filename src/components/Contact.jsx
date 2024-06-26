import { motion } from "framer-motion";

const Contact = (props) => {
    const {contentRef} = props

    return (
        <>
            <div className='font-heading flex flex-col items-center justify-around py-20' ref={contentRef}>
                <div className='text-[4rem]'>
                    Let's get in touch!
                </div>
                <form className='text-base flex flex-col w-[90%] bg-background-100 p-[50px] rounded-2xl'>
                    <label className="font-bold ">Your Name:</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder='John Doe' />
                    <label className="font-bold">Email:</label>
                    <input className='input'
                        type="email"
                        placeholder='johndoe@email.com'/>
                    <label className="font-bold">Message:</label>
                    <textarea className='input' rows="4" placeholder='Share your thoughts...'></textarea>
                    <button className="contact-btn relative overflow-hidden transition-[0.6] text-2xl" id="contact-btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;