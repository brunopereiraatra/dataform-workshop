
function transform(nome_da_tabela, schema, operacao, tags, dependencias, 
                        query, descricao_tabela='', descricao_colunas={}){
publish (
        nome_da_tabela, {
            type: operacao,
            schema: schema,
            dependencies: dependencias,
            tags: tags,
            description: descricao_tabela,
            columns: descricao_colunas
            }
        ).query(
            query
        )
};

module.exports = {transform};
