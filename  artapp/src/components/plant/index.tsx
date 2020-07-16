import React,{useCallback, useState, useEffect, useImperativeHandle, Ref} from 'react';

import './index.css'

const tempTouch = {
    tempx:0,
    tempy:0,
    isClicked:false,
    isMove:false
}
const tempTransform ={
    scale:1,
    translateX:0,
    translateY:0
}
let  tempStyle = {

}
interface Iporp {
    ref?:any
}

export default React.forwardRef((props, ref)=>{
    const [myStyle,setStyle] = useState({});
    useImperativeHandle(ref,()=>(
        {
            changeColor:(color:any)=>{
                    let style ={
                        borderColor:color.hex,
                        boxShadow:color.hex + " 10px 10px 0px"
                    };
                    tempStyle = Object.assign(tempStyle,style);
                    console.log({
                        tempStyle
                    })
                    setStyle({...myStyle,...tempStyle});
                }
        }
        )
    );
    const handleTouchStart = useCallback((e)=>{
        tempTouch.isClicked = true;
    },[]);
    const handleTouchMove = useCallback((e)=>{
        //tempTouch.isMove = true;
        if(!tempTouch.isClicked) return;

    },[]);
    const handleTouchEnd = useCallback((e)=>{
        tempTouch.isClicked = false;
    },[])
    useEffect(()=>{
        setSize();
        window.onresize=()=>{
            setSize(); 
        }
    },[]);
   const setSize = useCallback(()=>{
        let width = window.innerWidth
        let height = window.innerHeight;
        //console.log({width,height})
        let style = {
            //left:"0px"
            left:(width-800)/2+"px",
            top:(height-600)/2+"px",
            transform:`scale(${tempTransform.scale}) translate(${tempTransform.translateX},${tempTransform.translateY})`
        };
        tempStyle = Object.assign(tempStyle,style);
        setStyle({...myStyle,...tempStyle});
   },[])

    return (<div 
        onTouchStart={handleTouchStart} 
        onTouchMove={handleTouchMove} 
        onTouchEnd = {handleTouchEnd} 
        className="canvasStage"
        style={myStyle} >
         
        <canvas></canvas>  
    </div>)
})