import React, { useState } from "react";
import {Button} from "antd"

function ColoredBox() {
    const [changeColor, setchangeColor] = useState(false);

    const handleClick = () => {
        setchangeColor(!changeColor);
    };

    return (
        <div style={{display:'flex'}}>
            <div style={{width:'100px', height:'100px', backgroundColor: changeColor ? "yellow" : "gray" }}></div>
            <Button style={{marginLeft:'20px'}} onClick={handleClick}

            >adas</Button>
        
        </div>

    );
}

export default ColoredBox;