import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Roupas() {

  const [ListaProducts, setProducts] = useState([]); 
  
  function getData(){
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(response =>setProducts(response))
    .catch(error => console.log(error))
}

    

    useEffect(()=>{getData()},[])
  
    return (
      <div>
        {ListaProducts.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Link to={`/roupas/${product.id}`}>Editar</Link>
          </div>
        ))}
      </div>
    );
  
 }
  


 