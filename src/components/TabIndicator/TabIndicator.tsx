import React, {FunctionComponent, useState} from 'react';
import styles from './TabIndicator.module.scss';
import {NavigationLink, navLinks} from "../../content/links";
import NavigationItem from "../Navigation/NavigationItem";
import TabIndicatorItem from "./TabIndicatorItem";

const TabIndicator:FunctionComponent = () => {
    const [activeId, setActiveID] = useState<number>(1);
    const onClickHandler = (id: number) => {
        setActiveID(id);
    };
    return (
        <nav className={styles.tabIndicator}>
            {navLinks.map((item:NavigationLink) => (
                <TabIndicatorItem id={item.id}
                    key={item.id}
                    onClick={onClickHandler}
                    active={activeId === item.id}
                />
            ))}
        </nav>
    );
};

export default TabIndicator;