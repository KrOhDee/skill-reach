import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.skill.createMany({
    data: [
      { name: 'Japanese', targetHours: 1000 },
      { name: 'Coding', targetHours: 500 },
      { name: 'Workout', targetHours: 1500 },
      { name: 'Guitar', targetHours: 800 },
    ],
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
