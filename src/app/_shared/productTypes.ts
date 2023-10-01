export interface ProductDetail {
  type: string;
  content: string;
};

export type ProductDetailsRecord = Record<string, ProductDetail>;
