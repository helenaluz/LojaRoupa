import React, { useState, useEffect } from 'react';
export default function Pagamento(){
    const [final, setFinal] = useState([]);
    let money = 0;

    
        fetch("http://localhost:3000/carrinho")
            .then(response => response.json())
            .then(data => {
                    const prices = data.carrinho.map(item => item.price); // Extract prices
                    setFinal(prices); // Update the state with prices array
                })
            

    function sum(arr){
        const bla = 0;
        for(let i =0; i < arr.Length; i++) bla= bla + arr[i];
        return bla}

        money = final.reduce((total, price) => total + price, 0);
        

    console.log(money)
    return(
        <div>
            <h2>Seu total é: R$ {money}</h2>
        </div>
    )
}