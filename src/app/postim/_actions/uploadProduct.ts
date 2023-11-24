'use server';

import { prisma } from "opal/app/_shared/db";
import { Draft_Product_Form } from "@prisma/client";

// TODO: not finished
export const uploadProduct = async (payload: Draft_Product_Form) => {
  const createdProduct = await prisma.draft_Product_Form.create({
    data: {
      ...payload,
      details: JSON.stringify(payload.details)
    }
  });

  return createdProduct;
}
