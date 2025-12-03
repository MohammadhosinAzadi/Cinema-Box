import {createUsersTable} from '../../Database/Tables/users'
import {createMoviesTable} from '../../Database/Tables/movies'
import {createShowtimesTable} from '../../Database/Tables/showtimes'
import {createTicketsTable} from '../../Database/Tables/tickets'
import { Database } from 'sqlite3';

export const setupTables = async (db: Database): Promise<void> => {
    try {
      await createUsersTable(db);
      await createMoviesTable(db);
      await createShowtimesTable(db);
      await createTicketsTable(db);
      console.log('All tables created successfully.');
    } catch (err: any) {
      console.error(`Error creating tables: ${err.message}`);
      throw err;
  }
};