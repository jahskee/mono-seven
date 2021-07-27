import resolvers from "./resolvers";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.resetAllMocks();
});

describe("testing pokemon query resolvers", () => {
  test("Testing Pokemon Resolvers", async () => {
    mockedAxios.get.mockResolvedValue({ data: { count: 10 } });
    const count = resolvers.Query.pokemonsCount({}, { offset: 0, limit: 10 }, {}, {});
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
