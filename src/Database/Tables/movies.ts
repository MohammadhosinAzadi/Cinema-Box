import { Database } from 'sqlite3';

export const createMoviesTable = (db: Database): Promise<void> =>
    new Promise((resolve, reject) => {
        db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            director TEXT,
            release_year INTEGER,
            durtion INTEGER,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );
            `, 
        (err) => {
            if (err) {
            console.error("Error creating 'movies' table:", err.message);
            reject(err);
            return;
            }
            console.log("'movies' table created successfully.");
            resolve();
        });
    });
});