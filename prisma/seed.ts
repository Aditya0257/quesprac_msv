/* eslint-disable @typescript-eslint/no-unused-vars */
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const cloudCategory = await prisma.category.create({
    data: {
      category_name: 'cloud',
      popularity: 60.0,
      total_questions: 8,
    },
  });

  const dataStructuresCategory = await prisma.category.create({
    data: {
      category_name: 'dsa',
      popularity: 80.0,
      total_questions: 120,
    },
  });

  const javascriptCategory = await prisma.category.create({
    data: {
      category_name: 'javascript',
      popularity: 0.0,
      total_questions: 0,
    },
  });

  const asyncAwaitSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'async_await',
      category_id: javascriptCategory.category_id,
    },
  });

  const callbackSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'callback',
      category_id: javascriptCategory.category_id,
    },
  });

  const promiseSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'promise',
      category_id: javascriptCategory.category_id,
    },
  });

  const closuresSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'closures',
      category_id: javascriptCategory.category_id,
    },
  });

  const awsSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'aws',
      category_id: cloudCategory.category_id,
    },
  });

  const serverlessSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'serverless',
      category_id: cloudCategory.category_id,
    },
  });

  const onPremiseSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'on_premise',
      category_id: cloudCategory.category_id,
    },
  });

  const stackSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'stack',
      category_id: dataStructuresCategory.category_id,
    },
  });

  const queueSubtopic = await prisma.questionSubtopic.create({
    data: {
      subtopic_name: 'queue',
      category_id: dataStructuresCategory.category_id,
    },
  });

  const question1 = await prisma.question.create({
    data: {
      ques_no: 1,
      ques_desc:
        'Explain the concept of Async/Await, Callback and promise in JavaScript.',
      level: 'Medium',
      total_submissions: 0,
      correct_answer:
        'Async/Await is a syntax in JavaScript used to work with asynchronous code. Callback is the function called after certain processing like after setTimeout, promise is an object which returns in future, after either getting resolved or rejected.',
      popularity: 70.0,
      best_accuracy_id: '',
      best_accuracy: 80.0,
      avg_acceptance_rate: 45.0,
      category_id: javascriptCategory.category_id,
      published_date: new Date(),
      user_id: '',
      approver_id: '',
      subtopics: {
        connect: [
          { subtopic_id: asyncAwaitSubtopic.subtopic_id },
          { subtopic_id: promiseSubtopic.subtopic_id },
          { subtopic_id: callbackSubtopic.subtopic_id },
        ],
      },
    },
  });

  const question2 = await prisma.question.create({
    data: {
      ques_no: 2,
      ques_desc: 'Compare AWS (cloud) versus On-Premise infrastructure.',
      level: 'Hard',
      total_submissions: 0,
      correct_answer:
        'AWS provides cloud services, while On-Premise refers to running infrastructure locally.',
      popularity: 50.0,
      best_accuracy_id: '',
      best_accuracy: 75.0,
      avg_acceptance_rate: 35.0,
      category_id: cloudCategory.category_id,
      published_date: new Date(),
      user_id: '',
      approver_id: '',
      subtopics: {
        connect: [
          { subtopic_id: awsSubtopic.subtopic_id },
          { subtopic_id: onPremiseSubtopic.subtopic_id },
        ],
      },
    },
  });

  const question3 = await prisma.question.create({
    data: {
      ques_no: 3,
      ques_desc: 'What is the difference between a stack and a queue?',
      level: 'Easy',
      total_submissions: 0,
      correct_answer:
        'A stack is a data structure where elements are added and removed from the same end (LIFO), while a queue is a data structure where elements are added at one end and removed from the other end (FIFO).',
      popularity: 0.0,
      best_accuracy_id: '',
      best_accuracy: 0.0,
      avg_acceptance_rate: 0.0,
      category_id: dataStructuresCategory.category_id,
      published_date: new Date(),
      user_id: '',
      approver_id: '',
      subtopics: {
        connect: [
          { subtopic_id: stackSubtopic.subtopic_id },
          { subtopic_id: queueSubtopic.subtopic_id },
        ],
      },
    },
  });

  const question4 = await prisma.question.create({
    data: {
      ques_no: 4,
      ques_desc: 'Explain the concept of closures in JavaScript.',
      level: 'Medium',
      total_submissions: 0,
      correct_answer:
        'A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.',
      popularity: 0.0,
      best_accuracy_id: '',
      best_accuracy: 0.0,
      avg_acceptance_rate: 0.0,
      category_id: javascriptCategory.category_id,
      published_date: new Date(),
      user_id: '',
      approver_id: '',
      subtopics: {
        connect: [{ subtopic_id: closuresSubtopic.subtopic_id }],
      },
    },
  });

  const question5 = await prisma.question.create({
    data: {
      ques_no: 5,
      ques_desc: 'What are the benefits of using serverless architecture?',
      level: 'Medium',
      total_submissions: 0,
      correct_answer:
        'Serverless architecture allows developers to build and run applications without managing infrastructure, offering benefits like automatic scaling, reduced operational overhead, and cost efficiency.',
      popularity: 0.0,
      best_accuracy_id: '',
      best_accuracy: 0.0,
      avg_acceptance_rate: 0.0,
      category_id: cloudCategory.category_id,
      published_date: new Date(),
      user_id: '',
      approver_id: '',
      subtopics: {
        connect: [
          { subtopic_id: awsSubtopic.subtopic_id },
          { subtopic_id: serverlessSubtopic.subtopic_id },
        ],
      },
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
