import { Database } from 'sqlite3';

export const createUsersTable = (db: Database): Promise<void> =>
    new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(
                `
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    phone TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
                `,
                (err) => {
                    if (err) {
                        console.error("Error creating 'users' table:", err.message);
                        reject(err);
                        return;
                    }
                    console.log("'users' table created successfully.");
                    resolve();
                }
            );
        });
    });
