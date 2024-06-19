# PROYECTO 1 Pareja 12

# Docker-Compose
Utilizaremos el docker-compose.yml para poder descargar las imagenes previamente subidas al docker hub y que cualquier persona con acceso al archivo pueda simplemente ejecutar un comando de docker compose y pueda levantar el proyecto sin tanto esfuerzo.

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
localhost/getRam

Para poder obtener el porcentaje de memoria podremos acceder a la siguiente ruta y este nos devolvera el valor 

#### Obtener Porcentaje de CPU
localhost/getCpu

Para poder obtener el porcentaje de CPU podremos acceder a la siguiente ruta y este nos devolvera el valor 
#### Obtener los Procesos actuales
localhost/getProcess

Para poder obtener los procesos actuales dentro del sistema operativo, tanto procesos padres como procesos hijos
#### Crear un Proceso
localhost/insertProcess

Para poder crear un proceso Sleep Infinity podremos hacerlo accediendo a la siguiente ruta.
#### Eliminar un Proceso
localhost/insertProcess?pid=**pid**

Podremos eliminar algun proceso segun el PID que enviemos como parametro en la ruta siguiente.
# FrontEnd

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