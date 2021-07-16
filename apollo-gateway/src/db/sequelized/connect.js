import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:mac1!@localhost:5432/nutrienDB') // Example for postgres

const getSequelize = () => {
  return sequelize;
}

export default getSequelize