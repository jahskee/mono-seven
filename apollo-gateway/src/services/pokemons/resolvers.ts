import db from '../../db/mocked';

const resolvers = {
  Pokemon: {
    __resolveReference(ref: any, ctx: any, info: any): any {
      return db.pokemons.find((pokemon: any) => pokemon.id === ref.id);
    },
  },
  Query: {
    allPokemons: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.pokemons;
    },
    pokemons: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.pokemons;
    },
    pokemon: (parent:unknown, { id }: {id: string}, context: unknown, info: unknown) => {
      return db.pokemon.find( (item: any) => item.id === id );
    },
  },
};

export default resolvers;