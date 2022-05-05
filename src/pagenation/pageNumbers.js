import React from "react";

const PageNumbers = ({data, pageHandler}) => {
    let customBtns = [];
    for(let i=1; i < Math.ceil(data.length)/5+1; i++){
        customBtns.push(i);  
    }
    //console.log(customBtnNav);  
    return(
        customBtns.map((btn) => 
           <button onClick={() => pageHandler(btn)} key={btn} className="item">{btn}</button>
           ) 
    );
    
}

export default PageNumbers;