/*
  Warnings:

  - You are about to drop the column `curr_submission_date` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `first_submission_date` on the `Attendee` table. All the data in the column will be lost.
  - You are about to drop the column `latest_submission_date` on the `Attendee` table. All the data in the column will be lost.
  - Added the required column `submission` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_submission` to the `Attendee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latest_submission` to the `Attendee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "curr_submission_date",
ADD COLUMN     "submission" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "submission_date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Attendee" DROP COLUMN "first_submission_date",
DROP COLUMN "latest_submission_date",
ADD COLUMN     "first_submission" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "latest_submission" TIMESTAMP(3) NOT NULL;
