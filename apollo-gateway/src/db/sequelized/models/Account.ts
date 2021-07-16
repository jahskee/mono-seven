import DataTypes from 'sequelize';
import accounts from '../../mocked/accounts';

function createTable(sequelize: any) {
  const Table = sequelize.define('Account', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orgId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Other model options go here
    freezeTableName: true
  });
  Table.sync({ alter: true })
  // Table.sync()
  // `sequelize.define` also returns the model
  console.log(Table === sequelize.models.Account); // true
  return Table;
}

export default createTable;
