-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortCode" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Url" ("createdAt", "id", "longUrl", "shortCode") SELECT "createdAt", "id", "longUrl", "shortCode" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
CREATE UNIQUE INDEX "Url_shortCode_key" ON "Url"("shortCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
