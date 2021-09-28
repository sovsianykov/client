import React, { FunctionComponent } from "react";
import styles from "./MainGrid.module.scss";
import { Grid } from "@material-ui/core";
import { Musician } from "../../models/globalModels";
import RegularCard from "../RegularCard/RegularCard";

interface MainGridProps {
  items: Musician[];
}

const MainGrid: FunctionComponent<MainGridProps> = ({ items }) => {
  return (
    <div className={styles.gridContainer}>
        <div className={styles.mainGrid}>
            <Grid container spacing={2} >
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} md={12} >
                        <RegularCard musician={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
  );
};

export default MainGrid;
