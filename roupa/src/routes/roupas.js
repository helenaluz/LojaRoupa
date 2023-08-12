import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './roupas.css'

export default function Roupas() {

  const [ListaProducts, setProducts] = useState([]); 
  const [selecionado, setSelecionado] = useState(null);
  
  function getData(){
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(response =>setProducts(response))
    .catch(error => console.log(error))
}

function filtro(){
  fetch('https://fakestoreapi.com/products')
  .then(data => data.json())
  .then(response => {
    if(selecionado === null) setProducts(response)
    else {
      const filtrado = response.filter(product => product.category === selecionado)
      setProducts(filtrado)}
  })
}

    

useEffect(() => { filtro();}, [selecionado]);
  
    return (
      <div>
      <div className='d-flex justify-content-around mt-2 mb-2'>
        <button className="btn btn-success" onClick={() => setSelecionado("men's clothing")}>Masculino</button>
        <button className="btn btn-success" onClick={() => setSelecionado("women's clothing")}>Feminino</button>
        <button className="btn btn-success" onClick={() => setSelecionado("jewelery")}>Jóias</button>
        <button className="btn btn-success" onClick={() => setSelecionado("electronics")}>Eletronico</button>
        <button className="btn btn-success" onClick={() => setSelecionado(null)}>Reset</button>
      </div>
      <div className='d-flex flex-wrap justify-content-center'>
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
      </div>
    );
  
 }
  


