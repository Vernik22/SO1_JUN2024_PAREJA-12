# PROYECTO 1 Pareja 12

# Docker-Compose
Utilizaremos el docker-compose.yml para poder descargar las imagenes previamente subidas al docker hub y que cualquier persona con acceso al archivo pueda simplemente ejecutar un comando de docker compose y pueda levantar el proyecto sin tanto esfuerzo.
```
sudo docker compose up
```
# Modulos
## Requisitos
#### Compilador de c
     gcc-13
#### Compilación de modulo
     make
#### Instalación de modulo en /proc
     sudo insmod RAM.ko
#### Eliminar modulo de /proc
     sudo rmmod RAM.ko
## Modulo RAM
Luego de haber instalado el modulo de Ram que se encuentra en el repositorio podremos hacer uso del modulo en la direccion /proc, se generara un modulo el cual nos indica el numero de memoria utilizada en ese momento, este es un archivo que se actualiza constantemente.
## Modulo CPU (Procesos)
Luego de instalar el modulo en la carpeta /proc con el comando antes indicado podremos acceder al modulo el cual nos lista todos los procesos actualmente activos en nuestro entorno del sistema operativo, procesos padres y procesos hijos,este archivo se actualiza constantemente. 
# BackEnd
## Docker File
Para poder utilizar este contenedor primero lo dockerizamos con el siguiente comando 
```
docker build -t sopes1/so1_back_2024 .
```

Para correr el contenedor por separado podemos utilizar la siguiente line de comando
```
docker run -d -p 8000:8000 sopes1/so1_back_2024
```
## Rutas
#### Obtener Porcentaje de memoria RAM
```
localhost/getRam
```
Para poder obtener el porcentaje de memoria podremos acceder a la siguiente ruta y este nos devolvera el valor 

#### Obtener Porcentaje de CPU
```
localhost/getCpu
```
Para poder obtener el porcentaje de CPU podremos acceder a la siguiente ruta y este nos devolvera el valor. En este método se utilizó el comando mpstat, el cual para poder utilizarlo se debe instalar:
```
sudo apt install sysstat
```
el cual muestra las estadísticas relacionadas con el rendimiento de todos los procesadores lógicos del sistema.
#### Obtener los Procesos actuales
```
localhost/getProcess
```
Para poder obtener los procesos actuales dentro del sistema operativo, tanto procesos padres como procesos hijos
#### Crear un Proceso
```
localhost/insertProcess
```
Para poder crear un proceso Sleep Infinity podremos hacerlo accediendo a la siguiente ruta.
#### Eliminar un Proceso
```
localhost/insertProcess?pid=**pid**
```
Podremos eliminar algun proceso segun el PID que enviemos como parametro en la ruta siguiente.

# BaseDatos (MongoDB)

Para poder utilizar este contenedor primero lo dockerizamos con el siguiente comando 
```
docker build mongo
```
esto nos descargara la imagen de mongo latest que podremos utilizar sin problema para luego poder generar un contenedor de la siguiente manera.
```
docker run -d -p 27017:27017 --name DB -v mongo-data:/data/db mongo
```

los parametros **--name** nos indican el nombre de la base de datos que crearemos, el parametro **-v** generan un volumen dentro del sistema que sirve para la persistencia de datos, sin esto cuando bajemos el contenedor la data guardada anterioremente se perderia.

las colecciones utilizadas tendrian la siguiente estructura

```
Collection RAM
{
	Percentage:""	
}

Collection CPU
{
	Percentage:""	
}

Collection PROCESS
{
	PID:"",
	PROCESS_NAME:"",
	FATHER_PROCESS: "",
}
```
# FrontEnd
## Monitoreo en tiempo real
La aplicación web se desarrolló con React. 
1. Monitoreo en tiempo real del rendimiento de CPU y RAM (porcentaje libre y utilizado).
![monitoreo CPU y RAM](https://github.com/Vernik22/SO1_JUN2024_PAREJA-12/assets/25561134/de8d0840-fdba-41ac-8859-ec2afa228a86)

2. Creación de procesos en estado "sleep infinity" en el kernel del sistema operativo
3. Eliminación de procesos según su PID

![Creación y eliminación de procesos](https://github.com/Vernik22/SO1_JUN2024_PAREJA-12/assets/25561134/e5719f75-93b3-4e2d-9d58-0f38356e5a04)

4. Tabla con el detalle de procesos y sus hijos

![monitoreo de procesos](https://github.com/Vernik22/SO1_JUN2024_PAREJA-12/assets/25561134/5c2a31d3-3f16-4f17-8793-d4e5047f5d7a)

Para correr el contenedor por separado:
```
docker run -d -p 80:80 vaniaproyectosu2/app:2.0.0
```
# Pruebas de Stress
Para verificar el funcionamiento correcto de las gráficas y obtención de datos, utilizamos el módulo de Linux llamado Stress, el cual se instala de la siguiente manera:
```
sudo apt install stress
```

# Requerimientos de Hardware para Ubuntu Server 22.04
Mínimos:
* CPU: procesador de 2 GHz o más, de 64 bits
* RAM: 4 GB o más
* Almacenamiento: 20 GB de espacio disponible en disco para una instalación estándar con paquetes adicionales y espacio para logs, bases de datos, etc.


  

