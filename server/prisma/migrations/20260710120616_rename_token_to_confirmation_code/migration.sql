/*
  Warnings:

  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ConfirmationCodeType" AS ENUM ('VERIFICATION', 'PASSWORD_RESET');

-- DropTable
DROP TABLE "tokens";

-- DropEnum
DROP TYPE "TokenType";

-- CreateTable
CREATE TABLE "confirmation_codes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmation_code" TEXT NOT NULL,
    "type" "ConfirmationCodeType" NOT NULL,
    "expires_in" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "confirmation_codes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "confirmation_codes_confirmation_code_key" ON "confirmation_codes"("confirmation_code");
