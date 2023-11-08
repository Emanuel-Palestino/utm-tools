import { FC } from "react";
import { Internship } from "../../models/Internship";
import logo from './../../assets/UTMEscudo.png'

interface FinalReportProps {
    data: Internship
}

export const FinalReport: FC<FinalReportProps> = ({ data }) => {
    return (
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

            <div className="flex gap-4">
                <p className="text-right min-w-[300px]">Fecha:</p>
                <p className="font-medium">{data.applicationDate}</p>
            </div>

            <div className="flex gap-16">
                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre:</p>
                    <p className="font-medium">{data.student.name}</p>
                </div>
                <div className="flex gap-4">
                    <p>Carrera:</p>
                    <p className="font-medium">{data.student.career}</p>
                </div>
                <div className="flex gap-4">
                    <p>Semestre:</p>
                    <p className="font-medium">{data.student.semester}</p>
                </div>
                <div className="flex gap-4">
                    <p>Empresa:</p>
                    <p className="font-medium">{data.companyName}</p>
                </div>
            </div>

        </section>
    )
}