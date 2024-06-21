-- CreateTable
CREATE TABLE "Attendee" (
    "attendee_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ques_id" TEXT NOT NULL,
    "num_of_submissions" INTEGER NOT NULL,
    "best_accuracy" DOUBLE PRECISION NOT NULL,
    "latest_ans_id" TEXT NOT NULL,
    "latest_submission_date" TIMESTAMP(3) NOT NULL,
    "first_submission_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendee_pkey" PRIMARY KEY ("attendee_id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "answer_id" TEXT NOT NULL,
    "attendee_id" TEXT NOT NULL,
    "curr_answer" TEXT NOT NULL,
    "curr_submission_date" TIMESTAMP(3) NOT NULL,
    "curr_accuracy" DOUBLE PRECISION NOT NULL,
    "feedback_recieved" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answer_id")
);

-- CreateTable
CREATE TABLE "SubtopicEval" (
    "subtopic_eval_id" TEXT NOT NULL,
    "subtopic_id" TEXT NOT NULL,
    "answer_id" TEXT NOT NULL,

    CONSTRAINT "SubtopicEval_pkey" PRIMARY KEY ("subtopic_eval_id")
);

-- CreateTable
CREATE TABLE "OtherStatEval" (
    "ost_eval_id" TEXT NOT NULL,
    "ost_name" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "answer_id" TEXT NOT NULL,

    CONSTRAINT "OtherStatEval_pkey" PRIMARY KEY ("ost_eval_id")
);

-- CreateTable
CREATE TABLE "Question" (
    "ques_id" TEXT NOT NULL,
    "ques_no" INTEGER NOT NULL,
    "ques_desc" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "total_submissions" INTEGER NOT NULL,
    "correct_answer" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "best_accuracy_id" TEXT NOT NULL,
    "best_accuracy" DOUBLE PRECISION NOT NULL,
    "avg_acceptance_rate" DOUBLE PRECISION NOT NULL,
    "category_id" TEXT NOT NULL,
    "published_date" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "approver_id" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("ques_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" TEXT NOT NULL,
    "category_name" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "total_questions" INTEGER NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "QuestionSubtopic" (
    "subtopic_id" TEXT NOT NULL,
    "subtopic_name" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "QuestionSubtopic_pkey" PRIMARY KEY ("subtopic_id")
);

-- CreateTable
CREATE TABLE "ExtraQuestion" (
    "extra_ques_id" TEXT NOT NULL,
    "ques_id" TEXT NOT NULL,
    "extra_ques_desc" TEXT NOT NULL,

    CONSTRAINT "ExtraQuestion_pkey" PRIMARY KEY ("extra_ques_id")
);

-- CreateTable
CREATE TABLE "OtherStat" (
    "ost_id" TEXT NOT NULL,
    "ost_name" TEXT NOT NULL,
    "avg_acceptance_rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "OtherStat_pkey" PRIMARY KEY ("ost_id")
);

-- CreateTable
CREATE TABLE "_QuestionToSubtopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QuestionToOtherStat" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SubtopicEval_subtopic_id_key" ON "SubtopicEval"("subtopic_id");

-- CreateIndex
CREATE UNIQUE INDEX "SubtopicEval_answer_id_key" ON "SubtopicEval"("answer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Question_ques_no_key" ON "Question"("ques_no");

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionToSubtopic_AB_unique" ON "_QuestionToSubtopic"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionToSubtopic_B_index" ON "_QuestionToSubtopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuestionToOtherStat_AB_unique" ON "_QuestionToOtherStat"("A", "B");

-- CreateIndex
CREATE INDEX "_QuestionToOtherStat_B_index" ON "_QuestionToOtherStat"("B");

-- AddForeignKey
ALTER TABLE "Attendee" ADD CONSTRAINT "Attendee_ques_id_fkey" FOREIGN KEY ("ques_id") REFERENCES "Question"("ques_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_attendee_id_fkey" FOREIGN KEY ("attendee_id") REFERENCES "Attendee"("attendee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubtopicEval" ADD CONSTRAINT "SubtopicEval_subtopic_id_fkey" FOREIGN KEY ("subtopic_id") REFERENCES "QuestionSubtopic"("subtopic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubtopicEval" ADD CONSTRAINT "SubtopicEval_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("answer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OtherStatEval" ADD CONSTRAINT "OtherStatEval_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("answer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionSubtopic" ADD CONSTRAINT "QuestionSubtopic_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExtraQuestion" ADD CONSTRAINT "ExtraQuestion_ques_id_fkey" FOREIGN KEY ("ques_id") REFERENCES "Question"("ques_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSubtopic" ADD CONSTRAINT "_QuestionToSubtopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("ques_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToSubtopic" ADD CONSTRAINT "_QuestionToSubtopic_B_fkey" FOREIGN KEY ("B") REFERENCES "QuestionSubtopic"("subtopic_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToOtherStat" ADD CONSTRAINT "_QuestionToOtherStat_A_fkey" FOREIGN KEY ("A") REFERENCES "OtherStat"("ost_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuestionToOtherStat" ADD CONSTRAINT "_QuestionToOtherStat_B_fkey" FOREIGN KEY ("B") REFERENCES "Question"("ques_id") ON DELETE CASCADE ON UPDATE CASCADE;
