const express = require("express");
const os = require("os");
const app = express();
const { default: axios } = require("axios");
const PORT = Number(process.env.PORT) || 4000;
const APP_SERVICE_URL = process.env.APP_SERVICE_URL || "http://localhost:4002";
const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:4001";

app.get("/", (_, res) => {
  res.status(200).json({
    message: "Welcome to Orchestrator Hacktiv8 Phase 3!",
    os: os.platform(),
  });
});

app.get("/users", async (_, res) => {
  try {
    console.log(USER_SERVICE_URL, "<<< user service url nih");
    const { data } = await axios.get(`${USER_SERVICE_URL}/users`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/movies", async (_, res) => {
  try {
    const { data } = await axios.get(`${APP_SERVICE_URL}/movies`);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`This app running on port ${PORT}`));
