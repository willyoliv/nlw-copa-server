
<h1 align="center">NLW Copa - Server</h1>

![NLW Copa Server](https://user-images.githubusercontent.com/40326598/200138387-f97fb545-6de7-47aa-9d8f-a71f11ecb6a1.png)
---

<p align="justify">
  Backend construído durante o evento NLW Copa disponibilizado pela Rocketseat que ocorreu entre os dias 31 de outubro de 2022 e 07 de novembro de 2022 . Durante o evento foram construídas três aplicações na Trilha Ignite, sendo elas: a interface Web para cadastro de bolões, a aplicação mobile para criar, visualizar e compartilhar bolões e por fim a aplicação backend usada para fornecer os dados e serviços para o funcionamento das outras duas.
</p>

<p align="center">
 <a href="#sobre-o-projeto">Sobre o projeto</a> |
 <a href="#diagrama-de-entidade-relacionamento">Diagrama de entetidade realacionamento</a> |
 <a href="#como-usar">Como usar</a> | 
 <a href="#endpoints">Endpoints</a> 
</p>

<h4 align="center">
	 Status: Finalizado
</h4>
 
### Sobre o projeto💻

 Este é o repositório da aplicação backend. Sua principal função é prover dados e serviços indispensáveis para o funcionamento dos projetos web e mobile.

#### Feature

- [X] Cadastro e login de usuário
- [X] Cadastro de bolões
- [X] Listagem de bolões
- [X] Obter detalhes de um bolão
- [X] Listagem de jogos
- [X] Cadastro de palpites para um jogo em um bolão

#### Tecnologias🚀

As seguintes ferramentas foram usadas na construção do projeto:

- [x] [TypeScript](https://www.typescriptlang.org/).
- [X] [Node](https://nodejs.org/pt-br/)

##### Auxiliares

- [x] [Prisma](https://www.prisma.io/) - Usado para a construção dos esquemas e migrações do banco de dados;
- [x] [Fastify](https://www.fastify.io/) - Usado para criar o servidor disponibilizando o recursos necessário para construir os endpoints da aplicação;

##### Padronização de código:

- [x] [ESLint](https://eslint.org/);
- [x] [Prettier](https://prettier.io/).

---

### Diagrama de entidade relacionamento

Estrutura organizacional das tabelas e seus relacionamentos.

![Diagrama de entidade relacionamento](https://user-images.githubusercontent.com/40326598/200139682-700f829e-eba1-4c41-a5a5-4a7e21fac9aa.png)

---

### Como usar
#### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

##### Clone este repositório
```bash
git clone https://github.com/willyoliv/nlw-copa-server.git
```
##### Após clonar, acesse as pastas do projeto no terminal/cmd e instale as dependências
```bash
cd nlw-copa-server
npm install
# ou npm i
```

##### Para executar o projeto rode o seguinte comando
```bash
npm run dev
```

**Obs:** O projeto irá por padrão rodar em `http://localhost:3333`

---

### EndPoints
Os endpoints estão organizados seguindo a ordem das features apresentada no tópico **feature**

#### Cadastro e login de usuário
Endpoint para cadastrar de usuário, é nessário fornecer um token gerado a partir do login social com o Google via OAuth2.

Método **POST** localhost:3333/users

```typescript
{
   "access_token": "token"
}
```
___
#### Cadastro de bolões
Endpoint para cadastrar de bolão, é nessário fornecer um `title` não podendo ser nulo o sem valor no corpo da requisição. 

**OBS:** Esta rota requer autenticação sendo necessário passar o token obtido pós login no header da requisição como Bearer token no **Authorization**. 

Método **POST** localhost:3333/pools

```typescript
{
   "title": "title"
}
```
___
#### Listagem de bolões
Endpoint para obter a lista de bolões. 

**OBS:** Esta rota requer autenticação sendo necessário passar o token obtido pós login no header da requisição como Bearer token no **Authorization**. 

Método **GET** localhost:3333/pools
___
#### Obter detalhes de um bolão
Endpoint buscar os dados de um bolão, é nessário passar o `poolId` do bolão no endpoint. 

**OBS:** Esta rota requer autenticação sendo necessário passar o token obtido pós login no header da requisição como Bearer token no **Authorization**. 

Método **GET** localhost:3333/pools/`poolId`
___
#### Listagem de jogos
Endpoint buscar a lista de jogos para um bolão, é nessário passar o `poolId` do bolão no endpoint. 

**OBS:** Esta rota requer autenticação sendo necessário passar o token obtido pós login no header da requisição como Bearer token no **Authorization**. 

Método **GET** localhost:3333/pools/`poolId`/games
___
#### Cadastro de palpites para um jogo em um bolão
Endpoint para cadastrar um novo palpite em um bolão, é nessário passar no endpoint o `poolId` e `gameId` sendo respectivamente id do bolão e o id do jogo. Abaio segue o 
exemplo do body que deve ser passado para esta requisição.

**OBS:** Esta rota requer autenticação sendo necessário passar o token obtido pós login no header da requisição como Bearer token no **Authorization**. 

Método **POST** localhost:3333/pools/`poolId`/games/`gameId`/guesses

```typescript
{
   "firstTeamPoints": 0,
   "secondTeamPoints": 0,
}
```
