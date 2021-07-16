import DataTypes from 'sequelize';

function createTable(sequelize: any) {
  const Table = sequelize.define('Organization', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    farmCount: {
      type: DataTypes.INTEGER,
    },
    fieldCount: {
      type: DataTypes.INTEGER,
    }
  }, {
    // Other model options go here
    freezeTableName: true
  });
  Table.sync({ alter: true })
  // Table.sync()
  // `sequelize.define` also returns the model
  console.log(Table === sequelize.models.Organization); // true
  return Table;
}

export default createTable;
