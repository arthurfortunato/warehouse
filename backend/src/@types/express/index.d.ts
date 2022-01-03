declare namespace Express {
  export interface Request {
    product: {
      name: string;
      code: string;
      sector: string;
      price: number;
    };
  }
}