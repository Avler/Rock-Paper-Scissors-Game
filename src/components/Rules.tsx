interface rulesprops {
    backtogame: () => void
}

export default function Rules (props:rulesprops) {
    return (
        <div className="cont-rules">
            <h1 className="cont-rules-title">RULES</h1>
            <img src="src\assets\images\image-rules.svg" alt="rules" className="img-rules"/>
            <img src="src\assets\images\icon-close.svg" alt="close" onClick={props.backtogame}/>
        </div>
    )
   
}