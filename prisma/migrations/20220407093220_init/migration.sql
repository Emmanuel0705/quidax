/*
  Warnings:

  - You are about to drop the `charges` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "charges" DROP CONSTRAINT "charges_transactionId_fkey";

-- DropTable
DROP TABLE "charges";

-- DropTable
DROP TABLE "transactions";

-- DropEnum
DROP TYPE "CURRENCY";
