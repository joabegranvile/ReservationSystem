import type { Knex } from 'knex';
const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
  }
};

export default knexConfig;
