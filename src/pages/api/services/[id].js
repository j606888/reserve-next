import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    await prisma.service.delete({
      where: {
        id: +id,
      },
    });
    res.status(200).json({ message: 'Service deleted successfully' });
  }
  if (req.method === 'PUT') {
    const { id } = req.query;
    const { name, price, period } = req.body;
    await prisma.service.update({
      where: { id: +id },
      data: { name, price, period },
    });
    res.status(200).json({ message: 'Service updated successfully' });
  }
}
