import { Component } from 'react';
import Productos from './components/Productos';
import './App.css';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';
class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: 'productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: 'productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: 'productos/lechuga.jpg'},
    ],
    carro: [
      // {name: 'Tomate', price: 1500, img: 'productos/tomate.jpg', cantidad: 1},
    ],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(el => el.name === producto.name 
      ? ({
        ...el,
        cantidad: el.cantidad + 1
      })
      : el)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render(){
    console.log(this.state.carro)
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar 
          carro = {this.state.carro} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos} 
          />  
        </Layout>
      </div>
    )
  }
}

export default App;