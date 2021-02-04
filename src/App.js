import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Menu from './componentes/menu'
import './App.css'

function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");
  
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  

  const dispatch = useDispatch();

  function adicionarFruta(event){
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch({type: "ADICIONAR", value :objFruta});
  }


  function alterarTitulo(event){
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value : event.target.value});
  }

    return (
    <div >
      {/* <Menu /> */}
      <div className="container bg-white p-4">
        <form>
          <label className="display-4">Titulo</label>
          <input className="input-group" placeholder="Digite o seu titulo" value={inputTitulo} onChange={alterarTitulo}/>
        </form>
      </div>

      <div className="container text-light py-4 lead"><h1 >{stateTitulo}</h1></div>
      
      <div className="container bg-white p-4 ">
        <form onSubmit={adicionarFruta}>
        <label className="display-4">Criar Lista</label>
        <input 
        className="input-group"
          placeholder="Digite uma fruta..."
          value={inputFrutas}
          onChange={(event)=>setInputFrutas(event.target.value)}
        />

        <button className="btn btn-success">
          Enviar
        </button>

        </form> 
      </div>

     {frutas.map((fruta,index)=>{
       return(
         <div className="container bg-light ">
           <li className=" text-dark"key={index}>{fruta.nome}</li>
         </div>
       )
     })}
    </div>
  );
}

export default App;
