<<<<<<< HEAD
export class Api {

    static URL_Api = 'https://api-kenzie-food.herokuapp.com'

    static async registrarUsuario(objetoUsuario) {
        const response = await fetch(`${this.URL_Api}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
=======
class Api{

    static URL_Api = 'https://api-kenzie-food.herokuapp.com'

    static async registrarUsuario(objetoUsuario){
        const response = await fetch(`${this.URL_Api}/auth/register`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            body: JSON.stringify(objetoUsuario)
        })
        const result = await response.json()

        return result
    }

<<<<<<< HEAD
    static async logarUsuario(objetoUsuarioLogin) {
        const response = await fetch(`${this.URL_Api}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
=======
    static async logarUsuario(objetoUsuarioLogin){
        const response = await fetch(`${this.URL_Api}/auth/login`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            body: JSON.stringify(objetoUsuarioLogin)
        })
        const result = await response.json()
        localStorage.setItem("Token", result)

        return result
    }

<<<<<<< HEAD
    static async listarProdutos() {
        const response = await fetch(`${this.URL_Api}/products`, {
            method: 'GET'
=======
    static async listarProdutos(){
        const response = await fetch(`${this.URL_Api}/products`, 
        {
            method: 'GET'  
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
        })

        const result = await response.json()

        return result

    }

<<<<<<< HEAD
    static async listarMeusProdutos() {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
=======
    static async listarMeusProdutos(){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, 
        {
            method: 'GET',
            headers: {
                
                'Authorization': `Bearer ${token}`}  
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
        })

        const result = await response.json()

        return result

    }

<<<<<<< HEAD
    static async criarProduto(objetoDadosProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
=======
    static async criarProduto(objetoDadosProduto){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, 
        {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            body: JSON.stringify(objetoDadosProduto)
        })

        const result = await response.json()

        return result

    }

<<<<<<< HEAD
    static async atualizarProduto(objetoDadosProduto, idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
=======
    static async atualizarProduto(objetoDadosProduto, idProduto){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, 
        {
            method: 'PATCH',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                    },
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            body: JSON.stringify(objetoDadosProduto)
        })

        const result = await response.json()

        return result

    }

<<<<<<< HEAD
    static async deletarProduto(idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })

        const result = await response.json()

        return result
=======
    static async deletarProduto(idProduto){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, 
        {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`}
        })

        //const result = await response.json()

        //return result
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c

    }


<<<<<<< HEAD
    static async listarCarrinho() {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
=======
    static async listarCarrinho(){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart`, 
        {
            method: 'GET',
            headers: {'Authorization': `Bearer ${token}`}  
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
        })

        const result = await response.json()

        return result

    }

<<<<<<< HEAD
    static async adicionarEmQuantidade(objetoQuantidade) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/add`, {
=======
    static async adicionarEmQuantidade(objetoQuantidade){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/add`, 
        {
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
<<<<<<< HEAD
            },
=======
                },
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
            body: JSON.stringify(objetoQuantidade)
        })

        const result = await response.json()
        return result
<<<<<<< HEAD

    }


    static async removerProduto(idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/remove/${idProduto}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
=======
    
    }


    static async removerProduto(idProduto){
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/remove/${idProduto}`, 
        {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`}
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
        })

        const result = await response.json()

        return result

    }


<<<<<<< HEAD

}

export {Api}

=======
}

export {Api}
>>>>>>> 12eebb5e466af4381364433c881a9c900f35334c
