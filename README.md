# SIAI Tucumán 🌧️
### Sistema Integral de Alerta Temprana de Inundaciones

## Integrantes

* **Ivan Diez Gomez**
* **Luciana Jimenez**
* **Florencia Avellaneda**

---

## Descripción 

**SIAI Tucumán** es un proyecto web orientado a la visualización y consulta de información relacionada con el monitoreo y la prevención de situaciones de riesgo hídrico en la provincia de Tucumán.
El sistema presenta un **dashboard principal** y diferentes secciones que permiten consultar información sobre alertas, estaciones de monitoreo, mediciones, mapa de riesgo, reportes, historial y usuarios.
La propuesta busca centralizar la información en una interfaz organizada y sencilla de consultar.

---

## Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron las siguientes tecnologías:
* **HTML5:** utilizado para estructurar el contenido de las diferentes páginas.
* **CSS3:** utilizado para definir y complementar los estilos visuales.
* **JavaScript:** utilizado para agregar interacción y comportamiento a determinadas funcionalidades.
* **Bootstrap 5.3.3:** utilizado para componentes, sistema de grillas y adaptación responsive.
* **Bootstrap Icons:** utilizado para los iconos de la interfaz.
* **Font Awesome 6.5.2:** utilizado principalmente en la sección de reportes.
* **Git:** utilizado para el control de versiones.
* **GitHub:** utilizado para almacenar y compartir el repositorio del proyecto.

---

## ¿Dónde utilizaron Flexbox?

Se utilizó **Flexbox mediante las clases de Bootstrap**, principalmente para organizar y alinear elementos dentro de diferentes componentes de la interfaz.
Algunos ejemplos utilizados en el proyecto son:
```html
d-flex align-items-center
```
Esta combinación permite utilizar un contenedor flexible y alinear sus elementos verticalmente.
También se utiliza:
```html
d-md-flex justify-content-md-end
```
para modificar la distribución de los elementos a partir de determinado tamaño de pantalla y alinearlos hacia el final del contenedor.
Estas clases se encuentran, entre otras páginas, en elementos de navegación, botones y formularios.

---

## ¿Dónde utilizaron Grid?

Se utilizó el **sistema de grillas de Bootstrap** para organizar los diferentes componentes de las páginas mediante filas y columnas.
Se utilizaron principalmente las clases
```html
row
col-md-6
col-md-4
col-md-3
col-xl-3
col-xl-4
```
Por ejemplo:
```html
<div class="row g-4">
    <div class="col-md-6 col-xl-3">
        ...
    </div>
</div>
```
La clase `row` permite crear una fila y las clases `col-*` determinan cómo se distribuye el contenido dentro de ella según el tamaño de pantalla.
Este recurso se utiliza en diferentes secciones del proyecto, como el dashboard, mapa, estaciones, reportes, configuración y administración.
> En este proyecto se utilizó el sistema Grid proporcionado por Bootstrap, en lugar de definir `display: grid` directamente en CSS.

---

## ¿Qué variables CSS crearon?

En esta versión del proyecto se utilizaron principalmente las herramientas de estilo proporcionadas por Bootstrap y clases CSS para definir la presentación de los componentes.
**No se definieron variables CSS personalizadas mediante ****`:root`**** en los archivos CSS del proyecto.**

---

## ¿Cómo implementaron el Responsive Design?

El diseño responsive se implementó principalmente mediante **Bootstrap 5.3.3**.
Se utilizaron clases que permiten modificar la distribución de los elementos según el tamaño de la pantalla.
Por ejemplo:
```html
col-md-6 col-xl-3
```
permite establecer diferentes distribuciones para distintos tamaños de dispositivo.
También se utilizaron componentes y clases responsive para adaptar:
* La navegación.
* Las tarjetas.
* Los formularios.
* Las tablas.
* Las columnas.
* Los botones.
* El contenido general de las páginas.
Además, las páginas incluyen la etiqueta:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
que permite que el navegador adapte correctamente el contenido al ancho del dispositivo.


---

# Estrategias de SEO implementadas

Para mejorar la estructura y la interpretación del sitio por parte de los motores de búsqueda se incorporaron diferentes prácticas básicas de SEO.
### Idioma del documento
Las páginas principales utilizan:
```html

<html lang="es">

```
Esto permite indicar que el contenido de la página se encuentra en español.

### Títulos descriptivos
Cada página cuenta con un elemento `<title>` relacionado con su contenido
Algunos ejemplos son:
```html
<title>SIAI Tucumán - Dashboard</title>
```

```html
<title>SIAI Tucumán - Mapa de Riesgo</title>
```

```html
<title>SIAI Tucumán - Mediciones</title>
```

```html
<title>SIAI Tucumán - Reportes</title>
```
Esto permite identificar cada página mediante un título específico.

###  Codificación de caracteres

Se utiliza:
```html
<meta charset="UTF-8">
```
para garantizar la correcta visualización de caracteres especiales y tildes.

### Adaptación a dispositivos

Se incorpora la etiqueta viewport:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Esto acompaña la implementación responsive del sitio.

### Encabezados

Se utilizan encabezados HTML para organizar el contenido de las páginas y establecer una jerarquía visual entre las diferentes secciones.

### Texto alternativo

Las imágenes utilizadas en el proyecto incorporan el atributo `alt` cuando corresponde, proporcionando información alternativa sobre el contenido de la imagen.


###  Navegación interna

Las diferentes páginas del sistema se encuentran relacionadas mediante enlaces internos, permitiendo navegar entre las distintas secciones del proyecto.

---

## Estructura del proyecto

```text
Proyecto_Program/
│
├── image/
│   └── ...
│
├── js/
│   ├── index.js
│   └── login.js
│
├── pages/
│   ├── index.html
│   ├── login.html
│   ├── admi.html
│   ├── alertas.html
│   ├── configuracion.html
│   ├── estaciones.html
│   ├── historial.html
│   ├── mapa.html
│   ├── mediciones.html
│   ├── reportes.html
│   └── usuarios.html
│
└── README.md
```

---

## Ejecución del proyecto

Para visualizar el proyecto de manera local:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `Proyecto_Program`.
3. Ingresar a la carpeta `pages`.
4. Abrir el archivo `index.html` en el navegador.

También se puede utilizar **Visual Studio Code** junto con **Live Server** para ejecutar el proyecto durante el desarrollo.

---
## Enlaces y Accesos rapidos del proyecto
** Demo en Netlify: ** [https://sistemaprevencion.netlify.app] **
** Repositorio en GitHub: ** [https://github.com/IvanDiezGomez/Proyecto_Program] **

