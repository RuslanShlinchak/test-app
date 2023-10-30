import React from 'react';
import { ProductsTable } from "./components/ProductsTable"
import { ProductsChart } from "./components/ProductsChart"
import { ProductsProvider } from "./contexts"
import styles from "./styles.module.scss"

function App() {
  return (
    <ProductsProvider>
      <div className={styles.app}>
        <ProductsTable />
        <ProductsChart />
      </div>
    </ProductsProvider>
  );
}

export default App;
