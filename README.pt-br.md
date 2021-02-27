<h1 align="center" style="color:#0091EA; font-weight:bold;">
     <img 
    src="https://user-images.githubusercontent.com/42190754/109390785-5a757d00-78f2-11eb-9f90-e0539e877e06.png"
    float="center"
    width="100" height="100"
    />
    <br/>
  <a href="#"> Net Promoter Score </a>
</h1>

<p align="center">
 <a href="#ℹ%EF%B8%8F-sobre-o-projeto">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-documentação">Documentação</a> •
 <a href="#-autores">Autores</a> •
 <a href="#-licença">Licença</a>
</p>

## ℹ️ Sobre o projeto

API Restful for Net Promoter Score created at [RocketSeat](https://rocketseat.com.br/) Next Level Week 4.0, using stack TypeScript with Node.js.

---

## ⚙️ Funcionalidades

- [x] Cadastrar Usuário
- [x] Cadastrar Pesquisa
- [x] Ver lista de pesquisas
- [x] Enviar Email
- [x] Calcular NPS

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[TypeORM](https://www.npmjs.com/package/typeorm)**
- **[Sqlite3](https://www.npmjs.com/package/sqlite3)**
- **[Metadata Reflection API](https://www.npmjs.com/package/reflect-metadata)**
- **[uuid](https://www.npmjs.com/package/uuid)**
- **[Handlebars](https://handlebarsjs.com/)**
- **[Nodemailer](https://nodemailer.com/about/)**
- **[Yup](https://www.npmjs.com/package/yup)**
- **[ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors)**

Ferramentas usadas para os testes:

- **[Jest](https://jestjs.io/)**
- **[SuperTest](https://www.npmjs.com/package/supertest)**

---

## 🚀 Como executar o projeto

### 👉 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🏁 Começar

```bash
# Clone este repositório
$ git clone git@github.com:biachacon/nps.git

# Acesse a pasta do projeto no terminal/cmd
$ cd nps
```

#### 🎲 Running the server

```bash
# Vá para a pasta da api
$ cd api

# Instale as dependências
$ npm install

#Criar migrations
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn dev

# O servidor iniciará na porta:3333 - acesse http://localhost:3333

# Execute os testes
$ yarn test
```

---

## 🗎 Documentação

<details>
  <summary>Pesquisas</summary>

## Pesquisas [/surveys]

### 📍 Criar Pesquisa [POST]

#### **Request**

- Body

```bash
{
  "name": "Name User",
  "email": "example@email.com"
}
```

#### **Response 201 (application/json)**

```bash
[
  {
    "id": "f34635eb-a4c4-4698-94af-19bdd923a003",
    "title": "Queremos ouvir sua opinião!",
    "description": "De 0 a 10, quanto você recomendaria a Empresa?",
    "created_at": "2021-02-26T13:35:34.000Z"
  }
]
```

### 📍 Listar todas as pesquisas [GET]

#### **Response 200 (application/json)**

```bash
{
  "id": "feecb0ce-c336-462c-a05e-ac9a0c9f1049",
  "title": "Queremos ouvir sua opinião!",
  "description": "De 0 a 10, quanto você recomendaria a Empresa X?",
  "created_at": "2021-02-27T15:07:13.000Z"
}
```

</details>

<details>
  <summary>Usuários</summary>

## Usuários [/users]

### 📍 Criar Usuário [POST]

#### **Request**

- Body

```bash
{
  "name": "Name User",
  "email": "example@email.com"
}
```

#### **Response 201 (application/json)**

```bash
{
  "id": "413ecd5c-7932-41b1-b4d2-06c976303450",
  "name": "Name User",
  "email": "example@email.com",
  "created_at": "2021-02-27T15:06:33.000Z"
}
```

</details>

<details>
  <summary>Enviar Email</summary>

## Enviar Email [/sendMail]

### 📍 Enviar [POST]

#### **Request**

- Body

```bash
{
  "email": "example@email.com",
  "survey_id": "f34635eb-a4c4-4698-94af-19bdd923a003"
}
```

#### **Response 200 (application/json)**

```bash
{
  "id": "36408f2d-ee50-4456-a07b-101e695b794a",
  "user_id": "413ecd5c-7932-41b1-b4d2-06c976303450",
  "survey_id": "f34635eb-a4c4-4698-94af-19bdd923a003",
  "created_at": "2021-02-27T15:08:07.000Z"
}
```

</details>

<details>
  <summary>NPS</summary>

## NPS [/nps/:id_survey]

## 📍 Calcular NPS

#### **Response 200 (application/json)**

```bash
{
  "detractor": 1,
  "promoters": 2,
  "passive": 0,
  "totalAnswers": 3,
  "nps": 33.33
}
```

</details>

---

## 👩🏽‍💻 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/biachacon"><img src="https://avatars1.githubusercontent.com/u/42190754?s=460&u=a5cbe42a4868b2bac9615226044b9cec15cee418&v=4" width="100px;" alt=""/><br /><sub><b>Bia Chacon</b></sub></a><br /><a href="https://github.com/BiaChacon/nps" title="Code">💻</a></td>
  <tr>
</table>

---

## 📝 Licença

Este projeto está sob o MIT. Veja aqui [LICENSE](https://github.com/BiaChacon/nps/blob/main/LICENSE) para mais informações.

---

## Versões do README

[Inglês 🇺🇸](./README.md) | [Português 🇧🇷](./README.pt-br.md)
