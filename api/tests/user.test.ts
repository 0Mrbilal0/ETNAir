import supertest from "supertest";
import { app } from "../index";

describe("User API", () => {
  test("GET /auth", async () => {
    const response = await supertest(app).get("/auth");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
  test("POST /auth", async () => {
    const response = await supertest(app)
      .post("/auth")
      .send({
        email: "majima.goro@gmail.jp",
        password: "kiryu-chan",
        name: "Majima Goro",
        phone_number: "080-0000-0000",
        about_me: "I'm the manager of the grand and president of majima construction"});
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
        email: "majima.goro@gmail.jp",
        password: "kiryu-chan",
        name: "Majima Goro",
        phone_number: "080-0000-0000",
        about_me: "I'm the manager of the grand and president of majima construction"});
    });
    test("GET /auth/:id", async () => {
        const response = await supertest(app).get("/auth/1");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            email: "majima.goro@gmail.jp",
            password: "kiryu-chan",
            name: "Majima Goro",
            phone_number: "080-0000-0000",
            about_me: "I'm the manager of the grand and president of majima construction"});
    });
    test("PUT /auth/:id", async () => {
        const response = await supertest(app)
            .put("/auth/1")
            .send({
                email: "kiryu.kazuma@gmail.com",
                password: "majima-no-niisan",
                name: "Kiryu Kazuma",
                phone_number: "080-0000-0001",
                about_me: "I'm the fourth chairman of the tojo clan"});
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            email: "kiryu.kazuma@gmail.com",
            password: "majima-no-niisan",
            name: "Kiryu Kazuma",
            phone_number: "080-0000-0001",
            about_me: "I'm the fourth chairman of the tojo clan"});
    });
    test("DELETE /auth/:id", async () => {
        const response = await supertest(app).delete("/auth/1");
        expect(response.status).toBe(204);
    });
});