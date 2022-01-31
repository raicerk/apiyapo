# API yapo.cl

Esta API fue desarrollada para la prueba técnica para postular al rol de TL de yapo.cl, la cual es una API REST con 2 métodos, donde el primero retorna el valor de la UF del día y el segundo retorna el valor de PI usando como parámetro un número el cual indica el valor máximo de decimales de PI


# Requisitos para el funcionamiento de la API

* Conexión a internet (Para consumir servicios)
* Una instancia de redis funcionando para la caché

## Como levantar la API

La API fue desarrollada con fastify, pueden encontrar más información sobre este framework en [fastify](https://www.fastify.io/), para levantar la API en local usando los recursos internos del computador se debe ejecutar:

```
npm install
npm start
```

Para la ejecución de los test se debe ejecutar:
```
npm run test
```

Donde también se creará una carpeta llamada `/coverage` donde encontrarán el reporte de los test así como la cobertura de cada una de las funciones y métodos de la API

La API ha sido dockerizada por lo que también se puede levantar usando docker, para esto se debe ejecutar el comando de docker compose donde se creará una instancia de la API y de una base de datos de redis:
```
docker-compose -f "Docker-compose.yml" up -d --build
```

# Documentación

La API también se encuentra documentada a nivel de código y a nivel de sus servicios REST, para revisar la documentación de los métodos pueden ingresar a:

```
http://localhost:3000/documentation
```

En caso de usar docker, pueden ingresar a:

```
http://localhost:8000/documentation
```

