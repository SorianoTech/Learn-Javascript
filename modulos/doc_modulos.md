# Módulos
Los modulos son piezas de código que pueden ser exportadas desde un programa e importadas a otro.

Son importantes para separar código que tiene una lógiaca similar en ficheros llamados módulos. Esto nos permite:

- Buscar, arrelgar y depurar código mas facilmente.
- Reusar y recicla la lógica que hemos definido en diferentes partes de nuestra aplicación.
- Mantener la información privada y protegida de otros módulos.
- Preveer la contaminación del espacio de nombres global  y las posibles colisiones de nombre, seleccionando cuidadosamente las variables y el funcionamiento que cargamos en el programa.

Podemos definir un módulo en un fichero independiente y hacer que este disponible en otro fichero usando <module.exports>.

El patron que utilizamos para exporta un módulo es:
 1. Definir el objeto que represente al módulo.
 2. Añadir información o un funcionamiento al módulo.
 3. Exportar el módulo.

Para utilizar el módulo creado en otro dichero usaremos la palabra clave <require()>

## Importar módulos
Tambien se puede importar todo el contenido usando el asterisco y utilizando un unico alias.

```javascript
import * as Carte from './menu';

Carte.chefsSpecial;
Carte.isVeg();
Carte.isLowSodium();
```

## Exportar módulos
1. Antes de la variable
 <export function meetsStaffRequirement(){};>

2. Al final 
   <export {meetsStaffRequirement}>

