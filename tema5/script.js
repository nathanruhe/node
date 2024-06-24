async function obtener() {

    let name = document.getElementById("nombreInput").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        method: "GET"
    }

    try {
        let data = await fetch(url, param);

        if (data.ok) {
            let result = await data.json();
            console.log(result);

            // añadir imagen
            document.getElementById("img").src = result.sprites.other.dream_world.front_default;
            
            // añadir nombre
            document.getElementById("nombre").innerHTML = name.toUpperCase();

            // añadir habilidades
            let lista = document.getElementById("habilidades");
            lista.innerHTML = "Habilidades:";

            for (let elemento of result.abilities) {
                let elem = document.createElement("li");
                elem.textContent = elemento.ability.name;
                lista.appendChild(elem);
            };

            document.getElementById("nombreInput").value = "";

        } else {
            console.log("Pokemon no encontrado");
            document.getElementById("nombre").innerHTML = "No encontrado";
            document.getElementById("img").src = "";
            document.getElementById("habilidades").innerHTML = "";

            document.getElementById("nombreInput").value = "";
        };

    } catch(error) {
        console.log(error);
    };

};
