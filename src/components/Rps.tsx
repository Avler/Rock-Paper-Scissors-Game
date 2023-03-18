import Rules from "./Rules"
import { useState  } from "react"
import RpsResult from "./Rpsresult"
import { RpsData } from "./Data"




export default function Rps() {

    

    const [showRules , setShowRules] = useState(true)
    const [rps , setRps] = useState(RpsData)
    const [selected , setSelected] = useState(false)
    const [score , setScore] = useState(0)
    const [gameStop , setGameStop] = useState(false)

    const moveToRules = () => {
    setShowRules(x => !x)
    setGameStop(true)
  }
  const choosen = (id:number | string) => {
    const randomEl = Math.floor(Math.random() * RpsData.length)
    setSelected(true)
    setRps(elm => elm.map(elem => {
     return   elem.id === id ? {...elem , selected: true} : elem
    } ))
    setRps(elm => elm.map((elme , index ) => {
       return index === randomEl ? { ...elme, selectedbot: true } : elme
       
    }) )
}
    const playAgain = () => {
        setSelected(false)
        setRps(RpsData)
        setGameStop(false)
    }
    const scoreChange = (dataScore:number) => {
        setScore(dataScore)
    }
  const Rpselem = rps.map(elem => {
 
    return <div key={elem.id} className={elem.class} onClick={() => choosen(elem.id)}><img src={elem.img} alt={elem.name}/></div>
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
                    <p className="score">{score }</p>
                </div>
            </div>
            {selected ? 
                <RpsResult 
                    data = {rps}
                    playagain = {playAgain}
                    score = {scoreChange}
                    scoreValue = {score}
                    gamestop = {gameStop}
                    
                /> 
            :
            <div className="cont-main">
              {Rpselem }
            </div>
            }
            <div className="cont-botom">
                
                <button className="btn" onClick={moveToRules}>RULES</button>
            </div>
        </div>
        :
        <div  >
            <Rules 
            backtogame={moveToRules}
            />
        </div>
        }
            
            
    </div>
    )
}