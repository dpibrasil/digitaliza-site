import { useState } from "react";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import Logo from "../assets/images/Logo.svg";
import Imagem from "../assets/images/IMAGEM.svg"

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
        <div className="flex flex-row justify-between mt-24">
            <div className="flex flex-col px-16 py-12">
                <a className="text-5xl font-light leading-snug">Deixe que a parte<br/> chata e trabalhosa<br/> a gente faz!</a>
                <a className="mt-5 font-semibold">Somos uma empresa especializada em Digitalização de<br/> Documetnos e em soluções para Gestão Eletrônica de<br/> Doucmentos(GED).</a>
                <button className="w-64 h-14 rounded bg-[#13C194] text-white font-semibold mt-5">Conhecer a Digitaliza</button>
            </div>
            <div>
                <img src={Imagem} className="w-4/6 h-auto hidden md:block"></img>
            </div>
        </div>
        <div className="flex mt-24 justify-center">
            <a className="text-[#16C194] text-5xl font-bold text-center">Nós estamos presente em todo o estado</a>
        </div>
    </div>
}

export default Header;