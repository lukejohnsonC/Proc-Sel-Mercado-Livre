import React, {Component} from 'react';
import api from './api';
import './App.css';

class input extends React.Component {

  constructor(){
    super();
    this.state = {
      nome: ""
    };
    this.onChange = (evento) => {
      this.setState({nome: evento.target.value});
    }
  }
  
}

class App extends Component{

  /* ESTADO PARA SALVAR AS INFORMAÇÕES */
  state = {
    produtos: [],
  }

  /* BUSCA NA API */
  async componentDidMount(){
    const response = await api.get('');

    this.setState({ produtos: response.data.results });
  }

  /* RENDERIZAR E RETORNAR OS VALORES */
  render(){
    
    const {produtos} = this.state;

    return(
      <div>

        {/* BARRA DE CIMA / BUSCA */}

        <header class='top-bar'>
          <div class="container">
            <div class="row">

              <div class="col-sm-4"><img src='./logo_ml.png' title='Logo Mercado Livre'></img></div>
              
              <div class="col-sm-8">
                
                <form id='buscar-top-bar'>
                  <input  type='text'
                          name="nome"
                          value={this.state.busca}
                          onChange={this.onChange}
                          placeholder='Nunca dejes de buscar'>
                  </input>
                  <button type='submit'>ok</button>
                </form>
                {this.state.nome}
              </div>
            </div>            
          </div>
        </header>

        {/* RETORNO DOS RESULTADOS */}
        <div class='container'>
          <div class='bg-white'>
            {produtos.map(results => (
              <li>                  
                <img src={results.thumbnail}></img>
                <div>
                  <span class='precio'>$ {results.price}</span>
                  <span>{results.title}</span>
                </div>
              </li>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;