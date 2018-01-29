/*
 - Configuramos o módulo, que no caso, foi feito em um objeto. Nele, passamos o
 entry - o ponto de entrada e especificamos qual será o primeiro módulo carregado.

 - Definiremos ainda onde será gravado o bundle do final, que será resolvido no módulo inicial.

 - Lembrando que o Webpack vai procurar todas as dependências e resolverá isso por nós, gerando 
 um grande arquivo no fim. Isso será feito em output, que receberá o objeto filename: `bundle.js`

 - Além disso, passaremos o path dentro do objeto, mas antes, criaremos a constante path como o
 caminho absoluto: const path = require('path');

 - Agora, no path do output, definiremos que ele é o resultado de path.resolve. Ele receberá a 
 variável do NodeJS, chamada __dirname, que informa qual a diretório do webpack.config

 - Em seguida, queremos concatenar a pasta dist, adicionada como segundo parâmetro do resolve(). 
 Então o path.resolve() criará o caminho completo até a pasta dist, com base na pasta client.
*/

const path = require('path');

module.exports = {
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}

