-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Nomination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nominee" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" TEXT NOT NULL
);
INSERT INTO "new_Nomination" ("category", "id", "nominee", "quantity") SELECT "category", "id", "nominee", "quantity" FROM "Nomination";
DROP TABLE "Nomination";
ALTER TABLE "new_Nomination" RENAME TO "Nomination";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
