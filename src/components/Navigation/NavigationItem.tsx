import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from './Navigation.module.scss'
import {NavigationLink} from "../../content/links";
import cn from 'classnames';
import { Link } from "react-router-dom"
import {ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import DroopDown from "./Droopdown/Droopdown";
import DroopDownItem from "./DroopDownItem";

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
         <nav className={styles.navigationItemContainer} onMouseEnter={onClickHandler}>
             <Link className={classNames} onClick={onClickHandler}  to={item.path}>
                 {item.name}
                 { item.hasDroopDown && active ? <ArrowDropUp/> : ""  }
                 { item.hasDroopDown && (!active) ? <ArrowDropDown/> : ""  }
             </Link>
             { item.hasDroopDown && active ?
                 <DroopDown active={active}>
                     {item.listDroopDown.map((item,i)=>(<DroopDownItem
                         item={item}
                         key={i}
                     />))}
                 </DroopDown>

                 : ""  }
         </nav >
    );
};

export default NavigationItem;
