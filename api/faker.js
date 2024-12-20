const { PrismaClient } = require('@prisma/client');
const faker = require('@faker-js/faker');

const prisma = new PrismaClient();

async function seedDatabase() {
 for (let i = 0; i < 10; i++) {
  const user = await prisma.user.create({
   data: {
    email: faker.internet.email(),
    name: faker.name.fullName(),
    password: faker.internet.password(),
   },
  });

  for (let j = 0; j < 3; j++) {
   await prisma.advert.create({
    data: {
     title: faker.lorem.words(),
     caracteristic: {
        description: faker.lorem.paragraph(),
     },
     price: parseFloat(faker.commerce.price()),
     userId: user.id,
    },
   });
  }
 }
 console.log('Base de données peuplée !');
}

seedDatabase();