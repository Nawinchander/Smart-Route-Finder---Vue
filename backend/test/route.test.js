const request = require("supertest");
const app = require("../app");

describe("Route API with Queue", () => {
  it("should return route result", async () => {
    const res = await request(app)
      .get("/route?start=A&end=E");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("path");
    expect(res.body).toHaveProperty("distance");
  });
});


// const request = require("supertest");
// const app = require("../app");

// describe("GET /route", () => {
//   it("should return shortest path", async () => {
//     const res = await request(app)
//       .get("/route?start=A&end=E");

//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty("path");
//     expect(res.body).toHaveProperty("distance");
//   });
// });

