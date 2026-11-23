const { test } = require("node:test");
const assert = require("node:assert");
const request = require("supertest");

const app = require("../app");

test("Health endpoint should return healthy status", async () => {
    const response = await request(app).get("/health");

    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.body.status, "healthy");
});

test("Homepage should return successfully", async () => {
    const response = await request(app).get("/");

    assert.strictEqual(response.status, 200);
});