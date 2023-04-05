-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "profileName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "userBirth" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "active" BOOLEAN NOT NULL,
    "status" BOOLEAN NOT NULL,
    "banned" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "urlProfile" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "dateOfbirth" TEXT NOT NULL,
    "earlyCareer" TEXT NOT NULL,
    "musicStyles" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "coverArtist" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "abums" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseYear" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "reviewed" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "musicId" INTEGER NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "abums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musics" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artwork" TEXT NOT NULL,
    "digital" TEXT NOT NULL,
    "phisical" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "releaseYear" TEXT NOT NULL,
    "copyright" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "urlSingles" TEXT NOT NULL,
    "tracksId" INTEGER,
    "artistId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "videoClips" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "Realizador" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "production" TEXT NOT NULL,
    "recordedIn" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "videoClips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "abums_title_key" ON "abums"("title");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artists" ADD CONSTRAINT "artists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abums" ADD CONSTRAINT "abums_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_tracksId_fkey" FOREIGN KEY ("tracksId") REFERENCES "abums"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musics" ADD CONSTRAINT "musics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videoClips" ADD CONSTRAINT "videoClips_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
