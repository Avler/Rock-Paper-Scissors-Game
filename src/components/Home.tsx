
import { RpsData } from "./Data"
import { RpslsData } from "./Data"
import { Link } from "react-router-dom"

export default function Home () {

    const rps  = RpsData
    const rpsls = RpslsData

    let objclass:string
    
   

    const Rpselem = rps.map(elem => {
        
        if(elem.name === "paper") {
            objclass  = "cont-main-elem-paper-home"
         } else if (elem.name === "scissors") {
             objclass = "cont-main-elem-scissors-home"
         } else {
             objclass = "cont-main-elem-rock-home"
         }

        return <div key={elem.id} className={objclass} ><img src={elem.img} alt={elem.name}/></div>
      })

      const Rpslselem = rpsls.map(elem => {
        
        if(elem.name === "paper") {
            objclass  = "cont-main-elem-paper-home"
         } else if (elem.name === "scissors") {
             objclass = "cont-main-elem-scissors-home"
         } else if (elem.name === "rock") {
             objclass = "cont-main-elem-rock-home"
         } else if (elem.name === "lizard") {
            objclass = "cont-main-elem-lizard-home"
         } else {
            objclass = "cont-main-elem-spock-home"
         }

        return <div key={elem.id} className={objclass} ><img src={elem.img} alt={elem.name}/></div>
      })

    return(
        <div className='conteiner'>
            <h1 className="home-title">Choose Your Game !</h1>
            <div className="home-cont">
                <div className="home-cont-img">
                 {Rpselem}
                </div>
                <p className="home-text">Rock Paper Scissors Game</p>
               <Link to="/rps"><button className="home-btn">RPS</button></Link> 
            </div>
            
            <div className="home-cont">
                <div className="home-cont-img">
                 {Rpslselem}
                </div>
                 <p className="home-text">Rock Paper Scissors Lizard Spock Game</p>
               <Link to="rpsls"><button className="home-btn">RPSLS</button></Link> 
            </div>
            
        </div>
    )
}