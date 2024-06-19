import React,{useContext} from 'react'
import Grafica from './Grafica' 


export const ContainerGraficas = () => {

    return (
        <>
        <h2>Monitoreo en Tiempo Real</h2>
        <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div style={{maxWidth: '40%',textAlign:'center', alignContent:'center', alignItems:'center'}}>
            <br/><h3>% RAM</h3>
                <Grafica numGrafica={0}/>
            </div>            
        </div>
        <div>
        <div style={{maxWidth: '40%',textAlign:'center', alignContent:'center', alignItems:'center'}}>
            <br/><h3>% CPU</h3>
                <Grafica numGrafica={0}/>
            </div>
        </div>
        
        </>
    )
}
