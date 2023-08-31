/*
  Warnings:

  - Added the required column `update_at` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL;
