import db from '../../db/mocked';

const resolvers = {
  Pokemon: {
    __resolveReference(ref: any, ctx: any, info: any): any {
      return db.pokemons.find((item: any) => item.id === ref.id);
    },
  },
  Query: {
    allPokemons: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.pokemons;
    },
    pokemons: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.pokemons;
    },
    pagedPokemons: (parent:unknown, {offset, limit}: any, context:unknown, info: unknown) => {
      const end = offset + limit;
      return db.pokemons.slice(offset, end );
    },
    pokemon: (parent:unknown, { id }: {id: string}, context: unknown, info: unknown) => {
      return db.pokemons.find( (item: any) => item.id === id );
    },
  },
};

export default resolvers;