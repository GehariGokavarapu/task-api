import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function findById(id) {
  const task = await db('tasks').where({ id }).first();
  return task || null;
}