import logo from './logo.svg';
import './App.css';
import { ContainerGraficas } from './ContainerGraficas';
import { ContainerProcesos } from './ContainerProcesos';
import { ContainerTablaProcesos } from './ContainerTablaProcesos.js';
import React, { useState } from 'react';
import {insertProcess, delProcess, getRam, getCPU, insertRam} from "./api/Endpoint.jsx";


function App() {
  const [tipo, setTipo] = useState(10);

  const createProc = async () => {
    try {
        const req = await insertProcess();
        const res = await req.json(); 
        console.log(res);       
    } catch (e) {
        console.log(e);
    }
}

  return (
    <div className="App" style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   *  Primer proyecto SO 1  *
      </header>
      <div>
        <br/>
        <button type="button" onClick={() => setTipo(0)}>Monitoreo en Tiempo Real</button>
        <button type="button" onClick={() => setTipo(1)}>Crear y eliminar procesos</button>
        <button type="button" onClick={() => setTipo(2)}>Monitoreo de procesos</button>
      </div>
      <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>
        {tipo === 0 &&
        (
          <>
          <ContainerGraficas/>        
          </>
        )

        }
        {tipo === 1 &&
        (
          <>
          <ContainerProcesos/>
          </>
        )

        }
        {
          tipo === 2 &&
          (
            <>
            <ContainerTablaProcesos/>
            </>
          )
        }
      </div>
      <div><br/></div>
      <div style={{textAlign: 'center', alignContent: 'center', alignItems: 'center'}}>      
      </div>
    </div>
  );
}

export default App;
