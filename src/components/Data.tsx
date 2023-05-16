import {nanoid} from "nanoid"
import iconPaper from "../assets/images/icon-paper.svg"
import iconScissors from "../assets/images/icon-scissors.svg"
import iconLizard from "../assets/images/icon-lizard.svg"
import iconSpock from "../assets/images/icon-spock.svg"
import iconRock from "../assets/images/icon-paper.svg"

interface Rpselements {
    name: string ;
    id: number | string ;
    img:  any ;
    class: string ;
    selected : boolean ;
    selectedbot : boolean;
}


export const RpsData:Rpselements[] = [
    {
        name: "paper" ,
        id : nanoid() ,
        img : {iconPaper},
        class : "cont-main-elem-paper",
        selected : false ,
        selectedbot : false
    } ,
    {
        name: "scissors" ,
        id:  nanoid(),
        img: {iconScissors} ,
        class: "cont-main-elem-scissors",
        selected : false,
        selectedbot : false
    },
    {
        name: "rock" ,
        id: nanoid(),
        img: {iconRock} ,
        class: "cont-main-elem-rock",
        selected : false,
        selectedbot : false
    }
] 

export const RpslsData:Rpselements[] = [
    {
        name: "paper" ,
        id : nanoid() ,
        img : {iconPaper},
        class : "cont-main-elem-paper-rpsls",
        selected : false ,
        selectedbot : false
    } ,
    {
        name: "scissors" ,
        id:  nanoid(),
        img: {iconScissors} ,
        class: "cont-main-elem-scissors-rpsls",
        selected : false,
        selectedbot : false
    },
    {
        name: "rock" ,
        id: nanoid(),
        img: {iconRock} ,
        class: "cont-main-elem-rock-rpsls",
        selected : false,
        selectedbot : false
    }
    ,
    {
        name: "lizard" ,
        id: nanoid(),
        img: {iconLizard} ,
        class: "cont-main-elem-lizard-rpsls",
        selected : false,
        selectedbot : false
    }
    ,
    {
        name: "spock" ,
        id: nanoid(),
        img: {iconSpock} ,
        class: "cont-main-elem-spock-rpsls",
        selected : false,
        selectedbot : false
    }
] 