import db from '../../db/mocked';

const accounts:any = db.accounts;

const resolvers = {
  Account: {
    __resolveReference(ref: any, ctx: any, info: any): any{
      return accounts.find((account: any) => account.id === ref.id);
    },
  },
  Query: {
    accounts: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.accounts;
    },
    account: (parent:unknown, { id }: {id: number}, context: unknown, info: unknown) => {
      return db.accounts[id];
    },
    hello: () => {
      return "hello world";
    },
  },
};

export default resolvers;