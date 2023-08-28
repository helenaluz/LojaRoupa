import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Cadastro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [city, setCity] = useState("");
    const [street, setstreet] = useState("");
    const [number, setNumber] = useState("");
    const [zipcode, setCode] = useState("");
    const [tel, setTel] = useState("");
    const navigate = useNavigate();
  
    function gravar() {
      const userData = {
        email: email,
        password: password,
        name: {
          firstname: firstname,
          lastname: lastname
        },
        address: {
          city: city,
          street: street,
          number: number,
          zipcode: zipcode,
          geolocation: {
            lat: "-37.3159",
            long: "81.1496"
          }
        },
        phone: tel
      };
  
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          navigate("/home");
        })
        .catch((error) => console.error("Erro ao gravar:", error));
    }
    return(
            <div>
                <h1 className="text-center">Cadastro de cliente</h1>
                <small>*Não adiciona na database*</small>
                <div className="input-group">
                    <span className="input-group-text">Primeiro e último nome</span>
                    <input type="text" aria-label="First name" className="form-control" placeholder="Maria" value={firstname} onChange={txt=>setFirstname(txt.target.value)} />
                    <input type="text" aria-label="Last name" className="form-control" placeholder="Silva" value={lastname} onChange={txt=>setLastname(txt.target.value)} />
                </div>
                <div className="input-group ">
                    <span className="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
                    <input type="e-mail" className="form-control" aria-label="Sizing example input" placeholder="maria@gmail.com" aria-describedby="inputGroup-sizing-sm" value={email} onChange={txt=>setEmail(txt.target.value)} />
                </div>
                <div className="input-group">
                    <span className="input-group-text">Senha</span>
                    <input type="text" aria-label="Last name" className="form-control" placeholder="amoMinhaCachorra234" value={password} onChange={txt=>setPassword(txt.target.value)} />
                </div>
                
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Telefone</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" placeholder="+55 (47) 00000-2222" aria-describedby="inputGroup-sizing-sm" value={tel} onChange={txt=>setTel(txt.target.value)} />
                </div>
                <h3>Endereço</h3>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" placeholder="Braço trombudo" aria-describedby="inputGroup-sizing-sm" value={city} onChange={txt=>setCity(txt.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Rua</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" placeholder="XV de novembro" aria-describedby="inputGroup-sizing-sm" value={street} onChange={txt=>setstreet(txt.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Número</span>
                    <input type="number" className="form-control" aria-label="Sizing example input" placeholder="1590" aria-describedby="inputGroup-sizing-sm" value={number} onChange={txt=>setNumber(txt.target.value)} />
                </div>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">CEP</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" placeholder="23.654-200" aria-describedby="inputGroup-sizing-sm" value={zipcode} onChange={txt=>setCode(txt.target.value)} />
                </div>
                

                <button className="btn btn-outline-success mt-1" onClick={gravar}>Gravar</button>
            </div>);
}