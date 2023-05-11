import './App.css'
import TitlePage from './comp/TitlePage';
import Navbar from './comp/Navbar';
import Card from './comp/Card';
import CabeloDePuta from './comp/CabeloDePuta';
import { PRODUCT_LIST } from './data';

import './App.css';

function App() {
  return (
    <div>
      <TitlePage titleText='Cantinho da Preta'/>
      <Navbar />
      <Card />
      <CabeloDePuta img={PRODUCT_LIST[0].img} price={'2500525'} />
    </div>
  );
}

export default App;