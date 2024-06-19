const fs = require('fs');

let persona = {
    name: "Carlos",
    surname: "Ruiz Ocaña",
    age: 41,
};

function mensaje () {
    let ficheroJson = JSON.stringify(persona);

    fs.writeFile("reto2Json", ficheroJson, function(error) {
        if (error) {
            console.log("error de escritura");
        } else {
            console.log("escritura completada");
            fs.readFile("reto2Json", "utf8", function(error, lectura) {
                if (error) {
                    console.log("error de lectura");
                } else {
                    console.log(lectura);
                    console.log("lectura completada");
                };
            });
        };
    });
};

mensaje();