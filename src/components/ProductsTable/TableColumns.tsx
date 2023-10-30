import { TableColumnType } from "antd"
import { ProductFieldName, ProductType } from "../../types"
import { ProductNameCell, ActionCell, InStockCell } from "./components/cells"

export const TableColumns: TableColumnType<ProductType>[] = [
    {
        title: 'Product Name',
        width: 200,
        dataIndex: ProductFieldName.Name,
        key: ProductFieldName.Name,
        fixed: 'left',
        render(value, record, index) {
            return <ProductNameCell value={value} record={record}/>
        },
    },
    {
        title: 'Company',
        dataIndex: ProductFieldName.Company,
        key: ProductFieldName.Company,
        width: 200
    },
    {
        title: 'Color',
        dataIndex: ProductFieldName.Color,
        key: ProductFieldName.Color,
        width: 200
    },
    {
        title: 'In Stock',
        dataIndex: ProductFieldName.InStock,
        key: ProductFieldName.InStock,
        render(value) {
            return <InStockCell value={value}/>
        },
        width: 100
    },
    {
        title: 'Price',
        dataIndex: ProductFieldName.Price,
        key: ProductFieldName.Price,
        width: 200
    },
    {
        title: 'Count',
        dataIndex: ProductFieldName.Count,
        key: ProductFieldName.Count,
        width: 200
    },
    {
        title: '# Reviews',
        dataIndex: ProductFieldName.ReviewsCount,
        key: ProductFieldName.ReviewsCount,
        width: 200
    },
    {
        title: 'Seller location',
        dataIndex: ProductFieldName.SellerLocation,
        key: ProductFieldName.SellerLocation,
        width: 300
    },
    {
        key: 'action',
        render(_, record) {
            return <ActionCell record={record}/>
        }
    }
]