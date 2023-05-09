<div align="center">
<h1 fontsize="80px">Bem vindo ao repositório DeliveryApp! 📋</h1>
  </br>
  <img src="khj" alt="Imagem representativa da aplicação"/>
  
  <h4 align="center"> 
	🚧  DeliveryApp ♻️ Em Desenvolvimento 🚀 🚧
  </h4>
  <p align="center">
   • <a href="#-sobre-o-projeto">Sobre o projeto</a> •
   <a href="#-projeto-em-sua-maquina">Projeto em sua maquina</a> •
   <a href="#-como-executar-o-projeto">Como executar o projeto</a> •
   <a href="#-tecnologias">Tecnologias</a> •
  </p>
  
  <div align="left">

 ## 💻 Sobre o projeto
  <h3>
    O projeto deliveryApp é uma plataforma que permite</br>
  os usuários fazerem pedidos, realizarem o pagamento e</br>
  acompanhar todo o processo de entrega, sem sair de casa</br>
  Tendo assim a praticidade das suas bebedidas favoritas na</br>
  palma da sua mão.
  </h3>
 
  </br>
  
  
 ## 🔗 Projeto em sua maquina
  ```Bash

  > 1 - Clone este repositório
    
  # Abra o seu TERMINAL e digite o comando abaixo.
  $ git clone git@github.com:patriciadivi/PDiviDeliveryApp.git

  # Acesse a pasta do projeto no terminal/cmd
  $ cd PDiviDeliveryApp/

  # Caso tenha o editor de codigo(VSCode) digite o comando abaixo.
  $ code .
    - OBS: Caso não tenha, acesse a seção `Como executar o projeto` através do índice e realize o download.

  ```
  
  
  <details align="left">
	<summary>
		<h1>🚨</h1><strong>Caso não queria subir esse projeto para o seu GitHub, 'IGNORE' os proximos passos dessa seção.</strong><h1>🚨</h1> 
	</summary>
	<br />
	
```Bash
> 2 - Criando uma repositório no seu GitHub
		# Abra seu GitHub
		- Crie um `novo repositório`.
```

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188983072-db5702fb-bb5d-4835-9338-d0a0bb981741.png"/>
</div>
<br />
	
```bash
	
> Defina um `nome` ao seu `repositório` e aperte o botão `crie o repositório`.
	
```

<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188986397-3f3177d7-9d13-414b-9b2b-089c3719e771.png"/>
	<img src="https://user-images.githubusercontent.com/38478917/188987212-0ba26086-f06e-49a6-aaf9-0c7b1f9ed0c0.png"/>
</div>
<br />
	
```bash
> 3 - Vá até a aba do seu repositório criado

 # Encontre o campo abaixo, deixe a guia aberta pois, vamos usa-la no 'PASSO 5'.
```
	
<br />

<div align="center">
	<img src="https://user-images.githubusercontent.com/38478917/188980734-6f857914-9c4a-4597-80f4-e40a55171343.png"/>
</div>
<br />
	
```bash
> 4 - Adicione as mudanças ao _stage_ do Git e faça um `commit`

 # Voltei ao seu terminal.
 # Verifique que as mudanças ainda não estão no _stage_ digite o comando abaixo.
  # Exemplo:
   $ `git status` (devem aparecer listadas as novas alterações em vermelho)
 # Adicione o arquivo alterado, realizado no 'PASSO 3' ao stage do Git
   $ `git add .` (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
   $ `git status` (devem aparecer listadas as novas alterações em verde)
 # Faça seus `commit`
  # Exemplo:
   $ `git commit -m "feat:  Iniciando novo projeto 🚀" `.
   $ `git status` (deve aparecer uma mensagem tipo nothing to commit )

> 5 - Adicione o projeto local ao seu repositório criado no `PASSO 2`.
	
 # Adicione o projeto local ao seu repositório criado no 'PASSO 3'.
  # Rode os comando abaixo, de acordo com a sua GUIA mostrada no 'PASSO 3'.
  # 1° comando. Exemplo:
   $ `git remote add origin git@github.com:patriciadivi/repositorioTeste.git`.
  # 2° comando. Exemplo:
   $ `git branch -M main`.
  # 3° comando. Exemplo:
   $ `git push -u origin main`.
	
` AGORA É SÓ ATUALIZAR A PÁGINA E SER FELIZ `😊🎉
	
```

<br />
	
</details>

<br />

