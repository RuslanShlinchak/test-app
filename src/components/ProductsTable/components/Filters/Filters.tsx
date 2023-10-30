import { FC } from "react";
import { Button } from 'antd';
import styles from "./styles.module.scss"

export const Filters: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Button type="primary">Filter 1</Button>
            <Button type="primary">Filter 2</Button>
            <Button type="primary">Filter 3</Button>
        </div>
    )
}