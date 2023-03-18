

export default function Rules (props:any) {
    return (
        <div className="cont-rules">
            <h1 className="cont-rules-title">RULES</h1>
            <img src="src\assets\images\image-rules-bonus.svg" alt="rules" className="img-rules"/>
            <img src="src\assets\images\icon-close.svg" alt="close" onClick={() => props.backtogame()}/>
        </div>
    )
   
}