import { FC, useContext, useMemo } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ProductsContext } from "../../contexts";
import { ProductFieldName } from "../../types";
import styles from "./styles.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProductsChart: FC = () => {
    const { data } = useContext(ProductsContext);
    
    const pieChartData = useMemo(() => {
        let inStock = 0;
        let outOfStock = 0;
        const totalProductCount = data.length;
        for (const product of data) {
            if (product[ProductFieldName.InStock]) {
                inStock += 1;
            } else {
                outOfStock += 1;
            }
        }
        const percentageInStock = ((inStock / totalProductCount) * 100).toFixed(2) + '%';
        const percentageOutOfStock = ((outOfStock / totalProductCount) * 100).toFixed(2) + '%';
        const inStockLabel = `In Stock - ${percentageInStock}%`;
        const outOfStockLabel = `Out of Stock - ${percentageOutOfStock}`

        return {
            labels: [inStockLabel, outOfStockLabel],
            datasets: [
              {
                data: [inStock, outOfStock],
                backgroundColor: ['blue', 'orange'],
              },
            ],
          }
    }, [data])

    return (
        <div className={styles.wrapper}>
            <Pie data={pieChartData} />
        </div>
    )
}