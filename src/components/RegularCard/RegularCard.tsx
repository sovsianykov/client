import React, {FunctionComponent} from 'react';
import styles from "./RegularCard.module.scss"
import {Paper, Typography} from "@material-ui/core";
import {Musician} from "../../models/globalModels";

interface RegularCardProps {
   musician: Musician
}

const RegularCard:FunctionComponent<RegularCardProps> = ({musician}) => {
    return (
        <Paper className={styles.cardContainer}>
             <Typography variant='h4' align='center' style={{ marginTop:20 }}>
                 {musician.name}
             </Typography>

               <div className={styles.cardHeader}>
                   <Typography variant='subtitle1' className={styles.description} >
                       {musician.description}
                   </Typography>

                   <div className={styles.avatar}>
                       <img src={musician.avatar} alt='avatar'/>
                   </div>
               </div>
        </Paper>
    );
};

export default RegularCard;