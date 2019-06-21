const server = require("./server");
const request = require("supertest");
const db = require("../data/dbConfig");
const Games = require("./gamesmodel.js");

describe("server.js", () => {
    describe("/POST", () => {
      afterEach(async () => {
        await db("games").truncate();
      });
  
      it("should return 200 when posting a game correctly", () => {
        return request(server)
          .post("/api/games")
          .send({ title: "test", genre: "test", releaseYear:"1902" })
          .expect(200);
      });
      it("should return 422 when posting a game incorrectly", () => {
        return request(server)
          .post("/api/games")
          .send({ title: "test" })
          .expect(422);
      });


      
    
  
    });
});
