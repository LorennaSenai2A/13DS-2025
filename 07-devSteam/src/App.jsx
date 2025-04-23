import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Promotion from './components/Promotion';

function App() {
 // const [carrinhoItem, setCarrinhoItem] = useState([]);
 //const [mostraCarrinho, setMostraCarrinho] = useState(false) ; 

//const adicionarCarrinho = (produto) => {
//setCarrinhoItem((produtosAnteriores) => {
  //const existing = produtosAnteriores.find(
    //(item) => item.id === produto.id);
    //if (existing) {
  //return produtosAnteriores.map((item) => {
    //item.id === produto.id
      //? { ...item, quantidade: item.quantidade + 1 }
      //: item;
//});
//};

const [contador, setContador] = useState(0);

const handleAddCarrinho = () => {
setContador(contador + 1);
}

  return (
    <>
        <Header contadorJogos={contador} />
        <Promotion />
        <button onClick={handleAddCarrinho}>+1</button>
    </>
  );
}

export default App;
