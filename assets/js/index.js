
$(document).ready(function() {
    // Función para activar/desactivar el menú
    $("#check").click(function() {
        $(".menu").toggleClass("active");
    });

    // Resto de tu código JavaScript existente
    $("#buscar").click(function(event) {
        event.preventDefault();

        let categoriaBooks = $("#search-input").val();

        if (categoriaBooks) {
            categoriaBooks = categoriaBooks.toLowerCase();
            buscarBooks(categoriaBooks);
        } else {
            alert("Por favor, introduzca un valor");
        }
        $("#search-input").val('');
    });

    $("#btnLimpiar").click(function(event) {
        event.preventDefault();
        $("#search-input").val("");
        $('#contenedor').empty();
    });

    function buscarBooks(books) {
        $.ajax({
            type: "GET",
            url: `https://gutendex.com/books?search=${books}`,
            dataType: "json",
            async: true,
            success: function(data) {
                renderBooks(data);
            },
            error: function(textStatus, errorThrown) {
                console.error("Error en la solicitud:", textStatus, errorThrown);
                alert("Ocurrió un error al buscar los libros.");
            }
        });
    }

    function renderBooks(data) {
        if (data.results && data.results.length > 0) {
            $('#contenedor').empty();

            data.results.forEach(book => {
                let div = $("<div></div>").addClass("libro");

                let img = $("<img>")
                    .attr("src", book.formats["image/jpeg"] || 'default-image.jpg')
                    .addClass("cover");
                div.append(img);

                let libro = $("<h3></h3>")
                    .addClass("titulo")
                    .text(book.title || 'Título no disponible');
                div.append(libro);

                let author = $("<p></p>")
                    .text(book.authors[0]?.name || "Autor desconocido");
                div.append(author);

                $('#contenedor').append(div);
            });
        } else {
            alert("No se encontraron libros.");
        }
    }
});