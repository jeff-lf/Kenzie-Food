import {CadastroUsuario} from "../models/cadastroUsuario.js"
import { LoginUsuario } from "../models/modelLogin.js"
import {Api} from "../controller/Api.js"

async function coletarDadosCadastro(e){
    const inputNome = document.getElementById('inputNomeCadastro')
    const inputEmail = document.getElementById('inputEmailCadastro')
    const inputSenha = document.getElementById('inputSenhaCadastro')

    const newUser = new CadastroUsuario(inputNome.value, inputEmail.value, inputSenha.value)
    const user = await Api.registrarUsuario(newUser)

    return user
}

const buttonCriarCadastro = document.getElementById('criarCadastro')
buttonCriarCadastro.addEventListener('click', coletarDadosCadastro)


async function coletarDadosLogin(e){
    
    const inputEmail = document.getElementById('inputEmailLogin')
    const inputSenha = document.getElementById('inputSenhaLogin')

    const newUser = new LoginUsuario(inputEmail.value, inputSenha.value)
    const user = await Api.logarUsuario(newUser)
    
    return user
}

const buttonLogar = document.getElementById('buttonLogar')
buttonLogar.addEventListener('click', coletarDadosLogin)