interface dataElm {
    name: string ;
    id: number | string ;
    img:  string ;
    class: string ;
    selected : boolean ;

}

export default function RpsResult (props:any) {
    const data = props.data
    let objclass:string
  const resultelm =  data.map( (elem:dataElm) => {
    
        if(elem.name === "paper") {
           objclass  = "cont-main-elem-paper-selected"
        } else if (elem.name === "scissors") {
            objclass = "cont-main-elem-scissors-selected"
        } else {
            objclass = "cont-main-elem-rock-selected"
        }
    return elem.selected ?  <div className={objclass}><img src={elem.img} alt={elem.name}/></div> : null
  }  
  )
    return (
        <div className="cont-match">
            {resultelm}
        </div>
    )
}