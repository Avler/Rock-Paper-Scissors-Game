import "./App.scss"
import React from "react"
import Rps from "./components/Rps"
import {Routes , Route , Navigate} from "react-router-dom"

export default function App () {
    return (
        <>
            <Routes>
                <Route path="/Rps" element={<Rps />}></Route>
                
            </Routes>
            
        </>
    )
}