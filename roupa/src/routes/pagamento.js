import React, { useState, useEffect } from 'react';

export default function Pagamento() {
    const [final, setFinal] = useState([]);
    const [listaProducts, setListaProducts] = useState([]);
    let money = 0;
    useEffect(() => {
        fetch('http://localhost:3000/carrinho')
            .then(response => response.json())
            .then(data => {
                const prices = data.map(item => item.price); 
                setFinal(prices); 
            })
            .catch(error => {
                console.error('Erro ao obter os dados:', error);
            });
    }, []);

    function getData() {
        fetch('http://localhost:3000/carrinho')
            .then(response => response.json())
            .then(data => setListaProducts(data))
            .catch(error => console.log(error))
    }

    function DeleteData(id) {
        fetch(`http://localhost:3000/carrinho/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
     })
       .then(() => getData()) 
       money = 0
   }

    function sum(arr) {
        let bla = 0;
        for (let i = 0; i < arr.length; i++) {
            bla = bla + arr[i];
        }
        return bla;
    }

 money = sum(final);
    useEffect(() => { getData(); }, []);
    return (
        <div>
            <h1>Pagar</h1>
            <h2>Itens:</h2>
            {listaProducts.map(product => (
                <div key={product.id}>
                    <h4>{product.title} - R${product.price}</h4>
                </div>
            ))}
            <h2>Seu total é: R$ {money}</h2>
            <button className="btn btn-success" onClick={() => {
                listaProducts.forEach(product => {
                    DeleteData(product.id);
                });
            }}>Pagar agora</button>
            <small>*Isso limpa a db carrinho*</small>
        </div>
    );
}
