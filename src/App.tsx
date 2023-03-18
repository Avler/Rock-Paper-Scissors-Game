import "./App.scss"
import Rps from "./components/Rps"
import Home from "./components/Home"
import Rpsls from "./components/Rpsls"
import {Routes , Route , Navigate} from "react-router-dom"

export default function App () {
    return (
        <>
            <Routes>
                <Route path="/Rps" element={<Rps />}></Route>
                <Route path="/Rpsls" element={<Rpsls />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Navigate to="/" />} ></Route>
            </Routes>
            
        </>
    )
}