# gostack10-challange1
:us: <br>
Rocketseat bootcamp goStack10.0 challange number 01. It's about an API to store projects and their respective tasks.
<br><br>
This application has HTTP Methods: POST, GET, PUT E DELETE to respectively creating projects and their tasks too, listing all projects, update a project through your ID and deleting a project through your ID too.
<br>
In addition to the methods there are two middlewares that allows: 1st- checking if the project exists - used when requesting the registration of a task in a certain project or updating a project or trying to delete a project; 2nd- counting the number of requests made to the server (used in all requests).
<br><br>
<span>&#x1f1e7;&#x1f1f7;</span>  <br>
Desafio 01 do bootcamp goStack da Rocketseat. Trata-se de uma API para armazenar projetos e suas tarefas.
<br><br>
A aplicação contém métodos HTTP: POST, GET, PUT E DELETE para, respectivamente, cadastrar projetos e também suas tarefas, listar projetos, alterar um projeto através de seu ID, e deletar determinado projeto também atrávés de seu ID.
<br>
Além dos métodos, há dois middlewares que permitem: 1- verificar se o projeto existe (utilizado ao requisitar o cadastro uma tarefa em determinado projeto, ao atualizar um projeto ou ao tentar deletar algum projeto); 2- contar o número de requisições feitas ao servidor (usado em todas requisições).

##  :bulb:   Main learning / Principais aprendizados

:us: <br>
Node.js allow us use Javascript outside a browser to make complete web projects (front-end), mobile (using react-native) and in this case the backend app.
<br><br>
Through a data structure such as JSON (Javascript Object Notation) for example, a **Rest API** allows client make a request to a server and receive a response.
<br><br>
The content of this request can be sent to server basically by three ways:
<br>
:black_circle: **ROUTE** (application routes - like a user listing for example); 
<br>
:black_circle: **ROUTE PARAMS** (when we want to specify a user by his id for example); and
<br>
:black_circle: **QUERY PARAMS** (when we want to include a search filter for example).
<br><br>

It's also common to use the **BODY** of a request ( by specifying the data in JSON format) to avoid polluting the URL or omitting sensitive fields.
<br>
Another way to forward a request is through **HEADERS**: these are generally used to pass additional information with the request (like a user's token that was authenticated in the application for example).
<br><br>
These requests that we are talking about happens by **HTTP Methods**: **GET**, **POST**, **PUT** e **DELETE** - these are the most common and allow you to solve more than 90% of an application's problems.
<br><br>
Finally, in response to each request made through a HTTP method there is a **HTTP code** that indicates whether the executed request was successful or not: **200** (success), **400** (bad request), **500** (internal server error) and each others.

<br>

<span>&#x1f1e7;&#x1f1f7;</span>
<br>
Através do Node podemos utilizar Javascript fora do navegador tanto para fazer front-end, mobile e, neste caso, o backend.
<br><br>
Uma **API Rest** permite, através de uma estrutura de dados, como JSON (Javascript Object Notation) por exemplo, que um cliente faça uma requisição a um servidor e receba uma resposta.
<br><br>
O conteúdo dessa requisição pode ser encaminhado basicamente através de três formas: 
<br>
:black_circle: **ROUTE** (rotas da aplicação - como listagem de usuários, por exemplo); 
<br>
:black_circle: **ROUTE PARAMS** (quando se deseja especificar um usuário através do seu id, por exemplo); e
<br>
:black_circle: **QUERY PARAMS** (quando se deseja incluir um filtro, por exemplo).
<br><br>
Também é comum utilizar o corpo **(BODY)** de uma requisição - especificando os dados no formato JSON - para não poluir a URL ou omitir campos sensíveis. 
<br>
E uma outra forma de encaminhar uma requisição é através dos **HEADERS** (cabeçálhos da requisição): estas geralmente são utilizadas para passar informações adicionais com a solicitação (como o token de um usuário que fora autenticado na aplicação, por exemplo).
<br><br>
Essas requisições de que estamos falando acontecem via **Métodos HTTP**: **GET**, **POST**, **PUT** e **DELETE** - estes são os mais comuns e permitem resolver mais de 90% dos problemas de uma aplicação.
<br><br>
Por fim, como resposta de cada requisição realizada via método HTTP, há um **código HTTP** que indica se a requisição executada foi bem sucedida ou não: **200** (success), **400** (bad request), **500** (internal server error), entre outros.

<br><br>


<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<p align="center">“Sua única limitação é você mesmo”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/index.js). Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
