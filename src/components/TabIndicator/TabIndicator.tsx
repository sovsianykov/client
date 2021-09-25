import React, {FunctionComponent, useState} from 'react';
import styles from './TabIndicator.module.scss';
import {NavigationLink, navLinks} from "../../content/links";
import TabIndicatorItem from "./TabIndicatorItem";
interface TabIndicatorProps {
    activeId : number
}


const TabIndicator:FunctionComponent<TabIndicatorProps> = (
    {activeId}
) => {

    return (
        <nav className={styles.tabIndicator}>
            {navLinks.map((item:NavigationLink) => (
                <TabIndicatorItem item = {item}
                    key={item.id}
                    active={activeId === item.id}
                />
            ))}
        </nav>
    );
};

export default TabIndicator;
