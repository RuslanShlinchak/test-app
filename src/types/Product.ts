export enum ProductFieldName {
    ID = 'id',
    Name = 'name',
    Preview = 'preview',
    Company='company',
    Color = 'color',
    InStock='inStock',
    Price = 'price',
    Count = 'count',
    ReviewsCount = 'reviewsCount',
    SellerLocation = 'sellerLocation',
}

export type ProductType = {
    [ProductFieldName.ID]: string;
    [ProductFieldName.Name]: string;
    [ProductFieldName.Preview]: string;
    [ProductFieldName.Company]: string;
    [ProductFieldName.Color]: string;
    [ProductFieldName.InStock]: boolean;
    [ProductFieldName.Price]: number;
    [ProductFieldName.Count]: number;
    [ProductFieldName.ReviewsCount]: number;
    [ProductFieldName.SellerLocation]: string;
}