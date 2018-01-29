# WebPack

* Agrupador de módulos

* Entrar na pasta `webpack/client` e execute o comando: `npm install`

* Este comando baixará todas as dependências utilizadas pelo projeto. Depois de baixadas, execute o script: `npm run watch`

* Esse script compilará todos os arquivos e travará o terminal aguardando futuras atualizações nos arquivos. Porém, 
para que possamos acessar a aplicação ainda será necessário levantar o servidor. É um servidor disponibilizado com o 
projeto, mas você aprenderá ao longo do curso a substituí-lo pelo `Webpack Dev Server`, dando um ar ainda mais 
profissional ao projeto.

* Para subir o servidor é necessário abrir um novo terminal para o caminho `webpack/server` e executar  o comando: `npm start`

* Isso fará com que um servidor disponibilize nossa aplicação para o navegador. Para acessá-la, basta entrar com 
o endereço `http://localhost:3000`

# Sobre o WebPack e Babel

* O `babel-core` nada mais é do que o núcleo do babel desprovido de sua linha de comando e que pode ser utilizado 
por outras ferramentas do mercado como Webpack.

* Webpack dispensa a utilização de um module loader, justamente por criar em bundles em tempo de desenvolvimento,
que nada mais são do que scripts que agregam outros módulos da aplicação.
