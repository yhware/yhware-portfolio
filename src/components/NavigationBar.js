import React from 'react';
import NavBarItem from "./NavBarItem";
import Menu from "../data/Menu";


const NavigationBar = () => {
    return (
        <div>
            {
                Menu.map(({menuName, menuLink}) => (<NavBarItem itemName={menuName} itemLink={menuLink}/>))
            }
        </div>
    )
};

export default NavigationBar;