import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './Navigation.module.scss'
import {NavigationLink} from "../../content/links";
import cn from 'classnames';
import { Link } from "react-router-dom"
import {ArrowDropDown, ArrowDropUp } from "@material-ui/icons";


interface NavigationItemProps {
    item : NavigationLink;
    onClick(id:number):void;
    active: boolean;
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
         <nav className={styles.navigationItemContainer} onMouseEnter={onClickHandler}
               >
             <Link className={classNames} onClick={onClickHandler}  to={item.path}>
                 {item.name}
                 { item.hasDroopDown && active ? <ArrowDropUp/> : ""  }
                 { item.hasDroopDown && (!active) ? <ArrowDropDown/> : ""  }
             </Link>

         </nav >
    );
};

export default NavigationItem;
