import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 1 - CRIAÇÃO DE FORM */}

      <form>
        <h2>Criação do Formulário</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' />
          <input type='submit' value='Enviar' />
        </div>
        {/* 2 - LABEL ENVOLVENDO INPUT */}
        <h2>Label Envolvendo Input</h2>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' />
        </label>
        <input type='submit' value='Enviar' />
        {/* 3 - GERENCIAMENTO DE DADOS */}
        <h2>Gerenciamento de Dados</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
          <input type='submit' value='Enviar' />
        </div>
        {/* 4 - SIMPLIFICANDO A MANIPULAÇÃO DE STATE */}
        <h2>Simplificando a Manipulação de State</h2>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
          <input type='submit' value='Enviar' />
        </label>
        {/* ENVIO DE FORM */}
      </form>
    </div>
  )
}

export default MyForm