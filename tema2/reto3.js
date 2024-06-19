const fs = require('fs/promises');
const readline = require('readline/promises');

// promesas ".then/.catch"
function mensaje() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let persona = {};

    rl.question("Ingresar nombre: ")
        .then(name => {
            persona.name = name;
            return rl.question("Ingresar apellidos: ");
        })
        .then(surname => {
            persona.surname = surname;
            return rl.question("Ingresar edad: ");
        })
        .then(age => {
            persona.age = parseInt(age);
            return fs.writeFile("reto3Json.json", JSON.stringify(persona));
        })
        .then(() => {
            console.log("Escritura completada");
            return fs.readFile("reto3Json.json", "utf8");
        })
        .then(lectura => {
            console.log(lectura);
            console.log("Lectura completada");
            rl.close();
        })
        .catch(error => {
            console.log(error);
            rl.close();
        });

};
mensaje();

// promesas "async/await"
async function mensaje() {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    try {
        let name = await rl.question("ingresar nombre: ");
        let surname = await rl.question("ingresar apellidos: ");
        let age = await rl.question("ingresar edad: ");
        
        let persona = {
            name: name,
            surname: surname,
            age: parseInt(age),
        };

        await fs.writeFile("reto3Json", JSON.stringify(persona));
        console.log("escritura completada");

        let lectura = await fs.readFile("reto3Json", "utf8");
        console.log(lectura);
        console.log("lectura completada");
        rl.close();
    } catch (error) {
        console.log(error);
        rl.close();
    }
}
mensaje();