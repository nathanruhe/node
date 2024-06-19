const express = require("express")
const app = express()

app.get("/", function (request, response)
{
    console.log("Petición recibida del cliente")
    console.log(request.url)
    console.log(request.method)
    console.log(request.headers["user-agent"])
    console.log("statusCode: " + response.statusCode)
    response.send({ok: true, message: "Recibido!"});
});

app.get("/bye", function (request, response)
{
    console.log("statusCode: " + response.statusCode)
    response.send({ok: true, message: "Adiós!"});
});

app.listen(3000)