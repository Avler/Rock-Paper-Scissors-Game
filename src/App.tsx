import "./App.scss"
import React from "react"
import Rps from "./components/Rps"
import Home from "./components/Home"
import {Routes , Route , Navigate} from "react-router-dom"

export default function App () {
    return (
        <>
            <Routes>
                <Route path="/Rps" element={<Rps />}></Route>
                <Route path="/Rpsls" ></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Navigate to="/" />} ></Route>
            </Routes>
            
        </>
    )
}