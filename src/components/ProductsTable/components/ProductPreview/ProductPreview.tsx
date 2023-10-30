import { FC, useContext } from "react";
import { CloseCircleOutlined } from "@ant-design/icons"
import styles from "./styles.module.scss"
import { ProductsTableContext } from "../../ProductsTableContext";

type ProductPreviewProps = {
    src: string;
    alt?: string;
}

export const ProductPreview: FC<ProductPreviewProps> = ({ src, alt }) => {
    const { setActiveRow } = useContext(ProductsTableContext)
    const handleClose = () => {
        setActiveRow(null)
    }
    return <div className={styles.wrapper}>
        <img src={src} alt={alt} />
        <CloseCircleOutlined onClick={handleClose} className={styles.closeButton} />
    </div>
}