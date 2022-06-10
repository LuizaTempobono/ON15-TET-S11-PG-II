//importar o express e o cors
const express = require("express")
const cors = require("cors")

//chamar a função express
const app = express()

app.use(express.json())
app.use(cors())

//importar as rotas com uma const
const pacientesRota = require("./routes/pacienteRoutes")

//utilizar o metodo use para acessar a rota
app.use("/pacientes", pacientesRota)

//exportar modulo app 
module.exports = app