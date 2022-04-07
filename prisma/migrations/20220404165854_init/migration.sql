-- CreateEnum
CREATE TYPE "PLATFORM" AS ENUM ('KRAKEN', 'BUYCOINS', 'FLUIDCOINS', 'BLOC');

-- CreateEnum
CREATE TYPE "CURRENCY" AS ENUM ('USDC', 'EUR', 'NGN');

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "transaction" TEXT NOT NULL,
    "ngnAmount" DECIMAL(65,30) NOT NULL,
    "eurAmount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "charges" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "platform" "PLATFORM" NOT NULL,
    "charge" DECIMAL(65,30) NOT NULL,
    "sourceAmount" DECIMAL(65,30) NOT NULL,
    "destinationAmount" DECIMAL(65,30) NOT NULL,
    "sourceCurrency" "CURRENCY" NOT NULL,
    "destinationCurrency" "CURRENCY" NOT NULL,

    CONSTRAINT "charges_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "transactions_uid_key" ON "transactions"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "charges_uid_key" ON "charges"("uid");

-- AddForeignKey
ALTER TABLE "charges" ADD CONSTRAINT "charges_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
