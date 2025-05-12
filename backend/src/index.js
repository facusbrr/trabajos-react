import express from "express";
import cors from "cors";

const app = express();
const usersValidate = ["facu", "facundo"];

// Middleware
app.use(cors());

// Rutas

app.get("/", (_req, res) => {
  res.json({ probando: "hola" });
});

app.get("/validate/:username", (req, res) => {
  const username = req.params.name;

  if (usersValidate.includes(username)) {
    return res.json({
      validate: true,
      message: `El usuario ${username} es válido`,
    });
  }

  if (!usersValidate.includes(username)) {
    return res.json({
      validate: false,
      message: `El usuario ${username} no es válido`,
    });
  }
});

app.listen(3000, () => console.log("http://localhost:3000/"));
