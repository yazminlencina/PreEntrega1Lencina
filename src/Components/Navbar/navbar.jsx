import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {

    return (
        <div style={{ display: "flex", width: "100%", height: "10vh", justifyContent: "center" }}>
            
            <img src="https://i.pinimg.com/564x/6d/16/ae/6d16ae5b599ec9f1e6831b8459bfa128.jpg" alt="logo sick bloom" />
            <Link to="/">
            <h1 style={{ color: "pink" }}>SICK BLOOM</h1>
            </Link>
            
            <Link to="/category/:categoryId">
            <ul>
                <Link to="/category/:SALE">
                <li>SALE</li>
                </Link>
                <Link to="/category/Coquette">
                <li>Coquette</li>
                </Link>
                <Link to="/category/y2k">
                <li>y2k</li>
                </Link>
                <Link to="/category/TOP">
                <li>TOP</li>
                </Link>
            </ul>
            </Link>
            <CartWidget />
        </div>
    )
}

export default Navbar