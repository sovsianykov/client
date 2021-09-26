import React, {FunctionComponent} from 'react';
import styles from './Navigation.module.scss'
interface DroopDownItemProps {
   item: string;

}



const DroopDownItem:FunctionComponent<DroopDownItemProps> = ({item}) => {
    return (
        <div className={styles.droopDownItem}>
            {item}
        </div>
    );
};

export default DroopDownItem;