# Taller: Integración de JSON, Estructuras de Datos y Algoritmos en el Sitio Web del Hospital
## Descripción 
En este proyecto se implementarán objetos JSON, además, de estructuras avanzadas y algoritmos de búsqueda y ordenamiento, al proyecto titulado “Clínica Chillán”.
## Objetos JSON y operaciones
En el archivo data.js ubicado en la carpeta data se crearon dos objetos JSON:
-	**doctores:** el cual contenía toda la información asociada a los doctores registrados de la clínica, el cual, también cuenta con un objeto anidado como es la información asociada al contacto.
-	**servicios:** contiene la información asociada a los servicios médicos disponibles ofrecidos por la clínica.
En base a estos dos objetos JSON, se realizaron las siguientes operaciones en el mismo archivo data.js:
-	**Clonación:**  se realiza una clonación de la información del objeto JSON doctores, el objeto obtenido como resultado de la operación se almacena en la variables clonación.
-	**Merge:** se realiza una fusión de los objetos JSON doctores y servicios, obteniendo como resultado un objeto que contiene la información de los dos objetos bases la cual se almacena en la variable fusión.
-	**Recorrido:** en la función listardoctores() se implementa un for que recorre el objeto JSON doctores, el cual, nos permite a acceder a la información de cada doctor registrado en el objeto.
## Estructuras de datos
-	**Arreglo:** en el archivo array.js se inicializa un arreglo el cual mediante el método push registra los nombres de doctores de la clínica. También se implementan los métodos shift y pop que nos permite eliminar elementos del arreglo en la primera y última posición respectivamente y el método buscar que de acuerdo a un nombre entregado como parámetro recorre el arreglo y nos indica si ese nombre se encuentra o no registrado en el arreglo.
-	**Pila:** en el archivo stack.js se inicializa una pila, con las citas médicas registradas, a la cual se le agregan objetos mediante el método push y se eliminan mediante el método pop.
-	**Cola:** en el archivo queue se inicializa una cola que simula la entrada de solicitudes a la página de contacto del sitio web, a la cual se le agregan objetos mediante el método push y se eliminan mediante el método shift.
## Algoritmos 
En el archivo data.js se implementaron dos algoritmos uno que en busca en el objeto doctor si se encuentra registrado el doctor con el nombre indicado por parámetro, y otro que ordena el objeto doctores de acuerdo a los años de experiencia (ascendente).
-	**Complejidad algoritmo de búsqueda:** Este algoritmo cuenta con una complejidad lineal O(n), ya que recorre cada elemento del objeto hasta encontrar una coincidencia.
-	**Complejidad algoritmo de ordenamiento:** Este algoritmo busca el doctor con menos años de experiencia, luego lo intercambia con el primer elemento del objeto no ordenado, de esta forma crea dos sublistas una con los objetos ordenados y otra con los elementos por ordenar. De acuerdo a este comportamiento su complejidad es exponencial O(n^2).
### Visualización del proyecto
Para visualizar este proyecto se necesita que previamente cuentes con la instalación de:
- **Git**: [sitio de descarga] (https://git-scm.com/downloads)
- **Node.js**: [sitio de descarga] (https://nodejs.org/en/download/package-manager)
- **Visual Studio Code**: [sitio de descarga] (https://code.visualstudio.com/download)
  
Para visualizar este proyecto debes clonar este repositorio, mediante el siguiente comando:
```bash
git clone https://github.com/lorenasotosanmartin/tarea_3
```
Luego mediante tu consola (cmd) posicionarte en la carpeta donde alojaste el proyecto y escribir el siguiente comando: 
```bash
npm  init
```
Una vez cuentes con estos pases es recomendable que utilices un editor como Visual Studio Code para visualizar el código de cada archivo de una forma adecuada, para ello, es necesario contar con dos extensiones, las cuales pueden instalar escribiendo su nombre en la sección extensiones de Visual Studio Code y presionar la opción Install, la primera es **Live Server**, la cual, una vez instalada aparecerá una opción en la esquina inferior derecha de Visual Studio Code titulada como **"Go live"** la cual debes presionar, esto permitirá abrir una pestaña en tu navegador predeterminado y podrás visualizar todo el contenido de la página web. la segunda extensión que debes instalar es **Live Sass Server**, esta extensión, una vez instalada, te mostrara la opción **"watch Sass"** en la esquina inferior derecha la cual al ser seleccionada permitirá que se compile el código Sass incluido y ver los estilos creados en la página web. cabe destacar, que ambas opciones deben de ser seleccionadas de forma paralela para visualizar correctamente el sitio web de la clínica.
