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
## Rutas
#### Compilador de c
# FrontEnd

# BaseDatos (MongoDB)