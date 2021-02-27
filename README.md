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
 <a href="#ℹ%EF%B8%8F-about">About</a> •
 <a href="#%EF%B8%8F-features">Features</a> •
 <a href="#-how-it-works">How it works</a> •
 <a href="#-tech-stack">Tech Stack</a> •
 <a href="#-documentation">Documentation</a> •
 <a href="#-authors">Authors</a> •
 <a href="#-license">License</a>
</p>

## ℹ️ About

API Restful for Net Promoter Score created at [RocketSeat](https://rocketseat.com.br/) Next Level Week 4.0, using stack TypeScript with Node.js.

---

## ⚙️ Features

- [x] Create User
- [x] Create Survey
- [x] View list surveys
- [x] Send Mail
- [x] Calculate NPS

---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

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

Tools used for testing:

- **[Jest](https://jestjs.io/)**
- **[SuperTest](https://www.npmjs.com/package/supertest)**

---

## 🚀 How it works

### 👉 Pre-requisites

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### 🏁 Start

```bash
# Clone this repository
$ git clone git@github.com:biachacon/nlw04.git

# Access the project folder cmd/terminal
$ cd nlw04
```

#### 🎲 Running the server

```bash
# go to the api folder
$ cd api

# install the dependencies
$ npm install

#Create migrations
$ yarn typeorm migration:run

# Run the application
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333

# Running the tests
$ yarn test
```

---

## 🗎 Documentation

<details>
  <summary>Surveys</summary>

## Surveys [/surveys]

### 📍 Create Survey [POST]

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

### 📍 List all Surveys [GET]

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
  <summary>Users</summary>

## Users [/users]

### 📍 Create User [POST]

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
  <summary>SendMail</summary>

## SendMail [/sendMail]

### 📍 Send [POST]

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

## 📍 Calculate NPS

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

## 👩🏽‍💻 Authors

<table>
  <tr>
    <td align="center"><a href="https://github.com/biachacon"><img src="https://avatars1.githubusercontent.com/u/42190754?s=460&u=a5cbe42a4868b2bac9615226044b9cec15cee418&v=4" width="100px;" alt=""/><br /><sub><b>Bia Chacon</b></sub></a><br /><a href="https://github.com/BiaChacon/nps" title="Code">💻</a></td>
  <tr>
</table>

---

## 📝 License

This project is under MIT. See at here [LICENSE](https://github.com/BiaChacon/nps/blob/main/LICENSE) for more information.

---

## README versions

[English 🇺🇸](./README.md) | [Portuguese 🇧🇷](./README.pt-br.md)
