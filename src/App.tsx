import "./App.scss"
import React from "react"

export default function App () {
    return (
        <div className='conteiner'>
            <div className="cont-header">
                <div>
                    <p className="header-text">ROCK</p>
                    <p className="header-text">PAPER</p>
                    <p className="header-text">SCISORS</p>
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
                <button className="btn">RULES</button>
            </div>
        </div>
    )
}