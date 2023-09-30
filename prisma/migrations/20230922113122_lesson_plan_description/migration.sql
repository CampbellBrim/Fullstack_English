/*
  Warnings:

  - You are about to drop the column `description` on the `Lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "description",
ADD COLUMN     "learningObjective" TEXT NOT NULL DEFAULT 'learn verbs, nouns, adjectives, etc.';
