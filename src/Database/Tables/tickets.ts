import { Database } from 'sqlite3';

export const createTicketsTable = (db: Database): Promise<void> =>
    new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(`
          CREATE TABLE IF NOT EXISTS tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            showtime_id INTEGER,
            seat TEXT,
            booked_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
        `, (err) => {
            if (err) {
                console.error("Error creating 'tickets' table:", err.message);
                reject(err);
                return;
                }
                console.log("'tickets' table created successfully.");
                resolve();
        });
    });
});