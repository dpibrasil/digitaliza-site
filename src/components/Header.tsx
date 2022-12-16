import { useState } from "react";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import Logo from '../assets/images/Logo.svg';

function Header()
{
    const [menuOpen, setMenuOpen] = useState(false)
    const handleChangeMenuOpen = () => setMenuOpen(!menuOpen)

    return <div>
        <header className="flex flex-row justify-between">
            <div className=" px-10 mt-6 lg:px-16 lg:mt-5">
                <img src={Logo} className="w-28 lg:w-32 h-auto"></img>
            </div>
            <div className="flex flex-col items-center justify-end px-5 py-2">
                <button onClick={handleChangeMenuOpen} className="md:hidden ml-32 mt-12">
                    <FaBars />
                </button>
                <nav className={menuOpen ? 'flex flex-col items-start justify-between h-32' : 'hidden md:block'}>
                    <a href="/#" className="text-[#16C194] font-bold text-sm lg:text-lg ml-5">Serviços</a>
                    <a href="/#" className="ml-5 lg:ml-10 text-[#16C194] font-bold text-sm lg:text-lg">GED</a>
                    <a href="/#" className="ml-5 lg:ml-10 text-[#16C194] font-bold text-sm lg:text-lg">Digitaliza Cloud</a>
                    <a href="/#" className="ml-5 lg:ml-10 text-[#16C194] font-bold text-sm lg:text-lg">Sobre nós</a>
                    <button className="ml-5 lg:ml-10 mr-5 lg:mr-12 px-8 py-2 rounded bg-black text-white font-bold text-sm lg:text-lg">Entrar</button>
                    <button>
                        <FaTimes className="hidden md:hidden" />
                    </button>
                </nav>
            </div>
        </header>
    </div>
}

export default Header;