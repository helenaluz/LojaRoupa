import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './roupas.css'

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
      <div className='d-flex flex-wrap'>
        {ListaProducts.map(product => (
          <div key={product.id}>
            <div className="card m-1" >
            <img src={product.image} alt={product.title} />
              <div className="card-body">
              <h4>{product.title}</h4>
              <p>R${product.price}</p>
              <Link className='btn btn-primary' to={`/roupas/${product.id}`}>Ver mais</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  
 }
  


