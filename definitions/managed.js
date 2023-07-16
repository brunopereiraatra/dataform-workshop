var query = (
ctx =>`
    SELECT 
        cl.cliente_cpf, cl.cliente_nome, it.pedido_data, 
        it.produto_nome, it.produto_categoria, it.produto_preco, 
        it.item_pedido_quantidade, cl.cliente_telefone, cl.cliente_email, 
        ad.cliente_endereco, ad.cliente_cidade, ad.cliente_estado, 
        ad.cliente_pais, ad.cliente_cep,it.pedido_status,
        it.pedido_forma_pagamento
    FROM 
        ${ctx.ref('BP_ext_clientes2')} cl
    JOIN 
        ${ctx.ref('BP_ext_enderecos2')} ad
        ON cl.cliente_cpf = ad.cliente_cpf
    JOIN 
        ${ctx.ref('BP_ext_itens_produtos_pedidos2')} it
        ON cl.cliente_cpf = it.pedido_cliente_cpf
    `)


transformation.transform(
    'BP_tb_itens_pedidos_clientes2', 
    'managed', 
    'table', 
    ['managed'], 
    ['BP_ext_clientes2', 'BP_ext_enderecos2', 
    'BP_ext_itens_produtos_pedidos2'], 
    query
)