const request = require("supertest"); // install as a dev dependency
const server = require("./server"); // The System Under Test lingo (SUT)

//test what
describe("server", () => {
  it("db environment set to lambdab", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  //test the initial GET request on the server
  describe("GET /", () => {
    it("should return 200 OK", () => {
      //open up rest client and make a get request to "/", look at status code to see if it is 200
      request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return data in JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toMatch("application/json");
        });
    });
  });
});
