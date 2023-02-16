import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import CartWidget from "../CartWidget/CartWidget"

const header = ()=>{

    return (
        <div style={{display: "flex", width: "100%", height: "10vh", justifyContent: "center"}}>
            
            <Link to="/">
            <img src="https://i.pinimg.com/564x/6d/16/ae/6d16ae5b599ec9f1e6831b8459bfa128.jpg" alt="logo sick bloom" />
            <h1 style={{color: "pink"}}>SICK BLOOM</h1>
            </Link>
            <Navbar />
            <CartWidget />
            </div>
)
}

export default header