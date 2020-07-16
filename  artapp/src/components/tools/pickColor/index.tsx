import { SwatchesPicker,CirclePicker, CompactPicker } from 'react-color';
import React, { useCallback, useEffect, useState } from 'react';
interface IPickColor {
    handleColorChange?:Function,
}

export default ({handleColorChange}:any)=>{
    const [color,setColor] = useState('#ff00ff');
    const handleChangeComplete = useCallback((_color)=>{
       
    },[]);
    const handleChange = useCallback((_color,_event)=>{
        if(handleColorChange) handleColorChange.call(null,_color);
    },[])
    return(
        <div style={{width:300,height:400,marginTop:100,marginLeft:50}}>
            <SwatchesPicker
                color={color} 
                onChangeComplete={handleChangeComplete}
                onChange={handleChange}
            />
            <CompactPicker 
            color={color} 
            onChangeComplete={handleChangeComplete}
            onChange={handleChange}/>
         </div>

    )
}