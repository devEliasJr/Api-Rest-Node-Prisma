/*
  Warnings:

  - The primary key for the `movie_rent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `MovieId` on the `movie_rent` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `movie_rent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "movie_rent" DROP CONSTRAINT "movie_rent_MovieId_fkey";

-- AlterTable
ALTER TABLE "movie_rent" DROP CONSTRAINT "movie_rent_pkey",
DROP COLUMN "MovieId",
ADD COLUMN     "movieId" TEXT NOT NULL,
ADD CONSTRAINT "movie_rent_pkey" PRIMARY KEY ("userId", "movieId");

-- AddForeignKey
ALTER TABLE "movie_rent" ADD CONSTRAINT "movie_rent_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
