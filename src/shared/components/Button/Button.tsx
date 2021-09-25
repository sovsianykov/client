import React, {FunctionComponent, useCallback, useMemo} from 'react';
import styles from "./Button.module.scss";
import cn from 'classnames';

interface ButtonProps {
    onClick(): void;
    active?: boolean
}


const Button:FunctionComponent<ButtonProps> = ({onClick,children,active= false}) => {

    const onClickHandler = useCallback(() =>{
           onClick()
    },[])

    const classNames = useMemo(() => cn({
           [styles.buttonContainer] : true,
           [styles.buttonContainer_active] : active,

    })

    ,[])
    return (
        <button className={classNames} onClick={onClickHandler}>
            {children}
        </button>
    );
};

export default Button;
