export interface Book {
  title: string;
  author: string;
  year: number;
}

export interface Product {
  name: string;
}

export const clickMe = (params?: string): string | undefined => {
  return params;
  console.log(params);
};

export function clickMeAgain(params?: number | boolean) {
  console.log(params);
}
