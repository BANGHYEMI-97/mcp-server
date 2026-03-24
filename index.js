import express from "express";

const app = express();

app.use(express.json());

app.post("/mcp", async (req, res) => {
  return res.json({
    tools: []
  });
});

app.get("/.well-known/openai-apim-verification", (req, res) => {
  res.send("GEJVaKnb_bZx5J4CJWgVqAGJNyjFxuR_A-e6oqZE8GQ");
});

app.get("/", (req, res) => {
  res.send("ok");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running");
});
