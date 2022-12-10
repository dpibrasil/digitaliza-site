import { useState } from "react";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import Logo from '../assets/images/Logo.svg';

function Header()
{
    const [menuOpen, setMenuOpen] = useState(false)
    const handleChangeMenuOpen = () => setMenuOpen(!menuOpen)

    return <div>
        <header className="flex flex-row justify-between">
            <div className="px-16 py-5">
                <img src={Logo} className="w-32 h-auto"></img>
            </div>
            <div className="flex flex-col items-center justify-end px-5 py-2">
                <button onClick={handleChangeMenuOpen} className="md:hidden">
                    <FaBars />
                </button>
                <nav className={menuOpen ? 'grid grid-flow-row' : 'hidden md:block'}>
                    <a href="/#" className="text-[#16C194] font-bold">Serviços</a>
                    <a href="/#" className="ml-12 text-[#16C194] font-bold">GED</a>
                    <a href="/#" className="ml-12 text-[#16C194] font-bold">Digitaliza Cloud</a>
                    <a href="/#" className="ml-12 text-[#16C194] font-bold">Sobre nós</a>
                    <button className="ml-12 mr-12 px-8 py-2 rounded bg-black text-white font-bold">Entrar</button>
                    <button>
                        <FaTimes className="hidden md:hidden" />
                    </button>
                </nav>
            </div>
        </header>
    </div>
}

export default Header;