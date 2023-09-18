const express = require("express");
const os = require("os");
const app = express();
const PORT = Number(process.env.PORT) || 4002;

app.get("/", (_, res) => {
  res.status(200).json({
    message: `Welcome to App Services with DB_URL = ${process.env.DATABASE_URL}!`,
    title: `Hacktiv8 - Phase 3 - Intro to Docker`,
    os: os.platform(),
  });
});

app.get("/movies", (_, res) => {
  res.status(200).json({
    data: [
      { id: 1, name: "Despicable Me !" },
      { id: 2, name: "Minion" },
    ],
  });
});

app.listen(PORT, () => console.log(`This app running on port ${PORT}`));
