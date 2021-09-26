import React, {FunctionComponent, useMemo} from 'react';
import styles from '../Navigation.module.scss';
import cn from "classnames";

interface DroopDownProps {
     active: boolean;
}


const DroopDown:FunctionComponent<DroopDownProps> = (
    {children,active}) => {
    const classNames = useMemo(()=> cn({
        [styles.droopDown] : true,
        [styles.droopDown_active] : active,
    }),[active])


    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default DroopDown;