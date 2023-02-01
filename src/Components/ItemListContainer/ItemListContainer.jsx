

export const ItemListContainer = (props) => {

console.log(props.usuario)

return (
    <div> 
        <h2 style={{display: "flex", width: "100%", justifyContent: "center"}}>Hello {props.usuario}! Te damos la bienvenida a nuestra tienda</h2>
    </div>
)
}

export default ItemListContainer