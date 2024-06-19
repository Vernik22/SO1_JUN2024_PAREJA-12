import React,{useContext, useState} from 'react'


export const ContainerProcesos = () => {

    const [idProceso, setIdProceso] = useState('');

    const handleInputChange = (event) => {
        setIdProceso(event.target.value);
      };

    return (
        <>
        <h2>Procesos</h2>
        <div>
            <button type="button" onClick={() => alert('crear proceso')}>Crear Proceso</button>            
        </div>
        <div>
        <   input type="text" value={idProceso} onChange={handleInputChange} />        
        </div>
        <div>
            <button type="button" onClick={() => alert(idProceso)}>Matar Proceso</button>            
        </div>
        </>
    )
}
