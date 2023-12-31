-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_rent" (
    "userId" TEXT NOT NULL,
    "MovieId" TEXT NOT NULL,

    CONSTRAINT "movie_rent_pkey" PRIMARY KEY ("userId","MovieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");

-- AddForeignKey
ALTER TABLE "movie_rent" ADD CONSTRAINT "movie_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_rent" ADD CONSTRAINT "movie_rent_MovieId_fkey" FOREIGN KEY ("MovieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
