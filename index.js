import express from "express";

const app = express();

app.use(express.json());

// MCP endpoint
app.post("/mcp", async (req, res) => {
  return res.json({
    tools: []
  });
});

// ✅ 도메인 검증 (이게 핵심)
app.get("/.well-known/openai-apps-challenge", (req, res) => {
  res.send("zg3vSF2imCsqjIj1E3Hd1UnIN3uVUylOv6OL2UPoyUA");
});

// 기본 확인용
app.get("/", (req, res) => {
  res.send("ok");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running");
});
