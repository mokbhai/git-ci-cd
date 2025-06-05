const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Calculator API - Sum of two numbers
app.post("/api/calculator/sum", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res
      .status(400)
      .json({ error: "Both numbers must be valid numbers" });
  }

  const sum = num1 + num2;
  res.json({ result: sum });
});

// Another operation - Multiply two numbers
app.post("/api/calculator/multiply", (req, res) => {
  const { num1, num2 } = req.body;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res
      .status(400)
      .json({ error: "Both numbers must be valid numbers" });
  }

  const product = num1 * num2;
  res.json({ result: product });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
