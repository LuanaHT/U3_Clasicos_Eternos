$(document).ready(function() {
    const apiUrl = 'https://gutendex.com/books/';

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: "json",
        success: function(data) {mostrarLibros(data.results);},
    });

    function mostrarLibros(libros) {
        libros.forEach(function(libro) {
            let card = $('<div>').addClass('card');
            $('<h2></h2>').text(libro.title).appendTo(card);
            let autores = $('<p>').text('Autor: ' + libro.authors.map(a => a.name).join(', '));
            autores.appendTo(card);
            $('<img>').attr('src', libro.formats['image/jpeg']).appendTo(card);

            $('#book-container').append(card);
        });
    }
});