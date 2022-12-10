import Header from "../components/Header";
import Footer from "../components/Footer";

import Imagem from "../assets/images/IMAGEM.svg"
import Secure from "../assets/images/Secure login-pana 1.svg"
import Clock from '../assets/images/clock.svg';
import Link from '../assets/images/link-2.svg';
import Layers from '../assets/images/layers.svg';

function Cube(Props:any){
    return <div className="flex w-16 h-16 bg-[#13C194] rounded items-center justify-center">
        <img src={Props.photo}></img>
    </div>
    }

function Main()
{
    return <div>
        <Header />
        <div className="flex flex-row justify-between mt-24">
            <div className="flex flex-col px-16 py-12 w-5/12">
                <a href="/#" className="text-5xl font-light leading-snug">Deixe que a parte chata e trabalhosa a gente faz!</a>
                <a href="/#" className="mt-5 font-semibold">Somos uma empresa especializada em Digitalização de Documentos e em soluções para Gestão Eletrônica de Doucmentos(GED).</a>
                <button className="w-64 h-14 rounded bg-[#13C194] text-white font-semibold mt-5">Conhecer a Digitaliza</button>
            </div>
            <div>
                <img src={Imagem} className="w-4/6 h-auto hidden md:block"></img>
            </div>
        </div>
        <div className="flex mt-24 justify-center">
            <a href="/#" className="text-[#13C194] text-5xl font-bold text-center">Nós estamos presente em todo o estado</a>
        </div>
        <div className="flex flex-row justify-between mt-24">
            <div className="px-8">
                <img src={Secure} className="w-4/6 h-auto hidden md:block"></img>
            </div>
            <div className="flex flex-col py-24 mr-72 w-5/12">
                <a href="/#" className="text-5xl font-light leading-snug"><a className="font-medium">Acesso facilitado</a> e Prático de docs (GED) online.</a>
                <a href="/#" className="mt-5 font-semibold">Você tem acesso a diversos documentos digitalizados em poucos cliques, acessando apenas a dashboard da sua empresa e pesquisar o arquivo desejado já digitalizado.</a>
                <button className="w-64 h-14 rounded bg-[#13C194] text-white font-semibold mt-5">Acessar documentos</button>
            </div>
        </div>
        <div className="flex flex-row justify-between w-full bg-slate-300 mb-20 p-16">
            <div className="flex flex-col w-auto h-80 bg-white rounded-3xl py-10">
                <a href="/#" className="text-5xl font-bold text-[#13C194] mt-3 ml-5">Nossos<br/>serviços</a>
                <a href="/#" className="text-[#13C194] ml-6 mr-6 mt-5">Prezamos pela <a className="font-bold">organização e agilidade<br/> na preparação e organização</a> dos seus<br/> arquivos digitalizados. Um serviço<br/> responsável de ponta-a-ponta.</a>
            </div>
            <div>
                <div className="flex flex-row">
                    <div>
                        <Cube photo={Clock}/>
                    </div>
                    <div className="flex flex-col ml-5">
                        <a href="/#" className="text-2xl font-bold">Preparação</a>
                        <a href="/#" className="text-[#13C194] font-medium mt-2">Nesta etapa da digitalização de documentos é feita a preparação para<br/> que papéis que compõem os volumes, de diversos tipos, formatos e<br/> estado de conservação, sejam adequadas à digitalização nos scanners.</a>
                    </div>
                </div>
                <div className="flex flex-row  mt-4">
                    <div>
                        <Cube photo={Link}/>
                    </div>
                    <div className="flex flex-col ml-5">
                        <a href="/#" className="text-2xl font-bold">Indexação</a>
                        <a href="/#" className="text-[#13C194] font-medium mt-2">Os documentos digitalizados são indexados no sistema, permitindo assim<br/> fácil operação e consultas realizadas pelo cliente.</a>
                    </div>
                </div>
                <div className="flex flex-row mt-4">
                    <div>
                        <Cube photo={Layers}/>
                    </div>
                    <div className="flex flex-col ml-5">
                        <a href="/#" className="text-2xl font-bold">Digitalização</a>
                        <a href="/#" className="text-[#13C194] font-medium mt-2">Em seguida são escaneados, de acordo com as especificações determinadas<br/> pelo sistema. As imagens e dados são migradas para o Software GED.</a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
}

export default Main;