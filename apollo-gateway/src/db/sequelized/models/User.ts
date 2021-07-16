import DataTypes from 'sequelize';

function createTable(sequelize: any) {
  const Table = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    freezeTableName: true
  });
  Table.sync({ alter: true })
  // Table.sync();
  // `sequelize.define` also returns the model
  console.log(Table === sequelize.models.Organization); // true
  return Table;
}

export default createTable;
