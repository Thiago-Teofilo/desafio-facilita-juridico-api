-- CreateTable
CREATE TABLE IF NOT EXISTS "customers" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cordx" DECIMAL(65,30) NOT NULL,
    "cordy" DECIMAL(65,30) NOT NULL,
    "range" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("uuid")
);
