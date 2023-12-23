import HelloWorld from "@/components/app/HelloWorld";

import styles from "./Header.module.scss";

export const Header = () =>{
    return (
        <div className={styles.header}>
            <HelloWorld message="Header" />
        </div>
    )
}
