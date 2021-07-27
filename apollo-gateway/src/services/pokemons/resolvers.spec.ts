import resolvers from "./resolvers";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.spyOn(resolvers, "getPokemonDetail");

afterEach(() => {
  jest.resetAllMocks();
});

describe("Test Query Resolvers", () => {
  describe("test Query.pokemonCount(...) resolver", () => {
    it("when value is 10", async () => {
      mockedAxios.get.mockResolvedValue({ data: { count: 10 } });
      const count = await resolvers.Query.pokemonsCount({}, { offset: 0, limit: 10 }, {}, {});
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(count).toBe(10);
    });

    it("when value is 20", async () => {
      mockedAxios.get.mockResolvedValue({ data: { count: 20 } });
      const count = await resolvers.Query.pokemonsCount({}, { offset: 0, limit: 10 }, {}, {});
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(count).toBe(20);
    });
  });

  describe.skip("test Query.pagedPokemons(...) resolver", () => {
    it("when axios api call returns two pokemons", async () => {
      const data = [
        { name: "pokemon1", url: "url" },
        { name: "pokemon2", url: "url" },
      ];
      mockedAxios.get.mockResolvedValue({ data });
      const result = await resolvers.Query.pagedPokemons({}, { offset: 0, limit: 10 }, {}, {});
      expect(axios.get).toHaveBeenCalledTimes(1);
      console.log(test);
    });

    it("when axios api call returns no pokemons", async () => {
      const data = [{}];
      mockedAxios.get.mockResolvedValue({ data });
      const result = await resolvers.Query.pagedPokemons({}, { offset: 0, limit: 10 }, {}, {});
      expect(axios.get).toHaveBeenCalledTimes(1);
      console.log(test);
    });
  });
});
