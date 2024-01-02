export type ProductProps = {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  rating: string;
};

export type CartItem = {
    product_id: string;
    name: string | undefined;
    quantity: JSX.Element;
    pricePerItem: string;
    total: string;
};

export type Column = {
  columnId: string;
  header: string;
};