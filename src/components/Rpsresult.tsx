import { useState , useEffect } from "react";

interface dataElm {
    name: string ;
    id: number | string ;
    img:  string ;
    class: string ;
    selected : boolean ;
    selectedbot :boolean;
}

export default function RpsResult (props:any) {
    const [result , setResult] = useState("")
    const [dataScore , setDataScore] = useState(props.scoreValue)
    const data = props.data
    let objclass:string
    
    const selectedPlayer = data.find((elm:dataElm) => elm.selected)
    const selectedBot = data.find((elm:dataElm) => elm.selectedbot)
    
    console.log(dataScore)
    const dataHandle = () => {
        props.score(dataScore)
    }
    useEffect(() => {
         
            if ((selectedPlayer.name === "rock" && selectedBot.name === "scissors") || 
            (selectedPlayer.name === "paper" && selectedBot.name === "rock") || 
            (selectedPlayer.name === "scissors" && selectedBot.name === "paper") 
            ) {
                setResult("YOU WIN !")
                setDataScore((x:number) => x + 0.5)
                
            } else if ( selectedPlayer.name === selectedBot.name) {
                setResult("TIE GAME !")
            } else {
                setResult("YOU LOSE !")
                setDataScore((x:number) => x - 0.5)
            }
        
    }, [])

    dataHandle()
    const resultelm =  data.map( (elem:dataElm ) => {
    
        if(elem.name === "paper") {
           objclass  = "cont-main-elem-paper-selected"
        } else if (elem.name === "scissors") {
            objclass = "cont-main-elem-scissors-selected"
        } else {
            objclass = "cont-main-elem-rock-selected"
        }

    return elem.selected ?  <div className={objclass}><img src={elem.img} alt={elem.name}/></div> :null  
  } )
  
  const resultelmbot =  data.map( (elem:dataElm ) => {
    
    if(elem.name === "paper") {
       objclass  = "cont-main-elem-paper-selected"
    } else if (elem.name === "scissors") {
        objclass = "cont-main-elem-scissors-selected"
    } else {
        objclass = "cont-main-elem-rock-selected"
    }

    return elem.selectedbot ? <div className={objclass}><img src={elem.img} alt={elem.name}/></div> :null
}  

  )
    return (
        <>
            <div className="cont-match">
                {resultelm}  
                {resultelmbot}
            </div>
            <div className="cont-match-sub">
                <p className="resoult-text">{result}</p>
                <button className="btn-playagain" onClick={() => props.playagain()}>PLAY AGAIN</button>
            </div>
            
        </>
        
    )
}