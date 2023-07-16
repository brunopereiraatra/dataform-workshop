function assertion(nome_assertion, dependencias,
                   query_assertion){
    publish(
        nome_assertion, {
            dependencies: dependencias
        }
    ).query(
        query_assertion
    );
}


module.exports = {assertion};