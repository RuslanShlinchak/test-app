import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { ProductType } from "../../types";

type ProductsTableContextType = {
    activeRow: ProductType | null;
    setActiveRow: Dispatch<SetStateAction<ProductType | null>>
}


export const ProductsTableContext = createContext<ProductsTableContextType>({
    activeRow: null,
    setActiveRow() {}
})

export const ProductsTableProvider: FC<PropsWithChildren> = ({ children }) => {
    const [ activeRow, setActiveRow ] = useState<ProductType | null>(null);
    
    return <ProductsTableContext.Provider value={{
        activeRow,
        setActiveRow
    }}>
        {children}
    </ProductsTableContext.Provider>
};

export function withProductsTableProvider <T extends object>(Component: React.ComponentType<T>) {
    return (props: T) => {
        return (
            <ProductsTableProvider>
                <Component {...props}/>
            </ProductsTableProvider>
        )
    }
}