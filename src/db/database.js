import * as Crypto from 'expo-crypto'
export const DATABASE_NAME = "register_basic.db";

export async function initDb(db) {
  await db.execAsync(` 
        CREATE TABLE IF NOT EXISTS student (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            student_id TEXT NOT NULL UNIQUE,
            username TEXT NOT NULL,
            password_salt TEXT NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL
        );
     `);
}
export function listStudent(db) {
  return db.getAllAsync(
    `SELECT id, 
            name, 
            surnamr, 
            stusents_id, 
            username, 
            substr(password_hash,1 16) AS hash_review FROM students ORDER BY id DESC `,
  );
}
