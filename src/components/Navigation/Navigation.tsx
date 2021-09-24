import React, { FunctionComponent, useState } from "react";
import NavigationItem from "./NavigationItem";
import {NavigationLink, navLinks} from "../../content/links";
import styles from "./Navigation.module.scss";

const Navigation: FunctionComponent = () => {
  const [activeId, setActiveID] = useState<number>(1);
  const onClickHandler = (id: number) => {
    setActiveID(id);
  };
  console.log(activeId)
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
    </div>
  );
};

export default Navigation;
