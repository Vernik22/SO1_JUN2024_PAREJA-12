import React,{useContext, useState, useEffect} from 'react';
import pruebaProcesos from './pruebaProcesos';
import pruebaProcesoss from './pruebaProcesoss.js';
import {insertProcess, delProcess, getProcess, getRam, getCPU, insertRam} from "./api/Endpoint.jsx";

export const ContainerTablaProcesos = () => {

    const [idProceso, setIdProceso] = useState(0);

    //const [procesosRaw, setProcesosRaw] = useState([pruebaProcesoss]);


    const [procesos, setProcesos] =useState([]);

    const handleInputChange = (event) => {
        setIdProceso(event.target.value);
      };

    /* Estructurar los procesos */
    const parseProcessData = (data) => {
        const processes = data.split('PID').slice(1); 
        return processes.map((process) => {
          const [id, name, ...details] = process.split(',');
      
          const estado = details.filter((_, index) => index == 2);
          
          const children = details
            .filter(detail => detail.startsWith('Child:'))
            .map(child => {
              const [, childDetails] = child.split(':');
              const [childPid, childName, childInfo, childState] = childDetails.split('.').slice(0, 4); 
                return { childPid, childName, childState };
            });
          
          return { id, name, estado, children };
        });
      };
      

      const processArray = parseProcessData(pruebaProcesoss.process);

    useEffect(() => {
      const interval = setInterval(() => {
          (
              async () => {
                  try {
                      const req = await getProcess();
                      const res = await req.json();
                      console.log(res);
                      setProcesos(parseProcessData(res.process));
                  } catch (e) {
                      console.log(e);
                  }
              }
          )();
      }, 2000);

      return () => clearInterval(interval);

  }, []);

    
      

      const getEstado = (state) => {
        //console.log(state)
        switch (state[0]) {
          case '0':
            return '0 - TASK_RUNNING';
          case "1":
            return '1 - TASK_INTERRUPTIBLE';
          case '2':
            return '2 - TASK_UNINTERRUPTIBLE';
          case '4':
            return '4 - TASK_STOPPED';
          case '8':
            return '8 - TASK_TRACED';
          case '16':
            return '16 - EXIT_DEAD';
          case '32':
            return '32 - EXIT_ZOMBIE';
          case '64':
            return '64 - TASK_DEAD';
          case '128':
            return '128 - TASK_WAKEKILL';
          case '256':
            return '256 - TASK_WAKING';
          case '512':
            return '512 - TASK_PARKED';
          case '1024':
            return '1024 - TASK_NOLOAD';
          case '2048':
            return '2048 - TASK_STATE_MAX';
         default:
            return state; 
        }
      };


    return (
        <>
        <h2>Procesos en tiempo real</h2>
        
      
        <div style={{textAlign:'center', alignContent:'center', alignItems:'center'}}>        
            <table>
                <thead>
                    <tr>
                    <th>PID</th>
                    <th>Nombre Proceso</th>
                    <th>Estado</th>
                    <th>Children</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(procesos) && procesos.length > 0 && procesos.map((process) => (
                    <tr key={process.id}>
                        <td>{process.id}</td>
                        <td>{process.name}</td>
                        <td>{(getEstado(process.estado))}</td>
                        <td>
                        {process.children.length > 0 ? (
                            <ul>
                            {process.children.map((child) => (
                                <li key={child.childPid}>{child.childName} (PID: {child.childPid})</li>
                            ))}
                            </ul>
                        ) : '-'}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
        </>
    )
}
