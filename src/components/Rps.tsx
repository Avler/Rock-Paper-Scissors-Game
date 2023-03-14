import Rules from "./Rules"
import { useState  } from "react"
import {nanoid} from "nanoid"
import paperimg from  "../assets/images/icon-paper.svg"
import scissorsimg from "../assets/images/icon-scissors.svg"
import rockimg from "../assets/images/icon-rock.svg"

interface Rpselements {
    name: string ;
    id: number | string ;
    img:  string ;
    class: string ;
}

export default function Rps() {

    const RpsData:Rpselements[] = [
        {
            name: "paper" ,
            id : nanoid() ,
            img : paperimg,
            class : "cont-main-elem-paper"
        } ,
        {
            name: "scissors" ,
            id:  nanoid(),
            img: scissorsimg ,
            class: "cont-main-elem-scissors"
        },
        {
            name: "rock" ,
            id: nanoid(),
            img: rockimg ,
            class: "cont-main-elem-rock"
        }
    ] 

    const [showRules , setShowRules] = useState(true)
    const [rps , setRps] = useState(RpsData)

const moveToRules = () => {
    setShowRules(x => !x)
  }

  const Rpselem = rps.map(elem => {
    return <div className={elem.class}><img src={elem.img} alt={elem.name}/></div>
  })

    return(
        <div className='conteiner' >
            {showRules ? 
            <div>
                <div className="cont-header">
                <div>
                    <p className="header-text">ROCK</p>
                    <p className="header-text">PAPER</p>
                    <p className="header-text">SCISSORS</p>
                </div>
                <div className="cont-header-score">
                    <p className="score-text">SCORE</p>
                    <p className="score">12</p>
                </div>
            </div>
            <div className="cont-main">
               {Rpselem}
               
            </div>
            <div className="cont-botom">
                
                <button className="btn" onClick={moveToRules}>RULES</button>
            </div>
        </div>
        :
        <div  >
            <Rules backtogame={moveToRules}/>
        </div>
        }
            
            
    </div>
    )
}