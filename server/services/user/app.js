const express = require("express");
const os = require("os");
const app = express();
const PORT = Number(process.env.PORT) || 4001;

app.get("/", (_, res) => {
  res.status(200).json({
    message: `Welcome to User Service with DB_URL ${process.env.DATABASE_URL}!`,
    os: os.platform(),
  });
});

app.get("/users", (_, res) => {
  res.status(200).json({
    data: [
      { id: 1, name: "Andi" },
      { id: 2, name: "Siska" },
    ],
  });
});

app.listen(PORT, () => console.log(`This app running on port ${PORT}`));
