import type { Knex } from "knex";
import knexModule from 'knex';
import knexFile from './knexfile';

const knex = knexModule(knexFile);

export default class DB {
  knex: Knex;

  constructor() {
    this.knex = knex;
  }
  
  async insertOne<DbRowData>(
    table: string,
    rowData: DbRowData,
  ): Promise<DbRowData> {
      const insertData = await this
        .knex(table)
        .insert(rowData)
        .returning('*');
      
      if (!insertData || insertData.length !== 1) {
        throw new Error(
          `Something went wrong when trying to insert on %{table}`
      );
    }
    
    return insertData[0];
  }
}
