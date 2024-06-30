# PROYECTO 2 Pareja 12

# Creacion de Cluster


# Creacion de NameSpace
Creamos el namespace proyect en el cual agregamos los apis de cliente y servidores, asi como las bases de datos y los consumers.
```
Kubectl create namespace proyect
```
# Archivos Yml para deployments
Utilizaremos archivos .yml para poder realizar despliegues mucho mas rapido y comodo por lo que podran encontrar los mismos en la carpeta /Ymls
```
Kubectl apply -f [NombreArchivo.yml]
```
# Creacion de Kafka
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

# Locust
Para inicializar locust para el trafijo a traves de un archivo .json podemos ejecutar el siguiente comando en consola y se cargara el archivo con la interfaz de locust
```
locust -f trafic.py
```

# Mongo
Luego de realizar el deployment de Mongo podremos conectarnos a traves de DataGrip y asi poder consultar la base de datos DB2 con la collecion register poder consultar los datos ingresados
```
db.register.find()
```

# Redis
Luego de realizar el deployment de Redis en nuestro cluster de K8S podremos acceder al contenedor de redis y poder consultar los datos ingresados
```
redis-cli
select 0
HGETALL "Clave"
```
