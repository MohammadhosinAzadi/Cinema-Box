import { runQuery } from "../../Repositoy/baseRepository";

export const updateMovieRepo = async (id: number, data: Partial<{ name: string; director: string; release_year: number; durtion: number; }>): Promise<void> => {
    const query = `UPDATE movies
      SET
        name = COALESCE(?, name),
        director = COALESCE(?, director),
        release_year = COALESCE(?, release_year),
        durtion = COALESCE(?, durtion)
        WHERE id = ?
    `;
    return runQuery(query, [data.name ?? null, data.director ?? null, data.release_year ?? null, data.durtion ?? null, id]);
  };