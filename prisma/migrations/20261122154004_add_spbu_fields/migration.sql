/*
  Warnings:

  - Added the required column `kota` to the `Spbu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Spbu` table without a default value. This is not possible if the table is not empty.
  - Made the column `latitude` on table `Spbu` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `Spbu` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Spbu" ADD COLUMN     "kota" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL,
ALTER COLUMN "latitude" SET NOT NULL,
ALTER COLUMN "longitude" SET NOT NULL;
