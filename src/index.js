import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index'
import CadastroCategoria from './pages/cadastro/Categoria';

function Pagina404(){
  return (
    <div>
      <h2>Página 404</h2>
      <p>Você tem certeza que entrou pelo caminho certo?</p>
    </div>
  )
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <BrowserRouter>
  <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


