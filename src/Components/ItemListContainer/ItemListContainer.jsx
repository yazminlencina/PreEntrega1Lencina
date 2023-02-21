import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";



const productos = [
    {
        id: 1,
        title: "woolen jacket: 'BLUE COAST' ",
        price: 12000,
        stock: 20,
        description: "Perfecta para un otoño a la moda",
        category: "Coquette",
        img: "https://res.cloudinary.com/dxq73a2w7/image/upload/v1676156313/7be0c187802c70471f2d74ae261a0cf5_kzdwsi.jpg",
    },
    {
        id: 2,
        title: "pet t-shirt: 'SWEET FUR' ",
        price: 6500,
        stock: 15,
        description: "¿Te gustan los animales?",
        category: "y2k",
        img: "https://res.cloudinary.com/dxq73a2w7/image/upload/v1676156343/50c9da0b07ce7a9bf9c1c2f31b83b7a1_ewdwvs.jpg",
    },
    {
        id: 3,
        title: "plush jacket: 'PURE DIVA' ",
        price: 23000,
        stock: 7,
        description: "Vístete para impresionar ésta noche",
        category: "Coquette",
        img: "https://res.cloudinary.com/dxq73a2w7/image/upload/v1676156376/354791c7a2e1b31c70772bc2ee763b57_vjqsy5.jpg",
    },
    {
        id: 4,
        title: "gray blazer: 'Here I AM' ",
        price: 20000,
        stock: 10,
        description: "Mírate como una verdadera boss girl",
        category: "TOP",
        img: "https://res.cloudinary.com/dxq73a2w7/image/upload/v1676156481/65169fe00945619fef3c3aba82a20cd7_afsxaa.jpg",
    },
];

export const ItemListContainer = (props) => {

    const {name} = useParams()
    console.log("Así llega la categoría: ", name)

    console.log(props.usuario);

    const [items, setItems] = useState([]);

    console.log("Mis items son: ", items);

    const errorMessage = "El servidor está caído";

    useEffect(() => {


        const productsFiltered = products.filter( (product)=> product.category === name )


        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve( name ? productsFiltered : products );
            }, 2000);
        });

        task.then((res) => {
            setItems(res);
        }).catch((error) => {
            console.log("Acá se rechazó", error);
        });
    }, [ name ]);

    return (
        <>
            <div>
                <h2
                    style={{
                        paddingTop: "10px",
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                    }}>
                    ¡Hola{props.usuario}! Te damos la bienvenida a nuestra
                    tienda.
                </h2>
            </div>

            
        </>
    );
};
export default ItemListContainer;