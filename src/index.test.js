const request = require("supertest");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Import the routes
require("./index");

describe("Calculator API Tests", () => {
  test("Sum API - should add two numbers correctly", async () => {
    const response = await request(app)
      .post("/api/calculator/sum")
      .send({ num1: 5, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });

  test("Sum API - should handle invalid input", async () => {
    const response = await request(app)
      .post("/api/calculator/sum")
      .send({ num1: "invalid", num2: 3 });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  test("Multiply API - should multiply two numbers correctly", async () => {
    const response = await request(app)
      .post("/api/calculator/multiply")
      .send({ num1: 5, num2: 3 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 15 });
  });

  test("Multiply API - should handle invalid input", async () => {
    const response = await request(app)
      .post("/api/calculator/multiply")
      .send({ num1: "invalid", num2: 3 });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  test("Health Check - should return healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "healthy" });
  });
});
