import { dbPromise } from "../Database/index";

export async function runQuery(query: string, params: any[] = []): Promise<void> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run(query, params, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

export async function runQueryWithId(query: string, params: any[] = []): Promise<number> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run(query, params, function (err) {
      if (err) return reject(err);
      resolve(this.lastID);
    });
  });
}

export async function getQuery(query: string, params: any[] = []): Promise<any[]> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
}

export async function getQueryOne(query: string, params: any[] = []): Promise<any> {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.get(query, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
}

