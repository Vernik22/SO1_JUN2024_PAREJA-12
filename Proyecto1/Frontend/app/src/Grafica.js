import React from 'react';
import { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Grafica(props) {

    const Grafica0 = () => {  
        
        const datosGrafica0 = [
            {
                id:1,
                nombre:'Cargando datos'        
            },
            {
                id:2,
                nombre:'Cargando datos '        
            },
            {
                id:3,
                nombre:'Cargando datos '        
            }    ,
            {
                id:4,
                nombre:'Cargando datos '        
            }
        ]
      const data = {
          labels: datosGrafica0.map((data) => data.nombre),
          datasets:[
            {
              label: "...",
              data: datosGrafica0.map((data) => data.id),
              borderColor: ['#FFFFFF'],
              backgroundColor: ['#6798D0'],
              fontColor:['#FFFFFF']
            }   
            
          ]
      };
  
      const options = {
        responsive: true,
        scales:{
            y: {
                min: 0,
                max: 100,
                grid: {
                    //color: ['#FFFFFF'],
                    borderColor: ['#FFFFFF']
                },
                ticks: {
                    color: ['#FFFFFF']
                }           
            },
            x: {
                grid: {
                    //color: ['#FFFFFF'],
                    borderColor: ['#FFFFFF']
                },
                ticks: {
                    color: ['#FFFFFF']
                }
            }

        },
        plugins: {          
            title: {
                display: true,
                text: '...',
                color:['#FFFFFF']
            }            
        },
    };
  
      return ( 
          <>
            <Line data={data} options={options} />
          </>
      );
  }
  
    const GraficaPieRAM = (datos) => {  
      if(datos){
        const data = {
          labels: datos.map((data) => data.nombre),
          fontColor:['white'],
          labelColor:['white'],
          datasets:[
            {
              label: "Cantidad",
              data: datos.map((data) => data.cantidad),              
              backgroundColor: [ "#A5F8CE","#fefd97","#f197c0"],
              labelColor:['white'],
            }               
          ]
        };
  
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labelColor: ['white'],
              color: ['white']
            },
            title: {
              display: true,
              text: 'Estado',
              color:['white'],
              labelColor:['white']
            }
          }
      };
  
        return ( 
            <>
                <Pie data={data} options={options} />
            </>
        );
      }
      return Grafica0();
  }

  const GraficaPieCPU = (datos) => {  
    if(datos){
      const data = {
        labels: datos.map((data) => data.nombre),
        fontColor:['white'],
        labelColor:['white'],
        datasets:[
          {
            label: "Cantidad",
            data: datos.map((data) => data.cantidad),              
            backgroundColor: [ "#FEC9A7","#B49FDC","#FEFD97"],
            labelColor:['white'],
          }               
        ]
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labelColor: ['white'],
            color: ['white']
          },
          title: {
            display: true,
            text: 'Estado',
            color:['white'],
            labelColor:['white']
          }
        }
    };

      return ( 
          <>
              <Pie data={data} options={options} />
          </>
      );
    }
    return Grafica0();
}

    const [datosGrafica1, setDatosGrafica1] = useState([]);
    const [datosGrafica2, setDatosGrafica2] = useState([]);
    const baseUrl = 'localhost:3500';
    
    /*React.useEffect(() => {
        let url = `${baseUrl}/bibliotecaPersonal/getEstadosPorFecha/${encodeURIComponent(props.idUsuario)}`;
        console.log(url);
        axios.get(url).then((response) => {
            setDatosGrafica1(response.data);
            console.warn(response.data);
        });
      }, []);

      React.useEffect(() => {
        let url =  `${baseUrl}/bibliotecaPersonal/getEstadosActuales/${encodeURIComponent(props.idUsuario)}`;
        console.log(url);
        axios.get(url).then((response) => {
            setDatosGrafica2(response.data);
            console.warn(response.data);
        });
      }, []);*/

 
      if(props.numGrafica === 1){      
        return GraficaPieRAM(datosGrafica1);
      }else if(props.numGrafica === 2){
        return GraficaPieCPU(datosGrafica2);
      }
      return Grafica0();
}
export default Grafica