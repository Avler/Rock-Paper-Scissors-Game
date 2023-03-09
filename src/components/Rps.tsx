import Rules from "./Rules"
import { useState , useRef } from "react"

export default function Rps() {

    const elemRules = useRef<HTMLDivElement>(null)
    const elmRps = useRef<HTMLDivElement>(null)
   
    const scrollToRules = () => {
        elemRules.current!.scrollIntoView({ behavior: "smooth" });
      };
    const scrollToGame = () => {
        elmRps.current!.scrollIntoView({behavior: "smooth"})
    }
    return(
        <div className='conteiner' ref={elmRps}>
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
                <div className="cont-main-elem-paper">
                    <img src="src\assets\images\icon-paper.svg" alt="paper" />
                </div>
                <div className="cont-main-elem-scissors">
                    <img src="src\assets\images\icon-scissors.svg" alt="paper" />
                </div>
                <div className="cont-main-elem-rock">
                    <img src="src\assets\images\icon-rock.svg" alt="paper" />
                </div>
            </div>
            <div className="cont-botom">
                <button className="btn">START</button>
                <button className="btn" onClick={scrollToRules}>RULES</button>
            </div>
            <div ref={elemRules} >
                <Rules backtogame={() => scrollToGame()}/>
            </div>
    </div>
    )
}