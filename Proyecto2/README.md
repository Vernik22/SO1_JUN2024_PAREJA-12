# PROYECTO 2 Pareja 12
# Manual Técnico

## Creacion de Cluster
1. gcloud init

2. Escoger usuario y proyecto

3. Establecer Zona: uscentral1-a
```
gcloud container clusters create sopes-proyecto --num-nodes 3 --machine-type n1-standard-2 --zone us-central1-a
```

## Creacion de NameSpace
Creamos el namespace proyect en el cual agregamos los apis de cliente y servidores, asi como las bases de datos y los consumers.
```
Kubectl create namespace proyect
```
## Archivos Yml para deployments
Utilizaremos archivos .yml para poder realizar despliegues mucho mas rapido y comodo por lo que podran encontrar los mismos en la carpeta [/Ymls](https://github.com/Vernik22/SO1_JUN2024_PAREJA-12/tree/develop/Proyecto2/Ymls)
```
Kubectl apply -f [NombreArchivo.yml]
```
## Creacion de Kafka
Con los siguientes comandos podremos crear los deployments de kafka para poder utilizar el consumer creado con los archivos yml y este poder realizar consultas a la base de datos de mongo
```
kubectl create namespace kafka
kubectl create -f 'https://strimzi.io/install/latest?namespace=kafka' -n kafka
kubectl get pod -n kafka --watch
```
```
kubectl apply -f https://strimzi.io/examples/latest/kafka/kafka-persistent-single.yaml -n kafka 
kubectl wait kafka/my-cluster --for=condition=Ready --timeout=300s -n kafka 
```

## Locust
Inicializar locust para el trafijo a traves de un archivo .json podemos ejecutar el siguiente comando en consola y se cargará el archivo con la interfaz de locust, (Es necesario tener un archivo .json con nombre data.json en la carpeta donde se encuentra el archivo  trafic.py).
Locust no esnecesario realizar ningun deployment, este solo realiza peticiones al URL que nosotros le indiquemos.

Si no tienes Locust instalado te dejo los comandos necesarios para su instalación.
```
sudo apt install python3-locust
```
Levantar Locust
```
locust -f trafic.py
```

Si tuvieras problemas al levantar Locust se recomienda crear un entorno virutal de Python para la  ejecucion de locust.
```
pip3 install virtualenv
virtualenv env1
source env1/bin/activate
```
## CLiente y Servidor GRPC

Es necesario instalar el compilador proto para que compile nuestro codigo y genere la entrada de grpc que necesitaremos para nuestro cliente y servidor. Utilizaremos los siguientes comandos, el primero instalar proto en nuestro ambiente y el segundo se descarga la libreria para Go.
```
sudo apt install protobuf-compiler

sudo apt-get install golang-goprotobuf-dev
```
Tambien utilizaremos fiber
```
go get github.com/gofiber/fiber/v2
```

Para compilar los archivos .proto utilizaremos el siguiente comando
```
protoc --go_out=. --go-grpc_out=. client.proto
```

## Generar imagen Docker y Subirla a DockerHub
Dentro de los componentes utilizaremos docker para generar la imagen correspondiente utilizando el archivo Dockerfile correspondiente en cada componente para luego subirla a dockerhub.
Para generar la imagen utilizaremos el siguiente comando.
```
docker build -t [nombreUsuarioDocker]/[nombreImagen] .
docker build -t vernik22/clientegrpc .
```
Para subir la imagen a dockerhub utilizaremos el comando.
```
docker push [nombreUsuarioDocker]/[nombreImagen] 
docker push vernik22/clientegrpc
```
## Servidor Rust
Para este proyecto tambien necesitaremos utilizar Rust por lo que es necesario instalar rust solamente para compilar el proyecto y generar tu imagen de docker, para esto utilizamos los siguientes comandos.
```
curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh
```
```
sudo apt install build-essential
```
Para actualizar rust utilizamos el siguiente comando 
```
rustup update
```
## Mongo
Luego de realizar el deployment de Mongo con el archivo .yml podremos conectarnos a traves de DataGrip y asi poder consultar la base de datos DB2 con la collecion register poder consultar los datos ingresados
```
db.register.find()
```

## Redis
Luego de realizar el deployment de Redis con el archivo .yml en nuestro cluster de K8S podremos acceder al contenedor de redis y poder consultar los datos ingresados
```
redis-cli
select 0
HGETALL "Clave"
```
