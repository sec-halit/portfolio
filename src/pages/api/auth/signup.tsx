import { RegisterUser } from "@/lib/services";

import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const result = await RegisterUser(req.body);
  if(result?.success){
    res.redirect("/auth/login");
    return;
  }
  res.status(result?.status).json(result);
}
