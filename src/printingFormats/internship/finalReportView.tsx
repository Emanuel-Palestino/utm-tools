import { FC } from "react";
import { Internship } from "../../models/Internship";
import logo from './../../assets/UTMEscudo.png'

interface FinalReportProps {
    data: Internship
}

export const FinalReport: FC <FinalReportProps> = ({ data }) => {
    return(
        <section className="w-full text-[38px]">
            <div id="header" className="flex gap-16 mb-6 px-6">
                <img src={logo} alt="logo" />
                <div className="text-[46px] mt-3">
                    <p className="font-bold text-[52px]">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
                    <div>
                        <p>Carretera          a          Acatlima          Km.          2.5</p>
                        <p>Huajuapan          de          León,          Oaxaca. </p>
                    </div>
                    <p>INFORME FINAL DE ESTANCIA PROFESIONAL</p>
                </div>
            </div>

            <div id="content" className="p-5 flex flex-col gap-4 flex-wrap mb-1 border-solid border-black border-2">
                <p className="text-[42px] font-bold">FECHA: </p>
            </div>


        </section>
    )
}