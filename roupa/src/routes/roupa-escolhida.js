import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Escolida() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [img, setImg] = useState("");
  const [nota, setNota] = useState("");
  const [preco, setPreco] = useState("");
  const { idroupa } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idroupa}`)
      .then(response => response.json())
      .then(data => {
        setTitulo(data.title);
        setDescricao(data.description);
        setCategoria(data.category);
        setImg(data.image);
        setNota(data.rating.rate); // Assuming 'rating' is an object with 'rate' and 'count'
        setPreco(data.price);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [idroupa]);

  return (
    <div>
      <div className="card mb-3 d-inline ">
        <img src={img} alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <p className="card-text">Categoria: {categoria} | Nota: {nota}</p>
          <p>R${preco}</p>
          <button className="btn btn-success">Comprar</button>
        </div>
      </div> 
    </div>
  );
}
