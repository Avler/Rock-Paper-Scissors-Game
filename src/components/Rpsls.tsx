import Rulesrpsls from "./Rulesrpsls"
import { useState  } from "react"
import RpsResult from "./Rpsresult"
import { RpslsData } from "./Data"
import { Link } from "react-router-dom"



export default function Rpsls() {

    

    const [showRules , setShowRules] = useState(true)
    const [rps , setRps] = useState(RpslsData)
    const [selected , setSelected] = useState(false)
    const [score , setScore] = useState(0)
    const [gameStop , setGameStop] = useState(false)

    const moveToRules = () => {
    setShowRules(x => !x)
    setGameStop(true)
  }
  const choosen = (id:number | string) => {
    const randomEl = Math.floor(Math.random() * RpslsData.length)
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
        setRps(RpslsData)
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
                    <p className="header-text-rpsls">ROCK</p>
                    <p className="header-text-rpsls">PAPER</p>
                    <p className="header-text-rpsls">SCISSORS</p>
                    <p className="header-text-rpsls">LIZARD</p>
                    <p className="header-text-rpsls">SPOCK</p>
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
            <div className="cont-main-rpsls">
              {Rpselem }
            </div>
            }
            <div className="cont-botom-rpsls">
                {!selected ? <Link to="/"><button className="btn" >BACK TO GAME SELECT</button></Link> : null}
                <button className="btn" onClick={moveToRules}>RULES</button>
            </div>
        </div>
        :
        <div  >
            <Rulesrpsls 
            backtogame={moveToRules}
            />
        </div>
        }
            
            
    </div>
    )
}