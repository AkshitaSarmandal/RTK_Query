export interface RootState {
  product: {
    searchTerm: string;
    categoryTerm: string;
  };
}

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
}
