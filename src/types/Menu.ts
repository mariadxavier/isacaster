export type MenuType = {
    sectionCode: string;
    sectionName: string;
    sectionColor: string;
    sectionProducts: ProductsType[];
}

export type ProductsType = {
    productName: string;
    productDescription: string;
    productPrice: number;
    productImageUrl: string;
}

export type GetProductsResponse = {
    error: boolean;
    products: ProductsType[];
}
