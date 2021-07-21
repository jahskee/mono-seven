import db from "../../db/mocked";
import axios from "axios";
const redis = require("redis");
const { promisifyAll } = require("bluebird");
promisifyAll(redis);

const client = redis.createClient({
  host: "localhost",
  port: "6379",
});

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
      const headData: any = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
      });

      const pokemons = await Promise.all(headData.data.results.map(getPokemonDetail));
      return pokemons;
    },
    pokemonsCount: async (parent: unknown, args: any, context: unknown, info: unknown) => {
      const result: any = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1`,
      });
      return result.data.count;
    },
    pokemon: (parent: unknown, { id }: { id: string }, context: unknown, info: unknown) => {
      return db.pokemons.find((item: any) => item.id === id);
    },
    findNames: async (parent: unknown, { name, limit }: any, context: unknown, info: unknown) => {
      
      let keys = await client.keysAsync(`${name}*`);
      keys = keys.sort();
      const results = keys.map(async (key:any)=>{
        const pokemon = await client.getAsync(key);
        return JSON.parse(pokemon);
      })

      const pokemons = await Promise.all(results);
      return pokemons.slice(0, limit);
    }
  },
};

function getId(url: string) {
  const result = url.split("/");
  return result[result.length - 2];
}

async function getPokemonDetail({ name, url }: any): Promise<any> {
  const id = getId(url);
  let pokemon = await client.getAsync(name);
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

    await client.setAsync(name, JSON.stringify(pokemon));
  } else {
    pokemon = await client.getAsync(name);
    pokemon = JSON.parse(pokemon);
  }
  //const fooValue = await client.getAsync('foo');
  //const obj = JSON.parse(fooValue);
  return pokemon;
}

export default resolvers;
