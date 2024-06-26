import { AiFillMoon } from "react-icons/ai";
import { PiSunDimBold } from "react-icons/pi";
import { motion } from "framer-motion";


const linkVariants = {
    hidden: {
        color: 'var(--text-900)'
    },
    visible: {
        opacity:1,
        scale: 1.3, 
        color: 'var(--accent-600)',
        transition: {
            type: 'spring', 
            stiffness: 200 
        }
    }
}

const Nav = (props) => {
    const { onDarkMode, dark, contentRef } = props
    return (
        <nav className='caret-transparent flex justify-around pt-5 items-baseline font-body relative z-10'>
            <h1 className='text-2xl'>
                ralph
            </h1>
            <ul className='flex justify-between gap-5 font-heading cursor-pointer'>
                <motion.li
                    variants={linkVariants}
                    initial='hidden'
                    whileHover='visible'
                >ABOUT</motion.li>
                <motion.li
                    variants={linkVariants}
                    initial='hidden'
                    whileHover='visible'
                >PROJECTS</motion.li>
                <motion.li
                    variants={linkVariants}
                    initial='hidden'
                    whileHover='visible'
                    onClick={() => {
                        contentRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                >CONTACT</motion.li>
                <motion.li
                    variants={linkVariants}
                    initial='hidden'
                    whileHover='visible'
                >RESUME</motion.li>
            </ul>
            <button onClick={onDarkMode}>{
                dark ?
                    <PiSunDimBold size={23} /> :
                    <AiFillMoon size={23} />
            }
            </button>
        </nav>
    )
}

export default Nav;