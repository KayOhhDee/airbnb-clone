import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/libs/prismadb'

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  switch (method) {
    case 'POST':
      const body = await req.body

      const { email, name, password } = body
    
      const hashedPassword = await bcrypt.hash(password, 10)
      
      const user = await prisma.user.create({
        data: {
          email,
          name, 
          hashedPassword
        }
      })
      return res.status(200).json(user)
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}