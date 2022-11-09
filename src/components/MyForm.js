import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {

  //GERENCIAMENTO DE DADOS
  const [msg, setMsg] = useState(user ? user.msg : '');
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) => {
    setName(e.target.value);
  };

  //ENVIO DE FORMULÁRIO
  const handleSubmit = (e) => {
    //PREVENÇÃO DE ENVIO
    e.preventDefault();
    console.log('Enviando formulário...');
    console.log(name, email, role, msg);
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
          <label>
          </label>
          <label>
            {/* TEXTAREA */}
            <span>Mensagem:</span>
            <textarea name="mensagem" placeholder='Deixe sua mensagem' onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>
            {/* TEXT */}
            <span>Nome:</span>
            <input type="text" name='name' placeholder='Digite seu nome' onChange={handleName} value={name} />
            {/* EMAIL */}
            <span>E-mail</span>
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
            {/* SELECT */}
            <span>Função no sistema:</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
            {/* SUBMIT */}
            <input type='submit' value='Enviar' />
          </label>
        </div>
      </form>
    </div>
  )
};

export default MyForm;