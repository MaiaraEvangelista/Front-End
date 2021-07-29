//importação do react
import {Component} from 'react';
//importação do css(estilização)
import './App.css';

//Criação da classe git
class GitHub extends Component{
  constructor(props){
    super(props) 
    this.state = {
      //valores
      listaRepositorios : [],
      nomeUsuarioRepositorio : '',
      titulo : ''
    }
  }

  //Cria a função de busca
  buscarRepositorio = (event) =>{
    //Evita o comportamento padrão do navegador
    event.preventDefault();

    //Mostra no repositório
    console.log('Repositório sendo buscado!')

    //Passa a rota indo para a pg do usuário
    fetch('http://api.github.com/api/users' + this.state.nomeUsuarioRepositorio + '/repos' )
 
    //Define que a resposta será em json
    .then(Resposta=> Resposta.json())

    //Passa os dados recebidos e armazena
    .then(data => this.setState({listaRepositorios : data}))

    //Caso dê erro  mostra no console
    .catch(erro => console.log(erro))
  }

  //Cria a função de atualizar nome do repositório
  atualizarNomeRepositorio = async (nomeRepositorio) =>{
    //Pega as informações recebidas em nomeUsuario.. e armazena no nomeRepositorio
    await this.setState({nomeUsuarioRepositorio : nomeRepositorio.target.value})
  }

  //Criando a função de deletar um repositório
  deletarRepositorio = () =>{

  }

  criarRepositorio = () =>{

  }

  render(){
    return(
      <div>
        <main>
          <section>
          <form onSubmit={this.buscarRepositorio} >
            <div>
              <input
                //Define que o tipo é um texto
                type="text"
                //Passa o valor 
                value={this.state.nomeUsuarioRepositorio}
              
                onChange={this.atualizarNomeRepositorio}

                placeholder="Usuário Git"
              
              />
              <button type="submit" onClick={this.buscarRepositorio}>Iniciar Busca...</button>
            </div>
          </form>
          </section>

          <section>
            <h2>Lista dos seus repositórios</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome Repositório</th>
                  <th>Descrição Repositório</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.listaRepositorios.map((git) =>{
                    return(
                      <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </main>
      </div>
    )
  }
}









function App() {
  return (
    <div className="App">
      <header>

      </header>
    </div>
  );
}

export default App;
