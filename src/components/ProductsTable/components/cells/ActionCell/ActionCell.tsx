import { FC, useContext } from "react";
import { Button } from 'antd';
import { ProductFieldName, ProductType } from "../../../../../types";
import { ProductsContext } from "../../../../../contexts";

type ActionCellProps = {
    record: ProductType
}

export const ActionCell: FC<ActionCellProps> = ({ record }) => {
    const { onBuyProduct } = useContext(ProductsContext);
    const handleClick = () => {
        onBuyProduct(record[ProductFieldName.ID])
    }

    return (
        <Button disabled={!record[ProductFieldName.InStock]} onClick={handleClick}>Buy</Button>
    )
}