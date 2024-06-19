const fs = require('fs');
const readline = require('readline');

function mensaje () {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("ingresar nombre: ", (name) => {
        rl.question("ingresar apellidos: ", (surname) => {
            rl.question("ingresar edad: ", (age) => {
                let persona = {
                    name: name,
                    surname: surname,
                    age: parseInt(age),
                };

                let ficheroJson = JSON.stringify(persona);

                fs.writeFile("reto3Json", ficheroJson, function(error) {
                    if (error) {
                        console.log("error de escritura");
                    } else {
                        console.log("escritura completada");
                        fs.readFile("reto3Json", "utf8", function(error, lectura) {
                            if (error) {
                                console.log("error de lectura");
                            } else {
                                console.log(lectura);
                                console.log("lectura completada");
                                rl.close();
                            };
                        });
                    };
                });
            });
        });
    });
};

mensaje();