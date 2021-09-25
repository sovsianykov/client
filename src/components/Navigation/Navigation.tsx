import React, { FunctionComponent, useState } from "react";
import NavigationItem from "./NavigationItem";
import {NavigationLink, navLinks} from "../../content/links";
import styles from "./Navigation.module.scss";
import DroopDown from "../../shared/components/Droopdown/Droopdown";
import TabIndicator from "../TabIndicator/TabIndicator";

const Navigation: FunctionComponent = () => {
  const [activeId, setActiveID] = useState<number>(1);
  const onClickHandler = (id: number) => {
    setActiveID(id);
  };
  return (
    <div className={styles.navigation}>
      {navLinks.map((item:NavigationLink) => (
        <NavigationItem
          key={item.id}
          onClick={onClickHandler}
          active={activeId === item.id}
          item={item}
        />
      ))}
      {/*<TabIndicator activeId={activeId}/>*/}
    </div>
  );
};

export default Navigation;
