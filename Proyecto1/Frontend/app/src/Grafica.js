import React from 'react';
import { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {insertProcess, delProcess, getRam, getCPU, insertRam} from "./api/Endpoint.jsx";

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
  
    const GraficaPieRAM = (datosGraficaRAM) => {  
      console.log(datosGraficaRAM);
      if(datosGraficaRAM){
        console.log(datosGraficaRAM)
        const data = {
          labels: datosGraficaRAM.map((data) => data.id),
          fontColor:['white'],
          labelColor:['white'],
          datasets:[
            {
              label: "Porcentaje",
              data: datosGraficaRAM.map((data) => data.porcentaje),              
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
              color: ['white'],
              fontColor: ['white']
            },
            title: {
              display: true,
              text: 'Estado',
              color:['white'],
              labelColor:['white'],
              fontColor: ['white']
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

  const GraficaPieCPU = (datosGraficaCPU) => {  
    

    if(datosGraficaCPU){


      const data = {
        labels: datosGraficaCPU.map((data) => data.id),
        fontColor:['white'],
        labelColor:['white'],
        datasets:[
          {
            label: "Porcentaje",
            data: datosGraficaCPU.map((data) => data.porcentaje),              
            backgroundColor: [ "#a0c4ff","#f197c0"],
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

    const [datosGraficaRAM, setDatosGraficaRAM] = useState([
      { id: 'LIBRE', porcentaje: 50 },
      { id: 'UTILIZADO', porcentaje: 50 }
    ]);

    const [datosGraficaCPU, setDatosGraficaCPU] = useState([
      { id: 'LIBRE', porcentaje: 50 },
      { id: 'UTILIZADO', porcentaje: 50 }
    ]);


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

      const [ totalRam, setTotalRam ] = useState(0);
      const [ freeRam, setFreeRam ] = useState(0);

      const [ percentCPU, setPercentCPU ] = useState(50);

      useEffect(() => {
        const interval = setInterval(() => {
            (
                async () => {
                    try {
                        const req = await getRam();
                        const res = await req.json();
                        console.log(res);
                        //setTotalRam(res.total);
                        //setFreeRam(res.free);
                        setDatosGraficaRAM ([
                          { id: 'LIBRE', porcentaje: (Number(res.free)*1024)*100/Number(res.total)},
                          { id: 'UTILIZADO', porcentaje: 100-(Number(res.free)*1024)*100/Number(res.total) }
                        ]);

                        const insert = await insertRam(100-(Number(res.free)*1024)*100/Number(res.total));

                    } catch (e) {
                        console.log(e);
                    }
                }
            )();
        }, 500);

        return () => clearInterval(interval);

    }, [freeRam]);

    useEffect(() => {
      const interval = setInterval(() => {
          (
              async () => {
                  try {
                      const req = await getCPU();
                      const res = await req.json();
                      console.log(res);
                      setPercentCPU(res.percent);
                      setDatosGraficaCPU([
                        { id: 'LIBRE', porcentaje: res.percent },
                        { id: 'UTILIZADO', porcentaje: 100 - res.percent }
                      ]);
                  } catch (e) {
                      console.log(e);
                  }
              }
          )();
      }, 500);

      return () => clearInterval(interval);

  }, [percentCPU]);


 
      if(props.numGrafica === 1){      
        return GraficaPieRAM(datosGraficaRAM);
      }else if(props.numGrafica === 2){
        return GraficaPieCPU(datosGraficaCPU);
      }
      return Grafica0();
}
export default Grafica