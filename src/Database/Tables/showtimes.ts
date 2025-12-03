import { Database } from 'sqlite3';

export const createShowtimesTable = (db: Database): Promise<void> =>
    new Promise((resolve, reject) => {
      db.serialize(() => {
        db.run(`
          CREATE TABLE IF NOT EXISTS showtimes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            movie_id INTEGER,
            start_time DATETIME,
            end_time DATETIME,
            hall TEXT
          );
        `, (err) => {
            if (err) {
                console.error("Error creating 'showtimes' table:", err.message);
                reject(err);
                return;
                }
                console.log("'showtimes' table created successfully.");
                resolve();
        });
    });
});