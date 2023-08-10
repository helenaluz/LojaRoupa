import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

export default function Cadastro(){

    const[userName,setUser] = useState([""])
    const[email,setEmail] = useState([""])
    const[password,setPassword] = useState([""])
    const[ name, setName] = useState([""])
    const[firstname, setFirstname] = useState([""])
    const[lastname, setLastname] = useState([""])
    const[ address, setAddress] = useState([""])
    const[city, setCity] = useState([""])
    const[street, setstreet] = useState([""])
    const[ number, setNumber] = useState([""])
    const[zipcode, setCode] = useState([""])
    const[tel, setTel] = useState([""])
    const[lista, setLista] = useState([]);
    const[gravou, setGravou] = useState([""])
    const navigate = useNavigate();
    
    function getData(){
        fetch('https://fakestoreapi.com/users')
        .then(data => data.json())
        .then(response => setLista(response))
    } 
    
    function gravar(){
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:{email},
                    username:{userName},
                    password:{password},
                    name:{
                        firstname:{firstname},
                        lastname:{lastname}
                    },
                    address:{
                        city:{city},
                        street:{street},
                        number:{number},
                        zipcode:{zipcode},
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:{tel}
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(x => setGravou(!gravou))

        .then(x=> navigate('/home'))
    }

    useEffect(()=>{getData()},[gravou])
      
    return(
            <div>
                <h1 className="text-center">Cadastro de cliente</h1>
                <small>*Não adiciona na database*</small>
                <div class="input-group">
                    <span class="input-group-text">Primeiro e último nome</span>
                    <input type="text" aria-label="First name" class="form-control" placeholder="Maria" value={firstname} onChange={txt=>setFirstname(txt.target.value)} />
                    <input type="text" aria-label="Last name" class="form-control" placeholder="Silva" value={lastname} onChange={txt=>setLastname(txt.target.value)} />
                </div>
                <div class="input-group">
                    <span class="input-group-text">Username e senha</span>
                    <input type="text" aria-label="First name" class="form-control" placeholder="mariazinha234" value={userName} onChange={txt=>setUser(txt.target.value)} />
                    <input type="text" aria-label="Last name" class="form-control" placeholder="amoMinhaCachorra234" value={password} onChange={txt=>setPassword(txt.target.value)} />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
                    <input type="e-mail" class="form-control" aria-label="Sizing example input" placeholder="maria@gmail.com" aria-describedby="inputGroup-sizing-sm" value={email} onChange={txt=>setEmail(txt.target.value)} />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Telefone</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="+55 (47) 00000-2222" aria-describedby="inputGroup-sizing-sm" value={tel} onChange={txt=>setTel(txt.target.value)} />
                </div>
                <h3>Endereço</h3>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Braço trombudo" aria-describedby="inputGroup-sizing-sm" value={city} onChange={txt=>setCity(txt.target.value)} />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Rua</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="XV de novembro" aria-describedby="inputGroup-sizing-sm" value={street} onChange={txt=>setstreet(txt.target.value)} />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Número</span>
                    <input type="number" class="form-control" aria-label="Sizing example input" placeholder="1590" aria-describedby="inputGroup-sizing-sm" value={number} onChange={txt=>setNumber(txt.target.value)} />
                </div>
                <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">CEP</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="23.654-200" aria-describedby="inputGroup-sizing-sm" value={zipcode} onChange={txt=>setCode(txt.target.value)} />
                </div>
                

                <button className="btn btn-outline-success mt-1" onClick={gravar}>Gravar</button>
            </div>);
}