## 🚀 Como executar o projeto

  Este projeto é divido em duas partes:
  1. Backend (pasta back-end) 
  2. Frontend (pasta front-end)

  💡O Frontend precisam que o Backend esteja sendo executado para funcionar.

  ### Pré-requisitos

  Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:<br />
  [Git](https://git-scm.com) (terminal), [Node.js](https://nodejs.org/en/) (motor da aplicação) e [Docker](https://docs.docker.com/get-docker/) (ambiente controlado).<br />
  Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
  
  <details align="left">
    <summary><h2>🎲</h2> <strong>Rodando o Backend (pasta back-end)</strong></summary>

  ```bash

  > 1 - Na raiz do projeto execute os comandos abaixo: 
   # Vá para a pasta back-end
    $ cd back-end/

  > 2 - Instale as dependências
    $ npm install
  
  > 3 - Iniciando o docker
   💡Caso esteja no (windows)
    3.1 - Abra a ferramenta docker desktop
    3.2 - Volte ao terminar da aplicação(back-end) e execute:
    $ docker-compose up --build -d
  
   💡Caso esteja no (Linux ou Mac)
    $ docker-compose up --build -d

  > 4 - Abra o terminal docker executando esse comando:
    $ docker exec -it delivery_api bash
  
  > 5 - Execute a aplicação em modo de desenvolvimento
    $ npm run dev

  # O servidor inciará na porta:3001 - acesse http://localhost:3001 

  ```
  
  </details>
  
  <details align="left">
    <summary><h2>👩🏻‍💻</h2> <strong>Frontend (pasta front-end)</strong></summary>

 ```bash

  > 1 - Na raiz do projeto execute os comandos abaixo: 
   # Vá para a pasta front-end
    $ cd front-end/

  > 2 - Instale as dependências
    $ npm install

  > 3 - Execute a aplicação em modo de desenvolvimento
    $ npm start

  # O servidor web inciará na porta:3000 - acesse http://localhost:3000/

 ``` 
  <br />
 </details>
 <br />
 
 ## 🛠 Tecnologias
	
  <p>As seguintes ferramentas foram usadas na construção do projeto:</p>
	
 <details>
   <summary>
		 <strong>🎲 Backend </strong>
		 (<a href="https://nodejs.org/en/docs/guides">NodeJS</a> +
		 <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a>)
	</summary>
	</br>
		<ul>
		<li><a href="https://expressjs.com/pt-br/guide/routing.html">Express</a></li>
		<li><a href="https://www.npmjs.com/package/cors">Cors</a></li>
		<li><a href="https://www.npmjs.com/package/email-validator">Email Validator</a></li>
		<li><a href="https://www.npmjs.com/package/express-async-errors">Express Async Errors</a></li>
		<li><a href="https://jwt.io/">JSON Web Tokens(J.W.T)</a></li>
		<li><a href="https://www.md5hashgenerator.com/">MD5 Hash Generator</a></li>
		<li><a href="https://www.npmjs.com/package/mysql2#installation">MySQL</a></li>
		<li><a href="https://sequelize.org/docs/v6/getting-started/">Sequelize ORM</a></li>
		<li><a href="https://mochajs.org/#installation">Mocha</a></li>
		<li><a href="https://www.npmjs.com/package/nodemon">Nodemon</a></li>
		<li><a href="https://www.chaijs.com/guide/">Chai</a></li>
		<li><a href="https://sinonjs.org/releases/v15/">Sinon JS</a></li>
		</ul>
  </details>
	
<details align="left">
    <summary><strong>👩🏻‍💻 <strong>Frontend</strong>
			(<a href="https://reactjs.org/docs/getting-started.html">React</a> +
		 	<a href="https://www.typescriptlang.org/docs/">TypeScript</a>)
		</summary>
		</br>
		<ul>
      <li><a href="https://axios-http.com/docs/intro">Axios</a></li>
      <li><a href="https://www.npmjs.com/package/email-validator">Email Validator</a></li>
			<li><a href="https://pt-br.legacy.reactjs.org/docs/getting-started.html">React</a></li>
			<li><a href="https://www.npmjs.com/package/react-lottie">React Lottie</a></li>
			<li><a href="https://reactrouter.com/en/main">React Router Dom</a></li>
			<li><a href="https://styled-components.com/docs/basics#installation">Styled Components</a></li>
			<li><a href="https://phosphoricons.com/">Phosphor Icons</a></li>
			<li><a href="https://github.com/uuidjs/uuid">Uuid</a></li>
			<li><a href="https://zustand-demo.pmnd.rs/">Zustand</a></li>
		</ul>
	</details>
 
 </br>
 
<details align="left">
  <summary><strong>🏗️ <strong>Utilitários</strong></summary>
<ul>
<li>Commit: <a href="https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits">Conventional Commits</a></li>
<li>Editor: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
<li>Fontes: <a href="https://fonts.google.com/specimen/Roboto?query=RO">Roboto</a> e <a href="https://fonts.google.com/specimen/Ubuntu?query=Ubu">Ubuntu</a></li>
<li>Teste de API: <a href="https://insomnia.rest/">Insomnia</a></li>
</ul>

</details>
	
 
 </div>

   ---
  ⌨️ com ❤️ por [Patricia Dias Viana](https://github.com/patriciadivi) 😊
</div>
