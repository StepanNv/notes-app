-- CreateEnum
CREATE TYPE "theme" AS ENUM ('light', 'dark');

-- CreateEnum
CREATE TYPE "language" AS ENUM ('en', 'ru');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "language" "language" NOT NULL DEFAULT 'en',
ADD COLUMN     "theme" "theme" NOT NULL DEFAULT 'light';
