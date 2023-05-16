import rules from "../assets/images/image-rules-bonus.svg"
import close from "../assets/images/icon-close.svg"

export default function Rules (props:any) {
    return (
        <div className="cont-rules">
            <h1 className="cont-rules-title">RULES</h1>
            <img src={rules} alt="rules" className="img-rules"/>
            <img src={close} alt="close" className="img-rules-close" onClick={() => props.backtogame()}/>
        </div>
    )
   
}