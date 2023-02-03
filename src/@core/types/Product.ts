export type Product = {
    id: number;
    title: string;
    images: { extended: string[], thumbnail: string[] };
    price: number;
    description: string;
    discount?: number;
}