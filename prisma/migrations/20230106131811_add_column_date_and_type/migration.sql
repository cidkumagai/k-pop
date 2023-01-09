/*
  Warnings:

  - Added the required column `birth` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
