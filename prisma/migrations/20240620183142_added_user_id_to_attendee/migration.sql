/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `Attendee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ques_id]` on the table `Attendee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Attendee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendee" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Attendee_user_id_key" ON "Attendee"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Attendee_ques_id_key" ON "Attendee"("ques_id");
