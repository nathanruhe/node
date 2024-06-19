const Book = require('../models/book');

let books = [
    new Book ( 1, undefined, "El principito", "tapa blanda", "Antoine de Saint.Exupery", 7.95, "https://cdn.kobo.com/book-images/86caf6ab-35d2-4e48-8a0a-d28d4987f7fc/353/569/90/False/el-principito-45.jpg"),

    new Book ( 2, undefined, "El poder", "tapa blanda", "Pedro Baños", 11.35, "https://m.media-amazon.com/images/I/91eDJrp+KiL._AC_UF894,1000_QL80_.jpg"),

    new Book ( 3, undefined, "Diario de Ana Frank", "tapa blanda", "Ana Frank", 9.75, "https://m.media-amazon.com/images/I/71dWcI94iPS._AC_UF894,1000_QL80_.jpg"),
];

function getAllBooks(request, response) {
    let respuesta;
    // UTILIZANDO QUERY
    let id = request.query.id_book;
    if (id) {
        const libro = books.find(book => book.id_book == id);
        if (libro) {
            respuesta = {error: false, codigo: 200, mensaje: "Libro encontrado", data: libro};
        } else {
            respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
        };
    } else {
        respuesta = books;
    };
    response.send(respuesta); 
};

// UTILIZANDO PARAMS
function getBook(request, response) {
    let respuesta;
    let id = request.params.id;
    const libro = books.find(book => book.id_book == id);

    if (libro) {
        respuesta = {error: false, codigo: 200, mensaje: "Libro encontrado", data: libro};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"};
    };
    response.send(respuesta); 
};

function postBook(request, response) {
    let respuesta;
    const nuevoLibro = books.some(book => book.id_book == request.body.id_book);

    if (!nuevoLibro) {
        const book = new Book (
            request.body.id_book,
            request.body.id_user,
            request.body.title,
            request.body.type,
            request.body.author,
            request.body.price,
            request.body.photo
        );
        books.push(book);
        respuesta = {error: false, codigo: 200, mensaje: 'libro creado', data: book};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'el libro ya existe'};
    };
    response.send(respuesta);
};

function putBook(request, response) {
    let respuesta;
    const cambiarLibro = books.findIndex(book => book.id_book == request.body.id_book);

    if (cambiarLibro >= 0) {
        books[cambiarLibro] = new Book (
            request.body.id_book,
            request.body.id_user,
            request.body.title,
            request.body.type,
            request.body.author,
            request.body.price,
            request.body.photo
        );
        respuesta = {error: false, codigo: 200, mensaje: 'libro actualizado', data: books[cambiarLibro]};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
    };
    response.send(respuesta);
};

function deleteBook(request, response) {
    let respuesta;
    const borrarLibro = books.findIndex(book => book.id_book == request.body.id_book);

    if (borrarLibro >= 0) {
        books.splice(borrarLibro, 1);
        respuesta = {error: false, codigo: 200, mensaje: 'libro borrado'};
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
    };
    response.send(respuesta);
};

module.exports = { getAllBooks, getBook, postBook, putBook, deleteBook };