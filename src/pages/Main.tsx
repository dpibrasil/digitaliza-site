import Header from "../components/Header";
import Footer from "../components/Footer";

import Imagem from "../assets/images/IMAGEM.svg"
import Secure from "../assets/images/Secure login-pana 1.svg"
import Clock from '../assets/images/clock.svg';
import Link from '../assets/images/link-2.svg';
import Layers from '../assets/images/layers.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomersSlide from "../components/CustomersSlide";

function Cube(props:any){
    return <div className="flex w-16 h-16 bg-[#13C194] rounded items-center justify-center">
        <img src={props.photo}></img>
    </div>
}

function Main()
{
    return <div>
        <Header />
        <div id="about-us" className="flex flex-col lg:flex-row items-center justify-between lg:mt-24">
            <div className="flex flex-col px-16 py-12 items-center lg:items-start lg:w-5/12">
                <a href="/#" className="text-4xl lg:text-5xl text-center lg:text-left font-normal lg:font-light leading-snug">Deixe que a parte chata e trabalhosa a gente faz!</a>
                <a href="/#" className="mt-5 font-semibold text-center lg:text-left">Somos uma empresa especializada em Digitalização de Documentos e em soluções para Gestão Eletrônica de Documentos (GED).</a>
                <button className="w-64 h-14 rounded bg-[#13C194] text-white font-semibold mt-5">Conhecer a Digitaliza</button>
            </div>
            <div>
                <img src={Imagem} className="px-14 md:px-56 lg:p-0 lg:w-4/6 h-auto "></img>
            </div>
        </div>
        <div className="flex mt-24 flex-col justify-center px-[30px]">
            <a className="text-[#13C194] text-4xl lg:text-5xl font-bold text-center">Nós estamos presente em todo o estado</a>
            <CustomersSlide />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between mt-16">
            <div className="px-8">
                <img src={Secure} className="h-auto md:px-40 lg:p-0"></img>
            </div>
            <div className="flex flex-col lg:py-40 w-10/12 mr-5 lg:w-8/12">
                <a href="/#" className=" text-4xl lg:text-5xl font-light leading-snug text-center lg:text-left"><a className="font-medium">Acesso facilitado</a> e Prático de docs (GED) online.</a>
                <a href="/#" className="mt-5 font-semibold  text-center lg:text-left">Você tem acesso a diversos documentos digitalizados em poucos cliques, acessando apenas a dashboard da sua empresa e pesquisar o arquivo desejado já digitalizado.</a>
                <div className="flex justify-center lg:justify-start mb-10">
                    <a target="_blank" href="https://ged.digitalizasantana.com.br" className="w-64 flex items-center justify-center h-14 rounded bg-[#13C194] text-white font-semibold mt-5 ">Acessar documentos</a>
                </div>
            </div>
        </div>
        <div id="services" className="flex flex-col lg:flex-row items-center lg:justify-between w-full bg-neutral-200 mb-20 p-16">
            <div className="flex flex-col h-80 bg-white rounded-3xl w-72 py-6 mb-10 lg:mb-0 mr-10 px-4">
                <a href="/#" className="text-4xl md:text-5xl font-bold text-[#13C194]">Nossos serviços</a>
                <a href="/#" className="text-[#13C194] text-sm mt-3">Prezamos pela <a className="font-bold">organização e agilidade<br/> na preparação e organização</a> dos seus<br/> arquivos digitalizados. Um serviço<br/> responsável de ponta-a-ponta.</a>
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