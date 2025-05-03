import React from "react";
import { useEffect, useState } from "react";

const ColorChange = ({color}) => {

    useEffect ( ()=> {
        alert('color was change')
    }, [color] );
}
export default ColorChange;