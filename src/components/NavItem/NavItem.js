import React from 'react';
import './NavItem.css';
import { Link } from "react-router-dom";

function NavItem(props){
    return(
        <h2> {props.label} 
        </h2>

    );
}

export default NavItem;