import db from "../../db/mocked";
import axios from "axios";

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
      const end = offset + limit;

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
  },
};

function getId(url: string) {
  const result = url.split("/");
  return result[result.length - 2];
}

async function getPokemonDetail({ name, url }: any): Promise<any> {
  const id = getId(url);
  const bodyData: any = await axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  });
  const pokemon = {
    id,
    name,
    weight: "189",
    accuracy: "96",
    power: "24",
    generation: "gen-v",
    xp: "81.00",
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  };
  return pokemon;
}

export default resolvers;
