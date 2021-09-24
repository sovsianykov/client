import React, {FunctionComponent} from 'react';
import styles from "./Header.module.scss"
import HeaderTools from "./HeaderTools";
import HeaderNav from "./HeaderNav";

const HeaderApp:FunctionComponent = () => {
    return (
        <header className={styles.headerContainer}>
             header
            <HeaderTools/>
            <HeaderNav/>
        </header>
    );
};

export default HeaderApp;