import { ProductType } from "../types"

export const TableDataMock: ProductType[] = [
    {
        id: "shoe_1",
        name: 'Shoe #1',
        preview: "https://placehold.co/300x300?text=Test_1",
        company: "Adidas",
        color: "blue",
        inStock: true,
        price: 9,
        count: 10,
        reviewsCount: 50,
        sellerLocation: "Japan",
    },
    {
        id: "shoe_2",
        name: 'Shoe #2',
        preview: "https://placehold.co/300x300?text=Test_2",
        company: "Reebok",
        color: "yellow",
        inStock: true,
        price: 10,
        count: 3,
        reviewsCount: 10,
        sellerLocation: "USA",
    },
    {
        id: "shoe_3",
        name: 'Shoe #3',
        preview: "https://placehold.co/300x300?text=Test_3",
        company: "Nike",
        color: "green",
        inStock: true,
        price: 15,
        count: 6,
        reviewsCount: 30,
        sellerLocation: "UK",
    }
];