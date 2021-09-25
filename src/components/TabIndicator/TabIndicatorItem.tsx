import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './TabIndicator.module.scss';
import cn from 'classnames'
import {NavigationLink} from "../../content/links";



interface TabIndicatorItemProps {
    item : NavigationLink;
    active?: boolean;
}

const TabIndicatorItem:FunctionComponent<TabIndicatorItemProps> = ({active,item}) => {
    const classNames = useMemo(()=> cn({
        [styles.navigationItem] : true,
        [styles.navigationItem_active] : active,
    }),[active])



    return (
        <div className={classNames}>
            {item.name}
        </div>
    );
};

export default TabIndicatorItem;
