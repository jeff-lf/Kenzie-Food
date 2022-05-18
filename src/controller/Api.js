class Api {
    static URL_Api = 'https://api-kenzie-food.herokuapp.com'
  
    static async registrarUsuario(objetoUsuario) {
        const response = await fetch(`${this.URL_Api}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objetoUsuario)
        })
        const result = await response.json()
        return result
    }
  
    static async logarUsuario(objetoUsuarioLogin) {
        const response = await fetch(`${this.URL_Api}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objetoUsuarioLogin)
        })
        const result = await response.json()
        localStorage.setItem("Token", result)
        return result
    }
    static async listarProdutos() {
        const response = await fetch(`${this.URL_Api}/products`, {
            method: 'GET'
        })
        const result = await response.json()
        return result
    }
  
    static async listarMeusProdutos() {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        const result = await response.json()
        return result
    }
    static async criarProduto(objetoDadosProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objetoDadosProduto)
        })
        const result = await response.json()
        return result
    }
    static async atualizarProduto(objetoDadosProduto, idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objetoDadosProduto)
        })
        const result = await response.json()
        return result
    }
    static async deletarProduto(idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/my/products/${idProduto}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        return response
    }
    static async listarCarrinho() {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        const result = await response.json()
        return result
    }
    static async adicionarEmQuantidade(objetoQuantidade) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/add`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
            body: JSON.stringify(objetoQuantidade)
            })
            const result = await response.json()
            return result
        }
    static async removerProduto(idProduto) {
        const token = localStorage.getItem('Token')
        const response = await fetch(`${this.URL_Api}/cart/remove/${idProduto}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        })
        return response
    }
}
export {Api}