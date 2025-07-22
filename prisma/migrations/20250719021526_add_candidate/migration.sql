/*
  Warnings:

  - You are about to drop the column `name` on the `Candidate` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Candidate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT,
    "category" TEXT,
    "bio" TEXT,
    "nfcsSociety" TEXT
);
INSERT INTO "new_Candidate" ("id") SELECT "id" FROM "Candidate";
DROP TABLE "Candidate";
ALTER TABLE "new_Candidate" RENAME TO "Candidate";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
