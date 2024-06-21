/*
  Warnings:

  - A unique constraint covering the columns `[category_name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ques_id]` on the table `ExtraQuestion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ost_name]` on the table `OtherStat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ost_name]` on the table `OtherStatEval` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subtopic_name]` on the table `QuestionSubtopic` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Category_category_name_key" ON "Category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "ExtraQuestion_ques_id_key" ON "ExtraQuestion"("ques_id");

-- CreateIndex
CREATE UNIQUE INDEX "OtherStat_ost_name_key" ON "OtherStat"("ost_name");

-- CreateIndex
CREATE UNIQUE INDEX "OtherStatEval_ost_name_key" ON "OtherStatEval"("ost_name");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionSubtopic_subtopic_name_key" ON "QuestionSubtopic"("subtopic_name");
