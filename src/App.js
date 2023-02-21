import Navbar from "./Components/Navbar/Navbar"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
    return (   
        <BrowserRouter>


        <Navbar />


            <Routes>

                <Route path="/" element={ <ItemListContainer /> } />
                <Route path="/category/:name" element={ <ItemListContainer /> } />
                <Route path="/item/:id" element={ <ItemDetailContainer /> } />
                <Route path="*" element={ <h1>Oh no! 404 not found</h1> } />


            </Routes>
        
        </BrowserRouter>
    );
}


export default App;