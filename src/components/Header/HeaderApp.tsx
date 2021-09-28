import React, {FunctionComponent} from 'react';
import styles from "./Header.module.scss"
import HeaderTools from "./HeaderTools";
import HeaderNav from "./HeaderNav";

const HeaderApp:FunctionComponent = () => {
    return (
        <header className={styles.fixedTopContainer}>
            <div className={styles.headerContainer}>
                <HeaderTools/>
                <HeaderNav/>
            </div>
        </header>
    );
};

export default HeaderApp;