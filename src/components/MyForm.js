import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  // 3 - GERENCIAMENTO DE DADOS
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  /*   console.log(name);
    console.log(email); */

  // << 5- Envio de Formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email)
  };

  return (
    <div>

      {/* 1 - CRIAÇÃO DE FORM */}
      <form className='container'>
        <h2 className='title'>Criação do Formulário</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' />
          <input type='submit' value='Enviar' />
        </div>

        {/* 2 - LABEL ENVOLVENDO INPUT */}
        <h2 className='title'>Label Envolvendo Input</h2>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' />
        </label>
        <input type='submit' value='Enviar' />

        {/* 3 - GERENCIAMENTO DE DADOS */}
        <h2 className='title'>Gerenciamento de Dados</h2>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
          <input type='submit' value='Enviar' />
        </div>

        {/* 4 - SIMPLIFICANDO A MANIPULAÇÃO DE STATE */}
        <h2 className='title'>Simplificando a Manipulação de State</h2>
        <label>
          <span>E-mail</span>
          <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
          <input type='submit' value='Enviar' />
        </label>
      </form>

      {/* 5 - ENVIO DE FORM */}
      <form className='container' onSubmit={handleSubmit}>
        <h2 className='title'>Envio de Form</h2>
        <div>
          <label>
            <span>Nome:</span>
            <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} />
            <span>E-mail</span>
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
            <input type='submit' value='Enviar' />
          </label>
        </div>
      </form>

    </div>
  )
};

export default MyForm