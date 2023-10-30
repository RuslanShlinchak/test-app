import { FC } from "react";

type InStockCellProps = {
    value: boolean;
}

export const InStockCell: FC<InStockCellProps> = ({ value }) => {
    return <span>{value ? "In stock" : "Out of stock"}</span>
}