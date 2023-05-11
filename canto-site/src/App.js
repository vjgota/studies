import './App.css'
import TitlePage from './comp/TitlePage';
import Navbar from './comp/Navbar';
import Card from './comp/Card';
import { PRODUCT_LIST } from './data';

import './App.css';


function AquiMesmoFodase({img, price}){
  return(
    <div className="fuck_wrapper">
      <div>
        <img src={img} />
      </div>
      <div>
        <h2 className="fuck_wrapper--name">Nome do produto</h2>
        <span className="fuck_wrapper--price">Preço</span>
      </div>
      <p className="fuck_wrapper--description">Descrição muito foda do produto.</p>
      <button className="fuck_wrapper--button">Adicionar ao carrinho</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <TitlePage titleText='Cantinho da Preta'/>
      <Navbar />
      <Card />
      <AquiMesmoFodase img={PRODUCT_LIST[0].img}/>
    </div>
  );
}

export default App;