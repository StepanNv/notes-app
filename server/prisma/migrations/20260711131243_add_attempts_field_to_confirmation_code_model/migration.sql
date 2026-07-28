-- AlterTable
ALTER TABLE "confirmation_codes" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0;
