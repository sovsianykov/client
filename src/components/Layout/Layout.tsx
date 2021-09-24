import React, {FunctionComponent, ReactNode} from 'react';
import styles from "./Layout.module.scss"

interface LayoutProps {
    children:ReactNode
}


const Layout:FunctionComponent  = ({children}) => {
    return (
        <div className={styles.layoutContainer}>
            {children}
        </div>
    );
};

export default Layout;