import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <MyForm user={{ name: 'João', email: 'joaopedro@gmail.com', msg: 'Reporte seu problema.', role: 'admin' }} />
    </div>
  );
}

export default App;
