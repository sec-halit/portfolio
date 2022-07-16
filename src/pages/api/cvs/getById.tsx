// This is an example of to protect an API route
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"
import cvModels from "@/lib/models/cvModels";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  if (session) {
    const { id } = req.query;
    if (id) {
      try {
        const result = await cvModels.findById(id);
        return res.status(200).json({
          message: "AUTHENTICATED",
          data: result
        })
      } catch (error: any) {
        return res.status(500).json({
          error: error,
        })
      }
    } else {
      return res.status(403).json({
        error: "parametre boş olamaz",
      })
    }

  }
  res.status(401).json({
    error: "UNAUTHENTICATED",
  })
}