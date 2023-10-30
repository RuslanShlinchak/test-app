import { FC, useContext, useState } from "react";
import { Button, Table } from 'antd';
import { Filters } from "./components/Filters"
import { ProductPreview } from "./components/ProductPreview"
import { ProductFieldName } from "../../types"
import styles from "./styles.module.scss"
import { ProductsTableContext, withProductsTableProvider } from "./ProductsTableContext";
import { TableColumns } from "./TableColumns"
import { ProductsContext } from "../../contexts";



export const ProductsTable: FC = withProductsTableProvider(() => {
    const { data } = useContext(ProductsContext);
    const { activeRow  } = useContext(ProductsTableContext)
    const [isOpenFilters, setIsOpenFilters] = useState(false);
    const toggleIsOpenFilters = () => {
        setIsOpenFilters(!isOpenFilters)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <Button type="primary" onClick={toggleIsOpenFilters}>Filters</Button>
            </div>
            <div className={styles.container}>
                {isOpenFilters && (
                    <div className={styles.filters}>
                        <Filters/>
                    </div>
                )}
                <div className={styles.tableContainer}>
                    <Table className={styles.table} columns={TableColumns} dataSource={data} />
                </div>
                {activeRow && (
                    <div className={styles.preview}>
                        <ProductPreview src={activeRow[ProductFieldName.Preview]} />
                    </div>
                )}
            </div>
        </div>
    )
})