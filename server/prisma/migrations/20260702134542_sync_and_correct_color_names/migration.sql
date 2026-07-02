/*
  Warnings:

  - The values [TWELVEFTH] on the enum `colorKey` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "colorKey_new" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH', 'ELEVENTH', 'TWELFTH');
ALTER TABLE "public"."notes" ALTER COLUMN "color_key" DROP DEFAULT;
ALTER TABLE "notes" ALTER COLUMN "color_key" TYPE "colorKey_new" USING ("color_key"::text::"colorKey_new");
ALTER TYPE "colorKey" RENAME TO "colorKey_old";
ALTER TYPE "colorKey_new" RENAME TO "colorKey";
DROP TYPE "public"."colorKey_old";
ALTER TABLE "notes" ALTER COLUMN "color_key" SET DEFAULT 'FIRST';
COMMIT;
