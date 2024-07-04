import React,{useContext, useState, useEffect} from 'react';
import pruebaProcesos from './pruebaProcesos';
import {insertProcess, delProcess, getProcess, getRam, getCPU, insertRam} from "./api/Endpoint.jsx";

export const ContainerProcesos = () => {

    const [idProceso, setIdProceso] = useState(0);

    
    const [ actionButton, setActionButton ] = useState("Crear Proceso");        

    const handleInputChange = (event) => {
        setIdProceso(event.target.value);
      };

      const createProc = async () => {
        try {
            const req = await insertProcess();
            const res = await req.json();
            alert('Proceso creado, ver tabla');
        } catch (e) {
            console.log(e);
        }
    }

    const deleteProc = async () => {
        try {
            const req = await delProcess(idProceso);
            const res = await req.json();
            alert(res);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
        <h2>Procesos</h2>
        <div>
            <br/>
            <button type="button" onClick={createProc}>Crear Proceso</button>            
        </div>
        <div>
        <   input type="text" value={idProceso} onChange={handleInputChange} />        
        </div>
        <div>
            <button type="button" onClick={deleteProc}>Matar Proceso</button>  
            <br/>

        </div>    
        </>
    )
}
