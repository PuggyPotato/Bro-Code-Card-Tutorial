import { useState } from "react";

const ColorPicker = () =>{
    const [color,setColor] = useState("#FFFFFF")


    function handleColorChange(event){
        setColor(event.target.value)
    }


    return(
        <div id="colorContainer">
            <h1>Color Picker</h1>
            <input type="color" onChange={handleColorChange} value={color}></input>
            <p>Color Code:{color}</p>
            <h3 style={{backgroundColor:color, padding:"10px"}}>Example of Color Chosen</h3>

        </div>
    )
}





export default ColorPicker