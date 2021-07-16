import db from '../../db/mocked';

const resolvers = {
  Organization: {
    __resolveReference(ref: any, ctx: any, info: any): any {
      return db.organizations.find((organization: any) => organization.id === ref.id);
    },
  },
  Query: {
    allOrganizations: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.organizations;
    },
    organizations: (parent:unknown, args: any, context:unknown, info: unknown) => {
      return db.organizations;
    },
    organization: (parent:unknown, { id }: {id: string}, context: unknown, info: unknown) => {
      return db.organizations.find( (item: any) => item.id === id );
    },
  },
};

export default resolvers;