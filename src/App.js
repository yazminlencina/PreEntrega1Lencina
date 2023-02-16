
import Header from "./Components/Header/Header"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HiMenuAlt1 } from "react-icons/hi";

function App() {
    return (
    //<div className="App">
        //<Header />
        //<ItemListContainer usuario="darling" />
        //</div> 
        //    
        <BrowserRouter>


        <Header />


            <Routes>

                <Route path="/" element={ <ItemListContainer /> } />
                <Route path="/category/:id" element={ <ItemListContainer /> } />
                <Route path="*" element={ <h1>Oh no! 404 not found</h1> } />


            </Routes>
        
        </BrowserRouter>
    );
}


export default App;