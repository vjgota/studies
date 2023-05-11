import './styles.css'

export default function AquiMesmoFodase({img, price}){
  return(
    <div className="fuck_wrapper">
      <div className="fuck_wrapper--image">
        <img src={img} />
      </div>
      <section>
        <div>
          <h2 className="fuck_wrapper--name">Nome do produto</h2>
          <span className="fuck_wrapper--price">{price}</span>
        </div>
        <span className="fuck_wrapper--tag">
          Cabelo de puta
        </span>
        <p className="fuck_wrapper--description">Descrição muito foda do produto.</p>
        <button className="fuck_wrapper--button">Adicionar ao carrinho</button>
      </section>
    </div>
  )
}