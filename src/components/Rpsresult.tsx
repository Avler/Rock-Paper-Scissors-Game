import { useState , useEffect } from "react";

interface dataElm {
    name: string ;
    id: number | string ;
    img:  string ;
    class: string ;
    selected : boolean ;

}

export default function RpsResult (props:any) {
    const [result , setResult] = useState("")
    const data = props.data
    let objclass:string
    
    const selectedElm = data.filter((elm:dataElm) => elm.selected)
    const objects = selectedElm.length === 1 ? [selectedElm[0] , selectedElm[0]] : selectedElm

    useEffect(() => {
        if (objects.length === 2) {
            if ((objects[0].name === "rock" && objects[1].name === "scissors") || 
            (objects[0].name === "paper" && objects[1].name === "rock") || 
            (objects[0].name === "scissors" && objects[1].name === "paper") 
            ) {
                setResult("YOU WIN !")
            } else if ( objects[0].name === objects[1].name) {
                setResult("TIE GAME !")
            } else {
                setResult("YOU LOSE !")
            }
        }
    }, [objects])

    const resultelm =  objects.map( (elem:dataElm ) => {
    
        if(elem.name === "paper") {
           objclass  = "cont-main-elem-paper-selected"
        } else if (elem.name === "scissors") {
            objclass = "cont-main-elem-scissors-selected"
        } else {
            objclass = "cont-main-elem-rock-selected"
        }

    return   <div className={objclass}><img src={elem.img} alt={elem.name}/></div> 
    
  }  
  )
    return (
        <>
        <div className="cont-match">
            {resultelm}  
        </div>
        <p className="resoult-text">{result}</p>
        </>
        
    )
}