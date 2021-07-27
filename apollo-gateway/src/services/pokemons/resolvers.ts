import db from "../../db/mocked";
import axios from "axios";
import { getRedisClient } from "./utils/redisClient";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/";

const resolvers = {
  Pokemon: {
    __resolveReference(ref: any, ctx: any, info: any): any {
      return db.pokemons.find((item: any) => item.id === ref.id);
    },
  },
  Query: {
    allPokemons: (parent: unknown, args: any, context: unknown, info: unknown) => {
      return db.pokemons;
    },
    pokemons: (parent: unknown, args: any, context: unknown, info: unknown) => {
      return db.pokemons;
    },
    pagedPokemons: async (parent: unknown, { offset, limit }: any, context: unknown, info: unknown) => {
      const headData: any = await axios.get(`${POKEMON_API_URL}/pokemon?offset=${offset}&limit=${limit}`);
      const pokemons = await Promise.all(headData.data.results.map(getPokemonDetail));
      return pokemons;
    },
    pokemonsCount: async (parent: unknown, args: any, context: unknown, info: unknown) => {
      const result: any = await axios.get(`${POKEMON_API_URL}/pokemon?offset=0&limit=1`);
      return result.data.count;
    },
    pokemon: (parent: unknown, { id }: { id: string }, context: unknown, info: unknown) => {
      return db.pokemons.find((item: any) => item.id === id);
    },
    findNames: async (parent: unknown, { name, limit }: any, context: unknown, info: unknown) => {
      const redisClient = await getRedisClient();
      let keys = await redisClient.keysAsync(`${name}*`);
      keys = keys.sort();
      const results = keys.map(async (key: any) => {
        const pokemon = await redisClient.getAsync(key);
        return JSON.parse(pokemon);
      });

      const pokemons = await Promise.all(results);
      return pokemons.slice(0, limit);
    },
  },
  getPokemonDetail,
};

function getId(url: string) {
  const result = url.split("/");
  return result[result.length - 2];
}

export async function getPokemonDetail({ name, url }: any): Promise<any> {
  const id = getId(url);
  const redisClient = getRedisClient();
  let pokemon = await redisClient.getAsync(name);
  if (!pokemon) {
    const bodyData: any = await axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    });

    pokemon = {
      id,
      name,
      weight: "189",
      accuracy: "96",
      power: "24",
      generation: "gen-v",
      xp: "81.00",
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };

    await redisClient.setAsync(name, JSON.stringify(pokemon));
  } else {
    pokemon = await redisClient.getAsync(name);
    pokemon = JSON.parse(pokemon);
  }
  //const fooValue = await client.getAsync('foo');
  //const obj = JSON.parse(fooValue);
  return pokemon;
}

export default resolvers;
