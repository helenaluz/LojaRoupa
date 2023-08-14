import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Escolida() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [img, setImg] = useState("");
  const [nota, setNota] = useState("");
  const [preco, setPreco] = useState("");
  const [id, setId] = useState("");
  const { idroupa } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idroupa}`)
      .then(response => response.json())
      .then(data => {
        setId(data.id);
        setTitulo(data.title);
        setDescricao(data.description);
        setCategoria(data.category);
        setImg(data.image);
        setNota(data.rating.rate);
        setPreco(data.price);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [idroupa]);

  function addCarrinho() {
    fetch('http://localhost:3000/carrinho', {
      method: 'POST',
      body: JSON.stringify({ id: idroupa, title:titulo, description: descricao, category: categoria, image: img, rating: nota, price: preco }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
  }
  

  return (
    <div>
      <div className="card mb-3 d-inline ">
        <img src={img} alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <p className="card-text">Categoria: {categoria} | Nota: {nota}</p>
          <p>R${preco}</p>
          <button className="btn btn-primary "onClick={addCarrinho}>Adicionar ao Carrinho</button>
        </div>
      </div> 
    </div>
  );
}
