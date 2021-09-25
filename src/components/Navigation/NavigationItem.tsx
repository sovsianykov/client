import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './Navigation.module.scss'
import {NavigationLink} from "../../content/links";
import cn from 'classnames'
import { Link } from "react-router-dom"
import DroopDown from "../../shared/components/Droopdown/Droopdown";

interface NavigationItemProps {
    item : NavigationLink;
    onClick(id:number):void;
    active?: boolean;
}

const NavigationItem:FunctionComponent<NavigationItemProps> = (
    {item, onClick,active}) => {
          
    const classNames = useMemo(()=> cn({
           [styles.navigationItem] : true,
           [styles.navigationItem_active] : active,
    }),[active])

    const onClickHandler = useCallback(() => {
        onClick(item.id)
    },[item.id, onClick]);
    
    return (
        <Link className={classNames} onClick={onClickHandler} to={item.path}>
            {item.name}

        </Link>
    );
};

export default NavigationItem;