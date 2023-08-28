import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [usuarios, setUsuarios] = useState([])

    function handleLogar() {
        fetch('http://localhost:3000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar usuários')
                }
                return response.json()
            })
            .then(data => {
                setUsuarios(data)
                const userConectado = data.find(user => user.email === email && user.password === senha)
                if (userConectado) {
                    localStorage.setItem('user', userConectado.email)
                } else {
                    alert('Login inválido!')
                }
            })
            .catch(error => {
                console.error(error)
                alert('Ocorreu um erro ao fazer o login')
            })
    }

    return (
        <div className="container mt-5">
            <label className="form-label">Informe seu email</label>

            <input
                className="form-control"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Informe seu email"
            />
            <label className="form-label">Informe sua senha</label>
            <input
                className="form-control"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Informe sua senha"
            />

            <div className="mt-2 d-flex justify-content-between">
                <button
                    onClick={handleLogar}
                    className="btn btn-outline-primary">
                    Logar
                </button>
                <Link className='btn btn-outline-danger' to={'/cadastro'}>Registrar</Link>
            </div>
        </div>
    )
}