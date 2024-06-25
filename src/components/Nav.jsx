import { AiFillMoon } from "react-icons/ai";
import { PiSunDimBold } from "react-icons/pi";


const Nav = (props) => {
    const {onDarkMode, dark} = props
    return (
        <nav className='flex justify-around pt-5 items-baseline text-text-900 font-body relative z-10'>
            <h1 className='text-2xl'>
                ralph
            </h1>
            <ul className='flex justify-between gap-5 font-heading'>
                <li>ABOUT</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
                <li>RESUME</li>
            </ul>
            <button onClick={onDarkMode}>{
                    dark?
                    <PiSunDimBold size={23} />:
                    <AiFillMoon size={23}/>
                }
            </button>
        </nav>
)}

export default Nav;