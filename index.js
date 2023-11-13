const { application } = require("express")
const express = require("express")

const path = require("path")
const caminhoBase = path.join(__dirname, "templates")

const app = express()


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastro/salvar', (requisicao, resposta)=>{
   const nome = requisicao.body.nome
   const email = requisicao.body.email
   const senha = requisicao.body.senha

   console.log(`O email do Usuario é: ${email}`)
})

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json)

app.post('/cadastrar/salvar', (requisicao, resposta)=>{
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.email

})
app.get('/cadastrar/', (requisicao, resposta)=>{
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/usuario/:id', (requisicao, resposta) =>{

    const id= requisicao.params.id

    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuario.html`)
})


app.get('/', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/index.html`)
    
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})