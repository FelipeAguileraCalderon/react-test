import { Component } from 'react';
import Productos from './components/Productos'
import './App.css';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: "public/productos/tomate.jpg"},
      {name: 'Arbejas', price: 2500, img: "public/productos/arbejas.jpg"},
      {name: 'Lechuga', price: 500, img: "public/productos/lechuga.jpg"},
    ]
  }
  render(){
    return (
      <div>
        <Productos 
          agregarAlCarro={ () => console.log('No hace nada') }
          productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;