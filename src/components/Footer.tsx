import React from "react";
import Logo from "../assets/images/Logo branca 1.svg"

export default function Footer(){
    return <div className="flex flex-col md:flex-row w-full bg-[#13C194] items-center justify-between p-10">
        <div className="flex flex-col items-center">
            <a className="text-white font-extralight">Digitaliza é uma ferramenta que<br/>
            une diversos arquivos de forma<br/> 
            organizada e prática.</a>
            <a className="text-white mt-5">© 2022 Digitaliza. All rights reserved.</a>
        </div>
        <div>
            <img src={Logo} className="p-4"></img>
        </div>
        <div className="flex flex-col">
            <div className="justify-between">
                <a className="text-white mr-2">Serviços</a>
                <a className="text-white m-2">GED</a>
                <a className="text-white m-2">Digitaliza Cloud</a>
                <a className="text-white m-2">Sobre nós</a>
            </div>
            <div className="mt-5">
                <a className="text-white">Mais de 10 milhões de arquivos digitalizados.</a>
            </div>
        </div>
    </div>
}