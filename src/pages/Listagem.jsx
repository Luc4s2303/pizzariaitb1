import React, {useState, useEffect} from 'react'
import pizzas from '../shared/Pizzas'

const Listagem = () => {


    const ItensLista = () => pizzas.map(
        pizza =>
        <li key={pizza.id} style={{listStyle: 'nome'}}>
           <img src={pizza.imagem}
           alt={pizza.imagem}
           style={{
             width: "150",
             heigth: "100px",
             borderRadius: "8px",
             margin: "0px",
        }}
        />
        </li>
    )
    
    return (
        <>

        <h2 style={{textAlign: 'center'}}> 
            Pizzas ITB</h2>
        <ul>
           <ItensLista />
        </ul>
        </>
    )
}
export default Listagem
