import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "POST") {
    await prisma.user.create({
      data: {
        name: "Nath pink"
      }
    })

    return res.json({success: true})
  }else {
    const users = await prisma.user.findMany();

    return res.json(users)
  }
}
