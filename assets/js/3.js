$(document).ready(function () {
    $.ajax({
      type: 'GET',
      url: 'https://gutendex.com/books/1513/',
      datatype: 'json',
      success: function (book) {
        mostrarLibro(book);
      },
    });
  
    function mostrarLibro(book) {
      let bookInfo = $('<div></div>').addClass('book-details');
  
      if (book.formats['image/jpeg']) {
        let bookCover = $('<img>')
          .attr('src', book.formats['image/jpeg'])
          .attr('alt', book.title);
        $('#book-info').append(bookCover);
      }
  
      $('<h3></h3>').text(book.title).appendTo(bookInfo);
  
      if (book.authors.length > 0) {
        $('<p></p>')
          .text('por ' + book.authors[0].name)
          .appendTo(bookInfo);
      }
  
      $('<p></p>')
        .text('Temas: ' + book.subjects.join(', '))
        .appendTo(bookInfo);
  
      let downloadLinks = $('<div></div>').addClass('download-links');
      if (book.formats['text/html']) {
        $('<a></a>')
          .attr('href', book.formats['text/html'])
          .text('Leer en línea')
          .appendTo(downloadLinks);
      }
      if (book.formats['application/epub+zip']) {
        $('<a></a>')
          .attr('href', book.formats['application/epub+zip'])
          .text('Descargar ePub')
          .appendTo(downloadLinks);
      }
      if (book.formats['application/x-mobipocket-ebook']) {
        $('<a></a>')
          .attr('href', book.formats['application/x-mobipocket-ebook'])
          .text('Descargar Mobi')
          .appendTo(downloadLinks);
      }
  
      bookInfo.append(downloadLinks);
  
      $('#book-info').append(bookInfo);
    }
  });