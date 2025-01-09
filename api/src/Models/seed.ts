import { PrismaClient, Rental, Address, Caracteristic, Types } from "./generated/prisma-client-js";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  await prisma.rental.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.caracteristic.deleteMany({});

  const amountOfRentals = 20;

  for (let i = 0; i < amountOfRentals; i++) {
    const caracteristic = await prisma.caracteristic.create({
      data: {
        id: faker.string.uuid(),
        nb_bedroom: faker.number.int({ min: 1, max: 10 }),
        nb_bathroom: faker.number.int({ min: 1, max: 10 }),
        description: faker.lorem.paragraph({ min: 2, max: 5 }),
      },
    });

    const address = await prisma.address.create({
      data: {
        id: faker.string.uuid(),
        city: faker.location.city(),
        country: faker.location.country(),
        street: faker.location.street(),
        zip_code: faker.location.zipCode(),
      },
    });

    const rental = {
      id: faker.string.uuid(),
      title: faker.book.title(),
      nb_person: faker.number.int({ min: 1, max: 20 }),
      price: faker.number.int({ min: 100, max: 10000 }),
      available_date: faker.date.anytime(),
      type: faker.helpers.enumValue(Types),
      userId: "69555855-c3eb-4c83-9a40-b14cc992c32d",
      adressId: address.id,
      caracteristicId: caracteristic.id,
      picture: faker.image.url({width:1080, height:566}),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    await prisma.rental.create({ data: rental });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
