import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {

  //GERENCIAMENTO DE DADOS
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [msg, setMsg] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  //ENVIO DE FORMULÁRIO
  const handleSubmit = (e) => {
    //PREVENÇÃO DE ENVIO
    e.preventDefault();
    console.log('Enviando formulário...');
    console.log(name, email, msg);
    //RESET DO FORM
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <h2 className='title'>Envio de Formulário</h2>
        <div>
          <label> {/* INPUT TEXTAREA */}
            <span>Mensagem:</span>
            <textarea name="mensagem" placeholder='Deixe sua mensagem' onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
          </label>
          <label>
            <span>Nome:</span>
            <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
            <span>E-mail</span>
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type='submit' value='Enviar' />
          </label>
        </div>
      </form>
    </div>
  )
};

export default MyForm;