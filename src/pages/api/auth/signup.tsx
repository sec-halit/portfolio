import Users from "@/lib/models/userModels";
import { RegisterUser } from "@/lib/services";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body
  const result = await RegisterUser(req.body);
  res.status(result?.status).json(result);

}
