import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './TabIndicator.module.scss';
import cn from 'classnames'



interface TabIndicatorItemProps {
    active : boolean;
    onClick(id:number):void;
    id: number
}

const TabIndicatorItem:FunctionComponent<TabIndicatorItemProps> = ({active,onClick,id}) => {
    const classNames = useMemo(()=> cn({
        [styles.navigationItem] : true,
        [styles.navigationItem_active] : active,
    }),[active])

    const onClickHandler = useCallback(() => {
        onClick(id)
    },[id, onClick]);

    return (
        <div className={classNames} onClick={onClickHandler}>

        </div>
    );
};

export default TabIndicatorItem;