const fs = require('fs/promises');

let persona = {
    name: "Carlos",
    surname: "Ruiz Ocaña",
    age: 41,
};

// promesas ".then/.catch"
function mensaje() {
    fs.writeFile("reto2Json", JSON.stringify(persona))
        .then(() => {
            console.log("escritura completada");
            return fs.readFile("reto2Json", "utf8");
        })
        .then(lectura => {
            console.log(lectura);
            console.log("lectura completada");
        })
        .catch(error => {
            console.log(error);
        });
};
mensaje();

// promesas "async/await"
async function mensaje() {
    try {
        await fs.writeFile("reto2Json", JSON.stringify(persona));
        console.log("escritura completada");

        let lectura = await fs.readFile("reto2Json", "utf8");
        console.log(lectura);
        console.log("lectura completada");
    } catch(error) {
        console.log(error);
    }
};
mensaje();