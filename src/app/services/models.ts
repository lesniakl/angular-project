export interface PRODUCT {
  id: string;
  product_name: string;
  price: number | null;
  quantity_in_stock: number;
  manufacturer: string;
  release_date: string;
}

export interface USER {
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  website: string;
}
