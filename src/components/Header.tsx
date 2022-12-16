import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/images/Logo.png';

function Header()
{
    const [menuOpen, setMenuOpen] = useState(false)
    const handleChangeMenuOpen = () => setMenuOpen(!menuOpen)

    return <div className="">
        <header className="flex flex-row justify-between">
            <div className=" px-10 mt-6 lg:px-16 lg:mt-5">
                <img src={Logo} className="w-28 lg:w-32 h-auto"></img>
            </div>
            <div className="flex flex-col items-center justify-end px-5 py-2">
                <button onClick={handleChangeMenuOpen} className="md:hidden ml-32 mt-12">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={menuOpen ? 'flex flex-col items-start text-[#16C194] justify-between h-32' : 'hidden md:block'}>
                    <a href="/#services" className="font-bold text-sm lg:text-lg ml-5">Serviços</a>
                    <a target="_blank" href="https://ged.digitalizasantana.com.br" className="ml-5 lg:ml-10 font-bold text-sm lg:text-lg">GED</a>
                    <a href="https://cloud.digitalizasantana.com.br" target="_blank" className="ml-5 lg:ml-10 font-bold text-sm lg:text-lg">Digitaliza Cloud</a>
                    <a href="/#about-us" className="ml-5 lg:ml-10 font-bold text-sm lg:text-lg">Sobre nós</a>
                    <a target="_blank" href="https://ged.digitalizasantana.com.br" className="ml-5 lg:ml-10 mr-5 lg:mr-12 px-8 py-2 rounded bg-black text-white font-bold text-sm lg:text-lg">Entrar</a>
                </nav>
            </div>
        </header>
    </div>
}

export default Header;