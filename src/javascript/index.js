import {CadastroUsuario} from "../models/cadastroUsuario.js"
import { LoginUsuario } from "../models/modelLogin.js"
import {Api} from "../controller/Api.js"

const modalCadastro = document.getElementById('modalCadastro')
const modalLogin = document.getElementById('modalLogin')
const dadosLogin = document.getElementById('dadosLogin')
const dadosCadastro = document.getElementById('dadosCadastro')
const menu = document.getElementById('menu')

// Adicionando msg de erro no login
const p = document.createElement('p')
p.id = 'msgErro'
dadosLogin.appendChild(p)

//adicionando mdg de erro Cadastro
const p2 = document.createElement('p')
p2.id = 'msgErroCadastro'
dadosCadastro.appendChild(p2)


async function coletarDadosCadastro(e){
    const inputNome = document.getElementById('inputNomeCadastro')
    const inputEmail = document.getElementById('inputEmailCadastro')
    const inputSenha = document.getElementById('inputSenhaCadastro')

    const newUser = new CadastroUsuario(inputNome.value, inputEmail.value, inputSenha.value)
    const user = await Api.registrarUsuario(newUser)
    console.log(user)
    if(user.message !== undefined){
        p2.innerText = ''
        p2.innerText = user.message
    }else{
        modalCadastro.classList.remove('modal-on')
        modalCadastro.classList.add('modal-off')
        modalLogin.classList.remove('modal-off')
        modalLogin.classList.add('modal-on')
    }
    return user
}

const buttonCriarCadastro = document.getElementById('criarCadastro')
buttonCriarCadastro.addEventListener('click', coletarDadosCadastro)


async function coletarDadosLogin(e){
    
    const inputEmail = document.getElementById('inputEmailLogin')
    const inputSenha = document.getElementById('inputSenhaLogin')

    const newUser = new LoginUsuario(inputEmail.value, inputSenha.value)
    const user = await Api.logarUsuario(newUser)

    if(user.error !== undefined){
        p.innerText = ''
        p.innerText = user.error
    }else{
        p.innerText = ''
        modalLogin.classList.remove('modal-on')
        modalLogin.classList.add('modal-off')
    }

    return user
}

const buttonLogar = document.getElementById('buttonLogar')
buttonLogar.addEventListener('click', coletarDadosLogin)



const buttonLogin = document.getElementById('imgLogin')
buttonLogin.addEventListener('click', (e)=>{
    if(localStorage.Token !== undefined){
        menu.innerHTML = ''
        menu.classList.toggle('menuOff')
        const liHome = document.createElement('li')
        liHome.innerText = 'Home'
        liHome.id = 'home'
        const liDash = document.createElement('li')
        liDash.innerText = 'Dashboard'
        liDash.id = 'dash'
        const liLogout = document.createElement('li')
        liLogout.innerText = 'Logout'
        liLogout.id = 'logout'

        menu.appendChild(liHome)
        menu.appendChild(liDash)
        menu.appendChild(liLogout)

        const buttonLogout = document.getElementById('logout')
        buttonLogout.addEventListener('click', (e)=> {
            localStorage.removeItem('Token')
            menu.classList.toggle('menuOff')
        })

        const buttonHome = document.getElementById('home')
        buttonHome.addEventListener('click', (e) => {
            window.location.href = 'index.html'
        })

        const buttonDashboard = document.getElementById('dash')
        buttonDashboard.addEventListener('click', (e)=>{
            window.location = 'src/pages/dashboard.html'
        })

    }else{
    modalLogin.classList.remove('modal-off')
    modalLogin.classList.add('modal-on')
    }
})

const linkLogin = document.getElementById('linkLogin')
linkLogin.addEventListener('click', (e)=> {
    modalLogin.classList.remove('modal-on')
    modalLogin.classList.add('modal-off')
    modalCadastro.classList.remove('modal-off')
    modalCadastro.classList.add('modal-on')
})

const fecharLogin = document.getElementById('fecharLogin')
fecharLogin.addEventListener('click', (e)=>{
    p.innerText = ''
    modalLogin.classList.remove('modal-on')
    modalLogin.classList.add('modal-off')
})

const fecharCadastro = document.getElementById('fecharCadastro')
fecharCadastro.addEventListener('click', (e)=>{
    p2.innerText = ''
    modalCadastro.classList.remove('modal-on')
    modalCadastro.classList.add('modal-off')
})
