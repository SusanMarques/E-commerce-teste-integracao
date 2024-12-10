import Database from "../src/Database";
import Produtos from "../src/Produto";
import Pedidos from "../src/Pedido";

describe("Testar integração entre produtos e pedidos", () =>{
    let database;
    let produtos;
    let pedidos;

    beforeEach(() =>{
        database = new Database();
        produtos = new Produtos(database);
        pedidos = new Pedidos(database);
    });
    it("Testar a criação de um produto", ()=>{
        const produto = produtos.criarProduto("Camiseta");
        expect(produto.descricao).toBe("Camiseta");
        expect(produto).toHaveProperty("id");
        console.log(produto);
    })
    it("Testar a criação de um pedido", ()=>{
        const produto = produtos.criarProduto("Camiseta");
        const pedido = pedidos.criarPedido(produto.id, 5);

        expect(pedido.produtoId).toBe(produto.id);
        expect(pedido.quantidade).toBe(5);
        console.log(pedido);
    })
    it("Verificar se o produto foi adicionado ao pedido", ()=>{
        const produto = produtos.criarProduto("bolsa");
        console.log(produto.id, produto.descricao);
        const pedido = pedidos.criarPedido(produto.id, 10);
        const carrinho = pedidos.getPedidosPorProdutoId(produto.id);
        expect(carrinho.length).toBe(1);
        expect(carrinho[0].quantidade).toBe(10);
        console.log(pedido);
    })
})