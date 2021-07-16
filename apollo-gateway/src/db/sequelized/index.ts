import createUser from './models/User';
import createOrganization from './models/Organization';
import createAccount from './models/Account';
import getSequelize from './connect';

const sequelize = getSequelize()

const initialize = () => {
  const User = createUser(sequelize);
  const Organization = createOrganization(sequelize);
  const Account = createAccount(sequelize);
  
  Organization.hasMany(Account);
  Account.belongsTo(Organization),  { foreignKey: 'orgid'};
  
  return {
    User,
    Organization,
    Account,
  }
}

export const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default initialize();