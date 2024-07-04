import React,{useContext} from 'react'
import Grafica from './Grafica' 
import {insertProcess, delProcess, getRam, getCPU, insertRam} from "./api/Endpoint.jsx";

export const ContainerGraficas = () => {

    return (
        <>
        <h2>Monitoreo en Tiempo Real</h2>
        <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
            
        </div>
        <div className="container" style={{textAlign:'center', alignContent:'center', alignItems:'center'}}>
            <div className="column" style={{maxWidth: '55%',textAlign:'center', alignContent:'center', alignItems:'center'}}>
                <h3>% RAM</h3>
                <Grafica numGrafica={1}/>
            </div>
            <div className="column" style={{maxWidth: '55%',textAlign:'center', alignContent:'center', alignItems:'center'}}>
                <h3>% CPU</h3>
                <Grafica numGrafica={2}/>
            </div>
        </div>
        
        </>
    )
}
