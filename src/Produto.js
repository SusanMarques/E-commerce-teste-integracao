class Produtos{
    constructor(database){
        this.database = database;
    }

    criarProduto(descricao){
        const id = Date.now()
        const produto = {id, descricao}
        this.database.produtos.push(produto);
        return produto;
    }

    getProdutoPorId(){
        return this.database.produtos.find(produto => produto.id === id);
    }

    getProdutos(){
        return this.database.produtos;
    }
}

export default Produtos;