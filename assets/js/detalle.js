$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    function cargarDetalles() {
        $.ajax({
            url: `https://gutendex.com/books/${bookId}`,
            method: 'GET',
            dataType: 'json',
            success: function(respuesta) {
                actualizarDetalles(respuesta);
            },
            error: function(error) {
                console.error('Error al obtener los detalles del libro:', error);
                mostrarError();
            }
        });
    }

    function actualizarDetalles(libro) {
        const titulo = libro.title || "Título no disponible";
        const autor = libro.authors && libro.authors.length > 0 ? libro.authors[0].name : "Autor desconocido";
        const paginas = libro.formats && libro.formats["text/html; charset=utf-8"] ? "Disponible en formato web" : "No disponible";
        const popularidad = libro.download_count || "No disponible";
        const idiomas = libro.languages ? libro.languages.join(', ') : "No disponible";
        const descripcion = libro.subjects && libro.subjects.length > 0 ? libro.subjects.join(', ') : "No hay descripción disponible.";
        const cover = libro.formats && libro.formats["image/jpeg"] ? libro.formats["image/jpeg"] : "https://via.placeholder.com/300x400?text=No+Image";
        const id = libro.id || "No disponible";

        $('#titulo').text(titulo);
        $('#autor').text(autor);
        $('#paginas').text(paginas);
        $('#popularidad').text(popularidad);
        $('#idiomas').text(idiomas);
        $('#descripcion').text(descripcion);
        $('#id').text(id);
        $('.btn-leer').attr('src', cover);
        $('#cover').attr('src', cover);

        $('#online').on('click', function() {
            const onlineUrl = libro.formats["text/html"];
            if (onlineUrl) {
                window.open(onlineUrl, '_blank');
            } else {
                alert("No hay versión disponible para leer en línea.");
            }
        });

        $('#epub').on('click', function() {
            const epubUrl = libro.formats["application/epub+zip"];
            if (epubUrl) {
                window.location.href = epubUrl; // Redirige a la URL para descargar
            } else {
                alert("No hay versión ePub disponible.");
            }
        });

        $('#Mobi').on('click', function() {
            const mobiUrl = libro.formats["application/x-mobipocket-ebook"];
            if (mobiUrl) {
                window.location.href = mobiUrl; // Redirige a la URL para descargar
            } else {
                alert("No hay versión Mobi disponible.");
            }
        });
    }

    function mostrarError() {
        $('#titulo').text('Error al cargar el título');
        $('#autor').text('Autor desconocido');
        $('#paginas').text('No disponible');
        $('#popularidad').text('No disponible');
        $('#idiomas').text('No disponible');
        $('#descripcion').text('No hay descripción disponible.');
        $('#id').text('No disponible');
        $('#cover').attr('src', 'https://via.placeholder.com/300x400?text=Error');
    }

    cargarDetalles();
});
