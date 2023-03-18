import {nanoid} from "nanoid"

interface Rpselements {
    name: string ;
    id: number | string ;
    img:  string ;
    class: string ;
    selected : boolean ;
    selectedbot : boolean;
}


export const RpsData:Rpselements[] = [
    {
        name: "paper" ,
        id : nanoid() ,
        img : "src/assets/images/icon-paper.svg",
        class : "cont-main-elem-paper",
        selected : false ,
        selectedbot : false
    } ,
    {
        name: "scissors" ,
        id:  nanoid(),
        img: "src/assets/images/icon-scissors.svg" ,
        class: "cont-main-elem-scissors",
        selected : false,
        selectedbot : false
    },
    {
        name: "rock" ,
        id: nanoid(),
        img: "src/assets/images/icon-rock.svg" ,
        class: "cont-main-elem-rock",
        selected : false,
        selectedbot : false
    }
] 

export const RpslsData:Rpselements[] = [
    {
        name: "paper" ,
        id : nanoid() ,
        img : "src/assets/images/icon-paper.svg",
        class : "cont-main-elem-paper",
        selected : false ,
        selectedbot : false
    } ,
    {
        name: "scissors" ,
        id:  nanoid(),
        img: "src/assets/images/icon-scissors.svg" ,
        class: "cont-main-elem-scissors",
        selected : false,
        selectedbot : false
    },
    {
        name: "rock" ,
        id: nanoid(),
        img: "src/assets/images/icon-rock.svg" ,
        class: "cont-main-elem-rock",
        selected : false,
        selectedbot : false
    }
    ,
    {
        name: "lizard" ,
        id: nanoid(),
        img: "src/assets/images/icon-lizard.svg" ,
        class: "cont-main-elem-rock",
        selected : false,
        selectedbot : false
    }
    ,
    {
        name: "spock" ,
        id: nanoid(),
        img: "src/assets/images/icon-spock.svg" ,
        class: "cont-main-elem-rock",
        selected : false,
        selectedbot : false
    }
] 