# Clasicos Eternos
Es una página web que ofrece una selección de los mejores clásicos de la literatura mundial. Los usuarios pueden explorar libros a través de varias categorías, realizar búsquedas personalizadas y acceder a detalles de cada libro mediante la integración con la API de Gutendex. El diseño es totalmente responsivo, asegurando una experiencia fluida en dispositivos móviles, tabletas y computadoras.

##  Descripción General del Proyecto
¿Qué hace este proyecto?
El proyecto Clasicos Eternos permite a los usuarios:

##  Buscar libros clásicos por título.
Explorar diferentes géneros y categorías literarias.
Ver detalles de cada libro como título, autor y portada.
Descargar libros en diferentes formatos (EPUB, MOBI) y leerlos directamente desde la página.
##  ¿Por qué es útil?
Este proyecto es útil porque facilita el acceso a una vasta colección de libros clásicos, permitiendo a los usuarios descubrir obras literarias importantes de manera sencilla. Además, el diseño responsivo y su integración con una API hacen que sea una herramienta moderna y accesible para cualquier persona interesada en la literatura.

##  ¿Cómo pueden comenzar los usuarios?
Los usuarios pueden comenzar de manera muy simple:

Accede a la página principal desde el archivo index.html.
Navega por las diferentes categorías de libros a través del carrusel.
Usa la barra de búsqueda para encontrar libros específicos.
Haz clic en cualquier libro para ver detalles y acceder a los botones de descarga o lectura.

##  Desglose de las Partes del Proyecto
1. Estructura HTML (archivo index.html y otros archivos .html)
La estructura HTML principal está formada por varias secciones clave:

Encabezado y barra de navegación: Permite a los usuarios navegar entre las secciones principales como "Inicio" y "Biblioteca".
Banner: Presenta un llamado a la acción visual que invita a los usuarios a explorar los mejores clásicos literarios.
Carrusel de categorías (Swiper): Muestra las diferentes categorías de libros disponibles en el sitio como Ficción, Humor, Literatura, entre otros. Cada categoría está representada por una tarjeta con imagen y descripción.
Formulario de búsqueda: Los usuarios pueden buscar libros por título usando la barra de búsqueda en la parte superior del sitio.
Pie de página (footer): Contiene información de contacto, enlaces sociales y un formulario para suscribirse al boletín.
2. Funcionalidad con JavaScript (archivos biblioteca.js y slides.js)
Los archivos JavaScript manejan la lógica del sitio y la interacción con la API:

biblioteca.js:
Función cargarLibros(): Esta función envía solicitudes a la API de Gutendex para cargar libros según la categoría seleccionada o la búsqueda del usuario.
Paginación: Permite navegar entre páginas de resultados a través de los botones "Siguiente" y "Anterior".
Función de búsqueda: Permite buscar libros por título, mostrando los resultados dinámicamente en el contenedor de libros.
slides.js:
Controla el carrusel de categorías, permitiendo desplazarse entre ellas con efectos de animación suave y botones de navegación previos/siguientes.


3. Diseño y Estilos CSS (archivo styles.css)
El archivo styles.css define el estilo visual del proyecto, utilizando una paleta de colores en tonos marrones para un look clásico y armónico:

Estilo general y diseño responsivo: Define las reglas de estilo para asegurar que la página se vea bien en diferentes tamaños de pantalla.
Estilos de las tarjetas (cards): Cada categoría de libro se presenta en tarjetas que contienen imágenes y texto. Estas tarjetas tienen efectos hover que mejoran la experiencia del usuario.
Paleta de colores: Utiliza colores marrones y suaves para crear una estética cálida y acogedora.


4. API Gutendex
El proyecto utiliza la API de Gutendex para obtener datos en tiempo real sobre libros clásicos. Estos datos incluyen títulos, autores, imágenes de portadas y enlaces a los formatos de lectura.

Endpoint de búsqueda: /books?search={titulo_del_libro} permite buscar libros por título.
Endpoint de categorías: Filtra libros por categorías específicas (Ficción, Historia, Poesía, etc.).


5. Botones de Acción
Los usuarios pueden interactuar con los libros a través de botones específicos:

Botón "Leer": Lleva al usuario a una página donde puede leer el libro directamente.
Botones de descarga (EPUB, MOBI): Permiten descargar el libro en diferentes formatos para leerlo en dispositivos compatibles.

##  ¿Cómo funciona el flujo del usuario?
El usuario abre la página web.
Explora el carrusel de categorías o utiliza la barra de búsqueda para encontrar un libro específico.
Al hacer clic en una tarjeta de libro, el usuario accede a más detalles sobre el libro, como el autor y las opciones de descarga.
Puede optar por descargar el libro o leerlo en línea.
