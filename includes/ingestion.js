function ingest(nome_da_tabela, schema, tags, formato, uri) {
query = (
        ctx => `
        CREATE OR REPLACE EXTERNAL TABLE ${ctx.self()} 
        OPTIONS(
            format = ${formato},
            uris = ['${uri}']
        );`
    ); 
      
    operate(
        nome_da_tabela, 
        ).queries(
            query
        ).hasOutput(
            true
        ).schema(
            schema
        ).tags(
            tags
        )
};
module.exports = {ingest};