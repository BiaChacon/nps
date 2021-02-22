import express, { request } from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({messege: "Hello Worl - NLW04"})
});

app.post("/", (request, response) => {
  return response.json({messege: "Os dados foram salvos com sucesso!"});
});

app.listen(3333, () => console.log("Server is running!"));