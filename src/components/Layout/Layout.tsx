import React, {FunctionComponent, ReactNode} from 'react';
import styles from "./Layout.module.scss"
import TabIndicator from "../TabIndicator/TabIndicator";




const Layout:FunctionComponent  = ({children}) => {
    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    );
};

export default Layout;
