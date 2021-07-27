import resolvers from "./resolvers";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("Testing Pokemon Resolvers", () => {
  it("Testing Pokemon Resolvers", async () => {
    mockedAxios.get.mockResolvedValue({ result: { data: { count: 10 } } });
    const count = await resolvers.Query.pokemonsCount({}, { offset: 0, limit: 10 }, {}, {});
    console.log("count");
  });
});
