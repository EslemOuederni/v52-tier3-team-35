/*
  Warnings:

  - You are about to drop the column `cusomterPostcode` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `customerAddress` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `customerTown` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `firstname` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetAddress` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "cusomterPostcode",
DROP COLUMN "customerAddress",
DROP COLUMN "customerName",
DROP COLUMN "customerTown",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "streetAddress" TEXT NOT NULL;
