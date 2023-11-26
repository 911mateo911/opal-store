'use server';

import { prisma } from "opal/app/_shared/db";
import { Draft_Product_Form, Prisma } from "@prisma/client";
import { PolishedProductType } from "./types";

// TODO: not finished
export const uploadProductPipe = async (payload: PolishedProductType): Promise<Draft_Product_Form> => {
  const createdProduct = await prisma.draft_Product_Form.create({
    data: {
      ...payload,
      details: payload.details !== null ? payload.details : Prisma.JsonNull
    }
  });

  return createdProduct;
}
