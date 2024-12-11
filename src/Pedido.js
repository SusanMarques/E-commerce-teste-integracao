class Pedidos {
    constructor(database) {
        this.database = database;
    }

    criarPedido(produtoId, quantidade) {
        const pedidoId = Date.now();
        const pedido = { id: pedidoId, produtoId, quantidade };
        this.database.pedidos.push(pedido);
        return pedido;
    }

    getPedidosPorProdutoId(produtoId) {
        return this.database.pedidos.filter(pedido => pedido.produtoId === produtoId);
    }

    getPedidos() {
        return this.database.pedidos;
    }
}

export default Pedidos;
