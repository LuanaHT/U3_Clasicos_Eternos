$(document).ready(function() {
    let pagina = 1;

    const $btnAnterior = $('#btnAnterior');
    const $btnSiguiente = $('#btnSiguiente');
    const $contenedor = $('#contenedor');

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category) {
        cargarLibros(category); 
    } else {
        cargarLibros(); 
    }


    function cargarLibros(categoria) {
        let apiURL = `https://gutendex.com/books/?page=${pagina}`;

        
        if (categoria) {
            apiURL += `&topic=${encodeURIComponent(categoria)}`;
        }

        $.ajax({
            url: apiURL,
            method: 'GET',
            dataType: 'json',
            success: function(respuesta) {
                let libros = '';
                respuesta.results.forEach(libro => {
                    const imgUrl = libro.formats["image/jpeg"] || libro.formats["text/html"];
                    const author = libro.authors[0]?.name || "Autor desconocido";

                    libros += `
                        <div class="libro">
                            <a href="detalle-libro.html?id=${libro.id}">
                                <img class="cover" src="${imgUrl}" alt="Portada del libro">
                            </a>
                            <h3 class="titulo">${libro.title}</h3>
                            <p>${author}</p>
                        </div>
                    `;
                });

                $contenedor.html(libros);
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }

    $btnSiguiente.on('click', function() {
        pagina += 1;
        cargarLibros(category);
    });

    $btnAnterior.on('click', function() {
        if (pagina > 1) {
            pagina -= 1;
            cargarLibros(category);
        }
    });
});
