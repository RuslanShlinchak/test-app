import { FC, PropsWithChildren, createContext, useState } from "react";
import { ProductFieldName, ProductType } from "../types";
import { TableDataMock } from "../mock/tableData";

type ProductsContextType = {
    data: ProductType[];
    onBuyProduct: (productId: string) => void;
}

export const ProductsContext = createContext<ProductsContextType>({
    data: [],
    onBuyProduct(productId: string) {}
})

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState(TableDataMock);
    
    const onBuyProduct = (productId: string) => {
        setData(data.map(item => {
            if (item[ProductFieldName.ID] === productId) {
                const count = item[ProductFieldName.Count] > 0 ? item[ProductFieldName.Count] - 1 : 0;
                return {
                    ...item,
                    [ProductFieldName.Count]: count,
                    [ProductFieldName.InStock]: count > 0 ? true : false
                }
            }
            return item;
        }))
    }
    
    return <ProductsContext.Provider value={{
        data,
        onBuyProduct
    }}>
        {children}
    </ProductsContext.Provider>
};
