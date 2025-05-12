import express from "express";

const app = express();
const usersValidate = ["facu", "facundo"];

// Rutas

app.get("/", (_req, res) => {
  res.json({ probando: "hola" });
});

app.get("/validate/:name", (req, res) => {
  const name = req.params.name;

  if (usersValidate.includes(name)) {
    return res.json({
      validate: true,
      message: `El usuario ${name} es válido`,
    });
  }

  if (!usersValidate.includes(name)) {
    return res.json({
      validate: false,
      message: `El usuario ${name} no es válido`,
    });
  }
});

app.listen(3000, () => console.log("http://localhost:3000/"));
