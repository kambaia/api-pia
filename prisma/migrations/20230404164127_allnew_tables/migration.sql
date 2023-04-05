-- CreateTable
CREATE TABLE "artistsAlbums" (
    "id" SERIAL NOT NULL,
    "artistId" INTEGER,
    "abumId" INTEGER,

    CONSTRAINT "artistsAlbums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "unitel" TEXT NOT NULL,
    "movicel" TEXT NOT NULL,
    "fixe" TEXT NOT NULL,
    "userId" INTEGER,
    "artistId" INTEGER,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "Realizador" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "production" TEXT NOT NULL,
    "recordedIn" TEXT NOT NULL,
    "userId" INTEGER,
    "artistId" INTEGER,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "artistsAlbums" ADD CONSTRAINT "artistsAlbums_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artistsAlbums" ADD CONSTRAINT "artistsAlbums_abumId_fkey" FOREIGN KEY ("abumId") REFERENCES "abums"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
