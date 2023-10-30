import React, { FC, useContext } from "react";
import { ProductsTableContext } from "../../../ProductsTableContext";
import { ProductFieldName, ProductType } from "../../../../../types";
import { Button } from "antd";

type ProductNameCellProps = {
    value: string;
    record: ProductType;
}

export const ProductNameCell: FC<ProductNameCellProps> = ({ record, value }) => {
    const { setActiveRow, activeRow } = useContext(ProductsTableContext);
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        let nextActiveRow: ProductType | null = record;
        if (activeRow && activeRow[ProductFieldName.ID] === record[ProductFieldName.ID]) {
            nextActiveRow = null;
        }
        setActiveRow(nextActiveRow);
    }
    return (
        <Button type="link" block onClick={handleClick}>
            {value}
        </Button>
    )
}