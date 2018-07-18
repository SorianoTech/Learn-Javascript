# Compatibilidad con Navegadores

En esta lección aprenderemos como abordar la brecha entre la nueva sintaxis de JavaScript que es utilizada y la sintaxis de JavaScript que reconocen los navegadores web.

La organización responsable de la estandarización de JavaScript es Ecma International que lanzo la versión en 2015 ECMAScript2015, comúnmente conocido como ES6. 
El 6 se refiere a la versión de Javascript es la ES6 que tiene que ver con el año en que es liberada.
  
Después de la actualización la mayoría de los navegadores no soportaban la versión ES6.
  
En esta lección, aprenderemos sobre dos herramientas importantes para abordar los problemas 
de compatibilidad del navegador.
  
  caniuse.com -> Un sitio web que proporciona datos sobre la compatibilidad del navegador web
  para las funciones de HTML, CSS y JavaScript. Lo usaremos para buscar soporte de
  características de ES6.
  
  Babel -> Una biblioteca de Javascript que puede usar para convertir un nuevo JavaScript 
  no compatible (ES6) en una versión anterior (ES5) que sea reconocida por la mayoría de 
  los navegadores modernos. Lo utilizamos para transformar codigo ES6 a ES5
  
Razones por las que usar ES6:

- Es mas parecido a otros lenguajes de programación orientado a objetos
- El código es mas legible(mas fácil de entender) y requiere menos carácteres.
- Sintaxis que soluciona problemas
  

# Herramientas para transformar código ES6 a ES5

Babel: es una herramienta para transformar código ES6 a ES5, se instala sobre linux con NPM

Instalamos el cliente de babel
>npm install babel-cli
>npm install babel-preset-env

Nos situamos en la carpeta donde tenemos los archivos javascript
>npm run build

podemos ver el codigo ES5 en la carpeta ./lib/main.js   

Para transpilar un codigo escrito en ES6 a ES5 tenemos:

1. guardar el ficher .js en la carpeta ./src/main.js
La estructura de ficheros sería project/src/main.js
Es de donde va a tirar npm para compilar y realizar la transformación.

Usamos NPM para acceder y administrar paquetes node. Los paquetes de Node son directorios que contienen codigo javascript escrito por otros desarrolladores, se pueden usar estos paquete para reducir la duplicación de trabajo y eliminar bugs.

Antes de poder ejecutar Babel en nuestro projecto tenemos que inicializar los paquetes por defecto de NPM.

>npm init

Este comando nos crea un fichero package.json en el directorio raiz, este fichero contiene información sobre el actual proyecto Javascript. Incluye:

- **Metadatos**: titulo, descripción, autores y mas información.
- Una lista de los paquetes node que el proyecto requiere. Si otro desarrolador quiere ejecutar tu proyecto, npm mirará dentro del fichero package.json y descargara los paquetes necesarios de la lista.
- Par de claves para ejecutar scripts. Podemos utilizar npm para ejecutar scripts abreviados. 

Al ejecutar <npm init> tenemos que rellenar la información que nos pide para identificar el paquete.

    proyecto/src
    proyecto/package.json
    proyecto/src/main.js

## Instalar un paquete de Node

 >npm install

 Utilizamos <npm install> para instalar los paquetes que requiere node localmente. (los que están escritos en el fichero json)
 El comando crea una carpeta llamada node_modules e instala todas las dependencias.

Para instalar los paquetes necesarios en nuestra estructura del proyecto utilizamos

>npm install babel-cli -D
>npm install babel-preset-env -D

-D añade las dependencias a devDependencies de esta forma los desarrolladores pueden ejecutar npm install sin ejecutar uno por uno las dependencias requeridas.

Ahora que tenemos descargados los paquetes de babel tenemos que especificar la versión de la fuente de javascript dentro del fichero ```.babelrc```

La estructura del directorio tiene que quedar de la siguiente forma: 

```
project
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
```

Dentro del fichero ```.babelrc``` tenemos que escificar:

```json
{
  "presets": ["env"]
}
```

La instrucción ``env``indica que transforme el código que encuentre de version ES6 o posteriores.

Ahora tenemos que modificar el fichero package.json para  que se debe iniciar la transformación.
Dentro encontramos la propiedad ``scripts`` que contiene un objeto llamado ``test``. Debajo de esta propiedad añadimos un script para que ejecute babel. Con la pripiedad ``build`` y la orden ``babel src -d lib`` 

```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

```
``babel`` : ejecuta babel
``src`` : transforma el código que encuentre en la carpeta src
``-d`` : indicamos a babel que transcriba el codigo en un directorio.
``lib``: transcribe el codigo en el directorio lib

*Hay que tener en cuenta que después de la instrucción test hay que añadir una coma.*

## Ejecutar NMP para transformar el código

Ahora tenemos todo preparado para transformar nuestro código.
Nos situamos en la carpeta raiz del proyecto y ejecutamos:

>npm run build

Este comando ejecuta el script que se se encuentra dentro del fichero <package.json>. Ahora tenemos el fichero transformado dentro de la carpeta **lib**.

```
project
|_ lib
|___ main.js
|_ node_modules
|___ .bin
|___ ...
|_ src
|___ main.js
|_ .babelrc
|_ package.json
```


