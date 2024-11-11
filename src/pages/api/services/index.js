import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    res.status(200).json({ services });
  }

  if (req.method === 'POST') {
    const { name, price, period } = req.body;

    await prisma.service.create({
      data: {
        name,
        price,
        period,
      }
    })
    res.status(200).json({ message: 'Service created successfully' });
  }
}
